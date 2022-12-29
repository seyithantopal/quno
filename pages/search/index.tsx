import Head from 'next/head';
import Filter from '../../components/Filter';
import Swipeable from '../../components/Swipeable';
import { adelleSansFont, nettoFont } from '../../utils/@fonts';
import { SwipeableType } from '../../utils/@types';
import styles from '../../styles/modules/Search.module.scss';
import Divider from '../../components/Divider';
import Layout from '../../components/Layout';

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
            <Swipeable items={USPFilters} />
          </section>
          <section className={styles.doctorsSection}>
            <div className={styles.gridContainer}>
              <div className={styles.image}>
                <img className={styles.personImage} src="/images/person.png" />
              </div>
              <div className={styles.info}>
                <div
                  className={`${styles.speciality} ${adelleSansFont.className}`}
                >
                  HAIR TRANSPLANT
                </div>
                <div className={`${styles.name} ${nettoFont.className}`}>
                  Dr. Emrah Cinik, MD
                </div>
                <div
                  className={`${styles.address} ${adelleSansFont.className}`}
                >
                  <div>
                    <img className={styles.logo} src="/images/pin.svg" />
                  </div>
                  <div>Istanbul, Turkey</div>
                </div>
              </div>
              <div className={styles.score}>
                <div className={`${styles.round} ${nettoFont.className}`}>
                  <p>9.4</p>
                </div>
                <div className={adelleSansFont.className}>
                  <p className={styles.quality}>Excellent</p>
                  <p className={styles.qunoscore}>QUNOSCORE</p>
                </div>
              </div>
              <div className={`${styles.reviews} ${adelleSansFont.className}`}>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/star.svg" />
                  </div>
                  <div>
                    <span className={styles.textBold}>4.8</span>
                    <span className={styles.text}> (190 REVIEWS)</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/check.svg" />
                  </div>
                  <div>
                    <span className={styles.text}>
                      1270 treatments last year
                    </span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/check.svg" />
                  </div>
                  <div>
                    <span className={styles.text}>5 years of experience</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.startingFrom} ${adelleSansFont.className}`}
              >
                <p className={styles.text}>starting from</p>
                <p className={styles.price}>€2,090</p>
              </div>
              <div className={styles.CTAButton}>
                <button className={nettoFont.className}>
                  See doctor profile
                </button>
              </div>
            </div>
          </section>
          <div className={styles.dividerContainer}>
            <Divider />
          </div>
          <section className={styles.doctorsSection}>
            <div className={styles.gridContainer}>
              <div className={styles.image}>
                <img className={styles.personImage} src="/images/person.png" />
              </div>
              <div className={styles.info}>
                <div
                  className={`${styles.speciality} ${adelleSansFont.className}`}
                >
                  HAIR TRANSPLANT
                </div>
                <div className={`${styles.name} ${nettoFont.className}`}>
                  Dr. Emrah Cinik, MD
                </div>
                <div
                  className={`${styles.address} ${adelleSansFont.className}`}
                >
                  <div>
                    <img className={styles.logo} src="/images/pin.svg" />
                  </div>
                  <div>Istanbul, Turkey</div>
                </div>
              </div>
              <div className={styles.score}>
                <div className={`${styles.round} ${nettoFont.className}`}>
                  <p>9.4</p>
                </div>
                <div className={adelleSansFont.className}>
                  <p className={styles.quality}>Excellent</p>
                  <p className={styles.qunoscore}>QUNOSCORE</p>
                </div>
              </div>
              <div className={`${styles.reviews} ${adelleSansFont.className}`}>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/star.svg" />
                  </div>
                  <div>
                    <span className={styles.textBold}>4.8</span>
                    <span className={styles.text}> (190 REVIEWS)</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/check.svg" />
                  </div>
                  <div>
                    <span className={styles.text}>
                      1270 treatments last year
                    </span>
                  </div>
                </div>
                <div className={styles.item}>
                  <div>
                    <img className={styles.icon} src="/images/check.svg" />
                  </div>
                  <div>
                    <span className={styles.text}>5 years of experience</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.startingFrom} ${adelleSansFont.className}`}
              >
                <p className={styles.text}>starting from</p>
                <p className={styles.price}>€2,090</p>
              </div>
              <div className={styles.CTAButton}>
                <button className={nettoFont.className}>
                  See doctor profile
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default DoctorSearch;
