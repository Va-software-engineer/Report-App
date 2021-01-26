import React, {useContext, useState} from "react";
import {
  Panel,
  Link,
  H2,
  Small,
} from "@bigcommerce/big-design";

export default function Step4() {
  return (
    <Panel
      margin={{ mobile: "medium", tablet: "medium", desktop: "medium" }}
    >
      <div style={{textAlign: 'left'}}>
        <Small >
          Step 4
        </Small>
        <H2>Copy the report</H2>
      </div>
      <ol>
        <li style={{margin: '5px'}}>Open the &nbsp;
          <Link style={{color: 'black', textDecoration: 'underline'}} href="#" target="_blank" external>
            COGC sample report
          </Link>
        </li>
        <li style={{margin: '3px'}}>
          Click "Copy" button(located next to the "Share" button) in the top bar
        </li>
        <li style={{margin: '3px'}}>
          Select "the table view" which you just created as a New Data Source in the dropdown in the "Copy this report" pop up
        </li>
        <li style={{margin: '3px'}}>Click the "Copy Report"</li>
      </ol>
    </Panel>
  );
}
