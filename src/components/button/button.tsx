import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
