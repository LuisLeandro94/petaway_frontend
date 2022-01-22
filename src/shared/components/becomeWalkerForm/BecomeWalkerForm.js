import React, {useState, useEffect} from 'react'

import {Select} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import {Field, Form} from 'react-final-form'
import {Translate, withLocalize} from 'react-localize-redux'
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

const BecomeWalkerForm = ({translate}) => {
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
      AddWalker(data).then((res) => {
        if (res.success) {
          setFilledFields(!filledFields)
        }
      })
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
        title={translate('WELCOME_TEAM')}
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
            <Translate id='GO_HOME' />
          </GoToProfileBtn>
        ]}
      >
        <p>
          <Translate id='BECOME_WALKER_MODAL' />
        </p>
      </Modal>
      <FormWrapper>
        <FormTitle>
          <Translate id='WANT_TO_BE_PART' />
        </FormTitle>
        <Form
          onSubmit={BecomeWalker}
          initialValues={{...formData}}
          render={({handleSubmit, submitting, values, pristine}) => (
            <FormContainer onSubmit={handleSubmit}>
              <Selection>
                <Field name='services'>
                  {({input, meta}) => (
                    <InputWrapper>
                      <InputTitle>
                        <Translate id='WHICH_SERVICES' />
                      </InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        mode='multiple'
                        style={{width: '100%'}}
                        placeholder={translate('PLEASE_SELECT')}
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
                        <Translate id='WHAT_PETS' />
                      </InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        mode='multiple'
                        style={{width: '100%'}}
                        placeholder={translate('PLEASE_SELECT')}
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
                  <Translate id='BECOME_WALKER' />
                </SignUpButton>
              </ButtonContainer>
            </FormContainer>
          )}
        />
      </FormWrapper>
    </BodyWrapper>
  )
}

export default withLocalize(BecomeWalkerForm)
