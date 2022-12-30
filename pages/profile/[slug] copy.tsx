import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';
import { Doctor } from '../../utils/@types';

interface ProfileProps {
  doctor: Doctor;
}

const Profile: FC<ProfileProps> = ({ doctor }) => {
  console.log('doctor: ', doctor);
  return (
    <>
      <Head>
        <title>{doctor.name}</title>
      </Head>
      <div>{doctor.name}</div>
    </>
  );
};

interface ProfileParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
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
};

export default Profile;
