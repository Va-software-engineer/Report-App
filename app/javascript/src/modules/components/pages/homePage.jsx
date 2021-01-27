import React, {useState, useEffect} from 'react'

import { Grid, GridItem, H1, Text, Button, Form,  FormGroup, Checkbox, Link, Message} from '@bigcommerce/big-design';
import {ApiService} from '../../../services/apiServices';
import {alertsManager} from "../../../app";

export default function HomePage(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  const purchaseReport = () => {
    if(!checked){
      AddAlert('Error', 'Please check the payment check box!', 'error')
      return
    }
    props.setCurrentPage(3);
    ApiService.updateStorePayment({store_id: props.storeInfo.id})
    AddAlert('Success', 'Payment Successfully paid!', 'success')

  }

  function AddAlert(title, details, type) {
    const alert = {
      header: title,
      messages: [
        {
          text: details,
        },
      ],
      type: type,
      onClose: () => null,
      autoDismiss: true
    }
    alertsManager.add(alert);
  }

  return (
    <div>
      <Grid style={{marginTop: '50px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
        <GridItem>
          <H1 style={{width: '100%'}}>Get pre-build Google Data Studio Ecommerce reports by BigCommerce</H1>
          <Text>Get started with advanced Google Data Studio reports for a one time fee.</Text>
          <Button actionType="normal" isLoading={false} variant="primary" onClick={ () => purchaseReport()}>
            Purchase the reports
          </Button>
        </GridItem>

        <GridItem>
          <img style={{marginLeft: '200px'}} src='/bc-dashboard.png' width='500px'></img>
        </GridItem>
      </Grid>


      <Grid style={{marginTop: '100px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
        <GridItem>
          <div style={{marginTop: '10%'}}>
            <H1 style={{width: '80%'}}>Cost of Goods sold & Profit</H1>
            <Text>Show how much profit you are making over time relative to your cost.</Text>
          </div>
        </GridItem>

        <GridItem>
          <div style={{background: "gray", width: '400px', height: '250px', marginLeft: '150px'}}></div>
        </GridItem>
      </Grid>

      <Grid style={{marginTop: '50px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
        <GridItem>
          <div style={{background: "gray", width: '400px', height: '250px'}}></div>
        </GridItem>

        <GridItem>
          <div style={{marginTop: '10%'}}>
            <H1 style={{width: '80%'}}>Revenue by State</H1>
            <Text>Show how much profit you are making over time relative to your cost.</Text>
          </div>
        </GridItem>
      </Grid>

      <Grid style={{marginTop: '50px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
        <GridItem>
          <div style={{marginTop: '10%'}}>
            <H1 style={{width: '80%'}}>Revenue by Product Category & Brand</H1>
            <Text>Show how much profit you are making over time relative to your cost.</Text>
          </div>
        </GridItem>

        <GridItem>
          <div style={{background: "gray", width: '400px', height: '250px', marginLeft: '150px'}}></div>
        </GridItem>
      </Grid>


      <div style={{border: '1px solid lightgray', marginTop: '100px'}}>
        <div style={{margin: '10px', background: '#f6f7f9'}} >
          <div style={{textAlign: "center", padding: '10px'}}>
            <h3>Ready to Grow your business with advanced reports?</h3>
            <p>
              Get the Cost of Goods Sold & Profit report, Revenue by State report and Revenue
              <br></br> by Product Category & Brand Report in Google Data Studio for a one time fee by one click.
            </p>
          </div>
          <Grid style={{marginLeft: '7%'}} gridColumns="repeat(3, 2fr)">
            <GridItem>
              <div style={{background: "white", width: '300px', height: '250px', border: '1px solid lightgray', borderRadius: '5px'}}>
                <div style={{background: "gray", width: '300px', height: '150px', borderRadius: '5px 5px 0px 0px'}}></div>
                <h4 style={{marginLeft: '5%'}}>Cost of Goods sold and profit</h4>
              </div>
            </GridItem>
            <GridItem>
              <div style={{background: "white", width: '300px', height: '250px', border: '1px solid lightgray', borderRadius: '5px'}}>
                <div style={{background: "gray", width: '300px', height: '150px', borderRadius: '5px 5px 0px 0px'}}></div>
                <h4 style={{marginLeft: '5%'}}>Revenue by State </h4>
              </div>
            </GridItem>
            <GridItem>
              <div style={{background: "white", width: '300px', height: '250px', border: '1px solid lightgray', borderRadius: '5px'}}>
                <div style={{background: "gray", width: '300px', height: '150px', borderRadius: '5px 5px 0px 0px'}}></div>
                <h4 style={{marginLeft: '5%'}}>Revenue by Product Category & Brand</h4>
              </div>
            </GridItem>
          </Grid>

          <div>
            <div style={{width: '35%', margin: 'auto', marginTop: '30px'}}>
              <Form>
                <FormGroup>
                  <Checkbox width={'100px'} label={'I understand that my payment method on file will be charged.'} checked={checked} onChange={handleChange} />
                </FormGroup>
              </Form>
              <div style={{marginTop: '20px', textAlign: 'center'}}>
                <Link href="https://www.bigcommerce.com/terms/" target={'_blank'}>
                  See full terms and conditions
                </Link>

                <Message type="warning" messages={[{ text: "Please check the box so we that you understand you'll be charged for a one time fee." }]} marginVertical="medium" />
                <Button actionType="normal" isLoading={false} variant="primary" onClick={() => purchaseReport()}>
                  Purchase the reports for 299$
                </Button>
              </div>
            </div>

            <div style={{width: '45%', margin: 'auto'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
