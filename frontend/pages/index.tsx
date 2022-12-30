import { GetServerSideProps } from 'next';

const Home = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/search',
      permanent: true,
    },
  };
};

export default Home;
