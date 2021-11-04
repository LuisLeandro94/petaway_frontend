import LoginPage from '../../pages/auth/LoginPage'
import RecoverPage from '../../pages/auth/RecoverPage'

export default [
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
