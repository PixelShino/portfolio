import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import '@/app/globals.css';
import type React from 'react';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Получаем локаль из URL
  const urlLocale = props.params.locale;

  // Проверяем, что локаль допустима
  const validLocales = ['en', 'ru'];
  const locale = validLocales.includes(urlLocale) ? urlLocale : 'en';

  let messages;
  try {
    if (locale === 'en') {
      messages = (await import('../../translation/en.json')).default;
    } else if (locale === 'ru') {
      messages = (await import('../../translation/ru.json')).default;
    } else {
      messages = (await import('../../translation/en.json')).default;
    }
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-blue-950 text-slate-900 dark:text-slate-50'>
        {/* Анимированные фоновые элементы */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* Основной контент с Header и Footer только на верхнем уровне */}
            <Header />
            {props.children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
