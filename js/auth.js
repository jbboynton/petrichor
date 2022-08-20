function hmmmmm() {
  if (cookied()) return;

  const bouncerPath = 'https://www.landoffires.com/schadenfreude';
  const returnPath = encodeURIComponent(window.location.href);

  window.location.assign(`${bouncerPath}?returnPath=${returnPath}`);
}

function cookied() {
  const post = window.localStorage.getItem("post");

  return post === "rock";
}

hmmmmm();
