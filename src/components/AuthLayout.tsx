import React from "react";
import Amplify from "../assets/amplify.svg";
import AuthO from "../assets/autho.svg";
import Firebase from "../assets/firebase.svg";
import Illustration from "../assets/illustration_dashboard.png";
import Jwt from "../assets/jwt.svg";
import Logo from "../assets/logo.svg";
import Tooltips from "./Tooltips";

function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main className="relative">
      <a href="/" className="m-8 absolute top-4 left-4">
        <img src={Logo} alt="minimal" className="oauth" />
      </a>
      <div className="flex flex-row items-start justify-center">
        <div className="w-2/3 min-h-screen left-bg flex flex-col space-y-6 items-center justify-between py-12">
          <h3 className="font-PublicSansBold text-3xl text-black pt-5">
            Hi, Welcome back
          </h3>
          <img src={Illustration} alt="minimal" className="" />
          <div className="flex flex-row items-center justify-center space-x-5 pb-5">
            <Tooltips
              title="jwt"
              icon={<img src={Jwt} alt="minimal" className="oauth" />}
              link="/auth/jwt"
            />

            <Tooltips
              title="Firebase"
              icon={
                <img src={Firebase} alt="minimal" className="oauth grayscale" />
              }
              link="/auth/firebase"
            />

            <Tooltips
              title="Amplify"
              icon={
                <img src={Amplify} alt="minimal" className="oauth grayscale" />
              }
              link="/auth/amplify"
            />

            <Tooltips
              title="Auth0"
              icon={
                <img src={AuthO} alt="minimal" className="oauth grayscale" />
              }
              link="/auth/auth0"
            />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
