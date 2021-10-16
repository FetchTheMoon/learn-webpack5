import imgSrc from '../img/0.jpg';

function packImg() {

    const container = document.createElement("div");

    const img = document.createElement("img");

    // img.src = require('../img/0.jpg').default; // 解决src="[object Module]"
    // img.src = require('../img/0.jpg');
    img.src = imgSrc;
    img.width = 1000;
    // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
    // (Source code omitted for this binary file)

    container.append(img);

    return container;
}


document.body.append(packImg());