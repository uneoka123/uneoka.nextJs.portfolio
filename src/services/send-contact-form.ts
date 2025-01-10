import { EmailData } from '@/common/types/types';

const sendContactForm = async (data: EmailData) => fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(data),
}).then((res) => {
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
});

export { sendContactForm };