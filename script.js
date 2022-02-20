'use strict';

const DomElement = function (selector, height, width, bg, position, left, top) {
  this.selector = selector[0];
  this.attribute = selector.slice(1);
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = position;
  this.left = left;
  this.top = top;

  this.createElement = function () {
    let typeElem;
    if (this.selector === '.') {
      typeElem = 'div';
    } else if (this.selector === '#') {
      typeElem = 'p';
    } else {
      return;
    }
    const newElem = document.createElement(typeElem);
    if (this.selector === '.') {
      newElem.className = this.attribute;
    } else {
      newElem.id = this.attribute;
    }
    newElem.style.cssText = 'background-color: ' + this.bg + '; height: ' + this.height + '; width: ' + this.width + '; position: ' + this.position + '; top: ' + this.top + '; left: ' + this.left;

    document.body.append(newElem);
  };
};

const elementor = new DomElement('.test', '100px', '100px', '#9c27b0', 'absolute', 0, 0);
document.addEventListener('DOMContentLoaded', elementor.createElement());
const square = document.querySelector('.test');

const eventCatcher = (e) => {
  let top = square.offsetTop;
  let left = square.offsetLeft;
  const offset = 10;

  switch (e.code) {
    case 'ArrowRight':
      left += offset;
      break;
    case 'ArrowLeft':
      left -= offset;
      break;
    case 'ArrowUp':
      top -= offset;
      break;
    case 'ArrowDown':
      top += offset;
      break;
    default: 
      break;
  }

  if (top < 0) {
    top = 0;
  }
  if (left < 0) {
    left = 0;
  }

  square.style.top = top + 'px';
  square.style.left = left + 'px';
};
document.addEventListener('keydown', (e) => eventCatcher(e));
