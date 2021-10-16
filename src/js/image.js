function packImg() {

    const container = document.createElement("div");

    const img = document.createElement("img");

    // img.src = require('../img/0.jpg').default; // 解决src="[object Module]"
    img.src = require('../img/0.jpg');
    img.width = 400;
    // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
    // (Source code omitted for this binary file)

    container.append(img);

    return container;
}


document.body.append(packImg());