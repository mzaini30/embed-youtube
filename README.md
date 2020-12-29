## Instalasi

```bash
npm i -D mzaini30/embed-youtube --prefer-offline
```

## Penggunaan

```javascript
const yt = require("embed-youtube")
const teks = `
Ini videonya:

{{ youtube ygH68h }}

Bagus kan?
`
console.log(yt(teks))
```
