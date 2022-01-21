import {UserDataList, UserList} from '../mockup/Mockup'

export const Login = ({email, password}) => {
  const user = UserList.find(
    (x) => x.email === email && x.password === password
  )[0]

  if (user) {
    return true
  }
  return false
}

export const CreateAccount = ({name, surname, zip, eMail, pwd}) => {
  const User = {
    id: 2,
    email: eMail,
    password: pwd,
    jwt: 'teste',
    firstName: name,
    lastName: surname
  }

  UserList.push(User)
  const UserData = {
    id: 2,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: zip,
    country: '',
    profilePicture: '',
    birthdate: '',
    phoneNumber: ''
  }
  UserDataList.push(UserData)
}
