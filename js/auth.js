function hmmmmm() {
  if (cookied()) return;

  const bouncerPath = 'https://www.landoffires.com/schadenfreude';
  const returnPath = encodeURIComponent(window.location.href);

  window.location.assign(`${bouncerPath}?returnPath=${returnPath}`);
}

function cookied() {
  const cookie = decodeURIComponent(document.cookie)
    .split(';')
    .map(crumb => crumb.trim());

  return cookie.includes("post=rock");
}

hmmmmm();
