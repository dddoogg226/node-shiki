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
  appName: 'APPLICATION_NAME',
  token: 'ACCESS_TOKEN',
  ver2: false
})

shiki.setOptions({ apiUrl: 'API_URL' })

async function run() {
  const res = await shiki.post('users/:topic_id/ignore', {
    topic_id: 82468,
    ver2: true
  })

  console.log(res)
}

run().catch(console.error)
```
