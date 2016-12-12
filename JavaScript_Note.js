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
			传二维数组，"var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);", Map 与对象不同， 对象用":", Map用"=>", 例如"Map {"Michael" => 95, "Bob" => 75, "Tracy" => 85}"
		添加：："m.set('Adam', 67); // 添加新的key-value"
		判读：："m.has('Adam'); // 是否存在key 'Adam': true"
		查找：："m.get('Adam'); // 67"
		删除：："m.delete('Adam'); // 删除key 'Adam'"
	Set：：
		和Map的区别， 不存储value
		初始化set：：
			空， "var s1 = new Set(); // 空Set"
			传Array"var s2 = new Set([1, 2, 3]);" //Set {1, 2, 3}
		添加：："s.add(key)"
		删除：："s.delete(key)"
		判读：："s.has(key); // 是否存在key"
iterable：
	遍历三法：："while", "for ... of", "forEach(function () {})"
	Array、Map和Set都属于iterable类型， 用"for ... of"遍历， （例如，"for (var x of a) {}"）
	注意Map每个元素得到的是Array
	"for ... in"遍历对象的属性名称, 动态添加的元素， 不会算在length里， 且不能遍历Map和Set
	"for ... of"只循环集合本身的元素， 与"for ... in" 区别在于， 不受被遍历对象动态添加属性的影响
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
		一般不单独使用，它通常附加在选择器上， 因为filter不能进入内嵌的DOM元素， 例如：：
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
		在某个节点的所有子节点中查找, 它本身又接收一个任意的选择器,例如， find(filter)
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
AJAX：：
	用jQuery的相关对象处理AJAX，不需要考虑浏览器问题，代码也简化
	ajax：：
		jQuery在全局对象就是jQuery（也就是$）， 绑定了ajax()函数，用于执行AJAX， ajax(url, settings对象)，返回jqXHR对象，它类似Promise对象
		settings对象：：
			async：：是否异步执行AJAX请求，默认为true，千万不要指定为false
			method：：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等
			contentType：：发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为"text/plain、application/json"
			data：：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式
			headers：：发送的额外的HTTP头，必须是一个object
			dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的"Content-Type"猜测
		例如：：发送一个GET请求，并返回一个JSON格式的数据
		var jqxhr = $.ajax('/api/categories', {
		    dataType: 'json'
		}); // 请求已经发送了
		jQuery的jqXHR对象类似一个Promise对象， 用于处理各种回调， 且可以链式调用;调用"done（）"表示成功， "fail()"表示失败， "always（）"表示请求完成，无论成功或失败都会调用
	get：：
		功能和GET请求相同
		例如：：
			var jqxhr = $.get('/path/to/resource', {
			    name: 'Bob Lee',
			    check: 1
			});
		第二个参数如果是object，jQuery自动把它变成query string然后加到URL后面，实际的URL是"/path/to/resource?name=Bob%20Lee&check=1", 就可以不关心如何用URL编码并构造一个query string
	post：：
		和get()类似， 但第二个参数默认被序列化为"application/x-www-form-urlencoded"
		例如：：
			var jqxhr = $.post('/path/to/resource', {
			    name: 'Bob Lee',
			    check: 1
			});
			实际构造的数据"name=Bob%20Lee&check=1"作为POST的body被发送
	getJSON：：
		getJSON(resource path或URL， function或者object【是发送到服务器的数据】)可以快速通过GET获取一个JSON对象
		同样有done（）， fail（）， always（）
		例如：：
			var jqxhr = $.getJSON('/path/to/resource', {
			    name: 'Bob Lee',
			    check: 1
			}).done(function (data) {
			    // data已经被解析为JSON对象了
			});
	安全限制：：
		本质就是跨域访问问题， 和用JavaScript写AJAX完全一样
		如果需要使用JSONP，可以在ajax()中设置"jsonp: 'callback'"，让jQuery实现JSONP跨域加载数据
扩展：：
	扩展jQuery来实现自定义方法， 看上去和jQuery本身的方法没有什么区别, 例如highlight（）， 也叫编写jQuery插件
	编写jQuery插件：：
		通过扩展"$.fn"对象, 给jQuery对象绑定一个新方法, "$.fn.func()"要善于用"this"
		例如：：
			$.fn.highlight1 = function () {
			    // this已绑定为当前jQuery对象:
			    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
			    return this;
			}
		调用直接jquery对象.func(), 例如， $('#test-highlight1 span').highlight1();
		"return this;"作用是支持链式调用
		链式调用的本质：：返回对象， 有了对象就能用函数
		函数内部的this在调用时被绑定为jQuery对象，所以函数内部代码可以调用所有jQuery对象的方法
		"this"仅在类函数再嵌套一个函数， 或者单独一个函数用到this时候会出现指向问题； 普通对象的函数例里用this，没有问题
		"<span>"作用就是分割文字
		自定义函数可以带参数，比如传入一个"setting对象"
		例如：：
			$.fn.highlight2 = function (options) {
			    // 要考虑到各种情况:
			    // options为undefined
			    // options只有部分key
			    var bgcolor = options && options.backgroundColor || '#fffceb';
			    var color = options && options.color || '#d85030';
			    this.css('backgroundColor', bgcolor).css('color', color);
			    return this;
			}
		设置默认值，两种方法：：
			用短路操作， "&&和||", 总能得到一个有效的值
			用"$.extend(target, obj1, obj2, ...)"它把多个object对象的属性合并到第一个target对象中，遇到同名属性，总是使用靠后的对象的值
			例如：：
				// 把默认值和用户传入的options合并到对象{}中并返回:
				var opts = $.extend({}, {
				    backgroundColor: '#00a8e6',
				    color: '#ffffff'
				}, options);
		可以实现用户能修改设定的默认值， 本质是函数对象调用自身的属性
		例如：：
			$.fn.highlight = function (options) {
			    // 合并默认值和用户设定值:
			    var opts = $.extend({}, $.fn.highlight.defaults, options);
			    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
			    return this;
			}

			// 设定默认值:
			$.fn.highlight.defaults = {
			    color: '#d85030',
			    backgroundColor: '#fff8de'
			}
		注意， 这里这里的defaults是设置highlight函数对象的属性， 不是链式调用， 链式调用函数要加"()"， 例如， "$('span.hl').highlight1().slideDown();"
		调用方式：：
			$.fn.highlight.defaults.color = '#659f13';
			$.fn.highlight.defaults.backgroundColor = '#f2fae3';
			$('#test-highlight p:first-child span').highlight();
			$('#test-highlight p:last-child span').highlight({
			    color: '#dd1144'
			});
		编写jQuery插件原则：：
			给"$.fn"绑定函数，实现插件的代码逻辑；
			插件函数最后要"return this;"以支持链式调用；
			插件函数要有默认值，绑定在"$.fn.<pluginName>.defaults"上；
			用户在调用时可传入"设定值"以便覆盖默认值。
	针对特定元素的扩展：：
		submit()方法只能针对form， 用"filter()"实现
		例如， 给所有指向外链的超链接加上跳转提示：：
			步骤一：：
				先写出用户调用的代码：："$('#main a').external();"， 例如， "$('#test-external a').external();"
			步骤二：：
				编写一个"external"扩展,只针对"<a>"元素
				$.fn.external = function () {
				    // return返回的each()返回结果，支持链式调用:
				    return this.filter('a').each(function () {
				        // 注意: each()内部的回调函数的this绑定为DOM本身!
				        var a = $(this);
				        var url = a.attr('href');
				        if (url && (url.indexOf('http://')===0 || url.indexOf('https://')===0)) {
				           //阻止用户直接点开链接，让其通过确认弹窗来做跳转
				            a.attr('href', '#0')
				            //变为：：<a href="#0" target="_blank">Example</a>，  把href里的链接值为#0，这样用户直接点链接就无法跳转到该地址
				             .removeAttr('target')
				             //变为：：<a href="#0">Example</a>把target属性删除，因为target="_blank"会新开一个浏览器空白窗口
				             .append(' <i class="uk-icon-external-link"></i>')
				             //变为：：<a href="#0">Example <i class="uk-icon-external-link"></i></a>， 加上一个\<i\>标签，对应的是在链接文字后面加一个提示的图标
				             .click(function () {
				                if(confirm('你确定要前往' + url + '？')) {
				                    window.open(url);
				                }
				            });
				        }
				    });
				}
			注意filter返回一个list， each相当于遍历每个元素， each()内部的回调函数的this绑定为DOM本身
			如果用"$('#test-external').external();", filter那里用find(filter)进行过滤， 因为filter不能找到内嵌元素
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
Node.js：：
	google， apple都用WebKit， Google的JavaScript引擎V8， 以BSD许可证开源
	javascript写后端优势：：事件驱动机制 + V8高性能引擎
安装Node.js和npm：：
	安装Node.js：：
		退出Node.js环境，连按两次"Ctrl+C"
	npm：：
		Node.js的包集中管理工具（package manager）， 不用管代码存在哪，应该从哪下载， dependence等
第一个Node程序：：
	前端JavaScript代码都在浏览器中运行， 后端在Node环境中执行， 直接在计算机上以命令行的方式运行
	第一行总是写上"'use strict';", 记得分号
	运行javascript， "node hello.js"
	文件名只能是字母、数字和下划线， 
命令行模式和Node交互模式：：
	命令行直接执行"node hello.js", 进入node">", 直接输入javascript代码， 和Python执行相似
	打印用"console.log()", 类似python
	使用严格模式：："node --use_strict calc.js..."直接为所有js文件开启严格模式, 不用为每个文件都写上'use strict';
搭建Node开发环境：：
	在一个环境里编码、运行、调试(启动快，执行简单，调试方便)
	Java有Eclipse，Intellij idea等，C#有Visual Studio， Python有pycharm， Node.js有Intellij idea， Visulal Studio Code
	VS Code以文件夹作为工程目录（Workspace Dir），所有的JavaScript文件都存放在该目录下, 工程目录下需要一个.vscode的配置目录，里面存放VS Code需要的配置文件
模块：：
	可维护就是方便管理的意思， 比如分组， 归类， 复用
	在Node环境中，一个.js文件就称为一个模块（module）， 模块的名字就是文件名（去掉.js后缀）
	使用模块可避免函数名和变量名冲突， 自己在编写模块时，不必考虑名字会与其他模块冲突
	模块要给其他模块引用， 需要把函数greet作为模块的输出暴露出去， "module.exports = greet;"
	例如：：
		'use strict';
		var s = 'Hello';
		function greet(name) {
		    console.log(s + ', ' + name + '!');
		}
		module.exports = greet;
	其他模块引用函数用"require", 例如：："require('./hello')", "./"因为main.js和hello.js位于同一个目录，用当前目录"."
	如果只写模块名，例如：："require('hello');", 则Node会依次在内置模块、全局模块和当前模块下查找hello.js，很可能会得到一个错误"Cannot find module 'hello'"
	例如：：
		'use strict';
		// 引入hello模块:
		var greet = require('./hello');
		var s = 'Michael';
		greet(s); // Hello, Michael!
	检查引用错误：：模块名是否写对了；模块文件是否存在；相对路径是否写对了
	CommonJS规范：：
		就是模块加载机制， 
		模块对外暴露变量（函数也是变量, 变量可以是任意对象、函数、数组），用"module.exports = variable;", 模块引用其他模块暴露的变量，用"var ref = require('module_name')"
	深入了解模块原理：：
		大量使用全局变量可能引起文件中相互引用， 改变
		本质：：用"闭包"实现模块， 把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量
		模块的输出"module.exports"实现：：包裹函数，将需要暴露的变量传进"module"对象的exports属性
		输出变量用module.exports = {key:value}
		例如：：module.exports = {
		    greet: greet,
		    hi: hi,
		    goodbye: goodbye
		};
		或者：：module.exports = greet;
基本模块：：
	服务器程序：：没有浏览器的安全限制，而且，必须能接收网络请求，读写文件，处理二进制内容
	Node.js内置的常用模块是为了实现基本的服务器功能； 这些模块在浏览器环境中无法被执行，因为它们的底层代码是用C/C++在Node.js运行环境中实现的
	"global"：：
		唯一的全局对象, 类似浏览器的window对象
	"process"：：
		代表当前Node.js进程， 类似python里的system， os
		例如：： 	
			process === global.process;
			process.version;
			process.platform;
			process.arch;
			process.cwd(); //返回当前工作目录
			process.chdir('/private/tmp'); // 切换当前工作目录
			process.argv //存储了命令行参数
		下一轮事件响应中执行代码"process.nextTick()"
		例如：：
			// process.nextTick()将在下一轮事件循环中调用:
			process.nextTick(function () {
			    console.log('nextTick callback!');
			});
			console.log('nextTick was set!');
			打印：：
				nextTick was set!
				nextTick callback!
			传入process.nextTick()的函数不是立刻执行，而是要等到下一次事件循环
			响应事件是"当事件发生时执行"， 异步IO是"当事件执行完后， 执行"
			Node.js进程本身的事件由process对象来处理
			例如：：
				// 程序即将退出时的回调函数:
				process.on('exit', function (code) {
				    console.log('about to exit with code: ' + code);
				});
	判断JavaScript执行环境：：
		就是判断是在浏览器还是node中
		例如：：
			if (typeof(window) === 'undefined') {
			    console.log('node.js');
			} else {
			    console.log('browser');
			}
fs：：
	文件系统模块，负责读写文件
	和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法
	同步IO和异步IO对比：：
	异步：：
		$.getJSON('http://example.com/ajax', function (data) {
		    console.log('IO结果返回后执行...');
		});
		console.log('不等待IO结果直接执行后续代码...');
	同步：：
				// 根据网络耗时，函数将执行几十毫秒~几秒不等:
		var data = getJSONSync('http://example.com/ajax');
	同步好处是代码简单，缺点是程序将等待IO操作，在等待时间内，无法响应其它任何事件
	异步读取不用等待IO操作，但代码较麻烦
	异步读文件：：
		读文本文件, fs.readFile(文件名， 编码【例如"utf-8"】， 处理函数)
		例如：：
			'use strict';
			var fs = require('fs');
			fs.readFile('sample.txt', 'utf-8', function (err, data) {
			    if (err) {
			        console.log(err); //正常读取时，err为null; data为读取到的String
			    } else {
			        console.log(data);//当读取发生错误时，err参数代表一个错误对象，data为undefined
			    }
			});
		function (err, data)是Node.js标准的回调函数
		读取图片文件：：
		例如：：
			'use strict';
			var fs = require('fs');
			fs.readFile('sample.png', function (err, data) {
			    if (err) {
			        console.log(err);
			    } else {
			        console.log(data);
			        console.log(data.length + ' bytes');
			    }
			});
		不管同步还是异步， 如果参数没有"编码"， data将返回一个Buffer对象， 在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同， 以字节为单位）
		Buffer对象可以和String作转换：：
			例如：：
				// Buffer -> String
				var text = data.toString('utf-8');
				console.log(text);
			或者：：
				// String -> Buffer
				var buf = new Buffer(text, 'utf-8');
				console.log(buf);
	同步读文件：：
		函数名多了"Sync", 并且不接收回调函数，函数直接返回结果
		读文本文件， fs.readFileSync(函数名， 编码)
		例如：：
			'use strict';
			var fs = require('fs');
			var data = fs.readFileSync('sample.txt', 'utf-8');
			console.log(data);
		同步读取文件发生错误，需要用"try...catch"
		例如：：
			try {
				    var data = fs.readFileSync('sample.txt', 'utf-8');
				    console.log(data);
				} catch (err) {
				    // 出错了
				}
	写文件：：
		异步写， fs.writeFile(文件名， 数据， 处理函数)， 
		例如：：
			'use strict';
			var fs = require('fs');
			var data = 'Hello, Node.js';
			fs.writeFile('output.txt', data, function (err) {
			    if (err) {
			        console.log(err);
			    } else {
			        console.log('ok.');
			    }
			});
		数据是"String"，默认按"UTF-8"编码写入文本文件，如果传入的参数是"Buffer"，则写入的是"二进制文件"
		回调函数由于只关心成功与否，因此只需要一个err参数
		同步写， writeFileSync()
		例如：：
			'use strict';
			var fs = require('fs');
			var data = 'Hello, Node.js';
			fs.writeFileSync('output.txt', data);
    stat：：
    	用fs.stat(文件名， 处理函数)， 获取文件大小，创建时间等信息， 它返回一个Stat对象，能告诉我们文件或目录的详细信息
    	例如：：
    		'use strict';
			var fs = require('fs');
			fs.stat('sample.txt', function (err, stat) {
			    if (err) {
			        console.log(err);
			    } else {
			        // 是否是文件:
			        console.log('isFile: ' + stat.isFile());
			        // 是否是目录:
			        console.log('isDirectory: ' + stat.isDirectory());
			        if (stat.isFile()) {
			            // 文件大小:
			            console.log('size: ' + stat.size);
			            // 创建时间, Date对象:
			            console.log('birth time: ' + stat.birthtime);
			            // 修改时间, Date对象:
			            console.log('modified time: ' + stat.mtime);
			        }
			    }
			});
			对应的同步函数是statSync()
	异步还是同步：：
		启动，结束用同步， 其他都用异步：：
			绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应
			服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码
stream：：
	仅在服务区端可用， 目的是支持“流”这种数据结构
	流是一种抽象的数据结构， 源源不断， 数据有序， 必须依次读取，或者依次写入， 不能像Array那样随机定位， 例如字符流
	标准输入流（stdin）：：从键盘输入到应用程序
	标准输出流（stdout）：：应用程序输出到显示器
	把直接操作硬件，改为用对流操作， 例如， 读流， 写流
	对流操作只需要"响应流的事件", "data"表示可以开始读， "end"表示已读到末尾， "error"表示出错了
	新建读文件流"fs.createReadStream（文件名， 编码）"， "rs.on"(事件， 处理函数)
	例如：：
		'use strict';
		var fs = require('fs');
		// 打开一个流:
		var rs = fs.createReadStream('sample.txt', 'utf-8');
		rs.on('data', function (chunk) {
		    console.log('DATA:')
		    console.log(chunk);
		});
		rs.on('end', function () {
		    console.log('END');
		});
		rs.on('error', function (err) {
		    console.log('ERROR: ' + err);
		});
	data事件可能会有多次，每次传递的chunk是流的一部分数据
	写文件流，只需不断调用write()方法，最后以end()结束，fs.createWriteStream(文件, 编码)， 写二进制文件需要"new Buffer（字符数据， 编码）"
	例如：： 
		'use strict';
		var fs = require('fs');
		var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
		ws1.write('使用Stream写入文本数据...\n');
		ws1.write('END.');
		ws1.end();
		var ws2 = fs.createWriteStream('output2.txt');
		ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
		ws2.write(new Buffer('END.', 'utf-8'));
		ws2.end();
	所有可以读取数据的流都继承自"stream.Readable"，所有可以写入的流都继承自"stream.Writable"
	pipe：：
		本质：：把一个Readable流和一个Writable流串起来， 所有的数据自动从Readable流进入Writable流
		读流.pipe(写流)
		例如：： 
			'use strict';
			//实现复制功能
			var fs = require('fs');
			var rs = fs.createReadStream('sample.txt');
			var ws = fs.createWriteStream('copied.txt');
			rs.pipe(ws);
		当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流
		不自动关闭，用"readable.pipe(writable, { end: false });"
http：：
	写Web程序， 都是从特别简单开始的
	Node.js开发的目的：：用JavaScript编写Web服务器程序
	HTTP协议：：
		浏览器与服务器之间， 请求， 响应操作
	HTTP服务器：：
		应用程序不直接和HTTP协议打交道，而是操作http模块提供的"request"和"response"对象
		"request"对象封装了HTTP请求，调用request对象的属性和方法就可以拿到所有HTTP请求的信息
		"response"对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器
		例如：： 
			'use strict';
			// 导入http模块:
			var http = require('http');
			// 创建http server，并传入回调函数:
			var server = http.createServer(function (request, response) {
			    // 回调函数接收request和response对象,
			    // 获得HTTP请求的method和url:
			    console.log(request.method + ': ' + request.url);
			    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
			    response.writeHead(200, {'Content-Type': 'text/html'});
			    // 将HTTP响应的HTML内容写入response:
			    response.end('<h1>Hello world!</h1>');
			});
			// 让服务器监听8080端口:
			server.listen(8080);
			console.log('Server is running at http://127.0.0.1:8080/');
	文件服务器：：
		本质：：解析request.url中的路径，然后在本地找到对应的文件，把文件内容发送出去
		url模块里的parse()，将一个字符串解析为一个Url对象，url.parse（URL）
		例如：： 
			url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash')
		用path模块构造本地路径， 不用考虑Windows， Linux差异， 常用"resolve(path)"， "path.join(path1, path2,...)"
		例如：： 	
			'use strict';
			var path = require('path');
			// 解析当前目录:
			var workDir = path.resolve('.'); // '/Users/michael'
			// 组合完整的文件路径:当前目录+'pub'+'index.html':
			var filePath = path.join(workDir, 'pub', 'index.html');
			// '/Users/michael/pub/index.html'
		文件服务器实现：：
			'use strict';
			var
			    fs = require('fs'),
			    url = require('url'),
			    path = require('path'),
			    http = require('http');
			// 从命令行参数获取root目录，默认是当前目录:
			var root = path.resolve(process.argv[2] || '.');
			console.log('Static root dir: ' + root);
			// 创建服务器:
			var server = http.createServer(function (request, response) {
			    // 获得URL的path，类似 '/css/bootstrap.css':
			    var pathname = url.parse(request.url).pathname;
			    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
			    var filepath = path.join(root, pathname);
			    // 获取文件状态:
			    fs.stat(filepath, function (err, stats) {
			        if (!err && stats.isFile()) {
			            // 没有出错并且文件存在:
			            console.log('200 ' + request.url);
			            // 发送200响应:
			            response.writeHead(200);
			            // 将文件流导向response:
			            fs.createReadStream(filepath).pipe(response);
			        } else {
			            // 出错了或者文件不存在:
			            console.log('404 ' + request.url);
			            // 发送404响应:
			            response.writeHead(404);
			            response.end('404 Not Found');
			        }
			    });
			});
			server.listen(8080);
			console.log('Server is running at http://127.0.0.1:8080/');	
			response对象本身是一个Writable Stream，直接用pipe()方法实现自动读取文件内容并输出到HTTP响应
			fs.stat.isFile()判断文件, fs.stat.isDirectory()判断目录, fs.readdir()可以读出目录下所有文件
crypto：：
	三个步骤：：构造加密对象 +　加密/解密　＋ 变成特殊字串
	包括通用的加密和哈希算法
	MD5和SHA1：：
		MD5是哈希算法，给任意数据一个十六进制的字符串的“签名”，createHash（'md5'或'sha1'等）， hash.update(要签名的data)， hash.digest('hex')化成十进制
	例如：：
		const crypto = require('crypto');
		const hash = crypto.createHash('md5');
		// 可任意多次调用update():
		hash.update('Hello, world!');
		hash.update('Hello, nodejs!');
		console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
	update()默认字符串编码为UTF-8，也可以传入Buffer
	sha256和sha512更安全
	Hmac：：
		一种哈希算法， "MD5/SHA1 + 密钥", 密钥发生变化，输入的数据也会得到不同的签名
		例如：： 
			const crypto = require('crypto');
			const hmac = crypto.createHmac('sha256', 'secret-key');
			hmac.update('Hello, world!');
			hmac.update('Hello, nodejs!');
			console.log(hmac.digest('hex')); // 80f7e22570...
	AES：： 
		一种常用的对称加密算法， 加解密都用同一个密钥， 需要自己封装好函数，便于使用， 加解密都是用update()
		例如：： 	
			const crypto = require('crypto');
			function aesEncrypt(data, key) {
			    const cipher = crypto.createCipher('aes192', key);
			    var crypted = cipher.update(data, 'utf8', 'hex');
			    crypted += cipher.final('hex');
			    return crypted;
			}
			function aesDecrypt(encrypted, key) {
			    const decipher = crypto.createDecipher('aes192', key);
			    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
			    decrypted += decipher.final('utf8');
			    return decrypted;
			}
			var data = 'Hello, this is a secret message!';
			var key = 'Password!';
			var encrypted = aesEncrypt(data, key);
			var decrypted = aesDecrypt(encrypted, key);
			console.log('Plain text: ' + data);
			console.log('Encrypted text: ' + encrypted);
			console.log('Decrypted text: ' + decrypted);
		AES有很多不同的算法，如aes192，aes-128-ecb，aes-256-cbc等
		AES除了密钥外还可以指定IV（Initial Vector），不同的系统只要IV不同，用相同的密钥加密相同的数据得到的加密结果也是不同
		加密结果两种表示方法：hex和base64， 有时加解密双方用的编程语言不同， 可能会导致不匹配问题
	Diffie-Hellman：：
		利用秘密底数 + 取模(素数)， 协商出一个密钥, 两者共用素数和底数
		例如：： 
			const crypto = require('crypto');
			// xiaoming's keys:
			var ming = crypto.createDiffieHellman(512);
			var ming_keys = ming.generateKeys();
			var prime = ming.getPrime();
			var generator = ming.getGenerator();
			console.log('Prime: ' + prime.toString('hex'));
			console.log('Generator: ' + generator.toString('hex'));
			// xiaohong's keys:
			var hong = crypto.createDiffieHellman(prime, generator);
			var hong_keys = hong.generateKeys();
			// exchange and generate secret:
			var ming_secret = ming.computeSecret(hong_keys);
			var hong_secret = hong.computeSecret(ming_keys);
			// print secret:
			console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
			console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
	数字证书：：
		数字证书常用在SSL连接（就是Web的https连接）
		如无特殊需求（例如自己作为Root给客户发认证证书），建议用反向代理服务器如Nginx等Web服务器去处理证书
		https连接只需要处理服务器端的单向认证
Web开发：：
	静态Web页面：：无法与用户交互
	CGI：：Common Gateway Interface， 用C/C++编写， 可以交互，不方便处理修改频繁的情况
	ASP/JSP/PHP：：脚本语言， ASP是微软的，用VBScript，而JSP用Java编写脚本，PHP本身是开源的脚本语言， 直接用脚本语言嵌入HTML导致的可维护性差
	MVC：：Model-View-Controller， ASP发展为ASP.Net，JSP和PHP有一大堆MVC框架
	异步开发（Node.js速度非常快， 因为是异步）、新的MVVM
	Web框架：：Express， koa
	ORM框架：：Sequelize
	模版引擎：：Nunjucks
	测试框架：：Mocha
	构建工具：：Gulp
Koa：：
	Web框架就是处理请求， 响应
	是Express的下一代基于Node.js的web框架
	历史：：
		Express：：
			对Node.js的http进行了封装
			实现异步代码，只能用回调， 如果异步嵌套层次过多，代码写起来就非常难看
		koa 1.0：：
			基于ES6， 使用generator实现异步，用yield关键词， 代码看起来像同步， 原本Promise才是为异步设计， 但太复杂
			例如：：
				var koa = require('koa');
				var app = koa();
				app.use('/test', function *() {
				    yield doReadFile1();
				    var data = yield doReadFile2();
				    this.body = data;
				});
				app.listen(3000);
			把一个function变为异步模式， 用关键字async和await
			例如：： 
				async function () {
				    var data = await fs.read('/file1');
				}
		koa2：：
			基于ES7， 完全使用"Promise" +　"async"来实现异步
			例如：： 
				app.use(async (ctx, next) => {
				    await next();
				    var data = await doReadFile();
				    ctx.response.type = 'text/plain';
				    ctx.response.body = data;
				});
koa入门：：
	两个关键字， "async"和 "await", app.use(async (ctx, next) => {});, ctx包括request 和 response， next（）按代码顺序， 执行下一个异步函数
	多线程的目的是为了实现异步，多线程是一种实现异步的手段（例如， wait()等资源, notify()释放资源,）, 异步应跟同步比较
	创建koa2工程：：
		koa的本质是"middleware"， 用await next()调用
		例如：： 
			// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
			const Koa = require('koa');
			// 创建一个Koa对象表示web app本身:
			const app = new Koa();
			// 对于任何请求，app将调用该异步函数处理请求：
			app.use(async (ctx, next) => {
			    await next();
			    ctx.response.type = 'text/html';
			    ctx.response.body = '<h1>Hello, koa2!</h1>';
			});
			// 在端口3000监听:
			app.listen(3000);
			console.log('app started at port 3000...');
	安装koa两种方法：：
		可以用npm命令直接安装koa：：必把当前目录切换到工程目录， "npm install koa@2.0.0"， npm会把koa2以及koa2依赖的所有包全部安装到当前目录的node_modules目录下
		在package.json里的dependencies依赖包，在工程目录下， "npm install"一次性全装好 
		任何时候都可以直接删除整个node_modules目录，因为用npm install命令可以完整地重新下载所有依赖。并且，这个目录不应该被放入版本控制中(例如上传github时， ignore)
	Babel：：
		把高版本的JavaScript代码转换成低版本的JavaScript代码，并保持逻辑不变
		要让Node.js运行ES7代码，需要把ES7代码“转换”为ES6代码
		转码需要指定"presets" 和 "plugins"， 
		presets是规则，我们"stage-3"规则，"stage-3"规则是ES7的"stage 0~3"的第3阶段规则
		plugins指定插件来定制转码过程，一个preset就包含了一组指定的plugin
		每次启动app.js前自动让Babel转码：：
			核心：：'babel-core/register'的"require（）"代替了正常的"require"
			第一步：：编写一个start.js文件， 先加载"babel-core/register"，再加载app.js
			例如：： 
				var register = require('babel-core/register'); // 执行过后， Babel会用自己的require()， 替换掉Node的require()
				register({
				    presets: ['stage-3']
				});
				require('./app.js'); //加载的所有代码均会被Babel自动转码后再加载
			第二步：：在package.json中添加依赖包
			例如：：
				"dependencies": {
				    "babel-core": "6.13.2",
				    "babel-polyfill": "6.13.0",
				    "babel-preset-es2015-node6": "0.3.0",
				    "babel-preset-stage-3": "6.5.0",
				    "koa": "2.0.0"
				}
			第三步骤：：启动程序，用node start.js， 或 npm start【npm start会让npm执行定义在package.json文件中的start对应命令--"scripts": {"start": "node start.js"}】
	koa middleware：：
		每个async函数称为middleware
		把async函数组成处理链， 用await next()调用下一个async函数
		调用app.use()的顺序决定middleware的顺序
		如果一个middleware没有调用await next(), 后续的middleware将不再执行
		"ctx.url"相当于"ctx.request.url"，"ctx.type"相当于"ctx.response.type"
处理URL：：
	集中处理URL的middleware， 根据不同的URL调用不同的处理函数， 只需要为美国URL编写处理函数， 用自己判断path
	"koa-router"：：
		负责处理URL, 可以npm install【依赖项"koa-router": "7.0.0"】
		主要就是用router.get(url, 处理函数), router.post(url, 处理函数), 其他：：put、delete、head
	三步骤：： 
		导入：：用require， 注意require('koa-router')返回的是函数， 例如：：const router = require('koa-router')();
		处理函数：：router.get(), router.post()
		添加中间件， 监听：：app.use(router.routes());， app.listen(3000);
	例如：：
		const Koa = require('koa');
		// 注意require('koa-router')返回的是函数:
		const router = require('koa-router')();
		const app = new Koa();
		// log request URL:
		app.use(async (ctx, next) => {
		    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
		    await next();
		});
		// add url-route:
		router.get('/hello/:name', async (ctx, next) => { //变量name， 相当于是/hello/开头的url
		    var name = ctx.params.name;
		    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
		});
		router.get('/', async (ctx, next) => {
		    ctx.response.body = '<h1>Index</h1>';
		});
		// add router middleware:
		app.use(router.routes());
		app.listen(3000);
		console.log('app started at port 3000...');
	处理post请求：：
		post请求的body通常是一个表单，或者JSON
		"koa-bodyparser"， 解析原始request请求， 然后，把解析后的参数，绑定到"ctx.request.body"
		用"koa-bodyparser": "3.2.0"安装， 用"const bodyParser = require('koa-bodyparser');"引用， 用"app.use(bodyParser());"调用, "koa-bodyparser"必须在router之前被注册到app对象上
		例如，登录表单：：
			表单就是"form +　input"
			router.get('/', async (ctx, next) => {
			    ctx.response.body = `<h1>Index</h1>
			        <form action="/signin" method="post">
			            <p>Name: <input name="name" value="koa"></p>
			            <p>Password: <input name="password" type="password"></p>
			            <p><input type="submit" value="Submit"></p>
			        </form>`;
			});
			router.post('/signin', async (ctx, next) => {
			    var
			        name = ctx.request.body.name || '',
			        password = ctx.request.body.password || '';
			    console.log(`signin with name: ${name}, password: ${password}`);
			    if (name === 'koa' && password === '12345') {
			        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
			    } else {
			        ctx.response.body = `<h1>Login failed!</h1>
			        <p><a href="/">Try again</a></p>`; //再次登录
			    }
			});
	重构：：
		将app.js里的处理函数分离出去， 核心：：module.exports， controllers目录里面就是各种处理函数
		例如：：
			var fn_index = async (ctx, next) => {
			    ctx.response.body = `<h1>Index</h1>
			        <form action="/signin" method="post">
			            <p>Name: <input name="name" value="koa"></p>
			            <p>Password: <input name="password" type="password"></p>
			            <p><input type="submit" value="Submit"></p>
			        </form>`;
			};
			var fn_signin = async (ctx, next) => {
			    var
			        name = ctx.request.body.name || '',
			        password = ctx.request.body.password || '';
			    console.log(`signin with name: ${name}, password: ${password}`);
			    if (name === 'koa' && password === '12345') {
			        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
			    } else {
			        ctx.response.body = `<h1>Login failed!</h1>
			        <p><a href="/">Try again</a></p>`;
			    }
			};
			module.exports = {
			    'GET /': fn_index,
			    'POST /signin': fn_signin
			};
		重构三步骤， 本质还是使用"router.get()/.post()"：：
			创建".js"文件， 并暴露处理函数组成的对象
			读取controllers目录， 过滤出".js"文件
			解析对象， 执行处理函数
		确保每个函数功能非常简单，一眼能看明白，是代码可维护的关键
	Controller middleware：：	
		controllers + router组成controller.js
		所有处理URL的函数按功能组存放在controllers目录, 今后只需要不断往这个目录下加东西, app.js保持不变
Nunjucks：：
	模板引擎， 类似python的"jinja2"， 通过替换数据， 输出页面， 模板 + 数据 构造出输出字符串， 变量输出就是一种简单的替换
	最常见输出是输出HTML， 也可以输出任意格式的文本，如Text，XML，Markdown等
	为什么用：：JavaScript的模板字符串必须写在JavaScript代码中， 很难处理复杂页面
	输出HTML核心：：
		转义：：对特殊字符要转义，避免受到XSS攻击， 例如输出包括了"<script>...</script>", 引号和单书名号将变为"&lt", "&gt;"
		格式化：：对不同类型的变量要格式化， 例如， 货币用"12,345.00", 日期用"2016-01-01"
		简单逻辑：：执行一些简单逻辑：：
			例如：：
				{{ name }}同学，
				{% if score >= 90 %}
				    成绩优秀，应该奖励
				{% elif score >=60 %}
				    成绩良好，继续努力
				{% else %}
				    不及格，建议回家打屁股
				{% endif %}
	Nunjucks：：
		Mozilla开发， 可以用在Node环境和浏览器端（浏览器端主要用MVVM框架）, 就是用JavaScript重新实现了"jinjia2"
		本质：：构造function render(view, model) {}函数 	
		view是模板名称（又称为视图）， model就是数据（javascript中就是一个Object），render返回的字符串，就是模板的输出 
		模板引擎可以独立使用，不需要依赖koa， ""nunjucks": "2.4.2""
		使用两步骤：： 
			通过设置各种参数，得到Environment对象
			调用evn.render(HTML文件， 对象数据)
		"||" 和 "&&"：：
			本质，"&&"真后假前【一假即假】， "||"真前假后【一真即真】 
			a && b : 将a, b转换为Boolean类型, 再执行逻辑与, true返回b, false返回a 
			a || b : 将a, b转换为Boolean类型, 再执行逻辑或, true返回a, false返回b 
			转换规则：：
				对象为true 
				非零数字为true 
				非空字符串为true 
				其他为false 
		判断、循环, 用{%...%}包裹：：
			例如：： 
				<body>
					<h3>Fruits List</h3>
					{% for f in fruits %}
					<p>{{ f }}</p>
					{% endfor %}
				// </body>
		模板继承：：
			方便一次性修改页面头、尾
			本质：：子模块修改基础模块的"header", "body"和"footer"
			例如：： 
				定义基本网页base.html：：
					<html><body>
					{% block header %} <h3>Unnamed</h3> {% endblock %}
					{% block body %} <div>No body</div> {% endblock %}
					{% block footer %} <div>copyright</div> {% endblock %}
					</body>
				定义子模块：：
					{% extends 'base.html' %}
					{% block header %}<h1>{{ header }}</h1>{% endblock %}
					{% block body %}<p>{{ body }}</p>{% endblock %}
				添加数据：：
					console.log(env.render('extend.html', {
					    header: 'Hello',
					    body: 'bla bla bla...'
					}));
	性能：：
		Nunjucks默认使用同步IO读取模板文件， 但有cache， 通过"noCache: false"设置
		开发时可关闭cache，这样每次重新加载模板，便于实时修改模板； 使用时一定要打开cache，可避免性能问题
使用MVC：：
	流程：：用户输入 -> controllers -> Model -> View -> 返回用户HTML
	异步函数是C：Controller，Controller处理， 比如检查用户名是否存在，取出用户信息等等
	包含变量{{ name }}的模板是V：View
	Model就是将要带入View的数据，例如， 一个JavaScript对象， "{ name: 'Michael' }"
	ctx.render(view, model)，输入模板， 数据， 返回HTML网页
	步骤：： 
		编写两个Controller：：
			处理首页 "GET /"
			处理登录请求 "POST /signin"
		编写View：：
			"Bootstrap"这个CSS框架写HTML
			先编写base.html， 其他模板都继承自base.html
		编写middleware：：
			所有静态资源文件（例如：：bootstrap.css, fonts, bootstrap.js）放到"/static"目录, 方便HTML文件引用
			处理静态文件的middleware, 注意要构造出文件爱你的完整路径
			mz模块提供的API和Node.js的fs模块完全相同, 封装了fs对应的函数，并改为Promise, 不再需要写回调函数，直接用await, 例如：："await fs.readFile(fp)" 
			mime模块用于查找文件的mime类型， 对于JavaScript，MIME类型是"text/javascript"
			可以npm搜索能用于koa2的处理静态文件的包, 并直接使用
		集成Nunjucks：：
			实际是编写一个middleware， 作用：：给ctx对象绑定一个render(view, model)的方法， 使得后面的Controller就可以调用这个方法来渲染模板
			使用时（'production'）， 要用cache， 开发时(development)，不用cache：：
			例如：：
				const isProduction = process.env.NODE_ENV === "produciton"; //开发的时候，环境变量应该设置为'development'，而部署到服务器时，环境变量应该设置为'production'
				app.use(templating('view', {
					noCache: !isProduction,
					watch: !isProduction
				}))
			部署就是给用户安装使用
			生产环境上必须配置环境变量"NODE_ENV = 'production'"，而开发环境不需要配置，实际上NODE_ENV可能是"undefined"，所以判断的时候，不要用"NODE_ENV === 'development'"
			静态文件的middleware也可用环境变量判断， 生产时不导入Node.js， 开发时导入Node.js：：
			例如：： 
				if (! isProduction) {
				    let staticFiles = require('./static-files');
				    app.use(staticFiles('/static/', __dirname + '/static'));
				}	
			生产时，静态文件是反向代理（如Nginx）处理的，Node程序不需要处理静态文件； 而开发时，需要koa能顺带处理静态文件，否则，就必须手动配置一个反向代理服务器，这样会导致开发环境非常复杂
		运行：：
			检查app.js里的middleware的顺序, 就是app.use的顺序， 还要注意 await next()顺序
			登录：：根据用户输入的Email和Password去数据库查询并判断登录是否成功
	扩展：：
		env.render(view, model)时，Model对象不是传入的model变量，而是：："Object.assign({}, ctx.state || {}, model || {})"
		"Object.assign()"把除第一个参数外的其他参数的所有属性复制到第一个参数中， 类似"$.extend(target, obj1, obj2, ...)"
		"ctx.state || {}"能把一些公共的变量放入ctx.state并传给View, 例如：：某个用户名， 在Controller里的多个处理函数中用到
		" model || {}"确保了即使传入undefined，model也会变为默认值{}
mysql：：
	访问数据库：：
		特征：：按照格式写数据到磁盘
		核心：：快速查询， 因为数据太大无法全部读入内存
		本质：：先选列， 再选行
	NoSQL：：以SQL为基础
	数据库类别：：
		付费：：Oracle， SQL Server， DB2，IBM， Sybase
		免费开源：：MySQL， PostgreSQL， sqlite（嵌入式数据库，适合桌面和移动应用）
	安装MySQL：：
		编辑MySQL的配置文件， 改编码为"UTF-8"
使用Sequelize：：
	Sequelize是Node的ORM框架
	唯一方法：：通过网络发送SQL命令，然后，MySQL服务器执行后返回结果
	访问MySQL服务器的软件包， 通常称为MySQL驱动程序（本质就是一些API）
	ORM：：
		一个表是一个类， 一行就是一个对象; "Object-Relational Mapping"
		调用方法：：
			1， sequelize返回Promise对象.then().catch()
		 	2， ES7的await， 用来调用任何一个Promise对象， 例如：："var pets = await Pet.findAll();"
		注意：：await只有一个限制，就是必须在async函数中调用
		例如：： 
			(async () => {
			    var pets = await Pet.findAll();
			})();
		koa的处理函数都是async函数， 所以在koa的async函数中直接写await访问数据库
	实战：：
		数据库存放的就是一堆"表"
		创建表，三步骤：：
			授权能执行的操作：：用"grant all privileges on 数据库.* to 用户名@'%' identified by 密码;"
			切换数据库：：用"use 数据库名"；
			创建数据库表：：create table + primary key
		mysql是驱动, 我们不直接使用，但是sequelize会用
		mysql默认3306窗口， config.js配置文件包括：：
			var config = {
			    database: 'test', // 使用哪个数据库
			    username: 'www', // 用户名
			    password: 'www', // 口令
			    host: 'localhost', // 主机名
			    port: 3306 // 端口号，MySQL默认3306
			};
			module.exports = config;
		Sequelize操作MySQL三步骤：：
			创建一个sequelize对象实例, 相当于配置文件
			定义模型（例如，Pet类），告诉Sequelize如何映射数据库表， sequelize.define(名称， 列名和数据类型和主键等， 额外配置timestamps)
			往数据库塞数据Pet.create(对象).then().catch()或(async=> {...await Pet.create(对象)})();
		查数据用findAll（{where: {}}）, 例如await Pet.findAll({where: {name: 'Gaffey'}})
		更新数据用save(), 例如：： "await p.save();"
		删除数据用destroy(), 例如：： "await p.destroy();"
		多个async调用是同时执行的，查询比插入要快
	Model：： 
		通过sequelize.define()返回的Pet称为Model，它表示一个数据模型
		通过Pet.findAll()返回的一个或一组对象称为Model实例， 每个实例都可以直接通过JSON.stringify序列化为JSON字符串，和普通JSON对象相比，多了一些由Sequelize添加的方法，比如save()和destroy()
		使用Sequelize操作数据库的一般步骤：：
			通过某个Model对象的findAll()方法获取实例【findAll()方法可以接收where、order这些参数，这和将要生成的SQL语句是对应的】
			如果要更新实例，先对实例属性赋新值，再调用save()方法；
			如果要删除实例，直接调用destroy()方法
建立Model：：
	不同人员可以对同一个表定义不同Model, 一个映射表就是一个Model， Model不统一，很多代码也无法复用
	Model：： 
		五条规范：：
			Model存放的文件夹必须在models内，并且以Model名字命名，例如：Pet.js，User.js等等
			统一主键，名称必须是id，类型必须是STRING(50)
			主键可以自己指定，也可以由框架自动生成（如果为null或undefined）
			所有字段默认为NOT NULL，除非显式指定
			统一timestamp机制，每个Model必须有createdAt、updatedAt和version，分别记录创建时间、修改时间和版本号。其中，createdAt和updatedAt以BIGINT存储时间戳，最大的好处是无需处理时区，排序方便。version每次修改时自增
		不要直接使用Sequelize的API，而是通过db.js间接地定义Model， db.js的作用是统一Model的定义
		db.js原理：：构建新函数去调用sequelize.define()
	数据库配置：：
		config.js：：
			config-default.js：存储默认的配置【mysql层面配置】
			config-override.js：存储特定的配置【database层面配置】
			config-test.js：存储用于测试的配置【test层面配置】
		用config.js实现不同环境读取不同的配置文件,用"process.env.NODE_ENV === 'test'"等判断
		读取测试文件规则：：
			如果是测试环境，就读取config-test.js
			如果不是测试环境， 读取config-default.js
			第二规则之后， 如果overrideConfig文件存在， 读取config-override.js， 如果文件不存在， 忽略
		好处：：
			开发环境下，团队统一使用默认的配置，并且无需config-override.js
			部署到服务器时，由运维团队配置好config-override.js，以覆盖config-override.js的默认设置
			测试环境下，本地和CI服务器统一使用config-test.js，测试数据库可以反复清空，不会影响开发
		配置文件难点：：保证开发效率，避免服务器配置文件泄漏，方便地执行测试 
	使用Model：：
		要使用Model，就需要引入对应的Model文件，例如：User.js
		自动扫描并导入所有Model， 例如写一个model.js
	工程结构：：
		sync()可以自动创建数据库, 自动创建出表
		开发时，首次使用sync()， 可以自动创建出表，避免手动运行SQL
		测试时自动创建出表，不用自己维护SQL脚本，可以随时修改Model的定义，并立刻运行测试
mocha：：
	单元测试框架， 浏览器和Node.js环境都可运行
	主要特点：：
		可以测试异步代码
		可以自动运行所有测试，也可只运行特定的测试
		可以支持"before", "after", "beforeEach"和"afterEach"来编写初始化代码
	assert.strictEqual(函数， 应该得到的值)
	如果第一个assert报错，后面的测试不执行
	mocha test：：
		通常有一个test文件，存放所有test
		如果一个模块在运行的时候并不需要，仅仅在开发时才需要，可以放到devDependencies， 正式打包发布时，devDependencies的包不会被包含进来
		尽量不要安装全局模块，因为全局模块会影响到所有Node.js的工程
		mocha默认会执行test目录下的所有测试，不要去改变默认目录
		采用BDD-style测试，describe("name", function)可以任意嵌套, 每个it("name", function() {...})就代表一个测试
		例如：： 
			it('sum(1, 2) should return 3', () => {
			    assert.strictEqual(sum(1, 2), 3);
			});
		编写测试原则：：一次只测一种情况，且测试代码要非常简单， 编写多个测试来分别测试不同的输入， 并使用assert判断输出是否是我们所期望的
	运行测试：：
		三种方法：：
			方法一, 命令行，切换到hello-test目录，然后运行"mocha"
			方法二, 在package.json中添加npm命令"scripts": { "test": "mocha" },然后在hello-test目录下执行 "npm test"
			方法三, 在VS Code中创建配置文件.vscode/launch.json，然后在第二个配置选项Test中， "program": "${workspaceRoot}/node_modules/mocha/bin/mocha"， "env": {"NODE_ENV": "test"}
	before和after：：
		"before、after、beforeEach和afterEach"实现在测试前初始化资源，测试后释放资源， 类似python里的"setUp()"和"tearDown()"
		每个test执行前后会分别执行beforeEach()和afterEach()
		一组test执行前后会分别执行before()和after()
异步测试：：
	new Function(字符串参数1， 字符串参数2， "return + 内容"), 返回一个函数
	格式：：it('name', function (done) { done(err)...done()}
	也可以直接把async函数当成同步函数来测试,
	例如：： 	
		it('#async function', async () => {
		    let r = await hello();
		    assert.strictEqual(r, 15);
		});
	让mocha在测试前加载Babel
		方法一， mocha命令行用"--require"可以加载指定的包
		方法二， 在package.json中把script改为"test": "mocha --require hook"
		方法三， 在VS Code配置文件中把args改为"args": ["--require", "hook"]
	坚持使用async和await，这样，编写测试也同样简单
WebSocket：：
	
