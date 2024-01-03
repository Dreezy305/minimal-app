import Visibility from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
import { ReactComponent as EyeLid } from "../assets/eyelid.svg";
import { ReactComponent as Info } from "../assets/info.svg";

function LoginForm(): JSX.Element {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form className="w-1/3 flex flex-col px-6 pt-16 mt-16">
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

        <div className="flex flex-col space-y-5 w-full">
          <Alert
            severity="info"
            sx={{
              color: "rgb(0, 55, 104)",
              backgroundColor: "rgb(202, 253, 245)",
            }}
            icon={<Info />}
          >
            Use email : <strong>demo@minimals.cc</strong> / password :{" "}
            <strong>demo1234</strong>
          </Alert>
          <TextField
            required
            id="outlined-read-only-input"
            label={
              <span
                className="font-PublicSansRegular text-base"
                style={{ color: "rgb(99, 115, 129)" }}
              >
                Email Address
              </span>
            }
            defaultValue="demo@minimals.cc"
            type="email"
            sx={{
              ffontFamily: "PublicSansRegular !important",
              fontSize: "1rem",
            }}
          />

          <TextField
            required
            id="outlined-required"
            label={
              <span
                className="font-PublicSansRegular text-base"
                style={{ color: "rgb(99, 115, 129)" }}
              >
                Password
              </span>
            }
            defaultValue="demo1234"
            type={showPassword ? "text" : "password"}
            sx={{
              fontFamily: "PublicSansRegular !important",
              fontSize: "1rem",
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
            className="font-normal font-PublicSansRegular leading-6 hover:underline cursor-pointer float-right place-self-end underline"
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
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
