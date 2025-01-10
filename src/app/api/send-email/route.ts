import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const POST = async (req: Request) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' });
  }

  const data = await req.json();

  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ message: 'Bad request' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email || '',
      pass: pass || '',
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: email,
      subject: "ポートフォリオからのメッセージ",
      text: data.message,
      html: `
        <div>
          <h1>${data.name}</h1>
          <p>${data.email}</p>
          <p>${data.message}</p>
        </div>
      `
    });
    
    return NextResponse.json({ message: '成功' });
  } catch (error) {
    return NextResponse.json({ message: '問題が発生しました' });
  }
}

export { POST };