"use strict";

var position = document.documentElement;
position.addEventListener('mousemove', function (e) {
  position.style.setProperty('--x', e.clientX + 'px');
});