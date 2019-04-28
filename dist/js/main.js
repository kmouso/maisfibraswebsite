sal({
  once: false
});

const yearCopyright = new Date().getFullYear();

document
  .querySelector("#yearCopyright")
  .append(document.createTextNode(yearCopyright));
