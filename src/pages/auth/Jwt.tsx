import React from "react";
import AuthLayout from "../../components/AuthLayout";
import LoginForm from "../../components/LoginForm";
import { AUTH_TYPE } from "../../types/types";

function Jwt(): JSX.Element {
  return (
    <AuthLayout>
      <LoginForm authType={AUTH_TYPE.JWT} />
    </AuthLayout>
  );
}

export default Jwt;
