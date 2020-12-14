# node-shiki
API wrapper for the [Shikimori.one](https://shikimori.one/).

### NPM
```
npm i node-shiki
```

## Example usage
```js
const Shikimori = require('node-shiki')

const shiki = new Shikimori({
  appName: 'APPLICATION_NAME', // Default value 'null'
  token: 'ACCESS_TOKEN', // Default value 'null'
  ver2: false // Default value 'true'
})

shiki.setOptions({ apiUrl: 'API_URL' }) // Default value 'https://shikimori.one/api'

async function run() {
  const res = await shiki.post('users/:topic_id/ignore', { // Request to https://shikimori.one/api/v2/users/82468/ignore
    topic_id: 82468,
    ver2: true // Set this paramete for v2 API
  })

  console.log(res)
}

run().catch(console.error)
```
