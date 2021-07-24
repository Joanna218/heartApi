!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=756)}({130:function(e,t,n){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following requirements:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,a=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var f=i&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),a))}};function s(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function c(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=p(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:l(c(e))}function u(e){return e&&e.referenceNode?e.referenceNode:e}var d=i&&!(!window.MSInputMethodContext||!document.documentMode),h=i&&/MSIE 10/.test(navigator.userAgent);function m(e){return 11===e?d:10===e?h:d||h}function v(e){if(!e)return document.documentElement;for(var t=m(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===p(n,"position")?v(n):n:e?e.ownerDocument.documentElement:document.documentElement}function g(e){return null!==e.parentNode?g(e.parentNode):e}function b(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,f,s=i.commonAncestorContainer;if(e!==s&&t!==s||o.contains(r))return"BODY"===(f=(a=s).nodeName)||"HTML"!==f&&v(a.firstElementChild)!==a?v(s):s;var p=g(e);return p.host?b(p.host,t):b(e,g(t).host)}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=w(t,"top"),r=w(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function x(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border".concat(n,"Width")])+parseFloat(e["border".concat(o,"Width")])}function E(e,t,n,o){return Math.max(t["offset".concat(e)],t["scroll".concat(e)],n["client".concat(e)],n["offset".concat(e)],n["scroll".concat(e)],m(10)?parseInt(n["offset".concat(e)])+parseInt(o["margin".concat("Height"===e?"Top":"Left")])+parseInt(o["margin".concat("Height"===e?"Bottom":"Right")]):0)}function O(e){var t=e.body,n=e.documentElement,o=m(10)&&getComputedStyle(n);return{height:E("Height",t,n,o),width:E("Width",t,n,o)}}var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function M(e){return L({},e,{right:e.left+e.width,bottom:e.top+e.height})}function T(e){var t={};try{if(m(10)){t=e.getBoundingClientRect();var n=w(e,"top"),o=w(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?O(e.ownerDocument):{},a=i.width||e.clientWidth||r.width,f=i.height||e.clientHeight||r.height,s=e.offsetWidth-a,c=e.offsetHeight-f;if(s||c){var l=p(e);s-=x(l,"x"),c-=x(l,"y"),r.width-=s,r.height-=c}return M(r)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=m(10),r="HTML"===t.nodeName,i=T(e),a=T(t),f=l(e),s=p(t),c=parseFloat(s.borderTopWidth),u=parseFloat(s.borderLeftWidth);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=M({top:i.top-a.top-c,left:i.left-a.left-u,width:i.width,height:i.height});if(d.marginTop=0,d.marginLeft=0,!o&&r){var h=parseFloat(s.marginTop),v=parseFloat(s.marginLeft);d.top-=c-h,d.bottom-=c-h,d.left-=u-v,d.right-=u-v,d.marginTop=h,d.marginLeft=v}return(o&&!n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(d=y(d,t)),d}function N(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=D(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:w(n),f=t?0:w(n,"left"),s={top:a-o.top+o.marginTop,left:f-o.left+o.marginLeft,width:r,height:i};return M(s)}function F(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===p(e,"position"))return!0;var n=c(e);return!!n&&F(n)}function S(e){if(!e||!e.parentElement||m())return document.documentElement;for(var t=e.parentElement;t&&"none"===p(t,"transform");)t=t.parentElement;return t||document.documentElement}function P(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?S(e):b(e,u(t));if("viewport"===o)i=N(a,r);else{var f;"scrollParent"===o?"BODY"===(f=l(c(t))).nodeName&&(f=e.ownerDocument.documentElement):f="window"===o?e.ownerDocument.documentElement:o;var s=D(f,a,r);if("HTML"!==f.nodeName||F(a))i=s;else{var p=O(e.ownerDocument),d=p.height,h=p.width;i.top+=s.top-s.marginTop,i.bottom=d+s.top,i.left+=s.left-s.marginLeft,i.right=h+s.left}}var m="number"==typeof(n=n||0);return i.left+=m?n:n.left||0,i.top+=m?n:n.top||0,i.right-=m?n:n.right||0,i.bottom-=m?n:n.bottom||0,i}function k(e){return e.width*e.height}function H(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=P(n,o,i,r),f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(f).map((function(e){return L({key:e},f[e],{area:k(f[e])})})).sort((function(e,t){return t.area-e.area})),p=s.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),c=p.length>0?p[0].key:s[0].key,l=e.split("-")[1];return c+(l?"-".concat(l):"")}function C(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?S(t):b(t,u(n));return D(n,r,o)}function j(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function A(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function B(e,t,n){n=n.split("-")[0];var o=j(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",f=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[s]/2-o[s]/2,r[f]=n===f?t[f]-o[p]:t[A(f)],r}function W(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function I(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=W(e,(function(e){return e[t]===n}));return e.indexOf(o)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&s(n)&&(t.offsets.popper=M(t.offsets.popper),t.offsets.reference=M(t.offsets.reference),t=n(t,e))})),t}function R(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=C(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=H(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=B(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function U(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function Y(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?"".concat(r).concat(n):e;if(void 0!==document.body.style[i])return i}return null}function V(){return this.state.isDestroyed=!0,U(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Y("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function q(e,t,n,o){n.updateBound=o,_(e).addEventListener("resize",n.updateBound,{passive:!0});var r=l(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,o,{passive:!0}),i||e(l(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function z(){this.state.eventsEnabled||(this.state=q(this.reference,this.options,this.state,this.scheduleUpdate))}function G(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,_(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function X(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function J(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&X(t[n])&&(o="px"),e.style[n]=t[n]+o}))}var K=i&&/Firefox/i.test(navigator.userAgent);function Q(e,t,n){var o=W(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`".concat(t,"`"),a="`".concat(n,"`");console.warn("".concat(a," modifier is required by ").concat(i," modifier in order to work, be sure to include it before ").concat(i,"!"))}return r}var Z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],$=Z.slice(3);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=$.indexOf(e),o=$.slice(n+1).concat($.slice(0,n));return t?o.reverse():o}var te="flip",ne="clockwise",oe="counterclockwise";function re(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),f=a.indexOf(W(a,(function(e){return-1!==e.search(/,|\s/)})));a[f]&&-1===a[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==f?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];return(p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var f;switch(a){case"%p":f=n;break;case"%":case"%r":default:f=o}return M(f)[t]/100*i}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,r,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,o){X(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}var ie={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var i=e.offsets,a=i.reference,f=i.popper,s=-1!==["bottom","top"].indexOf(n),p=s?"left":"top",c=s?"width":"height",l={start:r({},p,a[p]),end:r({},p,a[p]+a[c]-f[c])};e.offsets.popper=L({},f,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,o=t.offset,r=e.placement,i=e.offsets,a=i.popper,f=i.reference,s=r.split("-")[0];return n=X(+o)?[+o,0]:re(o,a,f,s),"left"===s?(a.top+=n[0],a.left-=n[1]):"right"===s?(a.top+=n[0],a.left+=n[1]):"top"===s?(a.left+=n[0],a.top-=n[1]):"bottom"===s&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||v(e.instance.popper);e.instance.reference===n&&(n=v(n));var o=Y("transform"),i=e.instance.popper.style,a=i.top,f=i.left,s=i[o];i.top="",i.left="",i[o]="";var p=P(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);i.top=a,i.left=f,i[o]=s,t.boundaries=p;var c=t.priority,l=e.offsets.popper,u={primary:function(e){var n=l[e];return l[e]<p[e]&&!t.escapeWithReference&&(n=Math.max(l[e],p[e])),r({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=l[n];return l[e]>p[e]&&!t.escapeWithReference&&(o=Math.min(l[n],p[e]-("right"===e?l.width:l.height))),r({},n,o)}};return c.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=L({},l,u[t](e))})),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),f=a?"right":"bottom",s=a?"left":"top",p=a?"width":"height";return n[f]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[f])&&(e.offsets.popper[s]=i(o[f])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!Q(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],a=e.offsets,f=a.popper,s=a.reference,c=-1!==["left","right"].indexOf(i),l=c?"height":"width",u=c?"Top":"Left",d=u.toLowerCase(),h=c?"left":"top",m=c?"bottom":"right",v=j(o)[l];s[m]-v<f[d]&&(e.offsets.popper[d]-=f[d]-(s[m]-v)),s[d]+v>f[m]&&(e.offsets.popper[d]+=s[d]+v-f[m]),e.offsets.popper=M(e.offsets.popper);var g=s[d]+s[l]/2-v/2,b=p(e.instance.popper),w=parseFloat(b["margin".concat(u)]),y=parseFloat(b["border".concat(u,"Width")]),x=g-e.offsets.popper[d]-w-y;return x=Math.max(Math.min(f[l]-v,x),0),e.arrowElement=o,e.offsets.arrow=(r(n={},d,Math.round(x)),r(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(U(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=P(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=A(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case te:a=[o,r];break;case ne:a=ee(o);break;case oe:a=ee(o,!0);break;default:a=t.behavior}return a.forEach((function(f,s){if(o!==f||a.length===s+1)return e;o=e.placement.split("-")[0],r=A(o);var p=e.offsets.popper,c=e.offsets.reference,l=Math.floor,u="left"===o&&l(p.right)>l(c.left)||"right"===o&&l(p.left)<l(c.right)||"top"===o&&l(p.bottom)>l(c.top)||"bottom"===o&&l(p.top)<l(c.bottom),d=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),v=l(p.bottom)>l(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),x=w||y;(u||g||x)&&(e.flipped=!0,(u||g)&&(o=a[s+1]),x&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=L({},e.offsets.popper,B(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(f?r[a?"width":"height"]:0),e.placement=A(t),e.offsets.popper=M(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!Q(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=W(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=W(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a,f,s=void 0!==i?i:t.gpuAcceleration,p=v(e.instance.popper),c=T(p),l={position:r.position},u=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,f=function(e){return e},s=i(r.width),p=i(o.width),c=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),u=t?c||l||s%2==p%2?i:a:f,d=t?i:f;return{left:u(s%2==1&&p%2==1&&!l&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:u(o.right)}}(e,window.devicePixelRatio<2||!K),d="bottom"===n?"top":"bottom",h="right"===o?"left":"right",m=Y("transform");if(f="bottom"===d?"HTML"===p.nodeName?-p.clientHeight+u.bottom:-c.height+u.bottom:u.top,a="right"===h?"HTML"===p.nodeName?-p.clientWidth+u.right:-c.width+u.right:u.left,s&&m)l[m]="translate3d(".concat(a,"px, ").concat(f,"px, 0)"),l[d]=0,l[h]=0,l.willChange="transform";else{var g="bottom"===d?-1:1,b="right"===h?-1:1;l[d]=f*g,l[h]=a*b,l.willChange="".concat(d,", ").concat(h)}var w={"x-placement":e.placement};return e.attributes=L({},w,e.attributes),e.styles=L({},l,e.styles),e.arrowStyles=L({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return J(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&J(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=C(r,t,e,n.positionFixed),a=H(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),J(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ae=function(){function e(t,o){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=f(this.update.bind(this)),this.options=L({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(L({},e.Defaults.modifiers,i.modifiers)).forEach((function(t){r.options.modifiers[t]=L({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return L({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}var t,r,i;return t=e,(r=[{key:"update",value:function(){return R.call(this)}},{key:"destroy",value:function(){return V.call(this)}},{key:"enableEventListeners",value:function(){return z.call(this)}},{key:"disableEventListeners",value:function(){return G.call(this)}}])&&o(t.prototype,r),i&&o(t,i),e}();ae.Utils=("undefined"!=typeof window?window:e).PopperUtils,ae.placements=Z,ae.Defaults=ie,t.a=ae}).call(this,n(14))},14:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},756:function(e,t,n){"use strict";n.r(t);var o=n(130);n.d(t,"Popper",(function(){return o.a})),o.a.Defaults.modifiers.computeStyle.gpuAcceleration=!1}}));
