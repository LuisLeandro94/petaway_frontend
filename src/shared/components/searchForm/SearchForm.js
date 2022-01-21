import React from 'react'

import {Select, Input, Radio} from 'antd'
import {Field, Form} from 'react-final-form'

import Calendar from '../../../assets/Calendar.png'
import Repeat from '../../../assets/Repeat.png'
import {GetAllWalkers} from '../../../infra/requests/WalkerRequests'
import {
  FilterWrapper,
  FormContainer,
  Selection,
  InputWrapper,
  InputTitle,
  ButtonContainer,
  SignUpButton,
  RecursionImage,
  RecursionText,
  SecondarySelection
} from './SearchFormStyles'

const recursion = [
  {image: Calendar, text: 'One Time'},
  {image: Repeat, text: 'Repeat Weekly'}
]

const times = ['1', '2', '3+']

const validate = (values) => {
  if (!values) {
    return console.log('ERRO')
  }
  return console.log(values)
}

const formData = {
  service: '',
  city: ''
}

const SearchFilters = ({
  pets,
  services,
  setSearchResult,
  setRequestPet,
  setRequestService
}) => {
  const servicesChildren = services.map((service) => (
    <Select.Option key={service.id}>{service.type}</Select.Option>
  ))

  const SearchWalkers = (values) => {
    try {
      console.log(values)
      const data = {
        services: values.services,
        pets: values.pets,
        city: values.city
      }
      setRequestService(parseInt(data.services, 10))
      setRequestPet(data.pets)
      const response = GetAllWalkers(data).then((res) =>
        setSearchResult(res.data.result)
      )
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <FilterWrapper>
        <Form
          onSubmit={SearchWalkers}
          validate={validate}
          initialValues={{...formData}}
          render={({handleSubmit, submitting, pristine}) => (
            <FormContainer onSubmit={handleSubmit}>
              <Selection>
                <Field name='services'>
                  {({input, meta}) => (
                    <InputWrapper>
                      <InputTitle>Service Type</InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        placeholder='Choose your service'
                      >
                        {servicesChildren}
                      </Select>
                    </InputWrapper>
                  )}
                </Field>
              </Selection>
              <Selection>
                <Field name='city'>
                  {({input, meta}) => (
                    <InputWrapper>
                      <InputTitle>
                        Where do you want this service?
                      </InputTitle>
                      <Input {...input} meta={meta} placeholder='City' />
                    </InputWrapper>
                  )}
                </Field>
              </Selection>
              <Selection>
                <Field name='recursion'>
                  {({input, meta}) => (
                    <>
                      <InputTitle>
                        How often do you need dog walking?
                      </InputTitle>
                      <Radio.Group
                        {...input}
                        defaultValue={recursion[0].text}
                      >
                        {recursion.map((rec) => (
                          <Radio.Button value={rec.text}>
                            <RecursionImage src={rec.image} />
                            <RecursionText>{rec.text}</RecursionText>
                          </Radio.Button>
                        ))}
                      </Radio.Group>
                    </>
                  )}
                </Field>
              </Selection>
              <Selection>
                <Field name='pets'>
                  {({input, meta}) => (
                    <>
                      <InputTitle style={{paddingTop: '10px'}}>
                        Pet Type(s)
                      </InputTitle>
                      <Radio.Group {...input}>
                        {pets.map((pet) => (
                          <Radio value={pet.id}>{pet.type}</Radio>
                        ))}
                      </Radio.Group>
                    </>
                  )}
                </Field>
              </Selection>
              <SecondarySelection>
                <Field name='time'>
                  {({input, meta}) => (
                    <>
                      <InputTitle style={{paddingTop: '10px'}}>
                        How many walks per day?
                      </InputTitle>
                      <Radio.Group {...input}>
                        {times.map((time) => (
                          <Radio.Button value={time}>{time}</Radio.Button>
                        ))}
                      </Radio.Group>
                    </>
                  )}
                </Field>
              </SecondarySelection>
              <ButtonContainer>
                <SignUpButton
                  type='submit'
                  disabled={submitting || pristine}
                >
                  Search
                </SignUpButton>
              </ButtonContainer>
            </FormContainer>
          )}
        />
      </FilterWrapper>
    </>
  )
}

export default SearchFilters
