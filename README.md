## Instalasi

```bash
npm i embed-youtube
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
