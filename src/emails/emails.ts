import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

const sendIzvod = (email: string, name: string, izvod: string) =>{
    sgMail.send({
        to: email,
        from: 'hackatontravnik@gmail.com',
        subject: `Izvod ${izvod} - ${name}`,
        text: `Izvod ${izvod}`
    })
}

const sendUvjerenje = (email: string, name: string, uvjerenje: string) =>{
  sgMail.send({
      to: email,
      from: 'hackatontravnik@gmail.com',
      subject: `Uvjerenje ${uvjerenje} - ${name}`,
      text: `Uvjerenje ${uvjerenje}`
  })
}


export const sg = {
  sendIzvod,
  sendUvjerenje
}