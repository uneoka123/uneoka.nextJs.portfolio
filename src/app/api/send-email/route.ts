import { NextResponse } from 'next/server';
import emailjs from 'emailjs-com';

const EMAIL_SERVICE_ID = process.env.EMAIL_SERVICE_ID;
const email = process.env.EMAIL;

const POST = async (req: Request) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' });
  }

  const data = await req.json();

  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ message: 'Bad request' });
  }
  const templateParams = {
    to_email: email,
    from_email: data.email,
    name: data.name,
    message: data.message,
  };
  console.log(templateParams);

  try {
    const res = await emailjs.send(`${EMAIL_SERVICE_ID}`, 'template_n917lcf', templateParams, '6aSR3XvKYh5IHGMIwxg0G');
    console.log(res);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal server error' });

  }
}

export { POST };