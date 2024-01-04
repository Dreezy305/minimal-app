import React from "react";
import AuthLayout from "../../components/AuthLayout";
import AuthOForm from "../../components/AuthOForm";

function Auth0(): JSX.Element {
  return (
    <AuthLayout>
      <AuthOForm />
    </AuthLayout>
  );
}

export default Auth0;
