import React from "react";

import TwitterLogin from "react-twitter-login";




const EmailForm = () => {
 
    const twitterApiKey = "F2dTYiwmvNfYbrgvfwyTUmuZo";
    const twitterSecretKey = "Dr2Nc1dZFEnsJjw5BBKBwbqS2vk9rwp46mnXC3unPmajTXieic";
    // ZFhuN0Q1eHhmNU1TdlFDODEwLVk6MTpjaQ
    // E4MS5mJSH7eG5L-bIv6vBKOS9uCnT7JjpjRNq3POGNqNBVvh5q
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
