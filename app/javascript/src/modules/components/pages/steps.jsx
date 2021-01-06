import React, {useState, Fragment, useEffect} from 'react'
import { Flex } from "@bigcommerce/big-design";
import {
  CheckCircleIcon,
  RemoveCircleOutlineIcon,
} from "@bigcommerce/big-design-icons";
import { Step, StepDivider } from "./createSettings/styled";

const steps = ["1", "2", "3"];

export default function Steps(props) {
  const step = props;
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
            {index + 1 == 1 ? (
              <CheckCircleIcon color="success" />
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

