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
  appName: 'APPLICATION_NAME', // default value 'null'
  token: 'ACCESS_TOKEN', // default value 'null'
  ver2: false // default value 'true'
})

shiki.setOptions({ apiUrl: 'API_URL' }) // default value 'https://shikimori.one/api'

async function run() {
  const res = await shiki.post('users/:topic_id/ignore', {
    topic_id: 82468,
    ver2: true
  })

  console.log(res)
}

run().catch(console.error)
```
