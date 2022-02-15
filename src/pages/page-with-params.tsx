import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@common/layout';
import utilStyles from '@common/utils/utils.module.css';

const PageWithParams = () => {
  const router = useRouter();
  const params = router.query;

  return (
    <Layout>
      <Head>
        <title>{params.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{params.title}</h1>
        <div className={utilStyles.lightText}>
          {Object.keys(params).map((key, index) => (
            <p key={index}>
              {key}: {params[key]}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default PageWithParams;
