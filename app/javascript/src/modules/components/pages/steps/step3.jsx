import React, {useContext, useState} from "react";
import {
  Box,
  Panel,
  Input,
  Select,
  Radio,
  Link,
  H2,
  H4,
  Small, Text,
} from "@bigcommerce/big-design";
import {FileCopyIcon} from "@bigcommerce/big-design-icons";

const options = [
  { value: "mainStreet", content: "Main Street" },
  { value: "2ndStreet", content: "2nd Street" },
];

export default function Step3() {
  return (
    <Panel
      margin={{ mobile: "medium", tablet: "medium", desktop: "medium" }}
    >
      <div style={{textAlign: 'left'}}>
        <Small >
          Step 3
        </Small>
        <H2>Create new data source on Google Data Studio</H2>
      </div>
      <ol>
        <li style={{margin: '5px'}}>Navigate to&nbsp;
          <Link style={{color: 'black', textDecoration: 'underline'}} href="#" target="_blank" external>
            Google Data Studio
          </Link>
        </li>
        <li style={{margin: '3px'}}>
          Click "Create" button(located on the left hand side of the screen) and select "Data Source"
        </li>
        <li style={{margin: '3px'}}>
          Select "BigQuery" under the "Google Connectors" section
        </li>
        <li style={{margin: '3px'}}>
          Select "your project" in the "Project" panel
        </li>
        <li style={{margin: '3px'}}>
          Select "your dataset" in the "Dataset" panel
        </li>
        <li style={{margin: '3px'}}>
          Select "the table view" which you just created in the "Table" panel
        </li>
        <li style={{margin: '3px'}}>
          Click the blue "CONNECT" button (located on the right hand side of the screen)
        </li>
        <li style={{margin: '3px'}}>
          Set the field types correctly (it'll change based on different reports)
        </li>
        <li style={{margin: '3px'}}>
          Click the Google Data Studio icon at the top left to navigate back to the home page
        </li>
      </ol>
    </Panel>
  );
}
