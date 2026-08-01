import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isSmtpConfigured =
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.SMTP_USER !== 'your-email@example.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, reason, message } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

    const emailBody = [
      `User Email:   ${email}`,
      `Reason:       ${reason || 'Not specified'}`,
      `Comments:     ${message || 'None'}`,
      `Submitted At: ${submittedAt}`,
    ].join('\n');

    if (isSmtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: 'it@curanova.ai',
        subject: 'Account Deletion Request – GenExcel',
        text: emailBody,
      });
    } else {
      console.log('--- Account Deletion Request (SMTP not configured) ---');
      console.log('Subject: Account Deletion Request – GenExcel');
      console.log(emailBody);
      console.log('------------------------------------------------------');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Account deletion request error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
