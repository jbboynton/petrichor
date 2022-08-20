document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const keyMapperOptions = {
    eventType: 'keydown',
    keystrokeDelay: 1000,
  };

  keyMapper(checkHonor, keyMapperOptions);

  const clickCounterOptions = {
    clickDelay: 500,
  }

  clickCounter(checkHonor, clickCounterOptions);
});

function keyMapper(callback, options) {
  const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const eventType = options && options.eventType || 'keydown';
  const keystrokeDelay = options && options.keystrokeDelay || 1000;
  let buffer = [];
  let lastKeyTime = Date.now();

  document.addEventListener(eventType, event => {
    const key = event.key.toLowerCase();

    // we are only interested in alphanumeric keys. obviously! like, duh.
    if (charList.indexOf(key) === -1) return;

    const currentTime = Date.now();

    if (currentTime - lastKeyTime > keystrokeDelay) {
      buffer = [];
    }

    buffer.push(key);
    lastKeyTime = currentTime;

    callback(buffer);
  });
}

function clickCounter(callback, options) {
  const clickEntry = document.getElementById("yeeter");
  const clickDelay = options && options.clickDelay || 300;

  let clickCount = 0;
  let lastClickTime = Date.now();

  clickEntry.addEventListener('touchstart', event => {
    const currentTime = Date.now();

    if (currentTime - lastClickTime > clickDelay) {
      clickCount = 0;
    }

    clickCount += 1;
    lastClickTime = currentTime;

    callback('', true, clickCount);
  });

  clickEntry.addEventListener('click', event => {
    const currentTime = Date.now();

    if (currentTime - lastClickTime > clickDelay) {
      clickCount = 0;
    }

    clickCount += 1;
    lastClickTime = currentTime;

    callback('', true, clickCount);
  });
}

function checkHonor(keySequence, clicked = false, clickCount = 0) {
  if (!clicked) {
    const thisSequence = keySequence.join('');
    const secretSequence = atob('bG9m');

    if (thisSequence !== secretSequence) return;
  } else {
    const thisCount = clickCount;
    const secretCount = parseInt(atob('Mw=='));

    if (thisCount !== secretCount) return;
  }

  setAuthCookie();
}

function setAuthCookie() {
  const returnPath =
    decodeURIComponent(new URLSearchParams(window.location.search)
      .get("returnPath"));

  document.cookie =
    `post=rock; path=/; domain=www.landoffires.com; expires=${expires()}`;

  window.location.assign(returnPath);
}

function expires() {
  const daysUntilExpiration = 7;
  const currentDate = new Date();
  const expirationDate = currentDate.getDate() + daysUntilExpiration;

  return new Date(expirationDate).toUTCString();
}
