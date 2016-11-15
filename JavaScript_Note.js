JavaScript教程：
	JavaScript运行在浏览器中， 能跨平台、跨浏览器驱动网页，与用户交互
简介：
	最新版ECMAScript 6标准（简称ES6）， 浏览器在发布时就确定了JavaScript的版本
快速入门：
	JavaScript代码可以直接嵌在HTML的任何地方，通常放到"<head>"中， 且必须先有HTML页面， 才能运行JS
	或是用"<script src="..."></script>"引用js文件， 浏览器按照顺序依次执行
	输出用alert('Hello, world')
	"<script type="text/javascript">", 默认的type就是JavaScript, 不必显式调用
	由于浏览器的安全限制，以"file://开头的地址"无法执行如联网等JavaScript代码，还是需要架设一个Web服务器，然后以"http://开头的地址"来正常执行所有JavaScript代码
	用Chrom调试JS
基本语法：
	最好每个语句以";"结束
	"var x = 1;"变量x赋为1
	注意花括号{...}内的语句具有缩进，通常是4个空格； 缩进不是JavaScript语法要求必须的，但缩进有助于我们理解代码的层次
	过多的嵌套, 可以用函数代替
	以"//开头"直到行末的字符被视为行注释, "/*...*/"注释一大块
数据类型和变量：
	Number：：
		JavaScript不区分整数和浮点数，统一用Number表示
		注意"1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5"
		"NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示"
		"Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity"
		十六进制用"0x前缀和0-9，a-f"表示
		注意"%"是求余, 也叫取模， 取模或余数"num1 % num2" 余数符号与num1相同， 值 = 两数绝对值相除
	字符串：：
		字符串"单引号"或"双引号"都可
	布尔：：
		布尔值只有true、false两种值, "!"运算是非运算
	比较：：
		空是"null"， Java也用"null"， Python用"None", Swift用"nil", "undefined"表示"未定义"， 大多数情况下用null, undefined仅用于判断否传递
		"=="自动转换数据类型再比较, "==="不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较, 始终坚持使用"==="比较
		NaN这个特殊的Number与所有其他值都不相等("==", "==="都不等)，包括它自己， 用"isNaN()"判断
		两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值(小数点后16位"0.0000000000000001")（"Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true"）
	数组：：
		两种方法创建：：
			初始化：：可以包括任意数据类型（例如"var arr = [1, 2, 3.14, 'Hello', null, true];"）
			通过Array()（例如"new Array(1, 2, 3);"）
			可读性考虑, 强烈建议直接使用"[]"
	对象：：
		一组由"键-值"组成的无序集合
		每个键又称为对象的属性, 键都是字符串类型，值可以是任意数据类型
		用"对象变量.属性名"访问
	变量：：
		形如("var =" )
		大小写英文、数字、$和_的组合，且不能用数字开头， 不能是JavaScript的关键字
		同一个变量可以反复赋值，而且可以是不同类型的变量，但注意只能用var申明一次
		变量本身类型不固定的语言称之为动态语言， 静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，会报错
	strict模式：：
		第一行写上（'use strict';）
		如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量， 在同一个页面的不同的JavaScript文件中都能引用
		var申明的变量在被申明的函数体内有效， 同名变量在不同的函数体内互不冲突
		strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误
字符串：
	"单引号"用""括起来， "双引号"用\字符
	"\x##"的十六进制，可以表示ASCII码（例如"'\x41'; // 完全等同于 'A'"）
	"\u####"表示一个Unicode字符（例如"'\u4e2d\u6587'; // 完全等同于 '中文'"）
	用` ... `(顿号)表示多行字符串
	模板字符串：：
		解决"很多变量需要连接, + 不方便"问题， 类似格式化输出， "双顿号"包住"${name【变量】}"， （例如`你好, ${name}, 你今年${age}岁了!`）
		用"+"号拼接
	操作字符串：：
		变大，变小，取长度， 取位置
		长度：："s.length"， 没有（）
		索引：：
			s[0];
			字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
		调用方法本身不会改变原有字符串的内容，而是返回一个新字符串
		toUpperCase：：把一个字符串全部变为大写（例如， "s.toUpperCase();"）
		toLowerCase：：把一个字符串全部变为小写（例如， "var lower = s.toLowerCase();"）
		indexOf：：搜索指定字符串出现的位置， 从零算起， 没有找到指定的子串，返回number-1
		substring：：返回指定索引区间的子串， 左包括，右不包括， （例如, "s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'", "s.substring(7); // 从索引7开始到结束，返回'world'"）
数组：
	取长度， 取位置， 添加， 删除， 排序，反转，切割，拼接
	"arr.length;"获得长度
	直接给Array的length赋一个新的值会导致Array大小的变化(例如"arr; // arr变为[1, 2, 3, undefined, undefined, undefined]")
	越界访问索引不报错, 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化(例如"arr; // arr变为[1, 2, 3, undefined, undefined, 'x']")
	indexOf()：：搜索一个指定的元素的位置， 没有找到，返回-1， 注意，数字30和字符串'30'是不同的元素
	slice()：：
		截取Array的部分元素，然后返回一个新的Array, 原数组不变
		不给slice()传递任何参数， 用于复制一个Array 
	push和pop：：
		末尾添加、删除
		push()：：向Array的末尾添加若干元素
		pop()：：把Array的最后一个元素删除掉
		空数组继续pop不会报错，而是返回undefined
	unshift和shift：：
		头部添加、删除
		unshift()头部整个添加若干元素（例如"arr.unshift('A', 'B'); // 返回Array新的长度: 4", "arr; // ['A', 'B', 1, 2]"）
		shift()把Array的第一个元素删掉
	sort：：
		直接修改当前Array的元素位置（改变当前数组， "arr.sort();"）
	reverse：：
		反转， 改变当前数组
	splice（粘接， 区分slice切片）：：
		修改Array的"万能方法"， 从指定的索引开始删除若干元素, 再从该位置添加若干元素
		arr.splice(位置， 个数， 在位置需要添加的元素）
	concat（splice用于修改当前array）：：
		concat()把当前的Array和另一个Array连接起来， 返回一个新的Array， 不修改当前Array
		可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array（例如， "arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]"）
	join：：
		join()， 实用， 把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
		arr.join("用什么连")【例如"arr.join('-'); // 'A-B-C-1-2-3'"】
		如果Array的元素不是字符串，将自动转换为字符串后再连接
	多维数组：：
		数组的元素也是数组， （例如， "var x = arr[1][1];")
对象：
	最后一个键值对不需要在末尾加","
	两种访问方式：："." 和 "[]"
	属性名(如"middle-school"）不是一个有效的变量， 需要用''括起来， 也无法使用"."操作符， 必须用['xxx']来访问
	JavaScript对象的所有属性都是字符串
	访问不存在的属性不报错，而是返回undefined
	以自由地给一个对象添加或删除属性, 用"delete xiaoming.age; // 删除age属性"
	用"in", 检测是否拥有某一属性, 属性加"引号",(例如,"'name' in xiaoming;"), 这个属性不一定是xiaoming的，它可能是xiaoming继承得到的
	hasOwnProperty()判断自身拥有的, 非继承的属性
条件判断：
	用"if () { ... } else if () {} else { ... }", 末尾没有"分号", 本质实际上相当于两层"if...else...", 后面每层都嵌入else里
	"if...else..."是二选一， 如果某个条件成立，则后续就不再继续判断了
	JavaScript把"null、undefined、0、NaN和空字符串''"视为false，其他值一概视为true
循环：
	"for (初始， 判断， 递增) {重复}"
	for循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用break语句退出循环，否则就是死循环
	"for (... in...) {}", 可以用于对象属性(例如，  "for (var key in o) {}")， 对数组，每个元素的索引被视为对象的属性
	"for ... in"对Array的属性循环得到的是String而不是Number
	for循环在已知循环的"初始"和"结束条件"时非常有用
	while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环
	"do { ... } while()"循环，循环体会至少执行1次， 它和while循环的唯一区别在于， 是在每次循环完成的时候判断条件
Map和Set：
	Map：：
		Map() 和 "{}" 的区别在，Number或者其他数据类型可以作为key
		无论这个表有多大，查找速度都不会变慢
		初始化Map：：
			空， "var m = new Map(); "
			传二维数组，"var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);"
		添加：："m.set('Adam', 67); // 添加新的key-value"
		判读：："m.has('Adam'); // 是否存在key 'Adam': true"
		查找：："m.get('Adam'); // 67"
		删除：："m.delete('Adam'); // 删除key 'Adam'"
	Set：：
		和Map的区别， 不存储value
		初始化set：：
			空， "var s1 = new Set(); // 空Set"
			传Array"var s2 = new Set([1, 2, 3]);"
		添加：："s.add(key)"
		删除：："s.delete(key)"
		判读：："s.has(key); // 是否存在key"
iterable：
	遍历三法：："while", "for ... of", "forEach(function () {})"
	Array、Map和Set都属于iterable类型， 用"for ... of"遍历， （例如，"for (var x of a) {}"）
	注意Map每个元素得到的是Array
	"for ... in"遍历对象的属性名称, 动态添加的元素， 不会算在length里， 且不能遍历Map和Set
	"for ... of"只循环集合本身的元素
	iterable内置的forEach更好， 接收一个函数，每次迭代就自动回调该函数
	Array：："a.forEach(function (element, index, array)"
	Set：："s.forEach(function (element, sameElement, set)"
	Map：："m.forEach(function (value, key, map)"
	JavaScript的函数调用不要求参数必须一致， 可以"a.forEach(function (element)"
	forEach是异步函数， 而call back函数【处理函数】，只是对返回的值做相应的处理
	call back格式：： function (参数) { 函数体 }
函数：
	像数学一样的抽象， 封装底层
函数定义和调用：
	定义：：
		function 函数名(参数)
		var 函数名 = function (参数)【变量是个函数】， 需要在函数体末尾加一个";"
	如果没有return语句， 或"return；", 返回"undefined"
	JavaScript允许传入任意个参数， 传入的参数比定义的参数多, 不影响； 少（收到"undefined"）， 返回NaN
	arguments：：
		只在函数内部起作用， 永远指向当前函数"被传入的所有参数"
		arguments类似Array但它不是一个Array
		利用arguments即使函数不定义任何参数，还是可以拿到参数的值, 常用于判断传入参数的个数
		要把中间的参数b变为“可选”参数，就只能通过arguments判断，然后重新调整参数并赋值
	rest参数：：
		是一个保存多余参数的Array
		只能写在最后，前面用...标识， （例如，"function foo(a, b, ...rest)" )
		传入的参数连正常定义的参数都没填满， rest = [], 不是"undefined"
		注意return不要分成两行
变量作用域：
	内部函数可以访问外部函数定义的变量，反过来不行
	查找变量时从自身函数定义开始，从"内"向"外"查找， 内部会"屏蔽"外部同名变量 
	先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部， 所以可以先使用，后声明， 但不会提升变量y的赋值
	严格遵守"在函数内部首先申明所有变量", 最常见的做法是用一个var申明函数内部用到的所有变量：：
		var
	        x = 1, // x初始化为1
	        y = x + 1, // y初始化为2
	        z, i; // z和i为undefined
	全局作用域：：
		不在任何函数内定义的变量， 默认有一个全局对象window， 全局作用域的变量实际上被绑定到window的一个属性（例如， "window.course"）
		以变量方式"var foo = function () {}"定义的顶层函数实际上也是一个全局变量， 绑定到window对象（例如"window.foo(); // 通过window.foo()调用"）
		每次直接调用的alert()函数也是window的一个变量
		JS中任何变量（函数也视为变量），从当前作用域向全局window找， 没找到就报ReferenceError
	名字空间：：
		问题：：不同的JavaScript文件如果使用了相同的全局变量， 会造成命名冲突， 且很难被发现
		解法：：把自己文件中所有全局变量整合到一个全局对象中， 相当于window只调用一个全局变量
	局部作用域：：
		用"let"将变量限制在"{ }"中, 例如"let i=0"
	常量：：
		"const 大写", const与let都可将变量限制在"{ }"
方法：：
	在一个对象中绑定的函数，称为这个对象的方法
	对象是"{}", Map是"([[], []])"
	在一个方法内部，this是一个特殊变量，它始终指向当前对象(不是类)
	调用不在类里的函数，该函数的this指向window 
	要保证this指向正确，必须用"obj.xxx()"的形式调用
	在strict模式下让函数的this指向undefined
	内部定义的函数，this指向undefined, 在非strict模式下，它重新指向全局对象window, 用"var that = this;"解决
	apply：：
		用函数本身的apply方法， 指定函数的this指向哪个对象
		ff.apply(绑定对象， [函数本身参数])， (例如， "getAge.apply(xiaoming, []); ")
		call()与apply()类似, 唯一区别：：apply()把参数装在"[]", call()不用装， （例如，"Math.max.apply(null, [3, 5, 4]); // 5", "Math.max.call(null, 3, 5, 4); // 5"）
		对普通函数调用，通常把this绑定为null
	装饰器：：
		函数（包括内置），可以重新指向新的函数
		用apply， 传参arguments恰好是"[]", 所以不必关心原函数参数的个数













































