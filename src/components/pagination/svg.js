(function(window){var svgSprite='<svg><symbol id="icon-go" viewBox="0 0 1024 1024"><path d="M444.1625 712.98125001c-46.51875001 26.49375001-99 39.7125-157.55625001 39.71249998-67.33125001 0-121.6125-21.31875001-162.84374999-63.9C82.5875 646.2125 62 589.34375001 62 518.13125001 62 446.1875 84.725 387.06874999 130.23124999 340.775S234.125 271.30624999 305.28124999 271.30624999c50.34375001 0 92.925 8.04374999 127.80000002 24.07500002l0 64.96874999C395.7875 336.8375 351.40624999 325.1375 299.88124999 325.1375 249.14374999 325.1375 207.35 342.4625 174.5 377.16874999 141.59374999 411.81874999 125.16874999 457.55 125.16874999 514.25c0 58.33125001 15.13125001 103.78125001 45.39375001 136.2375s71.15625001 48.7125 122.68125001 48.7125c35.49375001 0 65.64375001-6.80625001 90.50624999-20.475L383.75 552.78125001 282.725 552.78125001 282.725 499.5125l161.49375001 0L444.21874999 712.98125001z"  ></path><path d="M519.9875 517.56875001c0-75.20625001 20.3625-135 61.03125001-179.55000002 40.725-44.49375001 95.85-66.76875001 165.37499998-66.76874999 64.74375001 0 116.8875 21.76875001 156.37500002 65.25S962 436.68124999 962 506.43124999c0 75.6-20.25 135.5625-60.75 179.83125001-40.5 44.325-94.6125 66.4875-162.39375001 66.4875-66.15 0-119.1375-21.76875001-159.07499998-65.25C539.9 643.9625 519.9875 587.31875001 519.9875 517.56875001zM583.15625001 512.73125001c0 56.30625001 14.34375001 101.475 43.14374999 135.50624999 28.8 33.975 66.31874999 50.9625 112.6125 50.9625 49.725 0 88.7625-16.3125 117.1125-48.88125001 28.40625001-32.56875001 42.58125001-78.13125001 42.58125001-136.68749998 0-60.13125001-13.89375001-106.5375-41.625-139.21875001-27.7875-32.68125001-65.8125-48.99375001-114.13125001-48.99375001-47.53125001 0-85.95 17.2125-115.48125001 51.69375001C597.8375 411.59374999 583.15625001 456.81874999 583.15625001 512.73125001z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M438.39862227 755.78786123c-4.91744883-5.98645898-7.26927188-13.68333545-6.41406358-21.38021191 0.8552083-7.69687646 4.81054747-14.7523456 11.01080918-19.45599258l261.05238106-204.07411758-259.76956905-202.89820694c-6.20026172-4.70364609-10.1556-11.75911612-11.0108083-19.45599257-0.8552083-7.69687646 1.49661474-15.39375205 6.41406358-21.38021103 10.58320459-12.50742393 29.0770875-14.43164238 42.01211513-4.48984425l288.73975518 225.56122998c6.94856865 5.45195391 11.11770967 13.79023594 11.11770966 22.66302481 0 8.87278799-4.06224052 17.21107002-11.11770966 22.66302393L480.4107374 760.27770547c-5.34505254 4.16914102-11.97291797 6.41406357-18.70768477 6.41406357-8.97968847 0-17.53177324-3.95533916-23.30443036-10.90390781z m-225.77503272 0c-4.91744883-5.98645898-7.26927188-13.68333545-6.41406358-21.38021191 0.8552083-7.69687646 4.81054747-14.7523456 11.01080919-19.45599258L478.16581572 510.87753916 218.50314805 307.97933223c-6.20026172-4.70364609-10.1556-11.75911612-11.01080919-19.45599259-0.8552083-7.69687646 1.49661474-15.50065342 6.41406358-21.38021102 10.58320459-12.50742393 29.0770875-14.53854375 42.01211514-4.48984425l288.73975518 225.56122998c6.94856865 5.45195391 11.11770967 13.79023594 11.11771054 22.66302481 0 8.87278799-4.06224052 17.21107002-11.11771054 22.66302393L254.63570469 760.27770547c-5.34505254 4.16914102-11.97291797 6.41406357-18.70768477 6.41406357-8.97968847 0-17.63867461-3.95533916-23.30443037-10.90390781z m0 0"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M585.60137773 268.21213878c4.91744883 5.98645898 7.26927188 13.68333545 6.41406358 21.3802119-0.8552083 7.69687645-4.81054747 14.7523456-11.01080918 19.45599258l-261.05238106 204.07411758 259.76956905 202.89820694c6.20026172 4.70364609 10.1556 11.75911612 11.01080829 19.45599258 0.8552083 7.69687645-1.49661473 15.39375205-6.41406357 21.38021102-10.58320459 12.50742393-29.0770875 14.43164238-42.01211514 4.48984424l-288.73975516-225.56122997c-6.94856865-5.45195391-11.11770967-13.79023594-11.11770967-22.66302481 0-8.87278799 4.06224052-17.21107002 11.11770966-22.66302392L543.5892626 263.72229453c5.34505254-4.16914102 11.97291797-6.41406357 18.70768477-6.41406357 8.97968847 0 17.53177324 3.95533916 23.30443036 10.90390782z m225.77503272 0c4.91744883 5.98645898 7.26927188 13.68333545 6.41406358 21.3802119-0.8552083 7.69687645-4.81054747 14.7523456-11.01080919 19.45599258L545.83418428 513.12246084 805.49685195 716.02066777c6.20026172 4.70364609 10.1556 11.75911612 11.01080918 19.45599259 0.8552083 7.69687645-1.49661474 15.50065342-6.41406357 21.38021102-10.58320459 12.50742393-29.0770875 14.53854375-42.01211515 4.48984425l-288.73975516-225.56122998c-6.94856865-5.45195391-11.11770967-13.79023594-11.11771055-22.66302481 0-8.87278799 4.06224052-17.21107002 11.11771054-22.66302393L769.36429531 263.72229453c5.34505254-4.16914102 11.97291797-6.41406357 18.70768477-6.41406357 8.97968847 0 17.63867461 3.95533916 23.30443037 10.90390782z m0 0"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)