import '../font/icofont.css';

function packFont() {
    const container = document.createElement('div');

    const span = document.createElement('span');
    span.classList.add('icofont', 'icofont-adjust');

    container.append(span);
    return container;
}


document.body.append(packFont());