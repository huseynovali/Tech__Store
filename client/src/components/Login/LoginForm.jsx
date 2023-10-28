import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Buttons/Button";
import * as Yup from "yup";
function LoginForm() {
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label
                htmlFor="email"
                className="text-xs pb-2 block font-semibold"
              >
                Your Email *
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Your Email "
                className="w-full border rounded-[4px] border-[#A2A6B0] p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="password"
                className="text-xs pb-2 block font-semibold"
              >
                Your Password *
              </label>
              <Field
                type="password"
                name="password"
                placeholder="Your Password "
                className="w-full border rounded-[4px] border-[#A2A6B0] p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0156FF] px-16 py-3 rounded-[50px] text-white text-sm mb-2 mt-6"
              >
                Submit
              </Button>
              <a href="#" className="text-sm text-[#0156FF]">
                Forgot Your Password?
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
