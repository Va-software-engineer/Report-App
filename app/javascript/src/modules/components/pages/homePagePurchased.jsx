import React, {useState, useEffect} from 'react'

import { Grid, GridItem, H1, Text, Button, Form,  FormGroup, Checkbox, Link, Message} from '@bigcommerce/big-design';

export default function HomePagePurchased(props) {
  const [checked, setChecked] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(true);
  const handleChange = () => setChecked(!checked);

  const setProfitType = (name) => {
    props.setCurrentPage(2);
    props.setCurrentProfitName(name)
  }

  return (
    <div style={{marginLeft: '7%'}}>

      { showThankYouMessage &&
      <div style={{marginTop: '50px', marginBottom: '40px', width: '95%'}}>
        <Message
          header="Thanks for purchasing the reports."
          actions={[
            {text: 'Got it', onClick: () => setShowThankYouMessage(false)},
          ]}
          messages={[
            {
              text: 'your card on file will be charged on your next scheduled billing date.'
            },
          ]}
          onClose={() => setShowThankYouMessage(false)}
        />
      </div>
      }
      <div style={{padding: '10px', marginTop: '50px'}}>
        <h3>Purchase Google Data Studio report samples</h3>
      </div>
      <Grid style={{marginBottom: '50px'}} gridColumns="repeat(3, 2fr)">
        <GridItem>
          <div style={{background: "white", width: '350px', height: '450px', border: '1px solid lightgray', borderRadius: '5px'}}>
            <div style={{background: "gray", width: '350px', height: '250px', borderRadius: '5px 5px 0px 0px'}}></div>
            <div style={{marginLeft: '5%'}}>
              <h4>Cost of Goods sold and profit</h4>
              <Link href="https://datastudio.google.com/reporting/6d69d9c2-f355-48e3-9e65-eaee5bb7d224">View sample</Link>
              <div style={{marginTop: '8px'}}>
                <Text style={{marginTop: '30px'}}>Show how much profit I am making over time relative to my cost.</Text>
                <Button variant="primary" onClick={() => setProfitType('Cost of Goods sold and profit')}>Start Configuration</Button>
              </div>
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div style={{background: "white", width: '350px', height: '450px', border: '1px solid lightgray', borderRadius: '5px'}}>
            <div style={{background: "gray", width: '350px', height: '250px', borderRadius: '5px 5px 0px 0px'}}></div>
            <div style={{marginLeft: '5%'}}>
              <h4>Revenue by State </h4>
              <Link href="https://datastudio.google.com/reporting/a68ac123-8903-432c-8704-26580f72965a">View sample</Link>
              <div style={{marginTop: '8px'}}>
                <Text style={{marginTop: '30px'}}>Show how much profit I am making over time relative to my cost.</Text>
                <Button variant="primary" onClick={() => setProfitType('Revenue by State')}>Start Configuration</Button>              </div>
            </div>
          </div>
        </GridItem>
        <GridItem>
          <div style={{background: "white", width: '350px', height: '450px', border: '1px solid lightgray', borderRadius: '5px'}}>
            <div style={{background: "gray", width: '350px', height: '250px', borderRadius: '5px 5px 0px 0px'}}></div>
            <h4 style={{marginLeft: '5%'}}></h4>
            <div style={{marginLeft: '5%'}}>
              <h4>Revenue by Product Category & Brand</h4>
              <Link href="https://datastudio.google.com/reporting/5b118e91-879b-41e6-9aa0-9340befc89ca">View sample</Link>
              <div style={{marginTop: '8px'}}>
                <Text style={{marginTop: '30px'}}>Show how much profit I am making over time relative to my cost.</Text>
                <Button variant="primary" onClick={() => setProfitType('Revenue by Product Category & Brand')}>Start Configuration</Button>
              </div>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  )
}
