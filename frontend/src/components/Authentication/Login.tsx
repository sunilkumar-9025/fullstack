import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";

const Login = () => {
  document.title = "SignIn";
  const nav = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isRemenber, setIsRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please Enter Valid Email")
        .required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleRegister = () => {
    nav("/register");
  };

  const handleForgetPassword = () => {
    nav("/forget-password");
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRemember(event.target.checked);
  };

  const handleSubmit = (values: any) => {
    console.log(values)
    isRemenber
      ? localStorage.setItem("authUserDetails", JSON.stringify(values))
      : localStorage.removeItem("authUserDetails");
  };

  useEffect(() => {
    let userDetails: any = localStorage.getItem("authUserDetails");
    let authUser: any = JSON.parse(userDetails);
    authUser ? setIsRemember(true) : setIsRemember(false);
    authUser && validation.setValues(authUser);
  }, []);

  return (
    <div className="page-login">
      <div className="login-form-area">
        <Form
          className="login-form mb-3"
          onSubmit={(e: any) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <h5 className="text-primary text-center mb-0">Welcome Back !</h5>
          <p className="text-center">Login to continue</p>
          <div className="mb-3">
            <Label>Email</Label>
            <Input
              type="text"
              name="email"
              placeholder=" Email Address"
              autoComplete="email"
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.email || ""}
              invalid={
                validation.touched.email && validation.errors.email
                  ? true
                  : false
              }
            />
            {validation.touched.email && validation.errors.email ? (
              <FormFeedback type="invalid">
                {validation.errors.email}
              </FormFeedback>
            ) : null}
          </div>
          <div className="mb-3">
            <div>
              <div className="text-between">
                <Label>Password</Label>
                <Label
                  className="text-muted pointer"
                  onClick={handleForgetPassword}
                >
                  Forget Password?
                </Label>
              </div>
              <InputGroup>
                <Input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder=" Password"
                  autoComplete="password"
                  value={validation.values.password || ""}
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  invalid={
                    validation.touched.password && validation.errors.password
                      ? true
                      : false
                  }
                />
                <InputGroupText
                  className="pointer"
                  onClick={() => setIsShow(!isShow)}
                >
                  {isShow ? (
                    <i className="ri-eye-off-line"></i>
                  ) : (
                    <i className="ri-eye-line"></i>
                  )}
                </InputGroupText>
              </InputGroup>
            </div>

            {validation.touched.password && validation.errors.password ? (
              <FormFeedback type="invalid">
                {validation.errors.password}
              </FormFeedback>
            ) : null}
          </div>
          <div className="mb-3 align-center">
            <Input
              type="checkbox"
              name="remember"
              className="me-2 p-10 mt-0"
              checked={isRemenber}
              onChange={handleInput}
            />
            <div>Remeber me</div>
          </div>
          <div className="mb-3">
            <Button
              className="w-100"
              color="primary"
              type="submit"
              disabled={
                validation.values.email === "" ||
                validation.values.password === ""
              }
            >
              Login
            </Button>
          </div>
        </Form>
        <p className="text-center">
          Don't have an account?{" "}
          <span
            className="text-primary underline pointer"
            onClick={handleRegister}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
