'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/helpers/helpers';
import { IconName } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import { SocialLink } from '@/components/social-link/social-link';
import styles from './styles.module.scss';

import IconButton from '@mui/material/IconButton';

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";


type Props = {
  img: string[];
  title: string;
  description: string;
  href?: string;
  githubUrl: string;
  topics?: IconName[];
};

const Card: FC<Props> = ({
  img,
  title,
  description,
  href,
  githubUrl,
  topics,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % img.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + img.length) % img.length);
  };

  // const { img } = images[currentIndex];

  return (
    <div className={styles.card}>
      <div
        className={styles.link_img}
        // href={href ? href : githubUrl}
        // target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.sliderContainer}>
          <Image
            className={styles.img}
            width={650}
            height={300}
            src={img[currentIndex]}
            alt={title + 'home page'}
          // style={{ height: '300px', width: "auto" }}
          />
          <div className={styles.navigation}>
            <IconButton onClick={prevImage} className={styles.button}><FiChevronLeft /></IconButton>
            <IconButton onClick={nextImage} className={styles.button}><FiChevronRight /></IconButton>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <h3 className={styles.title}>
            <Link
              className={styles.title_link}
              href={href ? href : githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.title_link}>
                <span>{title}</span>
                <FiExternalLink />
              </div>
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

export { Card };
