
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
const nodemailer = require('nodemailer')
const file = require('./utils/nodemailer')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(PORT, () => console.log(`You are listening on port ${PORT}`))

app.post('/sendmail', (req, res) => {
    file(req.body.subject, req.body.body)
})