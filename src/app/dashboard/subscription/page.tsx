'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Free',
    price: 0,
    period: '',
    features: [
      '5 AI checks per month',
      'Basic visibility score',
      'ChatGPT only',
      'Community support',
    ],
    notIncluded: [
      'Competitor analysis',
      'Real-time monitoring',
      'API access',
    ],
    current: false,
  },
  {
    name: 'Starter',
    price: 99,
    period: '/month',
    features: [
      '50 AI checks per month',
      'Detailed reports',
      '3 AI systems',
      'Basic competitor analysis',
      'Weekly monitoring',
      'Email support',
    ],
    notIncluded: ['API access'],
    current: false,
  },
  {
    name: 'Professional',
    price: 399,
    period: '/month',
    features: [
      '200 AI checks per month',
      'Advanced analytics',
      'All AI systems',
      'Full competitor tracking',
      'Daily monitoring',
      'API access (1000 calls)',
      'Priority support',
    ],
    notIncluded: [],
    current: true,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 1999,
    period: '/month',
    features: [
      'Unlimited AI checks',
      'Custom reports',
      'All AI systems + custom',
      'Unlimited competitors',
      'Real-time monitoring',
      'Unlimited API access',
      'Dedicated support',
      'Custom integrations',
    ],
    notIncluded: [],
    current: false,
  },
]

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState('Professional')
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')
  const [paymentStep, setPaymentStep] = useState(1)
  
  // Payment form state
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    postalCode: '',
    country: '',
  })

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Format card number
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || value
      setPaymentData(prev => ({ ...prev, [name]: formatted }))
    }
    // Format expiry date
    else if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').match(/.{1,2}/g)?.join('/') || value
      setPaymentData(prev => ({ ...prev, [name]: formatted }))
    }
    // Regular update
    else {
      setPaymentData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with Stripe or another payment processor
    alert('Payment form submitted! (This is a demo - no actual payment processed)')
  }

  const annualDiscount = 0.8 // 20% discount for annual

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Subscription & Billing</h1>
          <p className="text-gray-600 mt-2">Manage your subscription and payment methods</p>
        </div>

        {/* Current Plan */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">Professional Plan</p>
              <p className="text-gray-600">€399/month • Renews on January 1, 2025</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Usage this month</p>
              <p className="text-xl font-semibold">47 / 200 checks</p>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md transition ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-md transition ${
                billingPeriod === 'annual'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              Annual <span className="text-green-600 text-sm">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              } ${plan.current ? 'relative' : ''}`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-1 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              {plan.current && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs rounded-bl-lg">
                  CURRENT
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    €{billingPeriod === 'annual' && plan.price > 0
                      ? Math.round(plan.price * annualDiscount * 12)
                      : plan.price}
                  </span>
                  <span className="text-gray-600">
                    {plan.price > 0 && billingPeriod === 'annual'
                      ? '/year'
                      : plan.period}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start opacity-50">
                      <span className="w-5 h-5 mr-2 flex-shrink-0 text-gray-400">✕</span>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => {
                    setSelectedPlan(plan.name)
                    setPaymentStep(2)
                  }}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition ${
                    plan.current
                      ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : `Choose ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Form */}
        {paymentStep === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            <p className="text-gray-600 mb-6">
              Upgrading to {selectedPlan} Plan - €
              {plans.find(p => p.name === selectedPlan)?.price}
              {billingPeriod === 'annual' ? '/year' : '/month'}
            </p>
            
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handlePaymentChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <hr className="my-6" />
              
              <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  name="billingAddress"
                  value={paymentData.billingAddress}
                  onChange={handlePaymentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={paymentData.city}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={paymentData.postalCode}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={paymentData.country}
                    onChange={handlePaymentChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="CY">Cyprus</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center mt-6">
                <input
                  type="checkbox"
                  id="saveCard"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                  Save payment method for future purchases
                </label>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setPaymentStep(1)}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Complete Payment
                </button>
              </div>
            </form>
            
            {/* Security badges */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SSL Encrypted
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Powered by</span>
                  <span className="font-semibold">Stripe</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Billing History */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Billing History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Dec 1, 2024</td>
                  <td className="px-4 py-3">Professional Plan - Monthly</td>
                  <td className="px-4 py-3">€399.00</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Paid</span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Download</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Nov 1, 2024</td>
                  <td className="px-4 py-3">Professional Plan - Monthly</td>
                  <td className="px-4 py-3">€399.00</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Paid</span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
