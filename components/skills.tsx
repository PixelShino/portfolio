'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Layers,
  Palette,
  Database,
  Cpu,
  GitBranch,
  Smartphone,
  Zap,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

type Skill = {
  name: string;
  icon: React.ReactNode;
  items: string[];
};

export default function Skills() {
  // Используем переводы
  const t = useTranslations('skills');
  const locale = useLocale();
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  const skills: Skill[] = [
    {
      name: t('frontend'),
      icon: <Code className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      name: t('styling'),
      icon: <Palette className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: [
        'Tailwind CSS',
        'Bootstrap',
        'Radix UI',
        'Shadcn UI',
        'Styled Components',
        'SASS/SCSS',
        'CSS Modules',
      ],
    },
    {
      name: t('stateManagement'),
      icon: <Layers className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: ['Redux', 'ReduxToolKit', 'Context API', 'useReducer'],
    },
    {
      name: t('backend'),
      icon: <Database className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: ['PHP', 'REST API', 'MySql', 'PhpMyAdmin'],
    },
    {
      name: t('graphics'),
      icon: <Cpu className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: ['Three.js', 'Figma', 'Wix', 'Photoshop'],
    },
    {
      name: t('tools'),
      icon: <GitBranch className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: [
        'Git',
        'GitHub',
        'GitKraken',
        'VS Code',
        'WebStorm',
        'PhpStorm',
        'Webpack',
        'Vite',
      ],
    },
    {
      name: t('mobile'),
      icon: <Smartphone className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: ['Mobile-First', 'Responsive Design'],
    },
    {
      name: t('performance'),
      icon: <Zap className='h-6 w-6 text-blue-600 dark:text-blue-400' />,
      items: [
        'Lighthouse',
        'Lazy Loading',
        'Optimization',
        'Memo',
        'useMemo',
        'useCallback',
      ],
    },
  ];

  return (
    <section id='skills' className='py-20 relative'>
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
            <span className='text-blue-600 dark:text-blue-400'>
              {t('title')}
            </span>
          </h2>
          <p className='text-slate-700 dark:text-slate-300 max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-md transition-shadow duration-300 dark:bg-slate-800 border-slate-200 dark:border-slate-700'>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    {skill.icon}
                    <h3 className='text-xl font-semibold ml-2'>{skill.name}</h3>
                  </div>
                  <ul className='space-y-2'>
                    {skill.items.map((item) => (
                      <li key={item} className='flex items-center'>
                        <div className='w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2'></div>
                        <span className='text-slate-700 dark:text-slate-300'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
