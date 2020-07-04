# node-shiki
API wrapper for the https://shikimori.one/

### NPM
```
npm i node-shiki
```

## Example usage
```js
const Shikimori = require('node-shiki')

const shiki = new Shikimori({
  appName: 'APPLICATION_NAME',  // default value 'null'
  token: 'ACCESS_TOKEN',  // default value 'null'
  ver2: false // default value 'true'
})

shiki.setOptions({ apiUrl: 'API_URL' }) // default value 'https://shikimori.one/api'

async function run() {
  const res = await shiki.post('users/:abc_ABC/ignore', { // return value '{}'
    abc_ABC: 23456828,
    ver2: true
    
    // api parameters ...
  })
  
  console.log(res)
}

run().catch(console.error)
```
