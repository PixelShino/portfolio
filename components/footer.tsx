import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <Link
              href='/'
              className='text-xl font-bold text-blue-600 dark:text-blue-400'
            >
              Dmitry
              <span className='text-slate-900 dark:text-white'>Goldobin</span>
            </Link>
            <p className='text-sm text-slate-600 dark:text-slate-400 mt-1'>
              &copy; {currentYear} MIT Licence.
            </p>
          </div>

          <div className='flex space-x-4'>
            <a
              href='https://github.com/PixelShino'
              className='text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </a>
            <a
              href='https://hh.ru/resume/3fba0842ff08584f020039ed1f5945347a5747'
              className='text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors'
              aria-label='Headhunter'
            >
              <img src='/hh.png' alt='HeadHunter' className='h-5 w-5' />
            </a>
            <a
              href='https://t.me/PixelShino'
              className='text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors'
              aria-label='Telegram'
            >
              <img src='/tg.png' alt='Telegram' className='h-5 w-5' />
            </a>
            <a
              href='https://wa.me/qr/JWST6RALZBOFP1'
              className='text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors'
              aria-label='WatsApp'
            >
              <img src='/whats-app.png' alt='Telegram' className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
