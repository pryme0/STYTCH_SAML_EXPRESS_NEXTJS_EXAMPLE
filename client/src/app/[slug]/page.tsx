"use client";

import React from "react";
import {
  B2BProducts,
  AuthFlowType,
  StytchB2BUIConfig,
} from "@stytch/vanilla-js";
import { StytchB2B } from "@stytch/nextjs/b2b";

const SAMLSignInPage: React.FC = () => {
  const config: StytchB2BUIConfig = {
    authFlowType: AuthFlowType.Organization,
    products: [B2BProducts.sso],
    sessionOptions: { sessionDurationMinutes: 240 },

    ssoOptions: {
      loginRedirectURL: "http://localhost:3000/authenticate",
      signupRedirectURL: "http://localhost:3000/authenticate",
    },
  };

  return (
    <div className="flex flex-col w-full items-center justify-center bg-gray-100">
      <div className="mb-4">
        <StytchB2B config={config} />
      </div>

      <div className="md:w-[400px] w-full flex items-center justify-center my-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          onClick={() => (window.location.href = "http://localhost:3000")}
          className={`flex font-bold justify-center w-full bg-[#19303d] text-white py-2 px-4 rounded-md shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2`}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default SAMLSignInPage;
