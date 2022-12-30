import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';
import { Doctor } from '../../utils/@types';
import Layout from '../../components/Layout';
import styles from '../../styles/modules/Profile.module.scss';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';

/* interface ProfileProps {
  doctor: Doctor;
} */

const Profile: FC = () => {
  return (
    <>
      <Head>
        <title>{'doctor.name'}</title>
      </Head>
      <Layout>
        <section className={styles.doctorPictureSection}>
          <img className={styles.image} src="/images/mert_yuce.png" />
        </section>
        <div className={styles.content}>
          <section className={styles.info}>
            <div className={styles.speciality}>HAIR TRANSPLANT</div>
            <div className={`${styles.name} ${nettoFont.className}`}>
              Dr. Mert Yüce, DDS
            </div>
            <div className={`${styles.address} ${adelleSansFont.className}`}>
              <div>
                <img className={styles.icon} src="/images/pin.svg" />
              </div>
              <div>
                <span className={styles.underlined}>Dentaglobal</span>, Izmir,
                Turkey
              </div>
            </div>
            <div className={styles.score}>
              <div className={`${styles.circle} ${nettoFont.className}`}>
                <div className={styles.outer}>
                  <div className={styles.inner}>9.7</div>
                </div>
              </div>
              <div className={adelleSansFont.className}>
                <p className={styles.quality}>Excellent</p>
                <p className={styles.qunoscore}>QUNOSCORE</p>
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/star.svg" />
                </div>
                <div>
                  <span className={styles.textBold}>4.8</span>
                  <span className={styles.text}>{` (${190} REVIEWS)`}</span>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/heart.svg" />
                </div>
                <div>
                  <span className={styles.textBold}>97%</span>
                  <span className={styles.text}>{` would recommend`}</span>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/check.svg" />
                </div>
                <div>
                  <span className={styles.text}>{`High demand doctor`}</span>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/check.svg" />
                </div>
                <div>
                  <span className={styles.text}>
                    {`Practising since 2006 years of experience`}
                  </span>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/check.svg" />
                </div>
                <div>
                  <span
                    className={styles.text}
                  >{` 8 E.Max Veneers + Teeth Whitening Package from `}</span>
                  <span className={styles.textBold}>€1,925</span>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.cta}>
            <button
              className={`${nettoFont.className} ${styles.buttonSecondary}`}
            >
              Get consultation
            </button>
            <button
              className={`${nettoFont.className} ${styles.buttonPrimary}`}
            >
              Book appointment
            </button>
          </section>
        </div>
      </Layout>
    </>
  );
};

interface ProfileParams extends ParsedUrlQuery {
  slug: string;
}

/*export const getServerSideProps: GetServerSideProps<
  ProfileProps,
  ProfileParams
> = async (context) => {
  const { slug } = context.params!;
  const { data } = await axios.get(`http://localhost:4000/${slug}`);

  return {
    props: {
      doctor: data,
    },
  };
};*/

export default Profile;
