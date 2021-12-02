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
