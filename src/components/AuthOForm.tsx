import { Button, Divider, Stack } from "@mui/material";
import React from "react";

function AuthOForm(): JSX.Element {
  return (
    <div className="w-1/3 flex flex-col px-6 pt-16 mt-16">
      <div className="w-4/5 mx-auto flex flex-col space-y-12 pt-12">
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-bold font-PublicSansBold">
            Sign in to Minimal
          </h3>

          <div className="flex flex-row items-center space-x-1">
            <span className="text-black font-normal text-sm font-PublicSansRegular leading-6">
              New user?{" "}
            </span>
            <a
              href="/"
              className="create font-semibold font-PublicSansSemiBold leading-6 hover:underline cursor-pointer"
            >
              Create an account
            </a>
          </div>
        </div>

        <Stack spacing={2}>
          <Button
            variant="contained"
            disableElevation
            size="large"
            className="bg-black font-PublicSansBold text-base font-bold"
            sx={{
              color: "rgb(255, 255, 255) !important",
              background: "rgb(0, 167, 111) !important",
              borderRadius: "8px !important",
              textTransform: "capitalize",
              height: "48px !important",
              fontFamily: "PublicSansBold !important",
              fontWeight: "700 !important",
            }}
          >
            Login With Redirect
          </Button>
          <Button
            variant="contained"
            disableElevation
            size="large"
            className="bg-black font-PublicSansBold text-base font-bold"
            sx={{
              color: "rgb(0, 120, 103) !important",
              background: "rgba(0, 167, 111, 0.16) !important",
              borderRadius: "8px !important",
              textTransform: "capitalize",
              height: "48px !important",
              fontFamily: "PublicSansBold !important",
              fontWeight: "700 !important",
            }}
          >
            Register With Redirect
          </Button>
          <Divider></Divider>
          <Button
            variant="contained"
            disableElevation
            size="large"
            className="bg-black font-PublicSansBold text-base font-bold"
            sx={{
              color: "rgb(255, 255, 255) !important",
              background: "rgb(33, 43, 54) !important",
              borderRadius: "8px !important",
              textTransform: "capitalize",
              height: "48px !important",
              fontFamily: "PublicSansBold !important",
              fontWeight: "700 !important",
            }}
          >
            Login With Popup
          </Button>

          <Button
            variant="contained"
            disableElevation
            size="large"
            className="bg-black font-PublicSansBold text-base font-bold"
            sx={{
              color: "rgb(33, 43, 54) !important",
              background: "rgba(145, 158, 171, 0.08) !important",
              borderRadius: "8px !important",
              textTransform: "capitalize",
              height: "48px !important",
              fontFamily: "PublicSansBold !important",
              fontWeight: "700 !important",
            }}
          >
            Register With Popup
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default AuthOForm;
