import LoginPage from '../../pages/auth/LoginPage'
import RecoverPage from '../../pages/auth/RecoverPage'
import Homepage from '../../pages/homepage/Homepage'

export default [
  {
    path: '/',
    component: Homepage,
    isAuthenticated: false,
    header: true,
    role: 1
  },
  {
    path: '/login',
    component: LoginPage,
    isAuthenticated: false
  },
  {
    path: '/recover',
    component: RecoverPage,
    isAuthenticated: false
  }
]
