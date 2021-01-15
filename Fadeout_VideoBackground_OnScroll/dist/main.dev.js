"use strict";

var video = document.querySelector('video');
window.addEventListener('scroll', function () {
  var value = 1 + window.scrollY / -600;
  video.style.opacity = value;
});