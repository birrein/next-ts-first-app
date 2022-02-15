import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@common/layout';
import utilStyles from '@common/utils/utils.module.css';

const PageWithParams = () => {
  const router = useRouter();
  const { words }: { words?: string[] } = router.query;

  const title = 'Título X';

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          {words?.map((word, index) => (
            <p key={index}>{word}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default PageWithParams;
