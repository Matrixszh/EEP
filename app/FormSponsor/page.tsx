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
        src="https://api.leadconnectorhq.com/widget/form/ST6r39iNmDJiZpwJUVB8"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-ST6r39iNmDJiZpwJUVB8" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Eite Entr Sponsorship Packages"
  data-height="1335"
  data-layout-iframe-id="inline-ST6r39iNmDJiZpwJUVB8"
  data-form-id="ST6r39iNmDJiZpwJUVB8"
  title="Eite Entr Sponsorship Packages"
      ></iframe>
    </div>
  );
};

export default Form;



