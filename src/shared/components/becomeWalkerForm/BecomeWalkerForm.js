import React, {useState, useEffect} from 'react'

import {Select} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import {Field, Form} from 'react-final-form'
import {useHistory} from 'react-router'

import {GetAllPets} from '../../../infra/requests/PetsRequests'
import {GetAllServices} from '../../../infra/requests/ServicesRequests'
import {AddWalker} from '../../../infra/requests/WalkerRequests'
import {GoToProfileBtn} from '../header/HeaderStyles'
import {
  BodyWrapper,
  ButtonContainer,
  FormContainer,
  FormTitle,
  FormWrapper,
  InputTitle,
  InputWrapper,
  Selection,
  SignUpButton
} from './BecomeWalkerFormStyles'

const validate = (values) => {
  if (!values) {
    return console.log('ERRO')
  }
  return console.log(values)
}

const BecomeWalkerForm = () => {
  const [filledFields, setFilledFields] = useState(false)
  const [petList, setPetList] = useState([])
  const [servicesList, setServicesList] = useState([])
  const history = useHistory()

  useEffect(() => {
    GetAllPets().then((res) => setPetList(res.data.result))
    GetAllServices().then((res) => setServicesList(res.data.result))
  }, [])

  const BecomeWalker = (values) => {
    try {
      const data = {
        services: values.services.map(Number),
        pets: values.pets.map(Number)
      }
      const response = AddWalker(data)

      if (response.success) {
        setFilledFields(!filledFields)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const redirectToHome = () => {
    setFilledFields(!filledFields)
    history.push('/')
  }

  const servicesChildren = servicesList.map((service) => (
    <Select.Option key={service.id}>{service.type}</Select.Option>
  ))

  const petsChildren = petList.map((pet) => (
    <Select.Option key={pet.id}>{pet.type}</Select.Option>
  ))

  const formData = {
    services: [],
    pets: []
  }

  return (
    <BodyWrapper>
      <Modal
        title='Welcome to our team!'
        visible={filledFields}
        onOk={redirectToHome}
        footer={[
          <GoToProfileBtn
            key='submit'
            type='primary'
            onClick={redirectToHome}
            style={{
              backgroundColor: '#00A6AA',
              borderColor: '#00A6AA'
            }}
          >
            Go To Home
          </GoToProfileBtn>
        ]}
      >
        <p>
          Thank you for becoming a member of our Walker community! Now, you
          can start receiving service requests and earning money to do what
          you love the most: taking care of pets! 💚
        </p>
      </Modal>
      <FormWrapper>
        <FormTitle>Want to be a part of our team of Walkers?</FormTitle>
        <Form
          onSubmit={BecomeWalker}
          validate={validate}
          initialValues={{...formData}}
          render={({handleSubmit, submitting, values, pristine}) => (
            <FormContainer onSubmit={handleSubmit}>
              <Selection>
                <Field name='services'>
                  {({input, meta}) => (
                    <InputWrapper>
                      <InputTitle>
                        Which services do you want to provide?
                      </InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        mode='multiple'
                        style={{width: '100%'}}
                        placeholder='Please select'
                        defaultValue={[]}
                        allowClear
                      >
                        {servicesChildren}
                      </Select>
                    </InputWrapper>
                  )}
                </Field>
              </Selection>
              <Selection>
                <Field name='pets'>
                  {({input, meta}) => (
                    <InputWrapper>
                      <InputTitle>
                        What kind of pets are you interested in?
                      </InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        mode='multiple'
                        style={{width: '100%'}}
                        placeholder='Please select'
                        defaultValue={[]}
                        allowClear
                      >
                        {petsChildren}
                      </Select>
                    </InputWrapper>
                  )}
                </Field>
              </Selection>
              <ButtonContainer>
                <SignUpButton
                  type='submit'
                  disabled={submitting || pristine}
                >
                  Become a Walker!
                </SignUpButton>
              </ButtonContainer>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </FormContainer>
          )}
        />
      </FormWrapper>
    </BodyWrapper>
  )
}

export default BecomeWalkerForm
