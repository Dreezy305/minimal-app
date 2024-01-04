import React from "react";
import AuthLayout from "../../components/AuthLayout";
import LoginForm from "../../components/LoginForm";
import { AUTH_TYPE } from "../../types/types";

function Amplify(): JSX.Element {
  return (
    <AuthLayout>
      <LoginForm authType={AUTH_TYPE.AMPLIFY} />
    </AuthLayout>
  );
}

export default Amplify;
