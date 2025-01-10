import { FC } from 'react';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  size?: number;
  className?: string;
}

const Spinner: FC<Props> = ({ size, className }) => {
  return (
    <div
      className={cn(styles.spinner, className) }
      style={{ width: size, height: size, }}
    />
  );
};

export { Spinner };