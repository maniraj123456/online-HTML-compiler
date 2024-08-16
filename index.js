function generateOutput() {
  let htmlElement = document.getElementById("html-element");
  let cssElement = document.getElementById("css-element");
  let jsElement = document.getElementById("js-element");
  let outputElement = document.getElementById("output");

  const htmlCode = htmlElement.value;
  const cssCode = cssElement.value;
  const jsCode = jsElement.value;

  try {
    outputElement.innerHTML = htmlCode + `<style>${cssCode}</style>`;
    const script = document.createElement("script");
    script.textContent = jsCode;
    document.body.appendChild(script);
  } catch (error) {
    outputElement.innerHTML = "An error occurred: " + error.message;
  }
}
