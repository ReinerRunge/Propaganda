(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"4twN":function(e,t,n){"use strict";n.r(t),n.d(t,"IonRippleEffect",function(){return i});var i=function(){function e(){}return e.prototype.addRipple=function(e,t){var n=this,i=this.win.requestIdleCallback;i||(i=window.requestAnimationFrame),i(function(){return n.prepareRipple(e,t)})},e.prototype.prepareRipple=function(e,t){var n,i,c,p=this;this.queue.read(function(){var o=p.el.getBoundingClientRect(),r=o.width,s=o.height;c=Math.min(2*Math.sqrt(r*r+s*s),a),n=e-o.left-.5*c,i=t-o.top-.5*c}),this.queue.write(function(){var e=p.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style,a=Math.max(o*Math.sqrt(c),r);t.top=i+"px",t.left=n+"px",t.width=t.height=c+"px",t.animationDuration=a+"ms",(p.el.shadowRoot||p.el).appendChild(e),setTimeout(function(){return e.remove()},a+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),o=35,r=260,a=550}}]);