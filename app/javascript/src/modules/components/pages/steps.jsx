import React, {useState, Fragment, useEffect} from 'react'
import { Flex, Box } from "@bigcommerce/big-design";
import {
  CheckCircleIcon,
  RemoveCircleOutlineIcon,
} from "@bigcommerce/big-design-icons";
import { Step, StepDivider } from "./createSettings/styled";

const steps = ["QB dataset", "Create View", "Create Data source", "Copy report"];

export default function Steps(props) {
  const { step }= props;
  return (
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="center"
      marginTop="medium"
    >
      {steps.map((stepText, index) => (
        <Fragment key={stepText}>
          <Step>
            { index + 1 < step ? (
              <CheckCircleIcon color="primary" />
            ) : (
              <RemoveCircleOutlineIcon
                color={index + 1 === step ? "primary" : "secondary"}
              />
            )}
            {stepText}
          </Step>
          {index !== steps.length - 1 && <StepDivider />}
        </Fragment>
      ))}
    </Flex>
  );
}

