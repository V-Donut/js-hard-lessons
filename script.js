'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector[0];
  this.attribute = selector.slice(1);
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

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
    newElem.style.cssText = 'background-color: ' + this.bg + '; font-size: ' + this.fontSize + '; height: ' + this.height + '; width: ' + this.width + ';';
    newElem.textContent = 'Любой текст';

    document.body.append(newElem);
  };
};

const elementor = new DomElement('.test', '500px', '900px', '#9c27b0', '25px');
elementor.createElement();
