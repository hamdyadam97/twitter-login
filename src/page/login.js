import React from "react";

import TwitterLogin from "react-twitter-login";




const EmailForm = () => {
 
    const twitterApiKey = "cvtLOvPCCzczegnVb0BTvnNlC";
    const twitterSecretKey = "mgGkeyZm6FQGR57WiRJsZt2fNHwN6vvqd3x0LdhLmibDrwltx2";
 
    const twitterLogin = async (res, data) => {
        console.log(res)
    
     };


  return (
    
      <TwitterLogin
        authCallback={twitterLogin}
        consumerKey={twitterApiKey}
        consumerSecret={twitterSecretKey}
      />
  );
};

export default EmailForm;
