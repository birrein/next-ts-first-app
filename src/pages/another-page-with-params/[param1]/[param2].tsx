import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../../components/layout';
import utilStyles from '../../utils.module.css';

const PageWithParams = () => {
  const router = useRouter();
  const { param1, param2 } = router.query;

  const title = '';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <p>Param1: {param1}</p>
          <p>Param2: {param2}</p>
        </div>
      </article>
    </Layout>
  );
};

export default PageWithParams;
