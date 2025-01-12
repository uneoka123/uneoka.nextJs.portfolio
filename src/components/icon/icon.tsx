import { FC, SVGProps } from 'react';

import { IconName } from '@/common/types/types';
import { cn } from '@/helpers/helpers';
import styles from './styles.module.scss';

import ArrowUp from '@/../public/img/icons/arrow-up.svg';
import Code from '@/../public/img/icons/code.svg';
import CSS from '@/../public/img/icons/css.svg';
import ExternalLink from '@/../public/img/icons/external-link.svg';
import Express from '@/../public/img/icons/express.svg';
import Figma from '@/../public/img/icons/figma.svg';
import Github from '@/../public/img/icons/github.svg';
import GoogleCloud from '@/../public/img/icons/google-cloud.svg';
import Gulp from '@/../public/img/icons/gulp.svg';
import HTML from '@/../public/img/icons/html.svg';
import JS from '@/../public/img/icons/js.svg';
import LinkedIn from '@/../public/img/icons/linkedin.svg';
import Location from '@/../public/img/icons/location.svg';
import Mail from '@/../public/img/icons/mail.svg';
import Bot from '@/../public/img/icons/robot-svgrepo-com.svg';
import NextJs from '@/../public/img/icons/nextjs.svg';
import React from '@/../public/img/icons/react.svg';
import Rocket from '@/../public/img/icons/rocket.svg';
import Sass from '@/../public/img/icons/sass.svg';
import Skype from '@/../public/img/icons/skype.svg';
import Telegram from '@/../public/img/icons/tg.svg';
import TypeScript from '@/../public/img/icons/typescript.svg';
import GoogleMaps from '@/../public/img/icons/google-maps.svg';
import Jinja from '@/../public/img/icons/jinja.svg';
import Less from '@/../public/img/icons/less.svg';
import Linkify from '@/../public/img/icons/linkify.svg';
import RapidApi from '@/../public/img/icons/rapid-api.svg';
import SimpleBar from '@/../public/img/icons/simple-bar.svg';
import Phone from '@/../public/img/icons/phone.svg';
import Pusher from '@/../public/img/icons/pusher.svg';
import Python from '@/../public/img/icons/python.svg';
import Upstash from '@/../public/img/icons/upstash.svg';
import Redis from '@/../public/img/icons/redis.svg';
import Tailwindcss from '@/../public/img/icons/tailwindcss.svg';
import Tailwindcss1 from '@/../public/img/icons/tailwindcss1.svg';
import Gsap from '@/../public/img/icons/gsap.svg';
import Codepen from '@/../public/img/icons/codepen.svg';
import Prisma from '@/../public/img/icons/prisma.svg';
import Postgresql from '@/../public/img/icons/postgresql.svg';
import Stripe from '@/../public/img/icons/stripe.svg';
import Vue from '@/../public/img/icons/vue.svg';
import Nuxt from '@/../public/img/icons/nuxt-icon-svgrepo-com.svg';
import Node from '@/../public/img/icons/nodejs-icon.svg';
import Nest from '@/../public/img/icons/nestjs.svg';
import Django from '@/../public/img/icons/django.svg';
import Laravel from '@/../public/img/icons/laravel.svg';
import Wordpress from '@/../public/img/icons/wordpress-icon.svg';
import Shopify from '@/../public/img/icons/shopify-logo-svgrepo-com.svg';
import MongoDB from '@/../public/img/icons/mongodb-icon.svg';
import MySQL from '@/../public/img/icons/mysql.svg';
import MariaDB from '@/../public/img/icons/mariadb.svg';
import Firebase from '@/../public/img/icons/firebase.svg';
import ChatGPT from '@/../public/img/icons/chatgpt.svg';
import Pinecone from '@/../public/img/icons/pine-cone-systems.svg';
import Langchain from '@/../public/img/icons/link-chain-svgrepo-com.svg';
import AWS from '@/../public/img/icons/amazon-web-services.svg';
import Azure from '@/../public/img/icons/azure-icon-svgrepo-com.svg';
import Git from '@/../public/img/icons/git-icon.svg';


const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  arrowUp: ArrowUp,
  bot:Bot,
  code: Code,
  css: CSS,
  externalLink: ExternalLink,
  express: Express,
  figma: Figma,
  github: Github,
  gulp: Gulp,
  googleCloud: GoogleCloud,
  html: HTML,
  js: JS,
  linkedIn: LinkedIn,
  location: Location,
  mail: Mail,
  nextjs: NextJs,
  react: React,
  rocket: Rocket,
  sass: Sass,
  skype: Skype,
  telegram: Telegram,
  typescript: TypeScript,
  'google-maps': GoogleMaps,
  jinja: Jinja,
  less: Less,
  linkify: Linkify,
  'rapid-api': RapidApi,
  'simple-bar': SimpleBar,
  postgresql: Postgresql,
  phone: Phone,
  pusher: Pusher,
  python:Python,
  upstash: Upstash,
  redis: Redis,
  tailwindcss: Tailwindcss,
  tailwindcss1:Tailwindcss1,
  'green-sock': Gsap,
  codepen: Codepen,
  prisma: Prisma,
  stripe: Stripe,
  vue:Vue,
  nuxt:Nuxt,
  node:Node,
  nest:Nest,
  django:Django,
  laravel:Laravel,
  wordpress:Wordpress,
  shopify:Shopify,
  mongoDb:MongoDB,
  mysql:MySQL,
  mariadb:MariaDB,
  firebase:Firebase,
  chatgpt:ChatGPT,
  pinecone:Pinecone,
  langchain:Langchain,
  aws:AWS,
  azure:Azure,
  git:Git
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

const Icon: FC<Props> = ({ name, size = 24, className, ...rest }) => {
  const SVG = icons[name];

  return (
    <SVG
      className={cn(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    />
  );
};

export { Icon };
