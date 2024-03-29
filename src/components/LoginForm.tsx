import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Visibility from "@mui/icons-material/Visibility";
import { Divider, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
import { ReactComponent as EyeLid } from "../assets/eyelid.svg";
import { ReactComponent as Info } from "../assets/info.svg";
import { AUTH_TYPE } from "../types/types";

function LoginForm({ authType }: { authType?: string }): JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form className="w-full md:w-11/12 lg:w-1/3 xl:w-1/3 flex flex-col px-6 pt-12 mt-12 md:pt-12 md:mt-12 lg:pt-16 xl:pt-16 lg:mt-16 xl:mt-16">
      <div className="w-full md:w-4/5 lg:w-4/5 xl:w-4/5 mx-auto flex flex-col space-y-12 pt-12">
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl md:text-xl lg:text-xl xl:text-2xl font-bold font-PublicSansBold">
            Sign in to Minimal
          </h3>

          <div className="flex flex-row items-center space-x-1 text-sm">
            <span className="text-black font-normal text-sm font-PublicSansRegular leading-6">
              New user?{" "}
            </span>
            <a
              href="/"
              className="create font-semibold font-PublicSansSemiBold leading-6 hover:underline cursor-pointer text-sm"
            >
              Create an account
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-5 w-full">
          {authType === AUTH_TYPE.JWT && (
            <Alert
              severity="info"
              sx={{
                color: "rgb(0, 55, 104)",
                backgroundColor: "rgb(202, 253, 245)",
                borderRadius: "8px",
                fontSize: "0.875rem",
              }}
              icon={<Info />}
            >
              Use email : <strong>demo@minimals.cc</strong> / password :{" "}
              <strong>demo1234</strong>
            </Alert>
          )}
          <TextField
            id="outlined-read-only-input"
            label={
              <span
                className="font-PublicSansRegular"
                style={{ color: "rgb(99, 115, 129)" }}
              >
                Email Address
              </span>
            }
            defaultValue="demo@minimals.cc"
            type="email"
            sx={{
              fontFamily: "PublicSansRegular !important",
            }}
            size="medium"
          />

          <TextField
            id="outlined-required"
            size="medium"
            label={
              <span
                className="font-PublicSansRegular"
                style={{ color: "rgb(99, 115, 129)" }}
              >
                Password
              </span>
            }
            defaultValue="demo1234"
            type={showPassword ? "text" : "password"}
            sx={{
              fontFamily: "PublicSansRegular !important",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <EyeLid />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <a
            href="/"
            className="font-normal font-PublicSansRegular leading-6 hover:underline cursor-pointer float-right place-self-end underline text-sm"
          >
            Forgot password?
          </a>

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
            Login
          </Button>

          {authType === AUTH_TYPE.FIREBASE && (
            <>
              <Divider>
                <span className="font-PublicSansMedium or text-sm font-bold">
                  OR
                </span>
              </Divider>

              <Stack direction="row" spacing={1} justifyContent={"center"}>
                <IconButton aria-label="delete">
                  <GoogleIcon sx={{ color: "rgb(223, 62, 48)" }} />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                  <GitHubIcon sx={{ color: "#000" }} />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                  <TwitterIcon sx={{ color: "rgb(28, 156, 234)" }} />
                </IconButton>
              </Stack>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
