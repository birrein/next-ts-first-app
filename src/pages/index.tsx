import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '@common/layout';
import utilStyles from '@common/utils/utils.module.css';
import { getSortedPostsData } from '@common/utils/posts';
import Date from '@common/utils/date';
import Link from '@common/components/Link';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

type Props = {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
};

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Developer</p>
        <p>
          Sitio de pruebas para conocer el funcionamiento de Next.js, hace uso
          de archivos Markdown como fuente de datos, los cuales se cargan al
          inicio como recursos para renderizar el sitio de forma estática.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link
              href={{
                pathname: '/page-with-params',
                query: {
                  title: 'El título',
                  param1: 'El primer parámetro',
                  param2: 'El segundo parámetro',
                },
              }}
            >
              Link prueba con parámetros
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/another-page-with-params/param1/param2">
              Link parámetros en url (semántico)
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/catch-all-routes/param1/param2">
              Link prueba con parámetros (catch all routes)
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/muindex">Prueba MUI</Link>
          </li>
        </ul>

        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
