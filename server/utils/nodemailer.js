const nodemailer = require('nodemailer')

async function main(subject, body){

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    const info = await transporter.sendMail({
        from: '"Fer" <process.env.user>',
        to: "process.env.user",
        subject,
        html: body 
    })

    console.log('Message sent')
}

main('hi im testing', '<h1>this is the body</h1>')