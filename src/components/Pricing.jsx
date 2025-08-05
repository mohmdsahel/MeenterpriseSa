import Section from "./Section";
import Heading from "./Heading";

import { Gradient } from "./design/Services";


const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="register">
      <Gradient/>
      <div className="container relative z-2">
       

        <Heading
          className="text-center"
          title="Book Your Seats Now!"
          text={"4 September  2025 | 8:30 AM AST Onwards"}
        />

        <div className="relative">

        <iframe id="ts-iframe" src="https://www.townscript.com/v2/widget/middle-east-enterprise-ai-analytics-summit-2025-001441/booking" frameborder="0" height="800" width="100%"></iframe>
        <link rel="stylesheet" href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" />

        </div>

       
      </div>
    </Section>
  );
};

export default Pricing;
