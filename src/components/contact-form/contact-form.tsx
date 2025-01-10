'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { cn } from '@/helpers/helpers';
import { sendContactForm } from '@/services/services';
import { Button } from '@/components/button/button';
import { Spinner } from '@/components/spinner/spinner';
import styles from './styles.module.scss';

type FormValues = {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      await sendContactForm({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success('Email sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message!');
    }
    setIsLoading(false);
  };

  return (
    <form 
      className={styles.form}
      spellCheck="false"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.field}>
        <input
          className={cn(
            styles.input,
            errors?.name && styles.inputError
          )}
          type="text"
          placeholder="名前"
          {...register('name', {
            required: 'お名前は必須です。'
          })}
        />
        {errors?.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>
      
      <div className={styles.field}>
        <input
          className={cn(
            styles.input,
            errors?.email && styles.inputError
          )}
          type="email"
          placeholder="メール"
          {...register('email', {
            required: 'メールは必須です。',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '有効なメールアドレスを入力してください。',
            },
          })}
        />
        {errors?.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.field}>
        <textarea
          className={cn(
            styles.input,
            errors?.message && styles.inputError
          )}
          rows={6}
          placeholder="メッセージ"
          {...register('message', {
            required: 'メッセージは必須です。'
          })}
        />
        {errors?.message && <span className={styles.error}>{errors.message.message}</span>}
      </div>

      <Button
        className={styles.submit}
        type="submit"
        disabled={isLoading}
      >
        {isLoading && (
          <Spinner size={12} />
        )}
        送信
      </Button>
    </form>
  );
};

export { ContactForm };