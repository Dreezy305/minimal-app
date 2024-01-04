import React from "react";
import AuthLayout from "../../components/AuthLayout";
import LoginForm from "../../components/LoginForm";

function Jwt(): JSX.Element {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default Jwt;
