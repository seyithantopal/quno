import Head from 'next/head';
import Filter from '../../components/Filter';
import Swipeable from '../../components/Swipeable';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';
import { SwipeableType } from '../../utils/@types';
import styles from '../../styles/modules/Search.module.scss';

const DoctorSearch = () => {
  const USPFilters: SwipeableType[] = [
    {
      content: <Filter label="Best Qunoscore" />,
    },
    {
      content: <Filter label="Best Reviews" />,
    },
    {
      content: <Filter label="Lowest Qunoscore" />,
    },
    {
      content: <Filter label="Lowest Qunoscore" />,
    },
  ];
  return (
    <>
      <Head>
        <title>Doctor Search Page</title>
      </Head>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/images/qunomedical-logo.svg" />
      </div>
      <section className={styles.heroSection}>
        <div className={`${nettoFont.className} ${styles.heroSectionHeader}`}>
          FUE Hair Transplant Clinics
        </div>
        <div className={`${adelleSansFont.className} ${styles.heroSectionUSP}`}>
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
      <section className={styles.filters}>
        <Swipeable items={USPFilters} />
      </section>
    </>
  );
};

export default DoctorSearch;
