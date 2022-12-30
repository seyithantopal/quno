import { FC } from 'react';
import { Doctor } from '../../utils/@types';
import Layout from '../../components/Layout';
import styles from '../../styles/modules/Profile.module.scss';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';
import {
  calculatePercantageOfReviews,
  currencyFormat,
  yearsOfExperienceToSince,
} from '../../utils/@helpers/formatter';

interface DetailCardProps {
  doctor: Doctor;
}

const DetailCard: FC<DetailCardProps> = ({ doctor }) => {
  const percantageOfReviews = calculatePercantageOfReviews(
    doctor.ratingsAverage,
  );
  const sinceYear = yearsOfExperienceToSince(doctor.yearsExperience);
  return (
    <>
      <Layout>
        <section className={styles.doctorPictureSection}>
          <img className={styles.image} src={doctor.avatarUrl} />
        </section>
        <div className={styles.content}>
          <section className={styles.info}>
            <div className={styles.speciality}>
              {doctor.speciality.toUpperCase()}
            </div>
            <div
              className={`${styles.name} ${nettoFont.className}`}
              data-testid="doctor-name"
            >
              {doctor.name}
            </div>
            <div className={`${styles.address} ${adelleSansFont.className}`}>
              <div>
                <img className={styles.icon} src="/images/pin.svg" />
              </div>
              <div>
                <span className={styles.underlined}>{doctor.hospital}</span>
                <span>{`, ${doctor.city}, ${doctor.country}`}</span>
              </div>
            </div>
            <div className={styles.score}>
              <div className={`${styles.circle} ${nettoFont.className}`}>
                <div className={styles.outer}>
                  <div className={styles.inner}>{doctor.qunoScoreNumber}</div>
                </div>
              </div>
              <div className={adelleSansFont.className}>
                <p className={styles.quality}>{doctor.qunoScoreNumber}</p>
                <p className={styles.qunoscore}>QUNOSCORE</p>
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/star.svg" />
                </div>
                <div>
                  <span className={styles.textBold}>
                    {doctor.ratingsAverage}
                  </span>
                  <span
                    className={styles.text}
                  >{` (${doctor.reviews} REVIEWS)`}</span>
                </div>
              </div>

              <div className={styles.item}>
                <div>
                  <img className={styles.icon} src="/images/heart.svg" />
                </div>
                <div>
                  <span
                    className={styles.textBold}
                    data-testid="recommendation"
                  >{`${percantageOfReviews}%`}</span>
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
                  <span
                    className={styles.text}
                  >{`Practising since ${sinceYear}`}</span>
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
                  <span className={styles.textBold}>
                    {currencyFormat(doctor.basePrice)}
                  </span>
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

export default DetailCard;
