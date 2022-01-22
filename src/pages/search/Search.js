import React, {useEffect, useState} from 'react'

import Modal from 'antd/lib/modal/Modal'
import {Translate, withLocalize} from 'react-localize-redux'
import {useHistory} from 'react-router'

import {GetAllPets} from '../../infra/requests/PetsRequests'
import {GetAllServices} from '../../infra/requests/ServicesRequests'
import {GoToProfileBtn} from '../../shared/components/header/HeaderStyles'
import SearchFilters from '../../shared/components/searchForm/SearchForm'
import SearchResults from '../../shared/components/searchResults/SearchResults'

const Search = ({translate}) => {
  const [petList, setPetList] = useState([])
  const [serviceList, setServiceList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [requestPet, setRequestPet] = useState(0)
  const [requestService, setRequestService] = useState(0)
  const [resultState, setResultState] = useState(false)
  const history = useHistory()

  useEffect(() => {
    GetAllPets().then((res) => setPetList(res.data.result))

    GetAllServices().then((res) => setServiceList(res.data.result))
  }, [])

  console.log(searchResult)

  const redirectToHome = () => {
    setResultState(!resultState)
    history.push('/')
  }

  return (
    <>
      <Modal
        title={translate('REQUEST_SENT')}
        visible={resultState}
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
          <Translate id='REQUEST_SENT_ANSWER' />
        </p>
      </Modal>
      <SearchFilters
        pets={petList}
        services={serviceList}
        setRequestPet={setRequestPet}
        setRequestService={setRequestService}
        setSearchResult={setSearchResult}
      />
      <SearchResults
        searchResult={searchResult}
        requestPet={requestPet}
        requestService={requestService}
        setResultState={setResultState}
        resultState={resultState}
      />
    </>
  )
}

export default withLocalize(Search)
