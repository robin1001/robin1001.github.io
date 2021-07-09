---
title: Overview of Linux Namespaces
tags: [note, program]
---

> Namespaces are a Linux kernel feature which were introduced back in 2002 with Linux 2.4.19. The idea behind a namespace is to wrap certain global system resources in an abstraction layer. This makes it appear like the processes within a namespace have their own isolated instance of the resource.
> Namespaces是Linux内核提供的一种功能，在2002年的Linux 2.4.19中引入。namespace的基本思想是通过namespaces将一些特定的全局系统资源封装在一个抽象层中，从而使在不同命名空间中的进程有自己独特的一个隔离的资源环境。

本文翻译自Linux Programmer's Manual， 在linux系统中使用如下命令即可查看原始英文说明。
```sh
$ man namespaces
```

一个namespace封装了一个抽象的全局系统资源， 在该namespace中的进程有独立隔离的全局资源的实例。对该namespace中全局资源的修改仅对该命名空间的进程可见，而对其他namespace中的进程不可见。**namespace一种用法是用来实现容器(container)**。

Linux系统中提供以下资源的namespaces。

| Namespace 	| Constant(宏表示) 	| Isolates(隔离的资源)                                                	|
|-----------	|------------------	|---------------------------------------------------------------------	|
| IPC       	| CLONE_NEWIPC     	| System V IPC, POSIX message queues(System V IPC, POSIX消息队列)     	|
| Network   	| CLONE_NEWNET     	| Network devices, stacks, ports etc.(网络设备、协议栈、端口等)       	|
| Mount     	| CLONE_NEWNS      	| Mount points(文件系统挂在点)                                        	|
| PID       	| CLONE_NEWPID     	| Process IDs(进程ID)                                                 	|
| User      	| CLONE_NEWUSER    	| User and group IDs(用户和组ID)                                      	|
| UTS       	| CLONE_NEWUTS     	| Hostname and NIS domain name(Hostname和Network Information Service) 	|

本文介绍与/proc下文件相关的各种命名空间，并且综述和namespaces相关的API。

## The namespaces API

在下文介绍的/proc下的各种文件中，namespace API涉及到如下的系统调用。

**clone(2)**

clone(2)系统调用的作用是创建一个新的进程。在调用该函数时，可以指定一个或者多个CLONE_NEW* flag，这时系统就会为每个flag创建新的namespace，该进程的所有子进程继承该进程的命名空间。(该系统调用还实现了一些与namespaces无关的功能)。

**setns(2)**

setns(2)系统调用可以使被调用的进程加入一个已有的namespaces。要加入的已有的namespace通过一个文件描述符指定，参考下文中的/proc/[pid]/ns中的描述。

**unshare(2)**

unshare(2)系统调用可以将一个进程从原来的namespace转移到一个新的namespace。在调用该函数时，可以指定一个或者多个CLONE_NEW* flag，这时系统就会为每个flag创建新的namespace。调用该函数的进程的namespace也就变成了新的namespace（该系统调用还实现了一些与namespaces无关的功能）。

在大多数情况下，通过clone(2)和unshare(2)创建新的命名空间需要CAP_SYS_ADMIN(系统管理员)的权限。仅有User namespaces例外，从Linux3.8开始，创建User namespaces无需特殊权限。

## /proc/[pid]/ns/ 文件夹

每个进程在/proc目录下都有自己独特的子文件夹/proc/[pid]/ns/，该文件夹中包含可以被setns(2)操作的所有类型的namespace。例如

```sh
$ ls -l /proc/$$/ns
total 0
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 ipc -> ipc:[4026531839]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 mnt -> mnt:[4026531840]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 net -> net:[4026531956]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 pid -> pid:[4026531836]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 user -> user:[4026531837]
lrwxrwxrwx. 1 mtk mtk 0 Jan 14 01:20 uts -> uts:[4026531838]
```

Bind mounting(see mount(2)，TODO) 该文件夹中的任意一个文件都绑定到文件系统中的一个其他位置（类似软连接），这样即使在该namespace中的进程都结束的情况下，我们也能确保namespace继续存在。

打开该文件夹下的一个文件（或者该文件的一个绑定链接文件）返回该pid下该namespace的一个文件描述符。只要该文件描述符持续打开，该namespace就会一直存在，即使该namespace中的进程全部结束。可以通过setns(2)调用该文件描述符。

在Linux3.7和更早的版本中，这些文件通过硬连接的方式显示。从Linux3.8开始，它们通过符号链接（软链接）表示。如果两个进程在相同的namespace中，这两个进程的/proc/[pid]/ns/xxx符号链接则有相同的inode numbers。一个应用程序可以通过stat(2)系统调用中的stat.st_ino检查其是否又相同的inode number。该符号链接的内容是一个字符串，该字符串含有namespace的类型和inode number。

```sh
$ readlink /proc/$$/ns/uts
uts:[4026531838]
```
/proc/[pid]/ns/文件夹下每个文件的具体含义如下：

* /proc/[pid]/ns/ipc (since Linux 3.0): 该进程的IPC namespace描述符。
* /proc/[pid]/ns/mnt (since Linux 3.8): 该进程的mount namespace描述符。
* /proc/[pid]/ns/net (since Linux 3.0): 该进程的network namespace描述符。
* /proc/[pid]/ns/pid (since Linux 3.8): 该进程的PID namespace描述符。
* /proc/[pid]/ns/user (since Linux 3.8): 该进程的user namespace描述符.
* /proc/[pid]/ns/uts (since Linux 3.0): 该进程的UTS namespace描述符。

## IPC namespaces (CLONE_NEWIPC)

IPC namespaces隔离特定的IPC资源，具体来讲即System V IPC对象(see svipc(7))和POSIX消息队列(message queues, see mq_overview(7))。这两种IPC机制的共同特性是其 IPC对象是通过一定的机制区分，而不是通过文件系统的路径名区分。

每个IPC namespace有自己的System V IPC标示符集合和POSIX消息队列文件系统。在一个IPC namespace中创建的IPC对象仅对于该IPC namespace中的所有进程可见，而对其他IPC namespace中的进程不可见。

下列/proc的接口在每个IPC namespace中不同。
* POSIX消息队列接口 /proc/sys/fs/mqueue.
* System V IPC接口 /proc/sys/kernel, 即msgmax, msgmnb, msgmni, sem, shmall, shmmax,shmmni,shm_rmid_forced.
* System V IPC接口 /proc/sysvipc.

当一个IPC namespace销毁的时候（例如，当一个namespace中的最后一个进程结束的时候），在该namespace中的所有IPC对象都会自动销毁。

要使用IPC namespace，Linux内核需要打开CONFIG_IPC_NS配置选项。

##  Network namespaces (CLONE_NEWNET)

网络namespaces提供和网络相关的系统资源的隔离，例如网络设备、IPv4和IPv6协议栈，IP路由表，防火墙，/proc/net文件夹，/sys/class/net文件夹，端口号(socket)等。一个物理的网络设备仅能在一个网络空间李，一个虚拟的网络设备("veth")对可以提供类管道的抽象，该抽象可以在网络namespace之间创建通道，还可以用桥接物理网络设备和其他的网络namespace.

当一个网络namespace释放的时候(例如，当该namespace中的最后一个进程结束的时候)，它的物理网络设备转移到其初始的网络namespace（而不是父进程的namespace)。

要使用IPC namespace，Linux内核需要打开CONFIG_NET_NS配置选项。


## Mount namespaces (CLONE_NEWNS)

Mount namespaces隔离一系列文件系统的挂载点，也就是在处在不同mount namespace中的进程所能看的文件系统的层级不同。mount namespace的挂载点可以由mount(2)和unmount修改。

/proc/[pid]/mounts文件(从Linux 2.4.19开始)列出该进程mount namespace中的所有文件系统。该文件的格式可以查看fstab(5). Linux内核从2.6.15开始，该文件是可轮询的。即打开该文件读取时，该文件的改变可以触发select(2)将该文件描述符标记为可读，出错时poll(2)和epoll_wait(2)可以标记该文件。

/proc/[pid]/mountstats文件(从Linux 2.6.17开始)可以导出该进程mount namespace中的挂载点的统计、配置等的信息。仅有该进程可以读该文件。该文件的行格式如下：

```sh
device /dev/sda7 mounted on /home with fstype ext3 [statistics]
(       1      )            ( 2 )             (3 ) (4)
```

每个字段具体含义如下：
1. 挂载设备名（没有设备时显示"nodevice")
2. 文件系统树中的挂在点
3. 文件系统的类型
4. 可选的，显示统计和配置信息。目前（从Linux 2.6.26），该字段仅支持NFS文件系统的导出信息。

例如

```sh
device sysfs mounted on /sys with fstype sysfs
device proc mounted on /proc with fstype proc
device udev mounted on /dev with fstype devtmpfs
device devpts mounted on /dev/pts with fstype devpts
```

## PID namespaces (CLONE_NEWPID)

See pid_namespaces(7).

## User namespaces (CLONE_NEWUSER)

See user_namespaces(7).

## UTS namespaces (CLONE_NEWUTS)

UTS namespace提供系统标示符的隔离，包活hostname和NIS。hostname可以通过sethostname(2)和setdomainname(2)设定，可以通过uname(2), gethostname(2)和getdomainname(2)检索。

要使用UTS namespace，Linux内核需要打开CONFIG_UTS_NS配置选项。

