---
title: 函数式程序设计 & Emacs
tags: [program]
---

# Emacs & Lisp

## Lisp
* '( 1 2 3) & (list 1 2 3)
* progn--begin
* 宏

``` lisp
;;emacs lisp incr
(defmacro incr (var)
"Add one to the named variable."
 `(setq ,var (+ ,var 1)))

;;common lisp when
(defmacro when (condition &rest body)
  `(if (not ,condition) (prong ,@body)))
;;从宏定义的格式来看，定义宏中的形式体必须使用反引号“`”，表示对该形式体不求值，但是要对新宏的参数求值；
;;新宏的参数有两类，一个是新宏的形参，一个是新宏的形式体。
;;这两者的共同点就是都要通过逗号“,”来求值；
;;不同点有两处，一是形参用逗号直接求值，形式体则用逗号和@ 即 “,@” 去掉对形式体求值后所得到的表达式最外层列表的括号，将这个表达式嵌入到最外围列表的最后面；二是形参要做一系列处理，而形式体则直接求值嵌入，不做任何变化，这是因为这个形式体本来就是新宏的处理语句，定义宏只需要照搬即可，不需要也不应该做其他变化。
;;阅读宏定义代码或者自己去编写宏定义时，只要能牢牢把握住上面提到的差异，应该比较容易理解那些或简单、或复杂的宏代码了。

;;while
(defmacro while. (test &rest body)
  (let ((label (gensym)))
  `(tagbody
    ,label
    (cond (,test ,@body (go ,label))))))
```

## emacs keynotes
* (global-set-key "M-?" command)，设置全局快捷键
* load-file：打开emacs lisp文件
* load-path：emacs load启动，(append load-path ("/your/directory/here")))
* require provied,像C的include的一样，在别的文件中引用内容
* autoload，在调用时进行加载
* message: (message "i am %s %d" "number" 1)
* buffer-name: 当前buffer name, buffer-file-name
* current-buffer other-buffer 当前buffer对象和最邻近使用的buffer
* interactive：M-x函数名或快捷键可以激活
* 快捷键 (global-set-key (kbd "S-<f12>") 'semantic-ia-fast-jump) or [S-f12] S-C-M
* add-to-list
* 函数名重映射 `(defalias 'scroll-ahead 'scroll-up)`


## emacs lisp grammer

### let

``` lisp
(defun square_add (a b)
  (let ((x (+ a b))
		(y (- a b)))
	(* x y)))
```

### inner function

``` lisp
(defun factorial (n)
  (defun iter (product counter)
	(if (> counter n)
		product
	  (iter (* product counter) (+ counter 1))))
  (iter 1 1))
factorial
(factorial 10)
3628800
```

### cond

``` cpp
(defun my_abs (x)
  (cond ((> x 0) x)
		((< x 0) (- x))
		(else 0)))
my_abs
(my_abs 2)
2
(my_abs -2)
2
```

## Plugin

### w3m
* w3m-goto-url

### emms

``` lisp
;;emms
(require 'emms-setup)
(emms-standard)
(emms-default-players)
```

## important functions
* isearch-forward(backward): search
* help
* other-window: next windows, back to recent edit window, (other-window -1)

## Writing Emacs Extensions

### Customizing Emacs
* lisp的特性，前缀s表达式，list,garbage collection
* 定制快捷键 `(global-set-key "\M-?" command)`

### Simple New Commands
* 切换窗口函数定义

``` lisp
(defun other-window-backward ( )
"Select the previous window."
(interactive)
(other-window -1))
;;interaction with "p", wtih argument
(defun other-window-backward (n)
"Select Nth previous window."
(interactive "p")
(other-window (- n)))
;;
(defun other-window-backward (&optional n)
"Select Nth previous window."
(interactive "p")
(if n
(other-window (- n))
;ifn s non-nil
(other-window -1)))
;ifn snil
```

### minor mode

``` lisp
(if evil-mode
	(message "yes")
  (message "no"))
```

# Racket
## quote
* like strings, but fast in eq?
* 可以是任意序列的字符
## struct
* better style and more concise
* have type not list

``` lisp 
(struct foo (bar baz quux))
(define x (foo 1 2 3))
(foo? x)
(fool-bar x)
``` 
## implementing
* what your interpreter can and cannot assume check & error &
* implement variables & enviroment `(define (eval e env))`
* implementing closure
    > lack of magic: the interpreter uses a closure data stucture(with two parts)to keep the enviroment it will need to use later
(struct closure (env fun))
* evaluate a function expression
    * a function is not a value, a closure is a value, so evaluating a funciton returns a closure
    * create a funciton out of the function a and b the current enviroment when the function was evaluate 

# python的函数式特性
## 函数赋值

``` python
def square(n):
    return n*n
f = square
square(10)
```

## lambda

``` python
square = lambda x: x*x;
square(10)
```

## 内置函数

``` python
map(square, [1, 2, 3])
reduce & filter
```

## 消除控制流

``` python
def func1(lst) :
  new_lst = []
  for n in lst :
    if odd(n) :
      new_lst.append(square(n))
  return new_lst
可以改进为
def func2(lst) :
  return map(square, filter(odd, lst))
```

## 列表推导

``` python
[x for x in lis if x % 2 == 0]
```

## 闭包，计算函数的导数

``` python
def d(f) :
  def calc(x) :
    dx = 0.000001  # 表示无穷小的Δx
    return (f(x+dx) - f(x)) / dx  # 计算斜率。注意，此处引用了外层作用域的变量 f
  return calc  # 此处用函数作为返回值（也就是函数 f 的导数）

f = lambda x : x**2 + x + 1  # 先把二次函数用代码表达出来
f1 = d(f)  # 这个f1 就是 f 的一阶导数啦。注意，导数依然是个函数

f1(3)
```
