import { FC } from 'react';
import Link from 'next/link';

import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

type Props = {
  href: string;
  title: string;
  iconName: IconName;
  size?: number;
  className?: string;
}

const SocialLink: FC<Props> = ({ href, title, iconName, size, className }) => {
  return (
    <Link
      className={cn(styles.socialLink, className)}
      href={href}
      aria-label={title}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={styles.socialIcon} size={size} name={iconName} />
    </Link>
  );
};

export { SocialLink };