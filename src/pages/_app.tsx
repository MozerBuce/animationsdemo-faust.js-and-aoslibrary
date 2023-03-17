import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React, { useEffect } from 'react';
import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';
import "bootstrap/dist/css/bootstrap.css"
import { useRouter } from 'next/router';
import AOS from "aos";
import "aos/dist/aos.css";



export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [router.events]);
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    </>
  );
}
