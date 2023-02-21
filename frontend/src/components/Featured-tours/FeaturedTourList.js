import React from 'react'
import TourCard from '../../shared/TourCard'

import {Col} from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import {BASE_URL} from './../../utils/config'


function FeaturedTourList() {

  const {data: featuredTours, loading, error}= useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

  // console.log(featuredTours)
  return (
    <>
    {
      loading && <h4>loading.......</h4>
    }
     {
      error && <h4>{error}</h4>
    }

    { !loading && !error && featuredTours?.map(tour=>(
            <Col lg='3' className='mb-4' md="6" sm="6" key={tour.id}><TourCard tour={tour}></TourCard></Col>
        ))
    }</>
  )
}

export default FeaturedTourList