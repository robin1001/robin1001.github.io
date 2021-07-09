---
title: 线程池
tags: [program]
---

# 线程池

在面向对象编程中，创建和销毁对象是很费时间的，因为创建一个对象要获取内存资源或者其它更多资源。在Java中更是如此，虚拟机将试图跟踪每一个对象，以便能够在对象销毁后进行垃圾回收。所以提高服务程序效率的一个手段就是尽可能减少创建和销毁对象的次数，特别是一些很耗资源的对象创建和销毁。如何利用已有对象来服务就是一个需要解决的关键问题，其实这就是一些"池化资源"技术产生的原因。

同样，线程的创建亦是如此。

假设一个服务器完成一项任务所需时间为：T1 创建线程时间，T2 在线程中执行任务的时间，T3 销毁线程时间。

如果：T1 + T3 远大于 T2，则可以采用线程池，以提高服务器性能。

一个线程池包括以下四个基本组成部分：

* 线程池管理器（ThreadPool）：用于创建并管理线程池，包括 创建线程池，销毁线程池，添加新任务；
* 工作线程（PoolWorker）：线程池中线程，在没有任务时处于等待状态，可以循环的执行任务；
* 任务接口（Task）：每个任务必须实现的接口，以供工作线程调度任务的执行，它主要规定了任务的入口，任务执行完后的收尾工作，任务的执行状态等；
* 任务队列（TaskQueue）：用于存放没有处理的任务。提供一种缓冲机制。

线程池技术正是关注如何缩短或调整T1,T3时间的技术，从而提高服务器程序性能的。它把T1，T3分别安排在服务器程序的启动和结束的时间段或者一些空闲的时间段，这样在服务器程序处理客户请求时，不会有T1，T3的开销了。

# 线程池的实现

``` cpp
/* Created on 2016-05-24
 * Author: Binbin Zhang
 */
#ifndef THREAD_POOL_H_
#define THREAD_POOL_H_

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include <unistd.h>
#include <pthread.h>

#include <vector>
#include <queue>

void ErrorExit(const char *msg) {
    perror(msg);
    exit(1);
}

// Thread interface for thread class
class Threadable {
public:
    virtual void operator() () = 0;
    virtual ~Threadable() {}
    static void *Run(void *in) {
        Threadable *t = static_cast<Threadable *>(in);
        (*t)();
        return NULL;
    }
};

// ThreadPool
class ThreadPool {
public:
    ThreadPool(int num_thread = 1): num_thread_(num_thread), stop_(false) {
        if (pthread_mutex_init(&mutex_, NULL) != 0) {
            ErrorExit("mutex init error");
        }
        if (pthread_cond_init(&cond_, NULL) != 0) {
            ErrorExit("cond init error");
        }
        // Create num_thread thread at once
        threads_.resize(num_thread_);
        for (int i = 0; i < threads_.size(); i++) {
            if (pthread_create(&threads_[i], NULL, 
                               ThreadPool::WorkerThread, (void *)this) != 0) {
                ErrorExit("pthread create error");
            }
        }
    }

    ~ThreadPool() {
        pthread_mutex_lock(&mutex_);
        stop_ = true;
        pthread_mutex_unlock(&mutex_);
        // notify all thread to stop
        pthread_cond_broadcast(&cond_);

        for (int i = 0; i < threads_.size(); i++) {
            pthread_join(threads_[i], NULL);
        }

        pthread_mutex_destroy(&mutex_);
        pthread_cond_destroy(&cond_);
    }

    void AddTask(Threadable *task) {
        pthread_mutex_lock(&mutex_);
        task_queue_.push(task);
        pthread_mutex_unlock(&mutex_);
        pthread_cond_signal(&cond_);
    }

    // Wait a task to execute  
    Threadable *WaitTask() {
        Threadable *task = NULL;
        pthread_mutex_lock(&mutex_);
        while (!stop_ && task_queue_.empty()) {
            pthread_cond_wait(&cond_, &mutex_);
        }
        if (task_queue_.size() > 0) {
            task = task_queue_.front();
            task_queue_.pop();
        }
        // else stop_ = true return NULL
        pthread_mutex_unlock(&mutex_);
        return task;
    }

    // PoolWorker thread
    static void *WorkerThread(void *arg) {
        ThreadPool *pool = static_cast<ThreadPool *>(arg);
        for(;;) {
            Threadable *task = pool->WaitTask();
            // Stop
            if (task == NULL) break;
            else {
                (*task)(); // Run the task
                delete task;
            }
        }
    }

private:
    int num_thread_;
    bool stop_;
    std::vector<pthread_t> threads_;
    std::queue<Threadable *> task_queue_; //TaskQueue
    pthread_cond_t cond_;
    pthread_mutex_t mutex_;
};

#endif
```

# 扩展为单例模式

``` cpp
class ThreadPool {
private:
    ThreadPool() {} // private constructor
    ThreadPool(const ThreadPool &); // Disable copy
    ThreadPool & operator = (const ThreadPool &); // Disable assign
public:
    ThreadPool &Instance() {
        static ThreadPool instance;
        return instance;
    }
};
```

