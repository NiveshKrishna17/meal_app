import React, { Fragment } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../Components";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: mealDetails } = location;
  const defaultValues = {
    fullName: "",
    email: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  };
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid Email")
      .required("Email is Required")
      .min(10, "Email must be at least 10 characters")
      .max(140, "Email must be at most 140 characters"),
    fullName: yup
      .string()
      .required("Full Name is Required")
      .min(6, "Full Name must be at least 6 characters")
      .max(30, "Full Name must be at most 30 characters"),
    address: yup.string().required("Address is Required"),
    city: yup.string().required("City is Required"),
    postalCode: yup.string().required("Postal Code is Required"),
    country: yup.string().required("Country is Required"),
    phoneNumber: yup.string().required("Phone Number is Required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({
    email,
    fullName,
    address,
    city,
    postalCode,
    country,
    phoneNumber,
  }) => {
    const registerData = {
      email,
      fullName,
      address,
      city,
      postalCode,
      country,
      phoneNumber,
    };

    console.log("registerData: ", registerData);
    if (registerData) {
      toast.success(`Purchased Successfully`);
      navigate("/confirmation", {
        state: { meal: mealDetails, user: registerData },
      });
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center min-h-screen bg-indigo-800">
        <div className="bg-indigo-800 w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"email"}
                      autoFocus={"on"}
                      field={field}
                      labelName={"Email"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"fullName"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"Full Name"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="fullName"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"address"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"Address"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"city"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"City"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"postalCode"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"Postal Code"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="postalCode"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"country"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"Country"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="country"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>

            <div className="mb-4">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      htmlFor={"phoneNumber"}
                      autoFocus={"off"}
                      field={field}
                      labelName={"Phone Number"}
                    />
                  </>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ message }) => (
                  <p style={{ color: "red" }}> {message} </p>
                )}
              />
            </div>
            {/* Add other fields similarly for email, city, city, postal code, country, phone number */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
