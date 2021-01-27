import React, {useContext, useEffect, useState} from "react";
import {
  Panel,
  Input,
  Link,
  H2,
  Small, Text,
} from "@bigcommerce/big-design";
import {ApiService} from "../../../../services/apiServices";

export default function Step1(props) {

  useEffect(() => {
    props.setDataSetId(props.storeInfo.data_set_id)
    props.setProjectId(props.storeInfo.project_id)
  },[]);

  const updateProjectId = (id) => {
    props.setProjectId(id);
    ApiService.updateStorePropertyId({
      store_id: props.storeInfo.id,
      project_id: id
    })
  }

  const updateDataSetId = (id) => {
    props.setDataSetId(id);
    ApiService.updateStoreDataSetId({
      store_id: props.storeInfo.id,
      data_set_id: id
    })
  }

  return (
    <Panel
      margin={{ mobile: "medium", tablet: "medium", desktop: "medium" }}
    >
      <div style={{textAlign: 'left'}}>
        <Small >
          Step 1
        </Small>
        <H2>Fill in the Dataset ID in your Google Cloud Project</H2>
      </div>
      <ol>
        <li style={{margin: '5px'}}>Login to your&nbsp;
          <Link style={{color: 'black'}} href="#" target="_blank" external>
            Google BigQuery Console
          </Link>
        </li>
        <li style={{margin: '5px'}}>Click "select a project" in the top blue bar</li>
        <li style={{margin: '5px'}}>Click "Your project name" in the zzpop up</li>
      </ol>

      <h4 style={{marginBottom: '10px'}}>Google BigQuery Project ID and Dataset ID</h4>
      <div style={{width: '48%', display: 'inline-block'}}>
        <Input
          width={'100px'}
          value={props.projectId}
          onChange={(e) => {
            updateProjectId(e.target.value);
          }}
          label=""
          placeholder=""
          required
        />
      </div>
      <div style={{width: '2%', display: 'inline-block', marginLeft: '1%'}}>
        :
      </div>
      <div style={{width: '48%', display: 'inline-block', marginBottom: '10px'}}>
        <Input
          width={'100px'}
          value={props.dataSetId}
          onChange={(e) => {
            updateDataSetId(e.target.value);
          }}
          label=""
          placeholder=""
          required
        />
      </div>
      <Text>
        You can find the ID by  expanding your project and clicking on the Dataset on the "Explorer pamel, you'll find your Project ID and Dataset ID separated by colon under "Dataset info".
      </Text>
    </Panel>
  );
}
