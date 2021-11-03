import React from "react";
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

const App = () => (
  <AmplifyAuthenticator>
    <div>
      My App
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
);

export default App;
