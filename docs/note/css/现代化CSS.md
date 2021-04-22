# 现代化css

## CSS 的发展历史

#### CSS的版本

CSS1.0版本发布于1996年12月，只提供了一些基本的样式属性
CSS2.0版本发布于1998年5月，提供了更为强大的功能
CSS2.1版本发布于2007年，并于2011年6月正式成为标准，也是目前使用最广泛的版本
CSS3.0版本于1999年开始制定，2001年完成工作草案，是目前CSS最新的版本。它的最大特点是将CSS3的规范内容分成一系列独立的模块，更有利于浏览器厂商的逐步支持

#### css发展

- 手写**源生 CSS**

  > 行内样式、内嵌样式、link引入外部样式、@import导入样式

- 使用**预处理器 Sass/Less**，与**后处理器PostCSS**

  > 由于源生的 css 不支持变量，不支持嵌套等功能，催生出了sass、less、stylus这种预处理器，为css扩充语法功能。
  >
  > 而后处理器则可以接受css文件，实现校验css语法，进行自动加前缀等功能。

- 现代化 [PostCss](https://www.postcss.com.cn/) 前后通吃

  > 随着技术的发展，CSS也增加了less/sass的一些功能，比如嵌套、变量等一些功能；PostCss强大的插件机制，使得其可以处理css全部处理过程，且能够使用最新的css语法功能；
  >
  > 其中能让你使用最新的 CSS 语法插件就是：
  >
  >  [postcss-preset-env](https://preset-env.cssdb.org/)：PostCSS Preset Env使您可以将现代CSS转换为大多数浏览器可以理解的内容，并使用cssdb根据目标浏览器或运行时环境确定所需的polyfill。

postcss常用插件地址：https://www.postcss.parts/

## CSS IN JS



## JS IN CSS



## CSS Doodle

[css-doodle](https://github.com/css-doodle/css-doodle) 是一个用来绘制css图案的WEB组件， 其基于Shadow DOM V1和Custom Elements V1来构建的。该组件可以帮助轻松的使用Custom Elements、Shadow DOM和css Grid创建任何你想要的图案（css 图案）。创建出来的图案你可以运用于Web页面中。



该组件通过其内部的规则（纯css）会生成一系列的div构建的css Grid。你可以使用css轻松地操作这些div（单元格，每个div就是一个单元格）来生成图案。生成的图案既可以是静态的，也可以是动态的。而其限制仅限于css本身的限制。

示例

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      :root {
        --customUnit: 100%;
        --initBg: () => {
          console.log(123);
        }
      }
      @supports (display: flex) {
        html,
        body {
          display: flex;
          align-items: center;
          justify-self: center;
        }
      }
      html,
      body {
        width: var(--customUnit);
        height: var(--customUnit);
        background: #0a0c27;
      }
    </style>
    <script src="https://unpkg.com/css-doodle@0.8.5/css-doodle.min.js"></script>
  </head>
  <body>
    <css-doodle>
      :doodle{ @grid : 1 x 10 / 61.8vmax; } @place-cell:center; @size:calc(
      @index() * 10%); border-width:calc(@index() * 1vmin); border-style:
      dashed; border-radius: 50%; border-color: hsla(calc(20*@index()), 70%,
      68%, calc(3/@index()*.8)); --d:@rand(20s,40s); --rf:@rand(360deg);
      --rt:calc(var(--rf) + @pick(1turn,-1turn)); animation: spin var(--d)
      cubic-bezier(.13,.69,1,-0.01) infinite; @keyframes spin { from{ transform:
      rotate(var(--rf)); } to{ transform: rotate(var(--rt)); } }
    </css-doodle>
  </body>
</html>
```

![](../img/css-doodle.gif)



增加home提示



jscp



ACSS--原子css