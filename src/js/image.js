import imgSrc from '../img/0.jpg';
import '../css/img.css';

function packImg() {

    const container = document.createElement("div");

    const img = document.createElement("img");

    // img.src = require('../img/0.jpg').default; // 解决src="[object Module]"
    // img.src = require('../img/0.jpg');
    // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
    // (Source code omitted for this binary file)
    img.src = imgSrc;
    img.width = 100;
    container.append(img);

    const bgImg = document.createElement("div");
    bgImg.className = "bgBox";
    container.append(bgImg);

    return container;
}


document.body.append(packImg());