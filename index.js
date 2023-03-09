import fetch from "node-fetch";

const getArticle = fetch(
  "https://mirror.xyz/api/link-import?url=https://medium.com/@pravse/the-maze-is-in-the-mouse-980c57cfd61a"
)
  .then((res) => res.json())
  .then((res) => console.log(res));

setInterval(getArticle, 1000);
