'use strict'

const querystring = require('querystring')
const fetch = require('node-fetch')

class Request {
    constructor(options) {
        this.options = options
    }

    async send(method, path, params = {}) {
        let url = this.options.apiUrl

        if (params.ver2 || this.options.ver2) {
            url += '/v2'
        }

        const marks = path.match(/:[a-z_]+/ig)

        if (marks) {
            for (let mark of marks) {
                const markRegex = new RegExp(mark, 'i')

                mark = mark.slice(1)
                path = path.replace(markRegex, params[mark])

                delete params[mark]
            }
        }

        url += `/${path}`

        if (method === 'GET') {
            url += `?${querystring.stringify(params)}`
        }

        const options = {
            method,
            headers: {
                'User-Agent': this.options.appName || '',
                Authorization: this.options.token ? `Bearer ${this.options.token}` : ''
            }
        }

        if (method !== 'GET') {
            options.headers['Content-Type'] = 'application/json'
            options.body = JSON.stringify(params)
        }

        let res = await fetch(url, options)

        if (res.ok) {
            res = await res.json()
        }

        return res
    }
}

module.exports = Request