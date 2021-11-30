import Homepage from '../../pages/homepage/Homepage'
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
  }
]
