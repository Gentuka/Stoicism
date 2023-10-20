/**
 * 
 * JavaScript libraries autoloader 
 * @author Aleksandr Cerkasov <coldworld333@gmail.com>
 * 
 * https://stackoverflow.com/questions/37876001/javascript-autoloader
 * 
 */

window.onload = function () {
    var jsScripts = [
        '../src/scripts/navbar.js',
    ];

    var htmlHead = document.getElementsByTagName('head')[0];
    console.log(htmlHead)

    var scriptElement = [];

    for (var key in jsScripts) {
        scriptElement[key] = document.createElement('script');

        scriptElement[key].type = 'text/javascript';

        scriptElement[key].src = jsScripts[key];

        scriptElement[key].async = false;

        htmlHead.appendChild(scriptElement[key]);
    }
}