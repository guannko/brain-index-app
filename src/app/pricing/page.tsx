import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '€0',
      period: '/месяц',
      description: 'Для знакомства с платформой',
      features: [
        '5 проверок в месяц',
        'ChatGPT анализ',
        'Базовые рекомендации',
        'Email поддержка',
      ],
      notIncluded: [
        'Мониторинг',
        'API доступ',
        'Приоритетная поддержка'
      ],
      cta: 'Начать бесплатно',
      href: '/register',
      popular: false
    },
    {
      name: 'Starter',
      price: '€99',
      period: '/месяц',
      description: 'Для малого бизнеса',
      features: [
        '50 проверок в месяц',
        'Все AI системы',
        'Детальные отчёты',
        'Email + чат поддержка',
        'Экспорт в PDF'
      ],
      notIncluded: [
        'API доступ',
        'White-label'
      ],
      cta: 'Начать пробный период',
      href: '/register',
      popular: false
    },
    {
      name: 'Professional',
      price: '€399',
      period: '/месяц',
      description: 'Для растущих компаний',
      features: [
        '200 проверок в месяц',
        'Все AI системы',
        'Автоматический мониторинг',
        'API доступ (1000 запросов)',
        'Приоритетная поддержка',
        'Командный доступ (5 юзеров)',
        'Интеграция с Slack'
      ],
      notIncluded: [
        'White-label'
      ],
      cta: 'Начать пробный период',
      href: '/register',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '€1999',
      period: '/месяц',
      description: 'Для больших компаний',
      features: [
        'Безлимитные проверки',
        'Все AI системы',
        'Автоматический мониторинг',
        'API доступ (без лимитов)',
        'Dedicated support',
        'Безлимитные пользователи',
        'White-label опция',
        'Custom интеграции',
        'SLA гарантии'
      ],
      notIncluded: [],
      cta: 'Связаться с нами',
      href: '/contact',
      popular: false
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
                <Link href="/projects" className="text-gray-700 hover:text-gray-900 px-3 py-2">
                  Наши проекты
                </Link>
                <Link href="/pricing" className="text-orange-500 font-medium px-3 py-2">
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

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Выберите подходящий тариф
          </h1>
          <p className="text-xl opacity-90">
            От бесплатного плана до enterprise решений
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all ${
                plan.popular ? 'ring-2 ring-orange-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <Link
                  href={plan.href}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition ${
                    plan.popular 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Включено:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold text-gray-900 mb-4 mt-6">Не включено:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-400 mr-2">✕</span>
                            <span className="text-sm text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Annual Discount */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-6">
          <p className="text-lg font-medium text-gray-900 mb-2">
            💰 Сэкономьте 20% при годовой оплате
          </p>
          <p className="text-gray-600">
            Оплатите год вперёд и получите скидку на любой тариф
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Можно ли сменить тариф?</h3>
              <p className="text-gray-600">
                Да, вы можете повысить или понизить тариф в любое время. При повышении тарифа изменения применяются сразу, при понижении - со следующего периода оплаты.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Есть ли пробный период?</h3>
              <p className="text-gray-600">
                Да, для тарифов Starter и Professional доступен 14-дневный бесплатный пробный период. Кредитная карта не требуется.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Что происходит при превышении лимита?</h3>
              <p className="text-gray-600">
                Мы заранее уведомим вас о приближении к лимиту. При достижении лимита вы можете либо дождаться следующего месяца, либо повысить тариф.
              </p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Какие способы оплаты доступны?</h3>
              <p className="text-gray-600">
                Мы принимаем все основные банковские карты (Visa, Mastercard, American Express) и банковские переводы для Enterprise клиентов.
              </p>
            </div>
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
