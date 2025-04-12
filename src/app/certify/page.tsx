import Image from 'next/image';
import styles from './styles.module.scss';

const SkillCheck = () => {
    return (
        <section className={styles.skillCertify}>
            <div className={styles.container}>
                <h1 className={styles.title}>Skill Certifies</h1>
                <ul className={styles.certifylist}>
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
                            alt='restCertify'
                            width={550}
                            height={320}
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/certify/JavascriptCertify.png"
                            alt='jsCertify'
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
                            src="/img/certify/cppCertify.png"
                            alt='cppCertify'
                            width={550}
                            height={320}
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/certify/cssCertify.png"
                            alt='cssCertify'
                            width={550}
                            height={320}
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/certify/cshapCerrify.png"
                            alt='c#Certify'
                            width={550}
                            height={320}
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/certify/javaCertify.png"
                            alt='javaCertify'
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
                </ul>
            </div>
        </section>
    );
};

export default SkillCheck;
