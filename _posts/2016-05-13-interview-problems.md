---
title: Algorithm and Data Structrue Questions for Interview 
tags: [program]
---

## Experience
* 命名style
* 单元测试和assert的使用
* anotation
* 括号匹配，标点无遗漏
* c++注意输入参数为引用
* 慢下来, 特别边界条件点&& || < > = !=的判断
* 尽量一次整对

## Array
* qsort
* binary search
* heap sort
* min(max) k element
* 在一个字符串中找到第一个只出现一次的字符。如输入abaccdeff，则输出b(char arr) 
* 仅含0,1的数组排序
    * 求和，再赋值O(2N)
    * 快排(交换两端的0和1)
* 调整数组长度，使基数位于偶数之前（同上）
* Joseph环 

## Bit
* ip parse
* 1 bit of integer

## List
* merge list
* 链表是否有环
> 注意不一定从首位相连，有可能局部有环
两个人在环形操场跑步，跑的快的总能追上跑的慢的

* 两个链表是否相交（相交则尾节点一致），扩展求相交的节点
* 链表长度
* 输入一个单向链表，输出该链表中倒数第k个结点
    * record all(use vector)
    * two pass
* Joseph环
* O(1)删除单向链表节点（如何避免查找，直接删除）

## Stack
* min stack
* 给定入栈序列，判断一个序列是否为出栈序列

## String
* strcmp
* reverse(first reverse all, then reverse every word)

```
"I am a student." 则输出"student. a am I";
```

* 在字符串中删除特定的字符


## Tree
* depth of a tree
* the max distance of a tree(expand problem of tree depth)
* 就地反转二叉树
* 按层次遍历二叉树，将同层的节点打印在同一行上。不同层的节点分行打印
* BiTree to BiLink
* sum path

```
输入一个整数和一棵二元树。
从树的根结点开始往下访问一直到叶结点所经过的所有结点形成一条路径。
打印出和与输入整数相等的所有路径。
例如输入整数22 和如下二元树
10
/ \
5 12
/ \
4 7
则打印出两条路径：10, 12 和10, 5, 7。
```

## BT
* sum path
* 背包问题
* 1-N所有排列组合

## DP
* sum array max sum
* 找零钱
* 背包问题
* 走楼梯问题
* 最长公共子序列

## Hash
* two sum
* 在字符串中删除特定的字符。

