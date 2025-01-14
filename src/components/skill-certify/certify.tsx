import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

const Certify = () => {
  return (
    <section id="certifies" className={styles.certify}>
      <h2 className={styles.title}>
        Certifications
      </h2>
      <ul className={styles.list}>
        <li>
          <Image
            src="/img/certify/softwareCertify.png"
            alt='softwareCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/frontendCertify.png"
            alt='frontendCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/nodeCertify.png"
            alt='nodeCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/restfullCertify.png"
            alt='restfullCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/JavascriptCertify.png"
            alt='JavascriptCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/pythonCertify.png"
            alt='pythonCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/goCertify.png"
            alt='goCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/cppCertify.png"
            alt='cppCertify'
            width={550}
            height={320}
          />
        </li>
        <li>
          <Image
            src="/img/certify/sqlCertify.png"
            alt='sqlCertify'
            width={550}
            height={320}
          />
        </li>
      </ul>
    </section>
  )
}

export { Certify };