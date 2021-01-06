import React, {useState, useEffect} from 'react'

import { H1, Button, Flex, Box} from '@bigcommerce/big-design';
import { Footer } from "./createSettings/styled";
import Steps from "./steps";
import Settings from "./settings";

export default function configurePage(props) {
  const [step, setStep] = useState(1);


  function increaseStep() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function decreaseStep() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="medium">
      <H1>Reports</H1>
      <Steps step={step} />
      <Settings />
      <Footer>
        <Box>
          <Button disabled={step === 1} variant="subtle" onClick={decreaseStep}>
            Cancel
          </Button>
        </Box>
        <Box>
          <Button variant="primary" onClick={increaseStep}>
            {step === 3 ? "Create channel" : "Continue"}
          </Button>
        </Box>
      </Footer>
    </Flex>
  )
}
