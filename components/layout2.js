import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
//import Link from 'next/link';

const name = "The Game: An Essay About Life";
export const siteTitle = 'The Game';

export default function Layout2({ children, home }) {
    return (
      <div className={utilStyles.text}>
        <Head>
            The Game
        </Head>
        <header className={styles.text}>
        {home ? (
          <>
            <h1 className={utilStyles.text}>{name}</h1>
          </>
        ) : (
          <>
        
            <h2 className={utilStyles.text}>
              <Link href="/" className={utilStyles.text}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
        
        <main>{children}</main>
      {!home && (
        <div className={styles.text}>
        </div>
      )}
        </div>
  );
}