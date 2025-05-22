import './index.css'
import enduroLogo from './assets/enduro-logo.svg';

const title = document.createElement("h1");
title.textContent = 'I love Enduro';

const img = document.createElement("img");
img.src = enduroLogo;

document.body.append(title)
document.body.append(img)

console.log('Hello World!')
