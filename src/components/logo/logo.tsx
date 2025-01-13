import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/helpers/helpers';
import './styles.module.css'

type Props = {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link className={cn('logo', className)} href="/">
      <Image
        className='logo'
        src="/img/kenta-uneoka-logo.png"
        width={100}
        height={100}
        alt="Your logo"
      />
    </Link>
  );
};

export { Logo };