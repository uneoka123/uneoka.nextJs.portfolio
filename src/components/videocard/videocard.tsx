import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/helpers/helpers';
import { IconName } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import { SocialLink } from '@/components/social-link/social-link';
import styles from './styles.module.scss';

type Props = {
  video: string;
  title: string;
  description: string;
  href?: string;
  githubUrl: string;
  topics?: IconName[];
};

const VideoCard: FC<Props> = ({
  video,
  title,
  description,
  href,
  githubUrl,
  topics,
}) => {
  return (
    <div className={styles.card}>
      <Link
        className={styles.link_img}
        href={href ? href : githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div >
          <video width="100%" height="240" controls autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h3 className={styles.title}>
            <Link
              className={styles.title_link}
              href={href ? href : githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </h3>
        </div>
        <p className={styles.text}>{description}</p>
        <div className={styles.topics}>
          {topics?.map((topic) => (
            <div key={topic} title={topic}>
              <Icon name={topic} />
            </div>
          ))}
        </div>

        <div className={styles.background}>
          <div className={styles.tiles}>
            <div className={cn(styles.tile, styles.tile_1)} />
            <div className={cn(styles.tile, styles.tile_2)} />
            <div className={cn(styles.tile, styles.tile_3)} />
            <div className={cn(styles.tile, styles.tile_4)} />
            <div className={cn(styles.tile, styles.tile_5)} />
            <div className={cn(styles.tile, styles.tile_6)} />
            <div className={cn(styles.tile, styles.tile_7)} />
            <div className={cn(styles.tile, styles.tile_8)} />
            <div className={cn(styles.tile, styles.tile_9)} />
            <div className={cn(styles.tile, styles.tile_10)} />
            <div className={cn(styles.tile, styles.tile_11)} />
            <div className={cn(styles.tile, styles.tile_12)} />
          </div>

          <div className={cn(styles.line, styles.line_1)} />
          <div className={cn(styles.line, styles.line_2)} />
          <div className={cn(styles.line, styles.line_3)} />
        </div>
      </div>
      <div className={styles.shine} />
    </div>
  );
};

export { VideoCard };
