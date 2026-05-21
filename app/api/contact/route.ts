import { NextRequest, NextResponse } from 'next/server'

const TO = process.env.CONTACT_EMAIL || 'info@dreampool.si'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, location, projectType, budget, timeline, message } = body

    if (!name || !phone || !location || !projectType) {
      return NextResponse.json({ error: 'Manjkajo obvezna polja' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — email not sent')
      return NextResponse.json({ success: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'DreamPool <noreply@dreampool.si>',
      to: [TO],
      replyTo: email || undefined,
      subject: `Novo povpraševanje — ${name} (${projectType})`,
      html: buildEmailHtml({ name, phone, email, location, projectType, budget, timeline, message }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Napaka strežnika' }, { status: 500 })
  }
}

function buildEmailHtml(data: Record<string, string>) {
  const rows = [
    ['Ime in priimek', data.name],
    ['Telefon', data.phone],
    ['E-pošta', data.email || '—'],
    ['Lokacija', data.location],
    ['Tip projekta', data.projectType],
    ['Budget', data.budget || '—'],
    ['Kdaj planira', data.timeline || '—'],
  ]

  return `<!DOCTYPE html>
<html lang="sl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:20px;background:#f1f5f9;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#0A1628;border-radius:8px;overflow:hidden;">
    <div style="background:#1a6b5e;padding:24px 32px;">
      <h1 style="margin:0;font-size:18px;color:#ffffff;font-weight:600;">Novo povpraševanje — DreamPool</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        ${rows.map(([k, v]) => `
        <tr>
          <td style="padding:8px 0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;width:140px;vertical-align:top;border-bottom:1px solid rgba(255,255,255,0.06);">${k}</td>
          <td style="padding:8px 0;color:#f8fafc;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.06);">${v}</td>
        </tr>`).join('')}
      </table>
      ${data.message ? `
      <div style="margin-top:24px;padding:16px;background:rgba(255,255,255,0.04);border-left:3px solid #1a6b5e;border-radius:4px;">
        <p style="margin:0 0 8px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Sporočilo</p>
        <p style="margin:0;color:#f8fafc;font-size:14px;line-height:1.6;">${data.message.replace(/\n/g, '<br>')}</p>
      </div>` : ''}
    </div>
    <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);color:#64748b;font-size:12px;">
      Prejeto: ${new Date().toLocaleString('sl-SI')} · dreampool.si
    </div>
  </div>
</body>
</html>`
}
