import React, {useState, useEffect} from 'react'

import { H1, H2, Button, Flex, Box, Text} from '@bigcommerce/big-design';
import { Footer } from "./createSettings/styled";
import Steps from "./steps";
import ConfigurationSteps from "./steps/ConfigurationSteps";
import { ArrowBackIcon } from '@bigcommerce/big-design-icons';

export default function configurePage(props) {
  const [step, setStep] = useState(1);

  function increaseStep() {
    if (step < 5) {
      setStep(step + 1);
    }
  }

  function decreaseStep() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="medium">
      <div style={{textAlign: 'left', width: '45%', margin: '10px'}}>
        <Text>
          <ArrowBackIcon size='small' /> My reports
        </Text>
      </div>

      <H2>Configure to to access {props.currentProfitName}</H2>
      <Steps step={step} setStep={setStep}/>
      <ConfigurationSteps step={step} setStep={setStep} storeInfo={props.storeInfo} currentProfitName={props.currentProfitName}/>
      <Footer>
        <Box>
          <Button variant="subtle" onClick={() => props.setCurrentPage(1)}>
            Cancel
          </Button>

          <Button disabled={step === 1} variant="subtle" onClick={decreaseStep}>
            Back
          </Button>
        </Box>
        <Box>
          <Button variant="primary" onClick={increaseStep}>
            Continue
          </Button>
        </Box>
      </Footer>
    </Flex>
  )
}
