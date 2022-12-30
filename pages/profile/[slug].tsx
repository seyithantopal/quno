import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';
import { Doctor } from '../../utils/@types';
import Layout from '../../components/Layout';
import { BACKEND_SERVICE_URL, WEBSITE_TITLE } from '../../utils/@contants';
import DetailCard from '../../components/DetailCard';

interface ProfileProps {
  doctor: Doctor;
}

interface ProfileParams extends ParsedUrlQuery {
  slug: string;
}

const Profile: FC<ProfileProps> = ({ doctor }) => {
  return (
    <>
      <Head>
        <title>{`${WEBSITE_TITLE} | ${doctor.name}`}</title>
      </Head>
      <Layout>
        <DetailCard doctor={doctor} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  ProfileProps,
  ProfileParams
> = async (context) => {
  const { slug } = context.params!;
  let doctor = {} as Doctor;
  try {
    const { data } = await axios.get<Doctor>(`${BACKEND_SERVICE_URL}/${slug}`);
    doctor = data;
  } catch (e) {
    console.log('Something went wrong during fetching doctors: ', e);
  }

  return {
    props: {
      doctor,
    },
  };
};

export default Profile;
