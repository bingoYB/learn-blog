(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{452:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kmp字符串匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kmp字符串匹配"}},[s._v("#")]),s._v(" KMP字符串匹配")]),s._v(" "),a("p",[s._v("普通的暴力匹配就是逐个比较，如果匹配失败，则从下一个位置重新匹配；而KMP算法则是先对匹配字符串做处理，记录其前缀信息，下次匹配从重复前缀位置开始匹配，将时间复杂度降低到了O(m+n)")]),s._v(" "),a("p",[s._v("Knuth-Morris-Pratt 算法的核心为前缀函数，记作 π(i)，其定义如下：")]),s._v(" "),a("p",[s._v("对于长度为 m 的字符串 s，其前缀函数 π(i)(0≤i<m) 表示 s 的子串 s[0:i] 的最长的相等的真前缀与真后缀的长度。特别地，如果不存在符合条件的前后缀，那么 π(i)=0。其中真前缀与真后缀的定义为不等于自身的的前缀与后缀。")]),s._v(" "),a("p",[s._v("根据前缀函数的定义我们可以发现，相邻的前缀函数值至多增加 1 ，故可以得到字符串 "),a("img",{attrs:{src:"https://math.jianshu.com/math?formula=s",alt:"s"}}),s._v(" 的前缀函数的计算公式：")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("π(0) = 0")])])]),s._v(" "),a("li",[a("p",[s._v("如果"),a("code",[s._v("s[i] == s[π(i-1)]")]),s._v("则   "),a("code",[s._v("π(i) = π(i-1) +1")])])]),s._v(" "),a("li",[a("p",[s._v("如果 "),a("code",[s._v("s[i] ! == s[π(i-1)]")]),s._v("  ，令"),a("code",[s._v("j = π(i-1)")]),s._v(" ;若"),a("code",[s._v("s[i]!== s[j]")]),s._v(",则令"),a("code",[s._v("j = π(j-1)")]),s._v(",直到"),a("code",[s._v("j===0")]),s._v(" 或者 "),a("code",[s._v("s[i]===s[j]")]),s._v("为止,则")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("π")]),a("mo",[s._v("(")]),a("mi",[s._v("i")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("{")]),a("mtable",[a("mtr",[a("mtd",[a("mrow",[a("mn",[s._v("0")])],1)],1),a("mtd",[a("mrow",[a("mi",[s._v("i")]),a("mi",[s._v("f")]),a("mtext"),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("≠")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("j")]),a("mo",[s._v("+")]),a("mn",[s._v("1")])],1)],1),a("mtd",[a("mrow",[a("mi",[s._v("i")]),a("mi",[s._v("f")]),a("mtext"),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")])],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\pi(i)=\n\\begin{cases}\n0 & if \\ s[i] \\neq s[j] \\\\\nj+1 & if \\ s[i]=s[j]\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.0000299999999998em","vertical-align":"-1.25003em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("π")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[s._v("{")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mspace"}),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("≠")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mspace"}),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])])])]),s._v(" "),a("p",[s._v("前缀函数不仅仅应用于KMP算法中，还可以用于字符串压缩，求字符串周期 、统计每个前缀出现次数等其他问题中")]),s._v(" "),a("h4",{attrs:{id:"实现-strstr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-strstr"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/implement-strstr/",target:"_blank",rel:"noopener noreferrer"}},[s._v(" 实现 strStr()"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("strStr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" needle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 寻找下一个匹配位置")]),s._v("\n            j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        pi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("haystack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" needle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);