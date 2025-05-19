'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
};

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale();

  // Данные опыта на русском языке
  const experiencesRu: Experience[] = [
    {
      id: 1,
      title: 'Начальный опыт в дизайне и веб-разработке',
      company: 'Школа',
      location: 'Не указано',
      period: '? - 2019 (примерно)',
      description:
        'Активно занимался дизайном. Делал первые шаги в HTML, CSS, а также изучал основы Pascal и C.',
      technologies: ['Дизайн', 'HTML', 'CSS', 'Pascal', 'C'],
    },
    {
      id: 2,
      title: 'Изучение информационных систем и программирования',
      company: 'Университет',
      location:
        'Воронеж, Воронежский Государственный Университет Инженерных Технологий',
      period: '2019 - 2023',
      description:
        "Изучал бизнес-процессы, проектирование и жизненные циклы информационных систем по специальности '09.02.07 Информационные системы и программирование'. Изучал базы данных (Access, MySQL), PHP, HTML, CSS, JavaScript и phpMyAdmin под руководством преподавателя. Познакомился с Git, делал pull request в учебные проекты. Работал с GitKraken и создал личный GitHub.",
      technologies: [
        'Бизнес-процессы',
        'Проектирование',
        'Жизненные циклы информационных систем',
        'Access',
        'MySQL',
        'PHP',
        'HTML',
        'CSS',
        'JavaScript',
        'phpMyAdmin',
        'Git',
        'GitKraken',
      ],
    },
    {
      id: 3,
      title: 'Подработки в дизайне',
      company: 'Фриланс',
      location: 'Удаленно',
      period: '2023 - настоящее время',
      description:
        'Подрабатывал в дизайне, создавая карточки товаров для маркетплейсов Ozon и Wildberries. Работал с Photoshop, Figma и Wix. Продолжаю изучать React.',
      technologies: ['Photoshop', 'Figma', 'Wix', 'React', 'Дизайн e-commerce'],
    },
    {
      id: 4,
      title: 'Активное изучение React и учебные проекты',
      company: 'Самостоятельное обучение',
      location: 'Не указано',
      period: '2023 - настоящее время',
      description:
        'Более активное изучение React. Начал разрабатывать учебные проекты.',
      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Разработка проектов',
      ],
    },
  ];

  // Данные опыта на английском языке
  const experiencesEn: Experience[] = [
    {
      id: 1,
      title: 'Initial experience in design and web development',
      company: 'School',
      location: 'Not specified',
      period: '? - 2019 (approximately)',
      description:
        'Actively engaged in design. Took first steps in HTML, CSS, and also studied the basics of Pascal and C.',
      technologies: ['Design', 'HTML', 'CSS', 'Pascal', 'C'],
    },
    {
      id: 2,
      title: 'Study of information systems and programming',
      company: 'University',
      location:
        'Voronezh, Voronezh State University of Engineering Technologies',
      period: '2019 - 2023',
      description:
        "Studied business processes, design and life cycles of information systems in the specialty '09.02.07 Information Systems and Programming'. Studied databases (Access, MySQL), PHP, HTML, CSS, JavaScript and phpMyAdmin under the guidance of a teacher. Got acquainted with Git, made pull requests to educational projects. Worked with GitKraken and created a personal GitHub.",
      technologies: [
        'Business processes',
        'Design',
        'Information systems life cycles',
        'Access',
        'MySQL',
        'PHP',
        'HTML',
        'CSS',
        'JavaScript',
        'phpMyAdmin',
        'Git',
        'GitKraken',
      ],
    },
    {
      id: 3,
      title: 'Design side jobs',
      company: 'Freelance',
      location: 'Remote',
      period: '2023 - present',
      description:
        'Worked in design, creating product cards for Ozon and Wildberries marketplaces. Worked with Photoshop, Figma and Wix. Continue to study React.',
      technologies: ['Photoshop', 'Figma', 'Wix', 'React', 'E-commerce design'],
    },
    {
      id: 4,
      title: 'Active study of React and educational projects',
      company: 'Self-study',
      location: 'Not specified',
      period: '2023 - present',
      description:
        'More active study of React. Started developing educational projects.',
      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Project development',
      ],
    },
  ];

  // Выбираем данные в зависимости от текущего языка
  const experiences = locale === 'ru' ? experiencesRu : experiencesEn;

  return (
    <section id='experience' className='py-20 relative'>
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
            {t('title1')}
            {''}
            <span className='text-blue-600 dark:text-blue-400'>
              {' '}
              {t('title2')}
            </span>
          </h2>
          <p className='text-slate-700 dark:text-slate-300 max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='mb-8 relative'
            >
              {index < experiences.length - 1 && (
                <div className='absolute left-[1.55rem] top-[5.5rem] bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 z-0'></div>
              )}

              <div className='flex items-start'>
                <div className='bg-blue-600 dark:bg-blue-500 rounded-full p-3 mr-4 z-10'>
                  <Briefcase className='h-5 w-5 text-white' />
                </div>

                <Card className='flex-1 dark:bg-slate-800 border-slate-200 dark:border-slate-700'>
                  <CardHeader>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
                      <div>
                        <CardTitle className='text-xl text-blue-600 dark:text-blue-400'>
                          {exp.title}
                        </CardTitle>
                        <CardDescription className='text-lg font-medium text-slate-800 dark:text-slate-200'>
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className='flex items-center text-slate-600 dark:text-slate-400 text-sm'>
                        <Calendar className='h-4 w-4 mr-1' />
                        {exp.period}
                      </div>
                    </div>
                    <div className='flex items-center text-slate-600 dark:text-slate-400 text-sm mt-1'>
                      <MapPin className='h-4 w-4 mr-1' />
                      {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-slate-700 dark:text-slate-300 mb-4'>
                      {exp.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant='secondary'
                          className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
