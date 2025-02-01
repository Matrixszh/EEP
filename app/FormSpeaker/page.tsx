"use client";
import React, { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    // Load the form embed script when the component mounts
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-auto my-10">
      <iframe
          src="https://api.leadconnectorhq.com/widget/form/4RMFLuWZL09lNLI2wyjG"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-4RMFLuWZL09lNLI2wyjG" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Elite Entr Speakers Form"
  data-height="1069"
  data-layout-iframe-id="inline-4RMFLuWZL09lNLI2wyjG"
  data-form-id="4RMFLuWZL09lNLI2wyjG"
  title="Elite Entr Speakers Form"
      ></iframe>
    </div>
  );
};

export default Form;



