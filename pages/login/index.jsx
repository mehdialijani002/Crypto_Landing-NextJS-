"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../../component/navbar/index";
import Footer from "../../component/footer/index";
import style from "../../styles/styles.module.css";
import loginImage from "../../asset/images/login.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserEdit } from "react-icons/fa";
const LoginForm = () => {
  const [showToast, setShowToast] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("نام الزامی است"),
    lastName: Yup.string().required("نام خانوادگی الزامی است   "),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, " فرمت شماره همراه اشتباه میباشد")

      .required("  شماره همراه الزامی است "),
    nationalID: Yup.string()
      .matches(/^[0-9]+$/, "فرمت کد ملی اشتباه میباشد")
      .min(10, "کد ملی باید 10 رقمی باشد")
      .max(10, "کد ملی باید 10 رقمی باشد")
      .required("کد ملی الزامی است"),
  });

  const initialValues = {
    name: "",
    lastName: "",
    phoneNumber: "",
    nationalID: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("عضویت شما با موفقیت انجام شد.");

    resetForm();
  };

  return (
    <div className="wow fadeIn">
      <Navbar />
      <div className={style.formContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={style.form}>
              <h5 data-testid="formHeader" className="text-center">
                <FaUserEdit />
                <span className="mx-1">فرم ثبت کاربر</span>
              </h5>
              <div className={style.formInput}>
                <label data-testid="name" className="mb-1" htmlFor="name">
                  نام <span className={style.redStar}>*</span>
                </label>
                <Field
                  className={style.input}
                  type="text"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  className={style.error}
                  name="name"
                  component="div"
                />
              </div>

              <div className={style.formInput}>
                <label
                  data-testid="lastName"
                  className="mb-1"
                  htmlFor="lastName"
                >
                  نام خانوادگی <span className={style.redStar}>*</span>
                </label>
                <Field
                  className={style.input}
                  type="text"
                  id="lastName"
                  name="lastName"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formInput}>
                <label
                  data-testid="phoneNumber"
                  className="mb-1"
                  htmlFor="phoneNumber"
                >
                  شماره همراه <span className={style.redStar}>*</span>
                </label>
                <Field
                  className={style.input}
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className={style.error}
                />
              </div>

              <div className={style.formInput}>
                <label data-testid="code" className="mb-1" htmlFor="nationalID">
                  کد ملی <span className={style.redStar}>*</span>
                </label>
                <Field
                  className={style.input}
                  type="number"
                  id="nationalID"
                  name="nationalID"
                />
                <ErrorMessage
                  name="nationalID"
                  component="div"
                  className={style.error}
                />
                <button
                  data-testid="submit"
                  className="mt-5 btn btn-success w-100"
                  type="submit"
                >
                  <FaCheckDouble />
                  <span className="mx-1">عضویت</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div data-testid="formImage" className={style.formImage}>
          <Image
            className={`${style.headerImg} wow fadeInUp`}
            src={loginImage}
            alt="About"
            width={700}
            height={500}
          />
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
