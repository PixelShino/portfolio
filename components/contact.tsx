'use client';

import type React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Plane,
} from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const t = useTranslations('contact');
  const locale = useLocale();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Mail className='h-5 w-5 text-blue-600 dark:text-blue-400' />,
      title: t('email'),
      value: 'goldobin.dmitry@bk.ru',
      link: 'mailto:goldobin.dmitry@bk.ru',
    },
    {
      icon: <Phone className='h-5 w-5 text-blue-600 dark:text-blue-400' />,
      title: t('phone'),
      value: '+7 (919) 231-8930',
      link: 'tel:+79192318930',
    },
    {
      icon: <MapPin className='h-5 w-5 text-blue-600 dark:text-blue-400' />,
      title: t('location'),
      value: locale === 'ru' ? 'Воронеж, Россия' : 'Voronezh, Russia',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className='h-5 w-5' />,
      name: 'GitHub',
      link: 'https://github.com/PixelShino',
    },
    {
      icon: <img src='/hh.png' alt='HeadHunter' className='h-5 w-5' />,
      name: 'HeadHunter',
      link: 'https://hh.ru/resume/3fba0842ff08584f020039ed1f5945347a5747',
    },
    {
      icon: <img src='/tg.png' alt='Telegram' className='h-5 w-5' />,
      name: 'Telegram',
      link: 'https://t.me/PixelShino',
    },
    {
      icon: <img src='/whats-app.png' alt='WhatsApp' className='h-5 w-5' />,
      name: 'WhatsApp',
      link: 'https://wa.me/qr/JWST6RALZBOFP1',
    },
  ];

  return (
    <section id='contact' className='py-20 relative'>
      <div className='absolute inset-0 bg-gradient-cool -z-10'></div>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('title')}{' '}
            <span className='text-blue-600 dark:text-blue-400'></span>
          </h2>
        </motion.div>

        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='w-full'
          >
            <Card className='h-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 w-full'>
              <CardContent className='p-6 w-full'>
                <h3 className='text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400'>
                  {t('contactInfo')}
                </h3>

                <div className='space-y-6 mb-8'>
                  {contactInfo.map((item, index) => (
                    <div key={index} className='flex items-start'>
                      <div className='mr-3 mt-1'>{item.icon}</div>
                      <div>
                        <h4 className='font-medium text-slate-900 dark:text-white'>
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className='text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='text-slate-600 dark:text-slate-300'>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className='font-medium text-slate-900 dark:text-white mb-3'>
                  {t('followMe')}
                </h4>
                <div className='flex space-x-3'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className='bg-slate-200 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 rounded-full transition-colors'
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Удаляем вторую колонку, так как теперь используем полную ширину */}
            {/* <Card className='dark:bg-slate-800 border-slate-200 dark:border-slate-700'>
              <CardContent className='p-6'>
                <h3 className='text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400'>
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <label
                        htmlFor='name'
                        className='text-sm font-medium text-slate-700 dark:text-slate-300'
                      >
                        Your Name
                      </label>
                      <Input
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        required
                        className='dark:bg-slate-700 dark:border-slate-600'
                      />
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium text-slate-700 dark:text-slate-300'
                      >
                        Your Email
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='john@example.com'
                        required
                        className='dark:bg-slate-700 dark:border-slate-600'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='subject'
                      className='text-sm font-medium text-slate-700 dark:text-slate-300'
                    >
                      Subject
                    </label>
                    <Input
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='Project Inquiry'
                      required
                      className='dark:bg-slate-700 dark:border-slate-600'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label
                      htmlFor='message'
                      className='text-sm font-medium text-slate-700 dark:text-slate-300'
                    >
                      Message
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your message here...'
                      rows={5}
                      required
                      className='resize-none dark:bg-slate-700 dark:border-slate-600'
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                  >
                    <Send className='h-4 w-4 mr-2' />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
