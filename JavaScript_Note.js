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
		"!=="表示不等
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
		解决"很多变量需要连接, + 不方便"问题， 类似格式化输出， "双顿号"包住`${name【变量】}`， （例如`你好, ${name}, 你今年${age}岁了!`）
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
		"s.split('');"将字符串变成数组
		"intarr.map(String)"将数字数组变字符串数组
		"s.trim()"去掉前后空格
数组：
	取长度， 取位置， 添加， 删除， 排序，反转，切割，拼接
	"arr.length;"获得长度
	直接给Array的length赋一个新的值会导致Array大小的变化(例如"arr; // arr变为[1, 2, 3, undefined, undefined, undefined]")
	越界访问索引不报错, 如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化(例如"arr; // arr变为[1, 2, 3, undefined, undefined, 'x']")
	indexOf()：：搜索一个指定的元素的位置， 没有找到，返回-1， 注意，数字30和字符串'30'是不同的元素
	slice()：：
		截取Array的部分元素，然后返回一个新的Array, 原数组不变, （例如， "arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']"）
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
	所有都是传引用（地址）， 但不可变对象（字符串）， 不能在函数内修改， 而可变对象（对象， list， map）可以在函数内被修改，是改变自己
	函数定义参数， 不用"var"
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
		基础：：函数（包括内置），可以重新指向新的函数
		用apply， 传参arguments恰好是"[]", 所以不必关心原函数参数的个数
高阶函数：
	基础：：变量可以指向函数， 一个函数就可以接收另一个函数作为参数
Map/Reduce：
	Map：：
		"arr.map(传入对每个元素操作的函数)"， 旧数组不变， 产生新的数组
		操作函数可以接收map的三个参数：：currentValue， index， array
		parseInt(string， radix)
	Reduce：：
		把一个两个参数的匿名函数作用在Array上
		reduce得到的最后结果， 不一定是数组
		"arr.reduce(function (当前结果, 下一个元素) {});"
filter：
	"arr.filter(function (x) {return 限制条件true/false;})"
	接收一个函数， 依次作用于每个元素， 根据返回值是true还是false决定保留还是丢弃该元素
	用于把Array的某些元素过滤掉，然后返回剩下的元素, 原数组不变
	空串可用于return条件判断， 例如（" return s && s.trim();"）
sort：
	排序的核心是比较两个元素的大小
	字符串根据ASCII码进行排序
	Array的sort()方法默认把所有元素先转换为String再排序（例如， "'10'排在了'2'的前面"）
	sort(比较函数(>,return 1; <, return -1; 其他return 0;  ）)（例如， "arr.sort(function (x, y)"）
	比较函数与array无关， 只是定义比较规则
	sort会改变原数组
	倒序排序只需调换return值， （例如"if (x < y); return 1;"
	忽略大小写比较两个字符串，实际就是先把字符串都变成大写（或小写），再比较
闭包：
	定义：：函数作为返回值（打包外部函数和自己的的局部变量)
	本质：：返回的函数名，保存状态（对于内部函数引用的变量，只保存变量名， 不保存值）
	每次调用都会返回一个新的函数，即使传入相同的参数（状态改变）
	返回函数不要引用任何循环变量，或者后续会发生变化的变量
	创建一个匿名函数并立刻执行，（function）（参数） （例如， "(function (x) { return x * x;})(3);"）
	闭包就是携带状态的函数，它的状态可以完全对外隐藏
	在没有初始值的时候给一个初始值, "var x = initial || 0;"
	闭包可以封装一个私有变量，原因在于内部函数可以改变外部变量
	闭包可以把多参数的函数变成单参数的函数，原因在于可以嵌套保存状态
	只需要用函数，就可以用计算机实现运算（f嵌套，执行多次）
箭头函数：
	作用：：在引用this不用担心； 代码简洁
	"Arrow Function", 调用和普通函数相同， "var fn = （输入多参数） => 输出", 多条语句时, "（输入多参数） => {多条语句 +　return　输出}"
	输出对象时， 加"()", "例如, x => ({ foo: x })"
	箭头函数和匿名函区别：：箭头函数内部的this， 即使有嵌套， 也永远指向当前对象； 省去"var that = this;" 
	箭头函数的call()或者apply()无法对this进行绑定, 传入的第一个参数被忽略
generator：
××××××××××××××××××××××××××××××××××××××××
补上
××××××××××××××××××××××××××××××××××××××××
标准对象：
	一切都是对象
	typeof获取对象的类型， （例如， "typeof Math.abs; // 'function'"）
	用typeof， null, Array的类型都是object， 无法区分出"object——{}"
	包装对象：：
		包装对象用new创建， 将基本类型变为object， （例如， "var s = new String('str'); // 'str',生成了新的包装类型"）
		包装对象和原始值用===比较会返回false
		不要使用"new Number()、new Boolean()、new String()"创建包装对象
		用parseInt()或parseFloat()来转换任意类型到number
		用String()来转换任意类型到string，或者直接调用某个对象的toString()方法
		通常不必把任意类型转换为boolean再判断，因为可以直接写"if (myVar) {...}"
		typeof操作符可以判断出number、boolean、string、function和undefined, 但object会有多种情况
		判断Array要使用"Array.isArray(arr)"
		判断null请使用"myVar === null"
		判断某个全局变量是否存在用"typeof window.myVar === 'undefined'"
		函数内部判断某个变量是否存在用"typeof myVar === 'undefined'"
		null和undefined无toString， 其他对象都有toString()
		number对象调用toString()用"..",或"()",（例如， "123..toString();", "(123).toString()"）
		string是基本类型， String是对象
		undefined是没有定义， NaN是number对象， 是"Not-a-Number"
Date：
	表示日期和时间， （例如， "var now = new Date();"）
	"now.getDate()"表示每月的几号，"now.getDay()"表示星期几，"now.getTime()"表示时间戳（"Date.now()"也可以获得时间戳）
	用户可以设定当前时间， 所以now得到的时间不一定准确
	设置Date两种方法：：
		直接赋值：：
			JavaScript的月份范围用整数表示是0~11，0表示一月
			"var d = new Date(2015, 5, 19, 20, 15, 30, 123);"
		解析符合"ISO 8601"格式的字符串：：
			"var d = Date.parse('2015-06-24T19:49:22.875+08:00');"， 返回时间戳
			时间戳转化为date：： "var d = new Date(1435146562875);"
	时区：
		Date对象表示的时间总是按浏览器所在时区显示
		"var d = new Date(1435146562875);", "d.toLocaleString();", "d.toUTCString();"

		时间戳, number类型, 是一个自增的整数, 任何浏览器都可以把一个时间戳正确转换为本地时间,表示1970年1月1日零时整的GMT时区开始的那一刻，到现在的毫秒数
RegExp：
	本质：：匹配（规则， 输出的串）
	基础：：字符 + 个数
	作用：： 匹配 + 切分字符串 + 提取子串 (对应 test()和exec())
	用来匹配字符串，设计思想是用一种描述性的语言来给字符串定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”， 否则，该字符串就是不合法
	正则表达式也是用字符串表示
	字符：：
		用"[]"表示字符范围， "\d"匹配一个数字，"\w"匹配一个字母或数字, "."可以匹配任意字符（除了匹配"换行符", python 的 re.DOTALL java 的 Pattern.DOTALL打开换行符匹配）, "\s"匹配一个空格（也包括Tab等空白符）, 用"'\'"转义特殊字符(除了字母和数字，其余字符都可加转义)
	个数：：
		"*"表示任意个字符（包括0个）, "+"表示至少一个字符, "?表示0个或1个字符", "{n}表示n个字符", "{n,m}表示n-m个字符"
	字符串规则：：
		"A|B"可以匹配A或B(例如， "(J|j)ava(S|s)cript")
		"^"表示行的开头
		"$"表示行的结束, 注意 "\$"表示"$"字符, js也可以匹配'jsp'，但是加上"^js$", 只能匹配'js' 
	javascript变量：："[a-zA-Z\_\$][0-9a-zA-Z\_\$]*{0,19}", 精确地限制了变量的长度是"1-20"个字符(前面有一个字符)
	两种方式创建正则表达式：：
		"/正则表达式/", （例如， "var re1 = /ABC\-001/;"）, 注意"//"外没有引号
		"new RegExp('正则表达式')", （例如， "var re2 = new RegExp('ABC\\-001');"）， 注意字符串的转义
	先建对象， 再"re.test()"判断匹配， （例如， "var re = /^\d{3}\-\d{3,8}$/;"， "re.test('010-12345'); // true"）
	切分字符串：：
		字符串.split(用什么正则切字符串)， （例如， "'a,b;; c  d'.split(/[\s\,\;]+/); // ['a', 'b', 'c', 'd']"）
	分组：：
		正则表达式中"()"表示要提取的分组（Group）
		用exec()提取子串, 得到Array["整个字符串", "子串1"， "子串2"]， 失败时返回null， （例如， "re.exec('010-12345'); // ['010-12345', '010', '12345']"）
	贪婪匹配：：
		正则匹配默认匹配尽可能多的字符
		字符后+"?",采用非贪婪匹配，（例如， "var re = /^(\d+?)(0*)$/;", "re.exec('102300'); // ['102300', '1023', '00']"）
	全局搜索：：
		在表达式后指定标志：：
			"g"表示全局， "i"表示忽略大小写, "m"表示执行多行匹配
		每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引
		例如::
			var s = 'JavaScript, VBScript, JScript and ECMAScript';
			var re=/[a-zA-Z]+Script/g;
			re.exec(s); // ['JavaScript']
			re.lastIndex; // 10
			re.exec(s); // ['VBScript']
			re.lastIndex; // 20
			...
			re.exec(s); // null，直到结束仍没有匹配到
		避免用多个Group"()", 不能使用"/^...$/"，那样只会最多匹配一次
JSON：
	JavaScript Object Notation， 一种数据交换格式， 实际上是JavaScript的一个子集
	XML是一种纯文本格式， 适合在网络上交换数据
	六种数据类型：：
		number， boolean， string， null， array， object
	JSON字符集必须是"UTF-8", 字符串必须用双引号"", key也必须用双引号""
	把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，才能网络传输 
	JSON格式的字符串，只需要反序列化成一个JavaScript对象
	序列化：：
		JSON.stringify(对象， 格式输出)，（例如， "JSON.stringify(xiaoming, null, '  ');"） 看起来，就是去掉对象名， 只保留{...}
		第二个参数传入Array， 用于控制如何筛选对象的键值, 可以输出指定的属性， （例如， "JSON.stringify(xiaoming, ['name', 'skills'], '  ');"）
		还可以传入一个函数，对象的每个键值对都会被函数先处理(如果value是数组， 会扫描每个元素)， (例如， "function convert(key, value)")
		可以在对象内定义一个toJSON()， 调用"JSON.stringify(xiaoming); ", 直接返回JSON应该序列化的数据, （例如， "toJSON: function () {return {};}"） 
	反序列化：：
		JSON.parse()把JSON字符串变成JavaScript对象， （例如， "JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}", "JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]"）
		JSON.parse()还可以接收一个函数, 来转换解析出的属性, (例如， "JSON.parse('{"name":"小明","age":14}', function (key, value)")
面向对象编程：
	类是对象的类型模板，实例是根据类创建的对象 
	JavaScript不区分类和实例的概念，而是通过原型（prototype）来实现面向对象编程
	原型， 就是模仿对象
	"xiaoming.__proto__ = Student", 看上去像继承， 而继承的本质， 是把一个对象的原型指向另一个对象而已
	编写JavaScript代码时，不要直接用"obj.__proto__"去改变一个对象的原型
	创建对象法一：：
		"Object.create()"可以传入一个原型对象，并创建一个基于该原型的新对象 （例如， "var s = Object.create(Student);"）
创建对象：
	构造函数：：
		创建对象法二：：
			定义一个构造函数， 用关键字"new"来调用这个函数，并返回一个对象, 函数默认返回this， 不需要在最后写"return this";（例如， "var xiaoming = new Student('小明');"）
	JavaScript对每个创建的对象都会设置一个原型(__proto__)，指向它的原型对象(prototype)
	prototype是当前对象里的属性， 用于构造目标对象（子类）， 里面的constructor默认指向当前对象； __proto__指向原型（父类）
	实现"继承"的基础：：先在当前对象上查找该属性，如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到"Object.prototype"对象，最后，如果还没有找到，就只能返回undefined
	说法上， 原型通常指（__proto__）, 原型对象指（prototype）
	原型链类似：："arr ----> Array.prototype ----> Object.prototype ----> null", Array.prototype定义了indexOf()、shift()
	函数原型链：："foo ----> Function.prototype ----> Object.prototype ----> null", Function.prototype定义了apply()
	"new Student()创建的对象还从原型上获得了一个constructor属性", 父对象"Student.prototype.constructor"等于当前的构造函数
	创建的新对象没有继承这个constructor， 但因为可以向上父对象找，所有也可调用（例如， "xiaoming.constructor === Student.prototype.constructor; // true"）
	如果原型链很长，那么访问一个对象的属性会花更多时间查找，而变得更慢
	区别构造函数和普通函数：：构造函数首字母应当大写，而普通函数首字母应当小写	
	判断实例， "xiaoming instanceof Student; // true"	
	"xiaoming、xiaohong这些对象可没有prototype这个属性"
	调用构造函数千万不要忘记写new
	createStudent()返回新建对象， (例如， "return new Student(props || {})")
	优点在于：：
		一是不需要new来调用
		参数非常灵活：：
			只需要传递需要的某些属性，剩下的属性可以用默认值； 
			参数是一个Object，我们无需记忆参数的顺序
			可直接传入JSON字符串
原型继承：
	Java、C++中，继承的本质是扩展一个已有的Class，并生成新的Subclass
	原型继承的基础：：new一个构造函数， 新对象的__proto__将指向构造函数对象的prototype
	实现方式：：新建构造函数F（）
	prototype里面存的是函数数
	构造函数的__proto__是function， 构造函数的prototype的__proto__是Object
	在构造函数的继承里， 只是简单绑定this， 调用函数， 并没有prototype参与
	原型继承三步骤：：
		定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this
		借助中间函数F实现原型链继承，修改prototype的constructory; 最好通过封装的inherits函数完成
		继续在新的构造函数的原型上定义新方法
class继承：
	把class代码转换为传统的prototype代码，可以用Babel工具
	类似java， 关键字包括：：class, constructor, super, 方法前不加"function", new（例如， "var kitty = new Cat('Kitty');"）
	例如：：
		class PrimaryStudent extends Student {
	    		constructor(name, grade) {
	   	        super(name); // 记得用super调用父类的构造方法!
	     	    this.grade = grade;
   			}
			    myGrade() {
			        alert('I am at grade ' + this.grade);
			}
		}
		var ps = new PrimaryStudent("xun", 99);
		ps.hello();
*******************************************************************
补上
*******************************************************************
操作表单：
	表单本身也是DOM树， 就是"<input>", 先写<form>， 再写<input>
	获得或设置输入框、下拉框等
	HTML表单的输入控件：：
		文本框， "<input type="text">", 用于输入文本
		口令框, "<input type="password">", 用于输入口令
		单选框, "<input type="radio">", 用于选择一项
		复选框, "<input type="checkbox">", 用于选择多项
		下拉框, "<select>", 用于选择一项
		隐藏文本, "<input type="hidden">", 用户不可见，但表单提交时会把隐藏文本发送到服务器
	获取值：：
		text、password、hidden以及select, 用value; (例如， "var input = document.getElementById('email')", "input.value; // '用户输入的值'")
		单选框和复选框，value属性返回的永远是HTML预设的值, 用checked判断, (例如， )
	设置值：：
		text、password、hidden以及select，直接设置value
		单选框和复选框，设置checked为true或false
	HTML5控件：：
		常用date、datetime、datetime-local、color等，它们都使用<input>标签
		(例如， "<input type="date" value="2015-07-01">", 可以输入、设置日历)
		（例如， "<input type="datetime-local" value="2015-07-01T02:03:04">", 可以设置时间）
		（例如， "<input type="color" value="#ff0000">", 可以设置调色板）
	提交表单：：
		input + button
		两种方式：：
			通过"<form>"元素的submit(), 缺点：：扰乱了浏览器对form的正常提交
			响应<form>本身的onsubmit事件, 提交form时作修改, return true来告诉浏览器继续提交, return false，浏览器将不会继续提交form
		检查和修改<input>时，充分利用"<input type="hidden">"传递数据, (例如， " md5_pwd.value = toMD5(input_pwd.value)")
		没有name属性的<input>的数据不会被提交
		写button	参考代码一：：
			<form id="test-form">
			<input type="text" name="test">
			<button type="button" onclick="doSubmitForm()">Submit</button>
			</form>
			<script>
			function doSubmitForm() {
				var form = document.getElementById('test-form');
				form.submit();
			}
			</script>
		参考代码二：：
			<form id="test-form" onsubmit="return checkForm()">
		    <input type="text" name="test">
		    <button type="submit">Submit</button>
			</form>

			<script>
			function checkForm() {
			    var form = document.getElementById('test-form');
			    // 可以在此修改form的input...
			    // 继续下一步:
			    return true;
			}
			</script>
		重置button， "<button type="reset">重置</button>"
操作文件：
	可以上传文件的唯一控件就是"<input type="file">"
	当一个表单包含"<input type="file">"时，表单的"enctype"必须指定为"multipart/form-data"，"method"必须指定为"post"，浏览器才能正确编码并以"multipart/form-data"格式发送表单的数据
	JavaScript可以在提交表单时对文件扩展名做检查, (例如， "(filename.endsWith('.jpg')")但无法获得该文件的真实路径，对"<input type="file">"的value赋值是没有任何效果
	File API：：
		Flash可以操作文件， JavaScript无法读取文件内容
		HTML5新增的File API允许JavaScript读取文件内容， File API提供了"File"和"FileReader"两个主要对象，可以获得文件信息并读取文件
		在一个"<div>"中预览图像, " preview.style.backgroundImage = 'url(' + data + ')';"
		"var file = fileInput.files[0];// 获取File引用"
		FileReader的"callback function" "reader.onload()", （例如， "reader.onload"）
		DataURL的形式读取到的文件是一个字符串，（例如， "reader.readAsDataURL(file);"）类似于"data:image/jpeg;base64,/9j/4AAQSk...(base64编码)..."
		如果需要服务器端处理，把字符串base64,后面的字符发送给服务器并用Base64解码就可以得到原始文件的二进制内容
	回调：：
		回调函数本质：：自动执行拿到对象后的操作
		浏览器的JavaScript执行引擎在执行JavaScript代码时，总是以单线程模式执行， 任何时候，JavaScript代码都不可能同时有多于1个线程在执行
		在JavaScript中，执行多任都是异步调用， （例如， "reader.readAsDataURL(file);"当文件读取完成后，自动调用"reader.onload = function(e)"）
AJAX：
	基本用途：：页面更新；
	本质：：用JavaScript执行异步网络请求
	Web的运作原理：：一次HTTP请求对应一个页面
	用户就感觉自己仍然停留在当前页面：：用JavaScript发送这个新请求， 接收到数据后，再用JavaScript更新页面
	写AJAX主要依靠"XMLHttpRequest"对象, 低版本的IE，用"ActiveXObject"对象
	"readyState === 4"判断请求是否完成, "status === 200"判断是否是一个成功的响应
	XMLHttpRequest.open("指定GET/POST", URL, "是否异步, 默认是true")， （例如， "request.open('GET', '/api/categories');"）
	把第三个参数指定为false，浏览器将停止响应, 直到AJAX请求完成
	调用send()方法才真正发送请求, GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进send
	判断浏览器支持的特性：：
		用window对象是否有XMLHttpRequest属性来确定浏览器是否支持标准的XMLHttpRequest
		不要根据浏览器的'navigator.userAgent'来检测浏览器是否支持某个JavaScript特性：：
			这个字符串本身可以伪造
			通过IE版本判断JavaScript特性将非常复杂
	安全限制：：
		XMLHttpRequest.open 里的URL用相对路径， 用绝对路径，肯定报错（默认情况， JavaScript在发送AJAX请求，URL的域名必须和当前页面完全一致）：：
			域名要相同（www.example.com和example.com不同）
			协议要相同（http和https不同）
			端口号要相同（默认是:80端口，它和:8080不同）， 有的浏览器，允许端口不同
		JavaScript请求其他网站方法：：
			一是通过Flash插件发送HTTP请求， 绕过浏览器的安全限制，但必须安装Flash， 过时
			二是通过在同源域名下架设一个代理服务器来转发， JavaScript负责把请求发送到代理服务器， 代理服务器再把结果返回, 例如("'/proxy?url=http://www.sina.com.cn'"), 不利：：需要服务器端额外做开发
			三是JSONP， 只能用GET请求， 并且要求返回JavaScript, 当<script>创建、添加后，开始从URL拿数据，拿到数据后会自动调用回调函数：：
				本质：：利用了浏览器允许跨域引用JavaScript资源 （<script>）
				通常以函数调用的形式返回, （例如，"foo('data');" ）， 在页面中先准备好foo()函数， 然后给页面动态加一个<script>节点， 相当于动态读取外域的JavaScript资源（例如， "js.src = 全URL"），最后等着接收回调 
			四是CORS， 浏览器需支持HTML5：：
				本质：：浏览器发一个Origin， 服务器回相同的Origin
				基础：：取决于对方服务器是否愿意给你设置一个正确的"Access-Control-Allow-Origin"
				Origin表示浏览器当前页面的域
				浏览器收到响应后，首先检查"Access-Control-Allow-Origin"是否包含Origin, 如果是，则此次跨域请求成功，如果不是，则请求失败, JavaScript将无法获取到响应的任何数据
				只要响应头"Access-Control-Allow-Origin"为"http://my.com?，或者是"*"", 本次请求就可以成功
				跨域请求类型：：
					简单跨域请求：：
						GET、HEAD和POST（"POST的Content-Type类型仅限application/x-www-form-urlencoded、multipart/form-data和text/plain"）, 并且不能出现任何自定义头（例如，X-Custom: 12345）, 能满足90%的需求
						浏览器在引用外域资源时，除了JavaScript和CSS外，都要验证CORS， 例如引用字体文件
					PUT、DELETE以及其他类型如"application/json"的POST请求：：
						发送AJAX请求之前，浏览器会先发送一个OPTIONS请求（preflighted）到这个URL上, 询问目标服务器是否接受
						服务器必须响应并明确指出允许的Method， （例如， "Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS"）
						浏览器确认服务器响应的Access-Control-Allow-Methods头确实包含将要发送的AJAX请求的Method，才会继续发送AJAX，否则，抛出一个错误
						由于以POST、PUT方式传送JSON格式的数据在REST中很常见，所以要跨域正确处理POST和PUT请求，服务器端必须正确响应OPTIONS请求
Promise：
	承诺将来会执行的对象称为Promise对象
	本质：：就是一个函数， 只不过是稍后执行， 在执行异步任务流程中，把执行代码和处理结果的代码清晰地分离
	new Promise(异步函数（resolve， reject）).then(处理函数).catch（处理函数）， then和resolve绑定，表示成功，resolve（传回then的信息）， reject和catch绑定，表示失败， reject(传回catch的信息)
	Promise在new的时候,创建Promise对象， 然后就执行， 当运行到resolve时触发then，运行到reject时， 触发catch, 然后继续执行异步函数里，resolve或reject后面的代码
	"setTimeout(callback, 1000); // 1秒钟后调用callback函数"
	回调函数写到一个AJAX操作, 不好看, 且不利于代码复用
	链式写法：：
		先统一执行AJAX逻辑， 不关心如何处理结果， 然后，根据结果是成功还是失败，在将来的某个时候调用success函数或fail函数
	用处二：：串行处理若干个异步任务， （例如， "job1.then(job2).then(job3).catch(handleError);", job1、job2和job3都是Promise对象）
	用处三：：并行执行异步任务， 用"Promise.all([Promise对象列表]).then(获得一个Array)"，（例如：：
	用处四：：多个异步任务是为了容错， 用"Promise.race([Promise对象列表]).then(获得一个元素)"， （例如， 同时同时向两个URL读取用户的个人信息， 只需要获得先返回的结果即可）
			// 同时执行p1和p2，并在它们都完成后执行then:
			Promise.all([p1, p2]).then(function (results) {
   			console.log(results); // 获得一个Array: ['P1', 'P2']
			// 同时执行p1和p2，并在它们都完成后执行then", 
	组合使用Promise，可以把很多异步任务以并行和串行的方式组合起来执行
	创建log代码：：
		var logging = document.getElementById('test-promist2-log');
		while (logging.children.length > 1) {
			logging.removeChild(logging.children[logging.children.length - 1]);
		}
		function log(s) {
		    var p = document.createElement('p');
		    p.innerHTML = s;
		    logging.appendChild(p);
		}
Canvas：
	定义一个指定尺寸的矩形框（例如， "<canvas id="test-canvas" width="300" height="200"></canvas>"）， 是HTML5新增的组件， 用JavaScript在上面绘制各种图表、动画等
	在<canvas>内部添加一些说明性HTML代码，如果浏览器支持Canvas，它将忽略<canvas>内部的HTML，如果浏览器不支持Canvas，它将显示<canvas>内部的HTML
	用"canvas.getContext", 测试浏览器是否支持Canvas,注意不是"canvas.getContext()"
	绘图基础：：
		2D：："canvas.getContext('2d')"得到一个"CanvasRenderingContext2D"对象, Rendering是透视图的意思， 所有的绘图操作都需要通过这个对象完成
		3D：："gl = canvas.getContext("webgl");"
	绘制形状：：
		坐标以左上角为原点，水平向右为X轴，垂直向下为Y轴，以像素为单位，所以每个点都是非负整数
		绘图函数：：
			坐标 + 大小， 另外设置颜色
			"ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明"
			"ctx.fillStyle = '#dddddd'; // 设置颜色"
			"ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色"
			用Path绘制复杂路径：：
				var path=new Path2D();
				path.arc(75, 75, 50, 0, Math.PI*2, true);
				path.moveTo(110,75);//移动坐标
				ctx.strokeStyle = '#0000ff';
				ctx.stroke(path);//装下整个path对象
	绘制文本：：
		在指定的位置输出文本， 可以设置文本的字体、样式、阴影等，与CSS完全一致
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.shadowOffsetX = 2; （阴影向右偏移2）
		ctx.shadowOffsetY = 2;
		ctx.shadowBlur = 2;
		ctx.shadowColor = '#666666';
		ctx.font = '24px Arial';
		ctx.fillStyle = '#333333';
		ctx.fillText('带阴影的文字', 20, 40);
	实现动画、缩放、各种滤镜和像素转换等高级操作优化方案：：
		通过创建一个不可见的Canvas来绘图，然后将最终绘制结果复制到页面的可见Canvas中
		尽量使用整数坐标而不是浮点数
		可以创建多个重叠的Canvas绘制不同的层，而不是在一个Canvas中绘制非常复杂的图
		背景图片如果不变可以直接用"<img>"标签并放到最底层
jQuery：
	解决三个问题：：
		消除浏览器差异：：不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码
		简洁的操作DOM的方法：：例如"$('#test')"比"document.getElementById('test')"简洁
		轻松实现动画、修改CSS等操作
	使用jQuery：：
		需要在页面的<head>引入jQuery文件， "（例如， <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>） "
	"$符号"：：
		把所有功能全部封装在一个全局变量jQuery, 就是"$"
		$本质上就是一个函数, 当然也是一个对象， 除了可以直接调用外，也可以有很多其他属性
		如果$这个变量被占用了，而且不能改， 用jQuery代替，
		例如：：	
			$; // jQuery(selector, context)
			jQuery.noConflict();//noConflict() 释放对$标识符的控制，其他脚本就可以使用
			$; // undefined
			jQuery; // jQuery(selector, context)
选择器：
	是jQuery的核心， 就是查找节点， 格式类似$('#id')
	按ID查找：：
		jQuery对象类似数组， 每个元素都是一个引用了DOM节点的对象, （例如， "[<div id="abc">...</div>]"）
		加"#", $('#id')， （例如， var div = $('#abc');）， 存在，返回jQuery[节点]， 不存在， 返回[], 选择器不会返回undefined或者null 
		"$(DOM对象)"变为jQuery对象用get(), $()将返回jQuery对象
		例如：：
			var div = $('#abc'); // jQuery对象
			var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
			var another = $(divDom); // 重新把DOM包装为jQuery对象
	按tag查找：：
		只需要写上tag名称， （例如， "var ps = $('p'); // 返回所有<p>节点"， "ps.length; // 数一数页面有多少个<p>节点"）
	按class查找：：
		在class名称前加一个".", 点就代表class （例如， "var a = $('.red'); // 所有节点包含`class="red"`都将返回", 包括"class="green red""的情况）
		查找同时包含red和green的节点，点之前没有空格， 字符串没有顺序之分（例如， "var a = $('.red.green'); // 注意没有空格！"， 包括"class="blue green red""）
		必须是一个完整的class元素，（例如， "color-green"） 不能是部分字符串， 例如去掉color， 只保留green
	按属性查找：：
		加"[]", $('[key=value]'), （例如， "var email = $('[name=email]'); // 找出<??? name="email">"）
		当属性的值包含空格等特殊字符时，需要用双引号括起来， （例如， "var a = $('[items="A B"]'); // 找出<??? items="A B">"）
		可以使用前缀查找或者后缀查找, 等号右边不用引号
		例如：：
			var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
			// 例如: name="icon-1", name="icon-2"
			var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
			// 例如: name="startswith", name="endswith"
		通过class属性查找，不受class包含多个名称的影响，且等号右边要有引号，
		例如：：
			var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
			// 例如: class="icon-clock", class="abc icon-home"
	组合查找：：
		直接拼接， 把上述简单选择器组合起来使用， 限制筛选条件，
		例如：：
			tag + 属性：："var emailInput = $('input[name=email]'); // 只会找出"<input>" 不会找出<div name="email">"
			tag + class：："var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>"
	多项选择器：：
		在''内， 用','分隔； 多个选择器用","组合起来一块选, 增加筛选结果，
		例如：：
			$('p,div'); // 把<p>和<div>都选出来
			$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
	选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素， 
	例如：：
		"<p class="red green">不会被$('p.red,p.green')"选择两次
层级选择器：
	DOM的结构就是层级结构
	层级选择器（Descendant Selector）， 缩小了选择范围
	格式：：$(祖先节点+空格+目标节点)， 祖先节点可以是父亲， 也可是父亲的父亲, （例如， "$('form[name=upload] input');"）
	多层选择：：$(祖先节点+空格+祖先节点+空格+目标节点)， （例如， "$('form.test p input'); // 在form表单选择被<p>包含的<input>"）
	子选择器（Child Selector）：：
		$('parent>child'),选出child的DOM元素
		限定了层级关系必须是父子关系， <child>节点必须是<parent>节点的直属子节点， 
		例如：："$('ul.lang>li.lang-javascript'); // 可以选出[<li class="lang-javascript">JavaScript</li>]"）
	过滤器（Filter）：：
		$(选择器：过滤条件)
		一般不单独使用，它通常附加在选择器上， 例如：：
			$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
			$('ul.lang li:first-child'); // 仅选出JavaScript
			$('ul.lang li:last-child'); // 仅选出Lua
			$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
			$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
			$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素
	表单相关：：
		针对表单元素的一组特殊选择器，
		例如：：
			:input：可以选择<input>，<textarea>，<select>和<button>， （例如， "$(":input")"）
			:file：可以选择<input type="file">，和input[type=file]一样；(例如， "$(":button")")
			:checkbox：可以选择复选框，和input[type=checkbox]一样；
			:radio：可以选择单选框，和input[type=radio]一样；
			:focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
			:checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
			:enabled：可以选择可以正常输入的<input>、<select>等，也就是没有灰掉的输入；
			:disabled：和:enabled正好相反，选择那些不能输入的
			$('div:visible'); // 所有可见的div
			$('div:hidden'); // 所有隐藏的div
查找和过滤：
	以查找到的对象为基准，进行查找和过滤
	find()：：
		jQuery对象.find(选择器语法)， （例如， "var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme"）
		在某个节点的所有子节点中查找, 它本身又接收一个任意的选择器
		find("*")返回所有下层元素
	parent()：
		当前节点开始向上查找，不一定只有父节点， 可能是祖先节点，
		例如：：
			var swf = $('#swift'); // 获得Swift
			var parent = swf.parent(); // 获得Swift的上层节点<ul>
			var a = swf.parent('div.red'); // 从以当前节点为基础开始向父亲查找，直到找到某个符合条件的节点并返回
	next()和prev()：：
		同一层级的节点， next和previous都不累加， 和"swf.parent"相同， 以当前节点为基础， 例如：：
			var swift = $('#swift');
				swift.next(); // Scheme
				swift.next('[name=haskell]'); // Haskell，因为Haskell是后续第一个符合选择器条件的节点
				swift.prev(); // Python
				swift.prev('.js'); // JavaScript，因为JavaScript是往前第一个符合选择器条件的节点
	过滤：：
		filter()：：
			过滤掉不符合选择器条件的节点
			jQuery对象.filter(selector表达式 或者 传入func)，
			例如：：
				var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme
			传入函数时， 内部的this被绑定为DOM对象， 不是jQuery对象，
			例如：：
				var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
				langs.filter(function () {
				    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点
				}); // 拿到Swift, Scheme
			"innerHTML.indexOf('S') === 0"常用于子串
		map()：：
			把一个jQuery对象包含的若干DOM节点转化为其他对象
			例如：：
				var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
				var arr = langs.map(function () {
				    return this.innerHTML;
				}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
		first()、last()和slice()：：
			返回一个新的jQuery对象，把不需要的DOM节点去掉
			前提：：一个jQuery对象如果包含了不止一个DOM节点
			例如：：
				var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
				var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
				var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
				var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致
		jQuery对象.serializeArray()将jQuery对象转变为JSON对象
操作DOM：
	不需要考虑浏览器差异
	修改Text和HTML：：	
		text()和html()方法分别获取节点的文本和原始HTML文本， html比text多了些特殊字符
		例如：：
			$('#test-ul li[name=book]').text(); // 'Java & JavaScript'
			$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'
		无参数调用text()是获取文本，传入参数就变成设置文本，HTML也是类似操作
		例如：：
			$('#test-ul li.js').html('<span style="color: red">JavaScript</span>');
			$('#test-ul li[name=book]').text('JavaScript & ECMAScript');
		一个jQuery对象可以包含0个或任意个DOM对象， 它的方法实际上会作用在对应的每个DOM节点上
		即使选择器没有返回任何DOM节点，调用jQuery对象的方法仍然不会报错
	修改CSS：：
		用"css('name', 'value')"逐个修改css属性，
		例如：：
			"$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red'); //高亮显示文本"	
			var div = $('#test-div');
				div.css('color'); // '#000033', 获取CSS属性
				div.css('color', '#336699'); // 设置CSS属性
				div.css('color', ''); // 清除CSS属性
	jQuery对象的所有方法都返回一个jQuery对象（可能是新的也可能是自身）， 这是链式调用的基础
	CSS属性可以用'background-color'和'backgroundColor'两种格式
	css()方法将作用于DOM节点的style属性，具有最高优先级, 
	例如：：
		var div = $('#test-div');
			div.hasClass('highlight'); // false， class是否包含highlight
			div.addClass('highlight'); // 添加highlight这个class
			div.removeClass('highlight'); // 删除highlight这个class
	显示和隐藏DOM：：
		旧方法：：设置CSS的display属性为none， 恢复需要先记下来原有的display属性到底是block还是inline还是别的值
		新方法：：jQuery提供show()和hide()
		例如， 
			var a = $('a[target=_blank]');
				a.hide(); // 隐藏
				a.show(); // 显示
		隐藏DOM节点并未改变DOM树的结构，它只影响DOM节点的显示。这和删除DOM节点不同
	获取DOM信息：：
		获取DOM的高宽
		例如：：
			// 浏览器可视窗口大小:
			$(window).width(); // 800
			$(window).height(); // 600

			// HTML文档大小:
			$(document).width(); // 800
			$(document).height(); // 3500

			// 某个div的大小:
			var div = $('#test-div');
			div.width(); // 600
			div.height(); // 300
			div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
			div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效
		attr()和removeAttr()操作DOM节点的属性：：
		例如：：
			// <div id="test-div" name="Test" start="1">...</div>
			var div = $('#test-div');
				div.attr('data'); // undefined, 属性不存在
				div.attr('name'); // 'Test'
				div.attr('name', 'Hello'); // div的name属性变为'Hello'
				div.removeAttr('name'); // 删除name属性
				div.attr('name'); // undefined
		prop()方法和attr()， 区别在于对没有值的属性的处理, prop()返回true/false， attr()返回'checked'：：
		例如：：
			"checked"：："<input id="test-radio" type="radio" name="test" checked value="1">"
					   "<input id="test-radio" type="radio" name="test" checked="checked" value="1">"
			var radio = $('#test-radio');
				radio.attr('checked'); // 'checked'
				radio.prop('checked'); // true
		用is()方法判断更好：：
			var radio = $('#test-radio');
				radio.is(':checked'); // true
		selected，处理时最好也用is(':selected')
	操作表单：：
		val()操作value属性， 统一各种输入框的取值和赋值，
		例如：：
			/*
			    <input id="test-input" name="email" value="">
			    <select id="test-select" name="city">
			        <option value="BJ" selected>Beijing</option>
			        <option value="SH">Shanghai</option>
			        <option value="SZ">Shenzhen</option>
			    </select>
			    <textarea id="test-textarea">Hello</textarea>
			*/
			var
			    input = $('#test-input'),
			    select = $('#test-select'),
			    textarea = $('#test-textarea');
			input.val(); // 'test'
			input.val('abc@example.com'); // 文本框的内容已变为abc@example.com
			select.val(); // 'BJ'
			select.val('SH'); // 选择框已变为Shanghai
			textarea.val(); // 'Hello'
			textarea.val('Hi'); // 文本区域已更新为'Hi'
	用parent.removeChild(child)删除DOM元素
修改DOM结构：：
	添加DOM：：
		两种方法：：html()暴力方法，和append()方法
		例如：：
			"ul.append('<li><span>Haskell</span></li>');"
		append()还可以传入原始的DOM对象，jQuery对象和函数对象,
		例如：：
			// 创建DOM对象:
			var ps = document.createElement('li');
			ps.innerHTML = '<span>Pascal</span>';
			// 添加DOM对象:
			ul.append(ps);
			// 添加jQuery对象:
			ul.append($('#scheme'));
			// 添加函数对象:
			ul.append(function (index, html) {
			    return '<li><span>Language - ' + index + '</span></li>';
			});
	因为jQuery的append()可能作用于一组DOM节点，只有传入函数才能针对每个DOM生成不同的子节点
	append()把DOM添加到最后，prepend()把DOM添加到最前
	如果要添加的DOM节点已经存在于HTML文档中，它会首先从文档移除，然后再添加，也就是说，用append()，你可以移动一个DOM节点
	插入：：
		先定位， 然后用after()， 或before(),
		例如：：
			var js = $('#test-div>ul>li:first-child');
				js.after('<li><span>Lua</span></li>');
	删除节点：：
		jQuery对象.remove(), 如果jQuery对象包含若干DOM节点, 可以一次删除多个DOM节点
		例如：：
			var li = $('#test-div>ul>li');
				li.remove(); // 所有<li>全被删除
	两个list拼接， 用list_a.concat(list_b)
事件：
	一旦页面上所有的JavaScript代码被执行完后，就只能依赖触发事件来执行JavaScript代码
	原理：：
		浏览器在接收到用户的鼠标或键盘输入后，会自动在对应的DOM节点上触发相应的事件。如果该节点已经绑定了对应的JavaScript处理函数，该函数就会自动调用
	本质：：jQuery对象用on监听事件， 然后进入处理函数
	on(事件名称， 处理函数)：：
		用来绑定一个事件， （例如， "a.on('click', function () {}"
	click(处理函数)：：
		和on等价， （例如，"a.click(function () {}" 
	jQuery能够绑定的事件：：
		鼠标事件：：
			click： 鼠标单击时触发；
			dblclick：鼠标双击时触发；
			mouseenter：鼠标进入时触发；
			mouseleave：鼠标移出时触发；
			mousemove：鼠标在DOM内部移动时触发；
			hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave
		键盘事件：：
			仅作用在当前焦点的DOM， 通常是<input>和<textarea>
			keydown：键盘按下时触发；
			keyup：键盘松开时触发；
			keypress：按一次键后触发
		其他事件：：
			focus：当DOM获得焦点时触发；
			blur：当DOM失去焦点时触发；
			change：当<input>、<select>或<textarea>的内容改变时触发；
			submit：当<form>提交时触发；
			ready：当页面被载入并且DOM树完成初始化后触发
	ready仅作用于document对象； 由于ready事件在DOM完成初始化后触发，且只触发一次，所以非常适合用来写其他的初始化代码
	例如：：
		"	<script>                                          "
		"       $(document).on('ready', function () {         "
		"            $('#testForm).on('submit', function () { "
		"                alert('submit!');                    "
		"            }   									  "
		"            });									  "
		"         });									      "
	    "	</script>   									  "
	简化为：：
		"$(document).ready(function () {    "
        "// on('submit', function)也可以简化:  "
        "$('#testForm).submit(function () { "
        "alert('submit!');                  "
        " });                               "
		" });                               "
	精简：：
		$(function () {
    		// init...
		});
	牢记这是document对象的ready事件处理函数
	可以反复绑定事件处理函数，它们会依次执行
	例如：：
		$(function () {
		    console.log('init A...');
		});
		$(function () {
		    console.log('init B...');
		});
		$(function () {
		    console.log('init C...');
		});
	事件参数：：
		所有事件都会传入"Event"对象作为参数（function （e））， 可以从Event对象上获取信息，（例如， mousemove和keypress，我们需要获取鼠标位置和按键的值）
		例如：：
			$(function () {
  			  $('#testMouseMoveDiv').mousemove(function (e) {
     		     $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
   			  });
			}）;
	取消绑定：：
		一个已被绑定的事件可以解除绑定，用off('click', function)，off就是不监听的意思
		function hello() {
		    alert('hello!');
		}
		a.click(hello); // 绑定事件
		// 10秒钟后解除绑定:
		setTimeout(function () {
		    a.off('click', hello);
		}, 10000);
		注意， 两个匿名函数，是不同对象，
		例如：：
			// 绑定事件:
			a.click(function () {
			    alert('hello!');
			});
			// 解除绑定:
			a.off('click', function () {
			    alert('hello!');
			});
		使用off('click')， 一次性移除已绑定的click事件的所有处理函数， 无参数调用"off()"一次性移除已绑定的所有类型的事件处理函数
	事件触发条件：：
		事件的触发总是由用户操作引发的， 用JavaScript不会触发事件
		用代码触发：：
			调用和触发事件对应的函数，
			例如：：
				var input = $('#test-input');
					input.val('change it!');
					input.change(); // 触发change事件
		input.change()相当于input.trigger('change')，它是trigger()方法的简写, 还例如, "langs.click()"，一定注意，一旦触发，就已经点击了一次
	手动触发可以避免写两份一模一样的代码
	浏览器安全限制：：
		在浏览器中，有些JavaScript代码只有在用户触发下才能执行， （例如， window.open()）
		处理函数可以直接触发，不能经过中间调用， 
		例如：：
			popupTestWindow()在click事件处理函数内执行，这是浏览器允许的， 延迟执行的popupTestWindow()将被浏览器拦截， 显示（pop-up-blocked）
	form.serialize()用于jQuery对象的序列化, langs.each()可以遍历每个子元素
	表单的每个全选，反选，check，的展示效果由HTML里的css参数控制， javascript只是去改变这些参数, 进而产生样式的变化
动画：
	本质：：javascript固定时间间隔修改元素的css样式
	jQuery内置的动画样式：：
		"show/hide"：：
			无参数形式调用show()和hide()， 会显示和隐藏DOM元素
			show(毫秒时间)，hide（毫秒时间），
			例如：：
				var div = $('#test-show-hide');
					div.hide(3000); // 在3秒钟内逐渐消失
			show('slow'/'fast'), hide('slow'/'fast')
			例如：：
				var div = $('#test-show-hide');
					div.show('slow'); // 在0.6秒钟内逐渐显示
		"toggle()"切换的意思， 根据当前状态决定是show()还是hide()
		"slideUp/slideDown"：：
			垂直方向逐渐展开或收缩， slideUp()一个可见的DOM元素收起来， slideDown()相反， slideToggle()根据元素是否可见，切换
		"fadeIn / fadeOut"：：
			fadeIn()出现，淡入；fadeOut()消失，淡出； 通过不断设置DOM元素的opacity属性来实现， fadeToggle()根据元素是否可见，切换 
		    例如：：
		    	var div = $('#test-fade');
				div.fadeOut('slow'); // 在0.6秒内淡出
			fadeOut是隐藏，隐藏不等于删除
	自定义动画：：
		animate({DOM元素最终的CSS状态}， 时间段， 动画结束时调用的function{})， 可以实现任意动画效果
		例如：：
			var div = $('#test-animate');
			div.animate({
			    opacity: 0.25,
			    width: '256px',
			    height: '256px'
			}, 3000); // 在3秒钟内CSS过渡到设定值
		或者：：
			var div = $('#test-animate');
			div.animate({
			    opacity: 0.25,
			    width: '256px',
			    height: '256px'
			}, 3000, function () {
			    console.log('动画已结束');
			    // 恢复至初始状态:
			    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
			});
		回调函数参数对于基本动画也适用
    串行动画：：
    	动画可以链式调用， delay()可以实现暂停
    	例如：：
    		var div = $('#test-animates');
			// 动画效果：slideDown - 暂停 - 放大 - 暂停 - 缩小
			div.slideDown(2000)
			   .delay(1000)
			   .animate({
			       width: '256px',
			       height: '256px'
			   }, 2000)
			   .delay(1000)
			   .animate({
			       width: '128px',
			       height: '128px'
			   }, 2000);
			}
		因为动画需要执行一段时间，所以jQuery必须不断返回新的Promise对象才能执行后续操作； 简单地把动画封装在函数中是不够的
	为什么有的动画没有效果：：
		jQuery动画的原理是逐渐改变CSS的值， 很多不是block性质的DOM元素，对它们设置css， 如height， 根本就不起作用，所以动画也就没有效果
		jQuery没有实现对"background-color"的动画效果，用"animate()"设置"background-color"也没有效果, 用CSS3的transition代替animate（）




































*******************************************************************************
补上
*******************************************************************************
Object：
	和Array类似的针对Object的函数
	"keys/allKeys"：：
		keys()返回一个object自身所有的key， 但不包含从原型链继承下来的， （例如，"_.keys(xiaoming); // ['name', 'age']"）
		allKeys()除了object自身的key，还包含从原型链继承下来的
		例如：：
			Student.prototype.school = 'No.1 Middle School';
			var xiaoming = new Student('小明', 20);
			_.allKeys(xiaoming); // ['name', 'age', 'school']
		values()返回object自身但不包含原型链继承的所有值, （例如， "_.values(obj); // ['小明', 20]"）
		没有allValues()
	mapObject：：
		针对object的map版本， value在前，key在后
		例如：：
			var obj = { a: 1, b: 2, c: 3 };
			_.mapObject(obj, (v, k) => 100 + v); // { a: 101, b: 102, c: 103 }
	invert：：
		把object的每个key-value来个交换，key变成value，value变成key， 非常有用， (例如， "_.invert(obj); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }")
	"extend/extendOwn"：： 
		extend()把多个object的key-value合并到第一个object并返回， 注意，是自身对象变化
		例如：：
			var a = {name: 'Bob', age: 20};
			_.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
			// 变量a的内容也改变了：
			a; // {name: 'Bob', age: 88, city: 'Beijing'}
		如果有相同的key，后面的object的value将覆盖前面的object的value
		extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性
	clone：：
		把原有对象的所有属性都复制到新的对象中， 是"浅复制"【只复制了引用， 修改一个对象， 会影响clone对象】，两个对象相同的key所引用的value其实是同一对象（例如， "var copied = _.clone(source)"）
	isEqual：：
		对两个object进行深度比较（比较内部值），如果内容完全相同，则返回true
		例如：：
			var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
			var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};
			o1 === o2; // false
			_.isEqual(o1, o2); // true
		isEqual()对Array也可以比较
Chaining：：
	把对象包装成能进行链式调用的方法， 每个高阶函数， 只需要传入func
	例如：：
		_.chain([1, 4, 9, 16, 25])
		 .map(Math.sqrt)
		 .filter(x => x % 2 === 1)
		 .value();
		// [1, 3, 5]
	因为每一步返回的都是包装对象，所以最后一步的结果需要调用value()获得最终结果









