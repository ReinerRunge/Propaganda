(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{almA:function(e,t,r){"use strict";r.r(t),r.d(t,"IonReorderGroup",function(){return n});var o=r("CaHs"),n=function(){function e(){this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return e=this,void 0,o=function(){var e,t,o;return function(e,t){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,function(n){switch(n.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return n.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=n.sent(),n.label=3;case 3:return o=this,[4,r.e(128).then(r.bind(null,"uSsP"))];case 4:return o.gesture=n.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,disableScroll:!0,threshold:0,direction:"y",passive:!1,canStart:this.canStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.disabledChanged(),[2]}})},new((t=void 0)||(t=Promise))(function(r,n){function i(e){try{l(o.next(e))}catch(e){n(e)}}function s(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){e.done?r(e.value):new t(function(t){t(e.value)}).then(i,s)}l((o=o.apply(e,[])).next())});var e,t,o},e.prototype.componentDidUnload=function(){this.onEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=function(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}return null}(t,this.el);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el.children;if(n&&0!==n.length){for(var l=0,c=0;c<n.length;c++){var d=n[c];r.push(l+=d.offsetHeight),d.$ionIndex=c}var u=this.el.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+s,this.scrollElBottom=h.bottom-s}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=i(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add(a),Object(o.c)()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,s=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),l=r+s-e.startY,a=this.itemIndexForTop(s-n);if(void 0!==a&&a!==this.lastToIndex){var c=i(t);this.lastToIndex=a,Object(o.a)(),this.reorderMove(c,a)}t.style.transform="translateY("+l+"px)"}},e.prototype.onEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var r=this.el.children,n=this.lastToIndex,s=i(t);this.el.insertBefore(t,s<n?r[n+1]:r[n]);for(var l=r.length,c=0;c<l;c++)r[c].style.transform="";var d=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove(a),e.selectedItemEl=void 0)};n===s?(t.style.transition="transform 200ms ease-in-out",setTimeout(d,200)):(d(),this.ionItemReorder.emit({from:s,to:n})),Object(o.b)()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,o=this.el.children,n=0;n<o.length;n++){var i="";n>e&&n<=t?i="translateY("+-r+"px)":n<e&&n>=t&&(i="translateY("+r+"px)"),o[n].style.transform=i}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-l:e>this.scrollElBottom&&(t=l),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated}}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),e}();function i(e){return e.$ionIndex}var s=60,l=10,a="reorder-selected"}}]);