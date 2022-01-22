import LoginPage from '../../pages/auth/LoginPage'
import RecoverPage from '../../pages/auth/RecoverPage'
import Homepage from '../../pages/homepage/Homepage'
import Services from '../../pages/services/Services'
import SignUpForm from '../../shared/components/signupForm/SignupForm'

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
  },
  {
    path: '/signup',
    component: SignUpForm,
    isAuthenticated: false,
    header: true,
    role: 1
  },
  {
    path: '/services',
    component: Services,
    isAuthenticated: false,
    header: true,
    role: 1
  }
]
