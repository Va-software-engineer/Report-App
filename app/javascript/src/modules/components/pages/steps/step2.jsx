import React, {useContext, useState} from "react";
import {
  Panel,
  H2,
  H4,
  Small,
} from "@bigcommerce/big-design";
import {FileCopyIcon} from "@bigcommerce/big-design-icons";

export default function Step2() {
  const { channelName, setChannelName } = useState('Sample App');

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
            <span style={{float: 'right', margin: '5px', color: '#3C64F4', cursor: 'pointer', fontSize: '12px'}}><FileCopyIcon size={14} />copy the sql</span>
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
                pearson-bicycles-project.bc_bq_integration_v1.bc_order
                JOIN pearson-bicycles-
              </p>
              project.bc_bq_integration_v1.bc_order_line_items
              <p style={{marginLeft: '20px', marginTop: '0px'}}>
                <p style={{marginLeft: '20px', marginTop: '0px'}}>
                  pearson-bicycles-project.bc_bq_integration_v1.bc_order
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
