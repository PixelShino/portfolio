'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Используем переводы
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '#hero' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('experience'), href: '#experience' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 glassmorphism ${
        isScrolled
          ? 'py-4 shadow-sm'
          : 'py-6'
      }`}
    >
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link
          href={`/${locale}`}
          className='text-2xl font-bold text-blue-600 dark:text-blue-400'
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dmitry
            <span className='text-slate-900 dark:text-white'>Goldobin</span>
          </motion.div>
        </Link>

        <div className='hidden md:flex items-center space-x-8'>
          <nav>
            <ul className='flex space-x-6'>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className='flex space-x-2 ml-4'>
            <Link
              href='/en'
              className={`text-sm ${locale === 'en' ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
            >
              EN
            </Link>
            <span className='text-slate-400'>|</span>
            <Link
              href='/ru'
              className={`text-sm ${locale === 'ru' ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
            >
              RU
            </Link>
          </div>

          <ModeToggle />
        </div>

        <div className='flex md:hidden items-center space-x-4'>
          <ModeToggle />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden glassmorphism border-t dark:border-slate-800'
          >
            <nav className='container mx-auto px-4 py-4'>
              <ul className='flex flex-col space-y-4'>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <li className='pt-4 border-t dark:border-slate-700'>
                  <div className='flex space-x-4'>
                    <Link
                      href='/en'
                      className={`${locale === 'en' ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      English
                    </Link>
                    <Link
                      href='/ru'
                      className={`${locale === 'ru' ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Русский
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
