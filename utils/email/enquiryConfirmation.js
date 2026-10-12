import { cleaningEmail, cleaningPhone, cleaningPhoneHref, cleaningSiteUrl } from "../cleaningContact.js";

const siteUrl = cleaningSiteUrl;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export function createEnquiryConfirmation(firstName = "") {
  const name = typeof firstName === "string"
    ? firstName.trim().replace(/[\r\n\t]+/g, " ").slice(0, 100)
    : "";
  const greeting = name ? `Hi ${name},` : "Hi there,";
  const subject = "We've received your enquiry | Fern Cleaning";
  const text = `${greeting}

Thanks for getting in touch with Fern Cleaning. We've received your enquiry.

Our Hamilton team will review your request and get in touch to talk through the details. We'll agree on your cleaning service and timing with you.

If you'd like to add anything, simply reply to this email.

${cleaningPhone ? `Prefer to talk? Call ${cleaningPhone}.` : ""}
${cleaningEmail ? `Email: ${cleaningEmail}` : ""}
${siteUrl ? `Website: ${siteUrl}` : ""}

Thanks,
The Fern Cleaning team
A cleaner home. More time for you.`;

  // Table layout and inline styles keep the receipt readable in email clients.
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>We've received your enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#F8F9F5;color:#58675E;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">Your enquiry is with our team. Thank you for choosing Fern Cleaning.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F8F9F5;">
    <tr><td align="center" style="padding:32px 16px;">
      <!--[if mso]><table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"><tr><td><![endif]-->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #D5DED2;border-radius:16px;overflow:hidden;">
        <tr><td style="padding:24px 28px;background-color:#ffffff;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td valign="middle" style="color:#1E5B43;font-size:16px;font-weight:700;line-height:1.5;">Fern Cleaning<br><span style="font-size:12px;font-weight:400;letter-spacing:1px;">YOUR LOCAL HAMILTON TEAM</span></td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:32px 28px 36px;background-color:#1E5B43;">
          <span style="display:inline-block;padding:7px 11px;background-color:#DCE8D2;border-radius:5px;color:#1E5B43;font-size:11px;line-height:1.4;letter-spacing:1.4px;font-weight:700;">ENQUIRY RECEIVED</span>
          <h1 style="margin:20px 0 12px;color:#ffffff;font-size:34px;line-height:1.15;letter-spacing:-0.8px;">Thanks for reaching out.</h1>
          <p style="margin:0;color:#E4EEE0;font-size:16px;line-height:1.6;">A cleaner home. More time for you.</p>
        </td></tr>
        <tr><td style="height:5px;background-color:#DCE8D2;font-size:1px;line-height:1px;">&nbsp;</td></tr>
        <tr><td style="padding:32px 28px 28px;">
          <p style="margin:0 0 16px;font-size:18px;line-height:1.5;font-weight:700;color:#1E5B43;">${escapeHtml(greeting)}</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.7;">Thanks for getting in touch with Fern Cleaning. <strong style="color:#1E5B43;">We’ve received your enquiry</strong> and our team will be in touch.</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F8F9F5;border-radius:10px;">
            <tr><td style="padding:22px 20px;">
              <h2 style="margin:0 0 10px;color:#1E5B43;font-size:18px;line-height:1.4;">What happens next?</h2>
              <p style="margin:0;font-size:15px;line-height:1.7;">Our Hamilton team will review your request and get in touch to talk through the details. We’ll agree on your cleaning service and timing with you.</p>
            </td></tr>
          </table>
          <p style="margin:24px 0;font-size:16px;line-height:1.7;">Need to add anything? Simply reply to this email — we’re happy to help.</p>
          <p style="margin:0;font-size:15px;line-height:1.6;">Thanks,<br><strong style="color:#1E5B43;">The Fern Cleaning team</strong></p>
        </td></tr>
        ${cleaningPhone ? `        <tr><td style="padding:24px 28px;background-color:#F0F4EA;border-top:1px solid #D5DED2;">
          <p style="margin:0 0 14px;color:#1E5B43;font-size:16px;line-height:1.5;font-weight:700;">Prefer to talk?</p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td bgcolor="#DCE8D2" style="border-radius:28px;text-align:center;">
            <a href="${escapeHtml(cleaningPhoneHref)}" style="display:inline-block;padding:14px 24px;color:#1E5B43;font-size:16px;line-height:1.4;font-weight:700;text-decoration:none;border-radius:28px;">Call ${escapeHtml(cleaningPhone)}</a>
          </td></tr></table>

        </td></tr>
` : ""}
        <tr><td style="padding:16px 28px;font-size:14px;line-height:1.6;">
          <a href="mailto:${escapeHtml(cleaningEmail)}" style="color:#1E5B43;text-decoration:underline;">${escapeHtml(cleaningEmail)}</a>
        </td></tr>
      </table>
      <!--[if mso]></td></tr></table><![endif]-->
      <p style="max-width:560px;margin:20px 0 0;color:#58675E;font-size:12px;line-height:1.7;">Fern Cleaning · Hamilton &amp; surrounding areas<br>${siteUrl ? `<a href="${escapeHtml(siteUrl)}" style="color:#1E5B43;text-decoration:underline;">Visit our website</a>` : ""}</p>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
