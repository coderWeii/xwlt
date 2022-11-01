function imgToUrl(img) {
  return new URL(`../assets/img/${img}`, import.meta.url).href;
}

export default imgToUrl;
