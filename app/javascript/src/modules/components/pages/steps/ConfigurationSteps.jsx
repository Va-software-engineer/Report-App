import React, {useContext, useState} from "react";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

export default function ConfigurationSteps(props) {
  return (
    <div style={{width: '60%', marginTop: '50px', marginBottom: '100px'}}>
      { props.step == 1 &&
      <Step1 step={props.step} setStep={props.setStep}/>
      }
      { props.step == 2 &&
      <Step2 step={props.step} setStep={props.setStep}/>
      }
      { props.step == 3 &&
      <Step3 step={props.step} setStep={props.setStep}/>
      }
      { props.step == 4 &&
      <Step4 step={props.step} setStep={props.setStep}/>
      }
      { props.step == 5 &&
      <Step4 step={props.step} setStep={props.setStep}/>
      }
    </div>
  );
}
