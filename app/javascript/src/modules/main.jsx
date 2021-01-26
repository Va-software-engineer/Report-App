import React, {useState, useEffect} from 'react'

import { Grid, GridItem, H1, Text, Button } from '@bigcommerce/big-design';

import HomePage from "./components/pages/homePage";
import HomePagePurchased from "./components/pages/homePagePurchased";
import ConfigurePage from "./components/pages/configurePage";

export default function Main() {
  const [currentStore, setCurrentStore] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() =>{
    setCurrentStore(localStorage.getItem('store_id'));
  }, [])

  useEffect(() =>{
    document.body.style.backgroundColor = 'white'//'#f6f7f9'
    document.body.style.fontFamily = 'Source Sans Pro,Helvetica Neue,arial,sans-serif'
  })

  return (
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
      />
      }
      {currentPage == 2 &&
      <ConfigurePage
        setCurrentPage={setCurrentPage}
      />
      }
      {currentPage == 3 &&
      <HomePagePurchased
        setCurrentPage={setCurrentPage}
      />
      }
    </>
  )
}
