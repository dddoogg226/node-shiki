'use strict'

const defaultOptions = require('./constants')
const Request = require('./request')

class Shikimori {
    constructor(options) {
        this.options = defaultOptions

        this.setOptions(options)

        this.request = new Request(this.options)
    }

    setOptions(options) {
        Object.assign(this.options, options)
    }

    get(path, params) {
        return this.request.send('GET', path, params)
    }

    post(path, params) {
        return this.request.send('POST', path, params)
    }

    patch(path, params) {
        return this.request.send('PATCH', path, params)
    }

    put(path, params) {
        return this.request.send('PUT', path, params)
    }

    delete(path, params) {
        return this.request.send('DELETE', path, params)
    }
}

module.exports = Shikimori