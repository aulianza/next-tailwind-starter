import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import '@/common/styles/globals.css';

import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

import defaultSEOConfig from '../../next-seo.config';

const ProgressBar = dynamic(() => import('src/common/components/ProgressBar'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...defaultSEOConfig} />
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <ProgressBar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
};

export default App;
