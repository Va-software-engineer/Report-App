import React, {useState, useEffect} from 'react'

import { Grid, GridItem, H1, Text, Button } from '@bigcommerce/big-design';

export default function HomePage(props) {
  return (
      <div>
        <Grid style={{marginTop: '50px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
          <GridItem>
            <H1 style={{width: '80%'}}>Get pre-build Google Data Studio Ecommerce reports by BigCommerce</H1>
            <Text>Get started with advanced Google Data Studio reports for a one time fee.</Text>
            <Button actionType="normal" isLoading={false} variant="primary" onClick={() => props.setCurrentPage(2)}>
              Purchase the reports
            </Button>
          </GridItem>

          <GridItem>
            <img style={{marginLeft: '200px'}} src='/bc-dashboard.png' width='500px'></img>
          </GridItem>
        </Grid>


        <Grid style={{marginTop: '100px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
          <GridItem>
            <H1 style={{width: '80%'}}>Get pre-build Google Data Studio Ecommerce reports by BigCommerce</H1>
            <Text>Get started with advanced Google Data Studio reports for a one time fee.</Text>
            <Button actionType="normal" isLoading={false} variant="primary">
              Purchase the reports
            </Button>
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
            <H1 style={{width: '80%'}}>Get pre-build Google Data Studio Ecommerce reports by BigCommerce</H1>
            <Text>Get started with advanced Google Data Studio reports for a one time fee.</Text>
            <Button actionType="normal" isLoading={false} variant="primary">
              Purchase the reports
            </Button>
          </GridItem>
        </Grid>

        <Grid style={{marginTop: '50px', marginLeft: '50px'}} gridColumns="repeat(2, 1fr)">
          <GridItem>
            <H1 style={{width: '80%'}}>Get pre-build Google Data Studio Ecommerce reports by BigCommerce</H1>
            <Text>Get started with advanced Google Data Studio reports for a one time fee.</Text>
            <Button actionType="normal" isLoading={false} variant="primary">
              Purchase the reports
            </Button>
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
                <div style={{background: "gray", width: '300px', height: '150px'}}></div>
                <div style={{background: "white",}}>
                  <h4>Test Data stored here</h4>
                </div>
              </GridItem>
              <GridItem>
                <div style={{background: "gray", width: '300px', height: '150px'}}></div>
                <div style={{background: "white",}}>
                  <h4>Test Data stored here</h4>
                </div>
              </GridItem>
              <GridItem>
                <div style={{background: "gray", width: '300px', height: '150px'}}></div>
                <div>
                  <h4>Test Data stored here</h4>
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>
      </div>
  )
}
