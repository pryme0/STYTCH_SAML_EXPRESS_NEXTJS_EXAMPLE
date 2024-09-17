"use client";
import React, { useState } from "react";
import {
  B2BProducts,
  AuthFlowType,
  StytchB2BUIConfig,
} from "@stytch/vanilla-js";
import { StytchB2B } from "@stytch/nextjs/b2b";

enum SignInTypeEnum {
  MagicLink = "MagicLink",
  SAML = "SAML",
}

const SignInPage: React.FC = () => {
  const [signInType, setSignInType] = useState<SignInTypeEnum>(
    SignInTypeEnum.MagicLink
  );
  const [companySlug, setCompanySlug] = useState("");

  const config: StytchB2BUIConfig = {
    authFlowType: AuthFlowType.Discovery,
    products: [B2BProducts.emailMagicLinks],
    sessionOptions: { sessionDurationMinutes: 240 },
    emailMagicLinksOptions: {
      loginRedirectURL: "http://loaclhost:3000/authenticate",
      signupRedirectURL: "http://loaclhost:3000/authenticate",
    },
  };

  const toggleFormType = (type: SignInTypeEnum) => {
    setSignInType(type);
  };

  return (
    <div className="flex flex-col w-full  items-center justify-center bg-gray-100">
      {signInType === SignInTypeEnum.MagicLink ? (
        <div className="mb-4">
          <StytchB2B config={config} />
        </div>
      ) : (
        <div className="bg-[#fff] p-10 flex flex-col items-center w-[400px] max-w-md border border-[rgb(173,188,197)] rounded-md">
          <p className="text-[24px] font-[900] text-[#19303d] mb-4 text-center">
            Sign In with SAML
          </p>

          <input
            type="text"
            required={true}
            placeholder="Input company slug "
            onChange={(e) => setCompanySlug(e.target.value)}
            className={`h-[50px] w-[350px] px-4 py-2 mb-5 border rounded-md shadow-sm focus:outline-none transition duration-300 ease-in-out border border-[#19303d]`}
          />

          <button
            type="submit"
            onClick={() => {
              window.location.href = `http://localhost:3000/${companySlug}`;
            }}
            className={`flex justify-center w-[350px] bg-[#19303d] text-[16px] font-[500] text-white py-4 px-4 rounded-md shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2`}
          >
            Continue with SAML
          </button>
        </div>
      )}

      <div className="md:w-[400px] w-full flex items-center justify-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          onClick={() =>
            toggleFormType(
              signInType === SignInTypeEnum.MagicLink
                ? SignInTypeEnum.SAML
                : SignInTypeEnum.MagicLink
            )
          }
          className={`flex font-bold justify-center w-full bg-[#19303d] text-white py-2 px-4 rounded-md shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2`}
        >
          Sign in with
          {signInType === SignInTypeEnum.MagicLink ? "SAML SSO" : "Magic Link"}
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
