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
        src="https://api.leadconnectorhq.com/widget/form/9u4y5fu6pHCnzTZc0Z6a"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-9u4y5fu6pHCnzTZc0Z6a" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Elite Entr Contact Form"
  data-height="600"
  data-layout-iframe-id="inline-9u4y5fu6pHCnzTZc0Z6a"
  data-form-id="9u4y5fu6pHCnzTZc0Z6a"
  title="Elite Entr Contact Form"
      ></iframe>
    </div>
  );
};

export default Form;



