import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';

import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

import '@/common/styles/globals.css';

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
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <ProgressBar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
};

export default App;
