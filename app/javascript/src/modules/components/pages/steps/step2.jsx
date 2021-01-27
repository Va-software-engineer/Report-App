import React, {useContext, useState} from "react";
import {
  Panel,
  H2,
  H4,
  Small,
} from "@bigcommerce/big-design";
import {FileCopyIcon} from "@bigcommerce/big-design-icons";
import {alertsManager} from "../../../../app";

export default function Step2(props) {

 const copyToClipBoard = () => {
   var query = ''
   if(props.currentProfitName == 'Cost of Goods sold and profit'){
     query = `select
bc_order.order_id,
bc_order.order_created_date_time,
bc_order.order_status,
bc_order_line_items.total_inc_tax,
bc_order_line_items.product_id,
bc_product.cost_price,
bc_order_line_items.total_inc_tax - bc_product.cost_price as
profit,
bc_product.product_name,
bc_product.sku
from
${props.projectId}.${props.dataSetId}.bc_order
JOIN pearson-bicycles-
project.${props.dataSetId}.bc_order_line_items
ON bc_order.order_id = bc_order_line_items.order_id
JOIN ${props.projectId}.${props.dataSetId}.bc_product
ON bc_order_line_items.product_id = bc_product.product_id;`
   } else if(props.currentProfitName == 'Revenue by State'){
     `select
bc_order.order_id,
bc_order.order_created_date_time,
bc_order.order_status,
bc_order.total_including_tax,
bc_customer_addresses.customer_id,
bc_customer_addresses.city,
bc_customer_addresses.state,bc_customer_addresses.postal_code,
bc_customer_addresses.country_code
from
${props.projectId}.${props.dataSetId}.bc_order
JOIN pearson-bicycles-
project.${props.projectId}.bc_customer_addresses
ON bc_order.customer_id = bc_customer_addresses.customer_id;`
   } else if (props.currentProfitName == 'Revenue by Product Category & Brand'){
     query = `select
orders.order_id,
orders.order_created_date_time,
orders.order_status,
line_items.total_inc_tax,
line_items.product_id,
category.category_name
from
${props.projectId}.${props.dataSetId}.bc_order as
orders
JOIN pearson-bicycles-
project.${props.dataSetId}.bc_order_line_items as line_items
ON orders.order_id = line_items.order_id
JOIN pearson-bicycles-
project.${props.dataSetId}.bc_product_category as category
ON line_items.product_id = category.product_id;`
   }
   navigator.clipboard.writeText(query)

   AddAlert('Success', 'Query Copied to Clip Board!', 'success')
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
    <Panel
      margin={{ mobile: "medium", tablet: "medium", desktop: "medium" }}
    >
      <div style={{textAlign: 'left'}}>
        <Small >
          Step 2
        </Small>
        <H2>Create a new BigQuery view</H2>
      </div>
      <ol>
        <li style={{margin: '5px'}}>Click "COMPOSE NEW QUERY" (located on the right hand side of the screen)
        </li>
        <li style={{margin: '5px'}}>Copy the sql below and paste it to the editor panel
          <div style={{marginTop: '20px', width: '100%', background: '#f6f7fc'}}>
            <span onClick={ () => copyToClipBoard()} style={{float: 'right', margin: '5px', color: '#3C64F4', cursor: 'pointer', fontSize: '12px'}}><FileCopyIcon size={14} />copy the sql</span>
            <div style={{padding: '10px 10px 20px 20px'}}>
              select
              <p style={{marginLeft: '20px', marginTop: '0px'}}>
                bc_order.order_id,
                bc_order.order_created_date_time,
                bc_order.order_status,
                bc_order_line_items.total_inc_tax,
                bc_order_line_items.product_id,
                bc_product.cost_price,
                bc_order_line_items.total_inc_tax - bc_product.cost_price as
              </p>
              profit,
              <p style={{marginLeft: '20px', marginTop: '0px'}}>
                bc_product.product_name,
                <br></br>
                bc_product.sku
              </p>
              from
              <p style={{marginLeft: '20px', marginTop: '0px'}}>
                {props.projectId}.{props.dataSetId}.bc_order
                JOIN pearson-bicycles-
              </p>
              project.{props.dataSetId}bc_order_line_items
              <p style={{marginLeft: '20px', marginTop: '0px'}}>
                <p style={{marginLeft: '20px', marginTop: '0px'}}>
                  {props.projectId}.{props.dataSetId}.bc_order
                  JOIN pearson-bicycles-
                </p>
              </p>
            </div>
          </div>
        </li>
        <li>
          Click "Save" button (located next to "Run" button) and select "Save View"
        </li>
        <li>
          Chose "your dataset" as the saved Dataset ID in the "Save View" pop up
        </li>
        <li>
          Give a table name and then click "Save" button
        </li>
      </ol>

      <H4>Once you can see the new created view saved, you can proceed to the next step</H4>
    </Panel>
  );
}
