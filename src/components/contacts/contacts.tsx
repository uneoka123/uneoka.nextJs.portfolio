import Link from 'next/link';

import { ContactForm } from '@/components/contact-form/contact-form';
import { Icon } from '@/components/icon/icon';
import { SocialLink } from '@/components/social-link/social-link';
import styles from './styles.module.scss';

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span>Contact</span> Me！
        </h2>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <Icon className={styles.icon} name="mail" size={30} />
            <div>
              <h3 className={styles.infoTitle}>Mail</h3>
              <Link
                className={styles.link}
                href="mailto:uneoka.k0114@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                uneoka.k0114@gmail.com
              </Link>
            </div>
          </div>
          <div className={styles.infoItem}>
            <Icon className={styles.icon} name="location" size={30} />
            <div>
              <h3 className={styles.infoTitle}>Location</h3>
              <span>Saitama Japan</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <Icon className={styles.icon} name="phone" size={30} />
            <div>
              <h3 className={styles.infoTitle}>Phone</h3>
              <span>+15856016175</span>
            </div>
          </div>
        </div>

        <div className={styles.social}>
          <SocialLink
            className={styles.socialLink}
            href="https://github.com/uneoka0114"
            iconName="github"
            title="github"
          />
          {/* <SocialLink
            className={styles.socialLink}
            href=""
            iconName="skype"
            title="skype"
          /> */}
          <SocialLink
            className={styles.socialLink}
            href="https://www.linkedin.com/in/uneoka-kenta"
            iconName="linkedIn"
            title="linkedIn"
          />
          {/* <SocialLink
            className={styles.socialLink}
            href="https://codepen.io/uneoka0114"
            iconName="codepen"
            title="codepen"
          /> */}
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export { Contacts };
