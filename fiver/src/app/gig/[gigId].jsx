import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { GET_GIG_DATA } from '../utils/constants';
import { reducerCases } from '../context/constants';
import Details from '../components/Gigs/Details';
import Pricing from '../components/Gigs/Pricing';

function GigsPage() {
  const router = useRouter();
  const { gigId } = router.query;
  const [{ userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const {
          data: { gig },
        } = await axios.get(`${GET_GIG_DATA}/${gigId}`);
        dispatch({type:reducerCases.SET_GIG_DATA,gigData:gig})
      } catch (err) {
        console.log(err);
      }
    };
    if (gigId){
        fetchGigData(

        )
    }

    
  }, [gigId, dispatch]);

  return <div className='grid grid-cols-3 mx-32 gap-20'>
    <Details />
    <Pricing />
  </div>;
}

export default GigsPage;
