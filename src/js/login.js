import '../css/login.css'; // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
import '../css/login.less';

function login() {
    const h2 = document.createElement('h2');
    h2.innerHTML = '拉勾教育前端';
    h2.className = 'title';
    return h2;
}


document.body.append(login());