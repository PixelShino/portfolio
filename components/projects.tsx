'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export default function Projects() {
  const t = useTranslations('projects');
  const pdt = useTranslations('projects_discr');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'React Commerce',
      description:
        'This project is a modern e-commerce web application built with React.',
      image: '/ReactCommerce.png?height=400&width=600',
      tags: ['React', 'Vite', 'React Router', 'Context Api', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PixelShino/ReactCommerce',
      liveUrl: 'https://pixelshino.github.io/ReactCommerce/',
    },
    {
      id: 2,
      title: 'Food Site',
      description:
        'This site is on vanilla js for home delivery of ready meals by subscription',
      image: '/FoodSite.png?height=400&width=600',
      tags: ['JavaScript', 'CSS Module', 'SCSS', 'Webpack', 'HTML5'],
      githubUrl: 'https://github.com/PixelShino/FoodSite',
      liveUrl: 'pixelshino.github.io/FoodSite/',
    },
    {
      id: 3,
      title: '3D Portfolio Showcase',
      description:
        'An interactive 3D portfolio website showcasing creative work with WebGL animations and effects.',
      image: '/portfolio.png?height=400&width=600',
      tags: ['Three.js', 'React', 'GSAP', 'WebGL'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Widget',
      description:
        'A minimalist application for displaying current weather and 3-day forecast.',
      image: '/weather-widget.png?height=400&width=600',
      tags: ['React', 'Vite', 'OpenWeather API', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/weather-wiget',
      liveUrl: 'pixelshino.github.io/weather-wiget/',
    },
    {
      id: 5,
      title: 'Task List',
      description:
        'A task management application with the ability to set priorities, deadlines, and track overdue tasks. Implemented using React Context API for state management.',
      image: '/task-list.png?height=400&width=600',
      tags: ['React', 'Vite', 'React Context Api', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/context-task-list',
      liveUrl: 'https://pixelshino.github.io/context-task-list/',
    },
    {
      id: 6,
      title: 'Currency Exchange Calculator',
      description:
        'Interactive web application for currency conversion using current exchange rates.',
      image: '/currency-exchange.png?height=400&width=600',
      tags: ['React', 'Vite', 'Franfurter API', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/currency-exchange-calculator',
      liveUrl: 'https://pixelshino.github.io/currency-exchange-calculator/',
    },
    {
      id: 7,
      title: 'React Optimization',
      description:
        'This project demonstrates advanced React optimization techniques to improve performance in applications with large datasets.',
      image: '/react-optimization.png?height=400&width=600',
      tags: ['React', 'Vite', 'Memo', 'UseMemo', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/react-optimization-demo',
      liveUrl: 'https://pixelshino.github.io/react-optimization-demo/',
    },
    {
      id: 8,
      title: 'RTK User App',
      description:
        'This is a simple user management application built with React and Redux Toolkit.',
      image: '/RTK.png?height=400&width=600',
      tags: ['React', 'Vite', 'ReduxToolKit', 'Redux', 'API', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/redux-toolkit-users-app',
      liveUrl: 'https://pixelshino.github.io/redux-toolkit-users-app/',
    },
    {
      id: 9,
      title: 'Vote Tracker App',
      description:
        'A simple application for tracking votes for candidates, built using React and useReducer.',
      image: '/vote-tracker.png?height=400&width=600',
      tags: ['React', 'Vite', 'useReducer', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/useReducer-data-loading',
      liveUrl: 'https://pixelshino.github.io/useReducer-data-loading/',
    },
    {
      id: 10,
      title: 'Data Widget',
      description:
        'An interactive date widget created using the useReducer hook in React.',
      image: '/vote-tracker.png?height=400&width=600',
      tags: ['React', 'Vite', 'useReducer', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/useReducer-practice',
      liveUrl: 'https://pixelshino.github.io/useReducer-practice/',
    },
    {
      id: 11,
      title: 'Modal Window',
      description:
        'A simple, reusable React modal window component with customizable content and actions.',
      image: '/modal-component.png?height=400&width=600',
      tags: ['React', 'Vite', 'CSS'],
      githubUrl: 'https://github.com/PixelShino/modal-window',
      liveUrl: 'https://pixelshino.github.io/modal-window/',
    },
  ];

  const filters = [
    // 'all',
    // 'React',
    // 'Next.js',
    // 'Three.js',
    // 'TypeScript',
    // 'Tailwind CSS',
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id='projects' className='py-20 relative'>
      <div className='absolute inset-0 bg-gradient-cool -z-10'></div>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12 '
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            {t('title1')}

            <span className='text-blue-600 dark:text-blue-400'>
              {t('title2')}
            </span>
          </h2>
          <p className='text-slate-700 dark:text-slate-300 max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </motion.div>

        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {filters.map((filter, index) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={activeFilter === filter ? 'default' : 'outline'}
                className={
                  activeFilter === filter
                    ? 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950'
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 border-slate-200 dark:border-slate-700 flex flex-col'>
                <div className='overflow-hidden h-48'>
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                  />
                </div>
                <div className='flex flex-col flex-grow'>
                  <CardHeader>
                    <CardTitle className='text-xl text-blue-600 dark:text-blue-400'>
                      {project.title}
                    </CardTitle>
                    <CardDescription className='text-slate-600 dark:text-slate-400'>
                      {pdt(`project${project.id}`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant='secondary'
                          className='bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className='flex justify-between mt-auto'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='gap-2'
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className='h-4 w-4' />
                      <span>Code</span>
                    </Button>
                    <Button
                      size='sm'
                      className='gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white'
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className='h-4 w-4' />
                      <span>Live Demo</span>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
