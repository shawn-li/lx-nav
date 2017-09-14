# lx-nav

### A plugin to change the position in the page by this navigation bar

+ [Usage](#usage)
	- [HTML](#html)
	- [JS](#js)
  - [CSS](#css)
  
+ [Options](#options)


## Usage
就像我们看到的示例一样，我们需要引入插件的lx-nav.js(lx-nav.min.js)和lx-nav.css(lx-nav.min.css)，还有jquery和main.js主文件。<br/>
As we can see in the example files, you will need to include the JavaScript file lx-slider.js (lx-nav.min.js) and the css file (lx-nav.min.css) of the plugin, as well as jQuery and main file main.js.

### HTML
~~~
//fixed导航栏
<div class="lx-nav-wrap">
	<ul class="lx-nav cl">
		<li><a class="lx-nav-item" href="#" data-lx-nav="1">第一页</a></li>
		<li><a class="lx-nav-item" href="#" data-lx-nav="2">第二页</a></li>
		<li><a class="lx-nav-item" href="#" data-lx-nav="4">体育页</a></li>
		<li><a class="lx-nav-item" href="#" data-lx-nav="3">娱乐页</a></li>
		<li><a class="lx-nav-item" href="#" data-lx-nav="5">第五页</a></li>
		<li><a class="lx-nav-item" href="#" data-lx-nav="6">第六页</a></li>
	</ul>
</div>
//右侧按键可切换位置
<div class="lx-nav-box">
	<div class="lx-nav-pre">
		<a href="#">
			上一页
		</a>
	</div>	
	<div class="lx-nav-next">
		<a href="#">
			下一页
		</a>
	</div>
</div>

<div id="wrap" style="margin: 0 auto;width: 1000px;background-color: #eee;">	
	 <div class="section lx-nav-section" data-lx-nav="1">
		第一页
	</div>
	<div class="section lx-nav-section" data-lx-nav="2" style="background-color: #cedbe9;">
		第二页
	</div>
	<div class="section lx-nav-section" data-lx-nav="3" style="background-color: #b4e391;">
		娱乐页
	</div>
	<div class="section lx-nav-section" data-lx-nav="4" style="background-color: #fceabb;">
		体育页
	</div>
	<div class="section lx-nav-section" data-lx-nav="5" style="background-color: #e0f3fa;">
		第五页
	</div>
	<div class="section lx-nav-section" data-lx-nav="6" style="background-color: #febbbb;">
		第六页
	</div>
</div>  
~~~

### JS
~~~
  	//lx-nav插件
	$('.lx-nav').lxnav({
		//配置选项
		...
	});
	
~~~

### CSS

  styles文件夹下有lx-nav.css，lx-nav.less和压缩文件lx-nav.min.js



## Options
+ sidebarHeight: 导航栏高度，默认为45
+ sectionHeight:  每个section固定高度，默认为500
+ navItemWidth: 导航栏每个按钮的宽度，默认是自适应
+ navWidth:  导航栏宽度，默认为父类（.lx-nav-wrap）的80%
+ navBgColor: 导航栏背景颜色，默认为#fff
+ navOpacity:  导航栏透明度，默认为0.8



**联系方式：707361845@qq.com**
