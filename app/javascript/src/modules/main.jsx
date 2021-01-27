import React, {useState, useEffect} from 'react'

import {ApiService} from '../services/apiServices';

import Loader from "./components/common/Loader";
import HomePage from "./components/pages/homePage";
import HomePagePurchased from "./components/pages/homePagePurchased";
import ConfigurePage from "./components/pages/configurePage";

export default function Main(props) {
  const [storeInfo, setStoreInfo] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProfitName, setCurrentProfitName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    document.body.style.backgroundColor = 'white'//'#f6f7f9'
    document.body.style.fontFamily = 'Source Sans Pro,Helvetica Neue,arial,sans-serif'
  })

  useEffect(() => {
    ApiService.getStoreDetails({store_id: props.currentStore})
      .then(function (response) {
        setStoreInfo(response.data.store);
        if(response.data.store.is_paid != null){
          setCurrentPage(3)
        } else{
          setCurrentPage(1)
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        AddAlert('Error', 'Unable To Fetch Data, Please Try Again!', 'error')
      })
  },[]);

  return (
    <>
      { loading && <Loader />
      }
      { !loading &&
      <>
        <div>
          <div style={{marginLeft: '50px', borderBottom: '1px solid lightgray'}}>
            <h1 style={{color: '#313440',
              fontSize: '1.5rem',
              fontWeight: 400,
              lineHeight: '2rem'}}>
              Google Data Studio
            </h1>
          </div>
        </div>
        {currentPage == 1 &&
        <HomePage
          setCurrentPage={setCurrentPage}
          storeInfo={storeInfo}
        />
        }
        {currentPage == 2 &&
        <ConfigurePage
          setCurrentPage={setCurrentPage}
          currentProfitName={currentProfitName}
          storeInfo={storeInfo}
        />
        }
        {currentPage == 3 &&
        <HomePagePurchased
          setCurrentPage={setCurrentPage}
          setCurrentProfitName={setCurrentProfitName}
          storeInfo={storeInfo}
        />
        }
      </>
      }
    </>
  )
}
