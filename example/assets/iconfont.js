(function(window){var svgSprite='<svg><symbol id="fa-heart" viewBox="0 0 1024 1024"><path d="M0.853333 0h1024v1020.586667H0.853333z" fill="#4FB7AA" ></path><path d="M525.696 329.9328c-84.241067-213.787307-323.703467-163.90656-325.282133 84.227413-0.87552 136.275627 114.024107 187.216213 190.528853 241.698134 74.17856 52.834987 126.972587 125.1072 135.253333 155.874986 7.082667-30.143147 65.88928-104.46336 134.555307-157.356373 75.088213-57.8304 191.399253-105.424213 190.527147-241.698133-1.578667-248.748373-245.21216-288.00512-325.582507-82.746027z" fill="#E87B2D" ></path></symbol><symbol id="fa-vue" viewBox="0 0 1024 1024"><path d="M77.696 177.066667l435.626667 751.701333L948.906667 180.693333V177.066667h-328.192L516.821333 355.413333 413.482667 177.066667H77.653333z" fill="#41B883" ></path><path d="M253.312 177.066667l262.485333 452.949333 263.68-452.992h-158.805333l-103.850667 178.304-103.338666-178.304H253.312z" fill="#35495E" ></path></symbol><symbol id="fa-sex" viewBox="0 0 1024 1024"><path d="M474.624 682.496H312.32v-114.688c119.296-12.288 211.456-114.688 211.456-234.496 0-130.048-105.984-236.032-236.032-236.032-130.048 0-236.032 105.984-236.032 236.032 0 120.32 92.672 222.208 211.456 234.496v114.688h-162.304c-13.312 0-24.064 10.752-24.064 24.064s10.752 24.064 24.064 24.064h162.304v174.592c0 6.656 2.048 12.8 6.656 17.408 4.608 4.608 10.24 7.168 16.896 7.68h0.512c6.144 0 12.288-2.56 16.896-6.656 4.608-4.608 7.168-10.24 7.68-16.896v-176.128h162.304c13.312 0 24.064-10.752 24.064-24.064 0.512-13.312-10.24-24.064-23.552-24.064z m-186.88-536.576c103.424 0 187.392 83.968 187.392 187.392 0 103.424-83.968 187.392-187.392 187.392-103.424 0-187.392-83.968-187.392-187.392 0-103.424 83.968-187.392 187.392-187.392zM764.928 459.776v-279.552l136.704 136.704c4.608 4.608 10.752 7.168 17.408 7.168 9.728 0 18.432-6.144 22.528-14.848 3.584-9.216 1.536-19.456-5.12-26.624l-195.584-195.584-195.584 195.584c-4.608 4.608-7.168 10.752-7.168 17.408 0 6.656 2.56 12.8 7.168 17.408 9.216 9.216 25.088 9.216 34.304 0l136.704-136.704v279.552c-118.784 12.288-211.456 114.688-211.456 234.496 0 130.048 105.984 236.032 236.032 236.032 62.976 0 122.368-24.576 166.912-69.12 44.544-44.544 69.12-103.936 69.12-166.912 0-120.832-92.672-222.72-211.968-235.008z m163.328 234.496c0 103.424-83.968 187.392-187.392 187.392-103.424 0-187.392-83.968-187.392-187.392 0-103.424 83.968-187.392 187.392-187.392 103.424 0 187.392 83.968 187.392 187.392z" fill="#EB413D" ></path></symbol><symbol id="fa-color" viewBox="0 0 1024 1024"><path d="M311.224 428.616V40.96C186.696 93.99 87.406 195.29 36.936 321.096l274.286 274.286 0.002-166.766z" fill="#AFE164" ></path><path d="M428.616 311.22L702.904 36.936C643.84 13.164 579.474 0 512 0c-71.314 0-139.154 14.628-200.776 40.96v387.656l117.392-117.396z" fill="#D7E664" ></path><path d="M983.04 311.22H595.384l117.394 117.396 274.286 274.286C1010.836 643.84 1024 579.474 1024 512c0-71.314-14.628-139.154-40.96-200.78z" fill="#FFAA64" ></path><path d="M712.776 595.384V983.04c124.526-53.03 223.816-154.33 274.286-280.136L712.776 428.616v166.768z" fill="#FF6469" ></path><path d="M595.384 712.776L321.096 987.064C380.16 1010.834 444.526 1024 512 1024c71.316 0 139.154-14.628 200.776-40.96V595.384l-117.392 117.392z" fill="#C3B4FA" ></path><path d="M428.616 712.776H40.96c53.03 124.526 154.33 223.816 280.136 274.286l274.286-274.286h-166.766z" fill="#7DD2F0" ></path><path d="M311.224 595.384L36.936 321.096C13.164 380.16 0 444.526 0 512c0 71.314 14.628 139.154 40.96 200.776h387.656l-117.392-117.392z" fill="#7DE6C3" ></path><path d="M595.384 311.22H983.04C930.01 186.696 828.71 87.404 702.904 36.936L428.616 311.22h166.768z" fill="#FFE669" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)