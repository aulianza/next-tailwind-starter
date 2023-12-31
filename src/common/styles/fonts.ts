import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google';

export const jakartaSans = Plus_Jakarta_Sans({
  variable: '--jakartaSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800'],
});

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  display: 'swap',
});
