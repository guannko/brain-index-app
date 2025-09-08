import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (data: {
    name: string
    email: string
    password: string
    company?: string
  }) => api.post('/auth/register', data),
  
  logout: () => api.post('/auth/logout'),
  
  getProfile: () => api.get('/auth/profile'),
}

export const analysisAPI = {
  create: (brandName: string) =>
    api.post('/analyses', { brandName }),
  
  getAll: () => api.get('/analyses'),
  
  getById: (id: string) => api.get(`/analyses/${id}`),
  
  delete: (id: string) => api.delete(`/analyses/${id}`),
}

export const subscriptionAPI = {
  getPlans: () => api.get('/subscriptions/plans'),
  
  getCurrentPlan: () => api.get('/subscriptions/current'),
  
  updatePlan: (planId: string) =>
    api.post('/subscriptions/update', { planId }),
  
  cancelSubscription: () => api.post('/subscriptions/cancel'),
  
  getBillingHistory: () => api.get('/subscriptions/billing-history'),
}

export const adminAPI = {
  getStats: () => api.get('/admin/stats'),
  
  getUsers: (params?: {
    page?: number
    limit?: number
    search?: string
  }) => api.get('/admin/users', { params }),
  
  updateUser: (userId: string, data: any) =>
    api.put(`/admin/users/${userId}`, data),
  
  deleteUser: (userId: string) =>
    api.delete(`/admin/users/${userId}`),
  
  getAnalyses: () => api.get('/admin/analyses'),
  
  getRevenue: (period: 'day' | 'week' | 'month' | 'year') =>
    api.get(`/admin/revenue/${period}`),
}

export default api
