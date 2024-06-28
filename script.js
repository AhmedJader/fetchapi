import { url } from './config.js';

fetch(url)
    .then(response => console.log(response))
    .catch(error => console.error(error));
