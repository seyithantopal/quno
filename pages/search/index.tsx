import { FC, Fragment } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import axios from 'axios';
import Filter from '../../components/Filter';
import Swipeable from '../../components/Swipeable';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';
import { Doctor, FILTER_ENUM, SwipeableType } from '../../utils/@types';
import styles from '../../styles/modules/Search.module.scss';
import Divider from '../../components/Divider';
import Layout from '../../components/Layout';
import { mockupDoctors } from '../api/mockups';
import { currencyFormat } from '../../utils/@helpers/formatter';
import { useFilterDoctors } from '../../utils/@hooks/useFilterDoctors';
import { BACKEND_SERVICE_URL } from '../../utils/@contants';

interface SearchProps {
  doctors: Doctor[];
}

const DoctorSearch: FC<SearchProps> = ({ doctors }) => {
  const { sortedDoctors, handleChangeFilter } = useFilterDoctors(doctors);

  const FilterButtonGroup: SwipeableType[] = [
    {
      content: (
        <Filter
          labels={[
            FILTER_ENUM.BEST_QUNOSCORE,
            FILTER_ENUM.BEST_REVIEWS,
            FILTER_ENUM.LOWEST_QUNOSCORE,
            FILTER_ENUM.LOWEST_QUNOSCORE,
          ]}
          handleChangeFilter={handleChangeFilter}
        />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Doctor Search Page</title>
      </Head>
      <Layout>
        <section className={styles.heroSection}>
          <div className={`${nettoFont.className} ${styles.heroSectionHeader}`}>
            FUE Hair Transplant Clinics
          </div>
          <div
            className={`${adelleSansFont.className} ${styles.heroSectionUSP}`}
          >
            <div className={styles.USPList}>
              <div className={styles.USPListItem}>
                <div>
                  <img className={styles.checkIcon} src="/images/check.svg" />
                </div>
                <div>Only professionally-vetted doctors</div>
              </div>
              <div className={styles.USPListItem}>
                <div>
                  <img className={styles.checkIcon} src="/images/check.svg" />
                </div>
                <div>Personal support service</div>
              </div>
              <div className={styles.USPListItem}>
                <div>
                  <img className={styles.checkIcon} src="/images/check.svg" />
                </div>
                <div>Satisfaction & price match guarantee</div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.content}>
          <section className={styles.filters}>
            <Swipeable items={FilterButtonGroup} />
          </section>
          {sortedDoctors.map((doctor, index) => (
            <Fragment key={index}>
              <section className={styles.doctorsSection}>
                <div className={styles.gridContainer}>
                  <div className={styles.image}>
                    <img
                      className={styles.personImage}
                      src={doctor.avatarUrl}
                    />
                  </div>
                  <div className={styles.info}>
                    <div
                      className={`${styles.speciality} ${adelleSansFont.className}`}
                    >
                      {doctor.speciality.toUpperCase()}
                    </div>
                    <div className={`${styles.name} ${nettoFont.className}`}>
                      {doctor.name}
                    </div>
                    <div
                      className={`${styles.address} ${adelleSansFont.className}`}
                    >
                      <div>
                        <img className={styles.logo} src="/images/pin.svg" />
                      </div>
                      <div>{`${doctor.city}, ${doctor.country}`}</div>
                    </div>
                  </div>
                  <div className={styles.score}>
                    <div className={`${styles.round} ${nettoFont.className}`}>
                      <p>{doctor.qunoScoreNumber}</p>
                    </div>
                    <div className={adelleSansFont.className}>
                      <p className={styles.quality}>{doctor.qunoScoreText}</p>
                      <p className={styles.qunoscore}>QUNOSCORE</p>
                    </div>
                  </div>
                  <div
                    className={`${styles.reviews} ${adelleSansFont.className}`}
                  >
                    <div className={styles.item}>
                      <div>
                        <img className={styles.icon} src="/images/star.svg" />
                      </div>
                      <div>
                        <span className={styles.textBold}>
                          {doctor.ratingsAverage}
                        </span>
                        <span className={styles.text}>{` (190 REVIEWS)`}</span>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div>
                        <img className={styles.icon} src="/images/check.svg" />
                      </div>
                      <div>
                        <span className={styles.text}>
                          {`${doctor.treatmentsLastYear} treatments last year`}
                        </span>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div>
                        <img className={styles.icon} src="/images/check.svg" />
                      </div>
                      <div>
                        <span className={styles.text}>
                          {`${doctor.yearsExperience} years of experience`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.startingFrom} ${adelleSansFont.className}`}
                  >
                    <p className={styles.text}>starting from</p>
                    <p className={styles.price}>
                      {currencyFormat(doctor.basePrice)}
                    </p>
                  </div>
                  <div className={styles.CTAButton}>
                    <Link href={`/profile/${doctor.slug}`}>
                      <button className={nettoFont.className}>
                        See doctor profile
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
              {index !== mockupDoctors.length - 1 && <Divider />}
            </Fragment>
          ))}
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
  context,
) => {
  const { data } = await axios.get(BACKEND_SERVICE_URL);

  return {
    props: {
      doctors: data,
    },
  };
};

export default DoctorSearch;
