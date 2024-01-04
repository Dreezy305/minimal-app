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
      <a
        href="/"
        className="m-8 absolute lg:top-4 lg:left-4 xl:top-4 xl:left-4"
      >
        <img src={Logo} alt="minimal" className="oauth" />
      </a>

      <div className="flex flex-row items-start justify-center">
        <div className="hidden md:hidden lg:w-2/3 xl:w-2/3 min-h-screen left-bg lg:flex lg:flex-col lg:space-y-6 lg:items-center lg:justify-between xl:flex xl:flex-col xl:space-y-6 xl:items-center xl:justify-between lg:py-8 xl:py-12 border-0">
          <h3 className="font-PublicSansBold text-3xl text-black pt-5">
            Hi, Welcome back
          </h3>
          <img
            src={Illustration}
            alt="minimal"
            className="lg:max-w-[560px] xl:max-w-[720px]:"
          />
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
