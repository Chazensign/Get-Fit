const nodemailer = require('nodemailer')

export default Mailer = (email) => {
  // Generate SMTP service account from ethereal.email
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error('Failed to create a testing account. ' + err.message)
      return process.exit(1)
    }

    console.log('Credentials obtained, sending message...')

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'damien.ondricka51@ethereal.email',
        pass: 'dKBhPQRcGXUdeMRRtQ'
      }
    })

    // Message object
    let message = {
      from: 'GetFit <sender@example.com>',
      to: `<${email}>`,
      subject: 'GetFit password request',
      text: 'Hello to myself!',
      html: '<p><b>Hello</b> to myself!</p>'
    }

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log('Error occurred. ' + err.message)
        return process.exit(1)
      }

      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    })
  })
}
