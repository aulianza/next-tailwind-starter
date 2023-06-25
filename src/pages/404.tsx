import { NextPage } from 'next';
import Router from 'next/router';
import { PiWarningBold } from 'react-icons/pi';

import Button from '@/common/components/Button';

const ErrorPage: NextPage = () => {
  return (
    <section className='layout-container flex flex-col items-center justify-center text-center space-y-10'>
      <PiWarningBold size={100} className=' text-red-500' />
      <div className='space-y-2 mt-3'>
        <h1 className='text-xl font-medium'>Oops! Page Not Found</h1>
        <p>It looks like you've reached a URL that doesn’t exist.</p>
      </div>
      <Button variant='outline' onClick={() => Router.push('/')}>
        Back to home
      </Button>
    </section>
  );
};

export default ErrorPage;
