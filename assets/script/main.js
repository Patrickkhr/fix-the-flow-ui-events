let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let click = document.querySelector('a:nth-of-type(1)')

click.addEventListener('click', clickHandler)

function clickHandler() {
  click.classList.toggle('clicked')
}

let doubleClick = document.querySelector('a:nth-of-type(2)')

doubleClick.addEventListener("dblclick", (e) => {
  doubleClick.classList.toggle("doubleClick");
});

let keydown = document.querySelector('a:nth-of-type(3)')

keydown.addEventListener("keydown", (keydownPress) => {
  if (keydownPress.isComposing || keydownPress.keycode === 70) {
    return;
  }
  keydown.classList.toggle("keydown");
});

let longPress = document.querySelector('a:nth-of-type(4)')

longPress.addEventListener('long-press', (e) => {
  e.target.setAttribute('data-editing', 'true')
});

!function(e,t){"use strict";var n=null,a="ontouchstart"in e||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,i=a?"touchstart":"mousedown",o=a?"touchend":"mouseup",m=a?"touchmove":"mousemove",u=0,r=0,s=10,c=10;function l(i){v(i);var m=i.target,u=parseInt(m.getAttribute("data-long-press-delay")||"1500",10);n=function(t,n){if(!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame&&e.mozCancelRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame))return e.setTimeout(t,n);var a=(new Date).getTime(),i={},o=function(){(new Date).getTime()-a>=n?t.call():i.value=requestAnimFrame(o)};return i.value=requestAnimFrame(o),i}(function(e){v();var n=a?e.touches[0].clientX:e.clientX,i=a?e.touches[0].clientY:e.clientY;this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:n,clientY:i}}))&&t.addEventListener(o,function e(n){t.removeEventListener(o,e,!0),function(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}(n)},!0)}.bind(m,i),u)}function v(t){var a;(a=n)&&(e.cancelAnimationFrame?e.cancelAnimationFrame(a.value):e.webkitCancelAnimationFrame?e.webkitCancelAnimationFrame(a.value):e.webkitCancelRequestAnimationFrame?e.webkitCancelRequestAnimationFrame(a.value):e.mozCancelRequestAnimationFrame?e.mozCancelRequestAnimationFrame(a.value):e.oCancelRequestAnimationFrame?e.oCancelRequestAnimationFrame(a.value):e.msCancelRequestAnimationFrame?e.msCancelRequestAnimationFrame(a.value):clearTimeout(a)),n=null}"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=t.createEvent("CustomEvent");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a},e.CustomEvent.prototype=e.Event.prototype),e.requestAnimFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},t.addEventListener(o,v,!0),t.addEventListener(m,function(e){var t=Math.abs(u-e.clientX),n=Math.abs(r-e.clientY);(t>=s||n>=c)&&v()},!0),t.addEventListener("wheel",v,!0),t.addEventListener("scroll",v,!0),t.addEventListener(i,function(e){u=e.clientX,r=e.clientY,l(e)},!0)}(window,document);

let deviceMotion = document.querySelector('a:nth-of-type(5)')

deviceMotion.addEventListener("devicemotion", (event) => {
  deviceMotion.classList.toggle("deviceMotion");
});

let mousemove = document.querySelector('a:nth-of-type(6)')

mousemove.addEventListener("mouseover", (event) => {
  mousemove.classList.toggle("mousemove");
});

let focusFill = document.querySelector('a:nth-of-type(7)')

focusFill.addEventListener("focus", (event) => {
  focusFill.classList.toggle("focusFill");
});

let button = document.querySelector('a:nth-of-type(8)')

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

let bigText = document.querySelector('a:nth-of-type(9)')

bigText.addEventListener("click", (event) => {
  bigText.classList.toggle("bigText");
});

let colorSwitch = document.querySelector('a:nth-of-type(10)')

colorSwitch.addEventListener("click", (event) => {
  colorSwitch.classList.toggle("colorSwitch");
});