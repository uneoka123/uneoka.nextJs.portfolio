import { FC } from 'react';
import Link from 'next/link';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  className?: string;
}

const Logo: FC<Props> = ({ className }) => {
  return (
    <Link className={cn(styles.logo, className)} href="/">
      <span>UKenta.</span>
    </Link>
  );
};

export { Logo };