'use client';
import { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import { FiChevronDown } from "react-icons/fi";

const ChatBot = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.content}>
      {show ?
        <button className={styles.button} onClick={() => setShow(false)}>
          <FiChevronDown />
        </button>
        :
        <Image
          src="/img/bot-64.png"
          width={50}
          height={50}
          onClick={() => setShow(!show)}
          alt="chatbot"
          className={styles.icon}
        />
      }
      {show &&
        <iframe
          className={styles.chatbot}
          src="https://chatbot.sitespeak.ai/embed/5b1ffc47-c37f-4c9c-949f-a0f5c68cb403?nc"
          allow="microphone;"
          frameBorder="0"
        />
      }
    </div>
  );
};

export { ChatBot };