require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },
    withCSS:({
        cssModules: true
    })
}