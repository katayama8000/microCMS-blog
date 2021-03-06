import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ITブログ</title>
      </Head>
      <div className="mx-auto max-w-prose">
        <Link href="/">
          <a>
            <h1 className="my-5 py-5 text-5xl font-bold text-gray-500">
              katayamaのITブログ
            </h1>
          </a>
        </Link>
        <hr />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
