import Search from '../../pages/search/Search'
import UserProfile from '../../pages/userProfile/UserProfile'
import BecomeWalkerForm from '../../shared/components/becomeWalkerForm/BecomeWalkerForm'

export default [
  {
    path: '/profile',
    component: UserProfile,
    isAuthenticated: true,
    header: true,
    role: 1
  },
  {
    path: '/becomeWalker',
    component: BecomeWalkerForm,
    isAuthenticated: true,
    header: true,
    role: 1
  },
  {
    path: '/search',
    component: Search,
    isAuthenticated: true,
    header: true,
    role: 1
  }
]
