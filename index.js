let html = document.getElementById('html-element');
let css = document.getElementById('css-element');
let js = document.getElementById('js-element');

(html != null) ? html.addEventListener('input',generateOutput()) : null;
(css != null) ? css.addEventListener('input',generateOutput()) : null;
(js != null) ? js.addEventListener('input',generateOutput()) : null;


function generateOutput()
{
    const htmlCode = document.getElementById('html-element').value;
    const cssCode = document.getElementById('css-element').value;
    const jsCode = document.getElementById('js-element').value;
    
    console.log(" "+htmlCode+" "+cssCode+" "+jsCode);
    
    const output = document.getElementById('output');
    output.innerHTML = 
    htmlCode + '' + '<style>' + cssCode +'<style/>' + '<script>' +jsCode + '<script>';
 }