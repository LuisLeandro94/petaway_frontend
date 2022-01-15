import Search from '../../pages/search/Search'
import Services from '../../pages/services/Services'
import UserProfile from '../../pages/userProfile/UserProfile'
import BecomeWalkerForm from '../../shared/components/becomeWalkerForm/BecomeWalkerForm'
import SignUpForm from '../../shared/components/signupForm/SignupForm'

export default [
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
  },
  {
    path: '/profile',
    component: UserProfile,
    isAuthenticated: false,
    header: true,
    role: 1
  },
  {
    path: '/becomeWalker',
    component: BecomeWalkerForm,
    isAuthenticated: false,
    header: true,
    role: 1
  },
  {
    path: '/search',
    component: Search,
    isAuthenticated: false,
    header: true,
    role: 1
  }
]
