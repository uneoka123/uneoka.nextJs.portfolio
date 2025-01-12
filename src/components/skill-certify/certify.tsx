import Link from 'next/link';

import styles from './styles.module.scss';

const Certify = () => {
  return (
    <section id="certifies" className={styles.certify}>
      <h2 className={styles.title}>
        Certifications
      </h2>
      <ul className={styles.list}>
        <li>
          <img
            src="/img/certify/softwareCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/frontendCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/nodeCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/restfullCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/JavascriptCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/pythonCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/goCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/cppCertify.png"
            width={550}
            height={320}
          />
        </li>
        <li>
          <img
            src="/img/certify/sqlCertify.png"
            width={550}
            height={320}
          />
        </li>
      </ul>
    </section>
  )
}

export { Certify };