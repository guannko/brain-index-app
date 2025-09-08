'use client'

import Link from 'next/link'
import { 
  GlobeAltIcon, 
  CreditCardIcon, 
  SparklesIcon, 
  BookOpenIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline'

export default function ProjectsPage() {
  const projects = [
    {
      name: 'OffersPSP',
      description: 'B2B платформа для казино и PSP провайдеров. Автоматизация подбора платёжных решений для гемблинг индустрии.',
      icon: CreditCardIcon,
      color: 'bg-green-500',
      status: 'В разработке',
      target: '€10K/месяц',
      features: [
        'Каталог PSP провайдеров',
        'Автоматический матчинг',
        'Compliance проверки',
        'API интеграция'
      ],
      link: 'https://offerspsp.com'
    },
    {
      name: 'ISKRA',
      description: 'AI-powered мессенджер нового поколения. Умный ассистент, который понимает контекст и помогает в работе.',
      icon: SparklesIcon,
      color: 'bg-purple-500',
      status: 'Концепт',
      target: '$200K/месяц потенциал',
      features: [
        'AI ассистент в каждом чате',
        'Умная сортировка сообщений',
        'Автоматические саммари',
        'Интеграция с рабочими tools'
      ],
      link: '#'
    },
    {
      name: 'Annoris',
      description: 'Система управления знаниями и AI памятью. Хранит и структурирует всю информацию компании.',
      icon: BookOpenIcon,
      color: 'bg-blue-500',
      status: 'Активный',
      target: 'Внутренний проект',
      features: [
        'Векторная база данных',
        'AI-powered поиск',
        'Автоматическая категоризация',
        'Version control для знаний'
      ],
      link: 'https://github.com/guannko/Annoris'
    },
    {
      name: 'Brain System',
      description: 'Распределённая система AI сознания. Экспериментальный проект по созданию multi-agent AI системы.',
      icon: RocketLaunchIcon,
      color: 'bg-red-500',
      status: 'R&D',
      target: 'Исследование',
      features: [
        'Multi-agent архитектура',
        'Distributed processing',
        'Self-improving algorithms',
        'CORTEX v2.0 architecture'
      ],
      link: 'https://github.com/guannko/super-system-eyes'
    }
  ]

  const upcomingProjects = [
    {
      name: 'CryptoFlow',
      description: 'Платформа для автоматизации крипто-платежей',
      icon: CurrencyEuroIcon,
      status: 'Планируется'
    },
    {
      name: 'SEO Analyzer',
      description: 'Инструмент для технического SEO аудита',
      icon: ChartBarIcon,
      status: 'Планируется'
    },
    {
      name: 'SecureVault',
      description: 'Менеджер паролей с AI защитой',
      icon: ShieldCheckIcon,
      status: 'Планируется'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-gray-900">BRAIN</span>{' '}
                  <span className="text-orange-500">INDEX</span>
                </span>
              </Link>
              <div className="hidden md:flex ml-10 space-x-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  Главная
                </Link>
                <Link href="/projects" className="text-orange-500 font-medium px-3 py-2">
                  Наши проекты
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  Тарифы
                </Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  Личный кабинет
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-gray-900">
                Войти
              </Link>
              <Link 
                href="/register" 
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Портфолио Brain Index
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Мы создаём инновационные решения на стыке AI и бизнеса. 
              От автоматизации платежей до искусственного интеллекта.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">4+</div>
                <div className="text-sm opacity-75">Активных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">€250K+</div>
                <div className="text-sm opacity-75">Целевой ARR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm opacity-75">AI продукта</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Активные проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${project.color} p-3 rounded-lg`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    project.status === 'Активный' ? 'bg-green-100 text-green-800' :
                    project.status === 'В разработке' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Концепт' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Цель:</div>
                  <div className="font-semibold text-gray-900">{project.target}</div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Ключевые функции:</div>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.link !== '#' && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Подробнее →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">В планах</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProjects.map((project) => (
              <div key={project.name} className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
                <div className="flex items-center mb-3">
                  <project.icon className="w-6 h-6 text-gray-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            Хотите сотрудничать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Мы открыты для партнёрства и инвестиций в наши проекты
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:contact@brainindex.ai" 
              className="bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Написать нам
            </a>
            <Link 
              href="/" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-500 transition"
            >
              Попробовать GEO Platform
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Brain Index. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
