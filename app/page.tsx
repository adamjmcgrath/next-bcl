'use client';

import styles from './page.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user } = useUser();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {user ? (
          <>
            Hello {user.name}{' '}
            <a href="/api/auth/logout">
              <button>logout</button>
            </a>
          </>
        ) : (
          <>
            <a href="/api/auth/login">
              <button>login</button>
            </a>
          </>
        )}
      </div>
    </main>
  );
}
