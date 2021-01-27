import React, {useState, useEffect} from 'react'

import { AlertsManager, createAlertsManager } from '@bigcommerce/big-design';

import Main from './modules/main'

export default function App() {
  const [currentStore, setCurrentStore] = useState('');
  useEffect(() =>{
    setCurrentStore(localStorage.getItem('store_id'));
  }, [])
  return(
    <>
      {currentStore &&
      <>
        <AlertsManager manager={alertsManager}/>
        <Main currentStore={currentStore}/>
      </>
      }
    </>
  )
}
export const alertsManager = createAlertsManager();
