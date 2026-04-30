import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, location, projectType, budget, timeline, message } = body

    // Validate required fields
    if (!name || !phone || !location || !projectType) {
      return NextResponse.json({ error: 'Manjkajo obvezna polja' }, { status: 400 })
    }

    // -------------------------
    // OPTION A: Resend (priporočeno)
    // npm install resend
    // Uncomment + add RESEND_API_KEY to .env.local
    // -------------------------
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'DreamPool <noreply@dreampool.si>',
    //   to: [process.env.CONTACT_EMAIL || 'info@dreampool.si'],
    //   subject: `Novo povpraševanje — ${name} (${projectType})`,
    //   html: buildEmailHtml({ name, phone, email, location, projectType, budget, timeline, message }),
    // })

    // -------------------------
    // OPTION B: Nodemailer (SMTP)
    // npm install nodemailer @types/nodemailer
    // Add SMTP_HOST, SMTP_USER, SMTP_PASS to .env.local
    // -------------------------
    // const nodemailer = await import('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 587,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // })
    // await transporter.sendMail({
    //   from: `"DreamPool Web" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL || 'info@dreampool.si',
    //   subject: `Novo povpraševanje — ${name}`,
    //   html: buildEmailHtml({ name, phone, email, location, projectType, budget, timeline, message }),
    // })

    // Log for now (remove in production)
    console.log('📬 New contact form submission:', {
      name, phone, email, location, projectType, budget, timeline, message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Napaka strežnika' }, { status: 500 })
  }
}

function buildEmailHtml(data: Record<string, string>) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #0A1628; color: #F8FAFC; border-radius: 4px; overflow: hidden;">
        <div style="background: #C9A84C; padding: 20px 30px;">
          <h1 style="margin: 0; font-size: 20px; color: #0A1628;">🏊 Novo povpraševanje — DreamPool</h1>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${Object.entries({
              'Ime': data.name,
              'Telefon': data.phone,
              'E-pošta': data.email || '—',
              'Lokacija': data.location,
              'Tip projekta': data.projectType,
              'Budget': data.budget || '—',
              'Termin': data.timeline || '—',
            }).map(([k, v]) => `
              <tr>
                <td style="padding: 8px 0; color: #C9A84C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 130px; vertical-align: top;">${k}</td>
                <td style="padding: 8px 0; color: #F8FAFC;">${v}</td>
              </tr>
            `).join('')}
          </table>
          ${data.message ? `
          <div style="margin-top: 20px; padding: 16px; background: rgba(255,255,255,0.05); border-left: 3px solid #C9A84C; border-radius: 2px;">
            <p style="margin: 0; color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Sporočilo</p>
            <p style="margin: 8px 0 0; color: #F8FAFC;">${data.message}</p>
          </div>` : ''}
        </div>
        <div style="padding: 16px 30px; border-top: 1px solid rgba(255,255,255,0.1); color: #94A3B8; font-size: 12px;">
          Prejeto: ${new Date().toLocaleString('sl-SI')} · dreampool.si
        </div>
      </div>
    </body>
    </html>
  `
}
