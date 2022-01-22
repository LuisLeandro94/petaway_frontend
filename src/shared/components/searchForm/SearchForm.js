import React from 'react'

import {Select, Input, Radio} from 'antd'
import {PropTypes} from 'prop-types'
import {Field, Form} from 'react-final-form'
import {Translate, withLocalize} from 'react-localize-redux'

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
  {image: Calendar, text: 'ONE_TIME'},
  {image: Repeat, text: 'REPEAT_WEEKLY'}
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
  setRequestService,
  showFilters,
  setShowFilters,
  translate
}) => {
  const servicesChildren = services.map((service) => (
    <Select.Option key={service.id}>{service.type}</Select.Option>
  ))

  const SearchWalkers = (values) => {
    try {
      const data = {
        services: values.services,
        pets: values.pets,
        city: values.city
      }
      setRequestService(parseInt(data.services, 10))
      setRequestPet(data.pets)
      GetAllWalkers(data).then((res) => setSearchResult(res.data.result))
      setShowFilters(false)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <FilterWrapper showFilters={showFilters}>
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
                      <InputTitle>
                        <Translate id='SERVICE_TYPE' />
                      </InputTitle>
                      <Select
                        {...input}
                        meta={meta}
                        placeholder={translate('CHOOSE_SERVICE')}
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
                        <Translate id='WHERE_THIS_SERVICE' />
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
                        <Translate id='RECURSION' />
                      </InputTitle>
                      <Radio.Group
                        {...input}
                        defaultValue={recursion[0].text}
                        meta={meta}
                      >
                        {recursion.map((rec, index) => (
                          <Radio.Button
                            value={translate(rec.text)}
                            key={index}
                          >
                            <RecursionImage src={rec.image} />
                            <RecursionText>
                              {translate(rec.text)}
                            </RecursionText>
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
                        <Translate id='PET_TYPE' />
                      </InputTitle>
                      <Radio.Group {...input} meta={meta}>
                        {pets.map((pet, index) => (
                          <Radio value={pet.id} key={index}>
                            {pet.type}
                          </Radio>
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
                        <Translate id='HOW_MANY_WALKS' />
                      </InputTitle>
                      <Radio.Group {...input} meta={meta}>
                        {times.map((time, index) => (
                          <Radio.Button value={time} key={index}>
                            {time}
                          </Radio.Button>
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
                  <Translate id='SEARCH' />
                </SignUpButton>
              </ButtonContainer>
            </FormContainer>
          )}
        />
      </FilterWrapper>
    </>
  )
}

SearchFilters.propTypes = {
  pets: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
  setSearchResult: PropTypes.func.isRequired,
  setRequestPet: PropTypes.func.isRequired,
  setRequestService: PropTypes.func.isRequired
}

export default withLocalize(SearchFilters)
