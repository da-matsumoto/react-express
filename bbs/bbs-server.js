const NeDB = require('nedb')
const path = require('path')
const db = new NeDB({
    filename: path.join(__dirname, 'bbs.db'),
    autoload: true
})

const express = require('express')
const app = express()
const portNo = 3001
app.listen(portNo, () => {
    console.log('起動しました', `http://localhost:${portNo}`)
})

app.use('public', express.static('./public'))
app.get('/', (req, res) => {
    res.redirect(302, '/public')
})

