import React, {useEffect, useState} from 'react'

import {GetAllPets} from '../../infra/requests/PetsRequests'
import {GetAllServices} from '../../infra/requests/ServicesRequests'
import SearchFilters from '../../shared/components/searchForm/SearchForm'
import SearchResults from '../../shared/components/searchResults/SearchResults'

const Search = () => {
  const [petList, setPetList] = useState([])
  const [serviceList, setServiceList] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    GetAllPets().then((res) => setPetList(res.data.result))

    GetAllServices().then((res) => setServiceList(res.data.result))
  }, [])

  console.log(searchResult)

  return (
    <>
      <SearchFilters
        pets={petList}
        services={serviceList}
        setSearchResult={setSearchResult}
      />
      <SearchResults searchResult={searchResult} />
    </>
  )
}

export default Search
