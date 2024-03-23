const url = new URL(window.location);
const urlParams = new URLSearchParams(url.search);

/**
 * @param {URLSearchParams} urlP
 */
function setParams(urlP) {
  urlP.set("hi", false);
  window.location.search = urlParams;
}

if (!urlParams.get("hi")) setParams(urlParams);

console.log(urlParams.get("hi"));
