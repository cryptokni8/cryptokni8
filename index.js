const { render } = require('prettyjson')
const data = require('./data')

const renderOpts = {
    dashColor: 'red',
    keysColor: 'green',
    stringColor: 'white'
}

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)