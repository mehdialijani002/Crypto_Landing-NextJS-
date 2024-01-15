import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Row, Col, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../styles/styles.module.css";
import { GiCycle } from "react-icons/gi";
import {
  FaCheckDouble,
  FaUser,
  FaUserTag,
  FaMailBulk,
  FaAddressCard,
  FaPhone,
  FaInternetExplorer,
  FaUsersCog,
  FaAddressBook,
  FaEdit,
} from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().required("نام و نام خانوادگی الزامی است"),
  username: yup.string().required("نام کاربری الزامی است"),
  email: yup
    .string()
    .email("ایمیل نامعتبر میباشد")
    .required("ایمیل الزامی است"),
  address: yup.string().required("آدرس الزامی است"),
  phone: yup.string().required("شماره همراه الزامی است"),
  website: yup.string().required("آدرس وبسایت الزامی است"),
  company: yup.string().required("نام شرکت الزامی است"),
});

const Form = ({ onFormSubmit, editData }) => {
  const [formData, setFormData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editDataReset, setEditDataReset] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (editData) {
      setEditMode(true);
      setFormData(editData);

      Object.keys(editData).forEach((key) => {
        setValue(key, editData[key]);
      });
    }
  }, [editData, setValue]);

  const onSubmit = (data) => {
    if (editMode) {
      const updatedData = { ...editData, ...data };
      onFormSubmit(updatedData);
      toast.info("اطلاعات شما با موفقیت ویرایش شد", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.scrollTo({ top: 400, behavior: "smooth" });
      reset();
      setEditMode(false);
      setEditDataReset(null);
    } else {
      onFormSubmit(data);
      toast.success("اطلاعات با موفقیت ثبت شد", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.scrollTo({ top: 400, behavior: "smooth" });
      reset();
      setFormData({});
    }
  };

  return (
    <Card className={style.dataCardContainer}>
      <Card.Body>
        <h1 className={style.dataFormHeader}>
          <FaAddressBook />
          <span className="mx-1">فرم ثبت کاربر</span>
        </h1>
        <div className={style.dataFormContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className="rtl-form">
            <Row>
              <Col lg={3} sm={12}>
                <label htmlFor="name" className="form-label">
                  <FaUser />
                  <span className="mx-1">نام و نام خانوادگی:</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="form-control"
                />
                {errors.name && (
                  <p className={style.dataFormErrorText}>
                    {errors.name.message}
                  </p>
                )}
              </Col>
              <Col lg={3} sm={12}>
                <div>
                  <label className="form-label" htmlFor="username">
                    <FaUserTag />
                    <span className="mx-1">نام کاربری :</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className={style.dataFormErrorText}>
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={3} sm={12}>
                <div>
                  <label className="form-label" htmlFor="email">
                    <FaMailBulk />
                    <span className="mx-1">ایمیل:</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className={style.dataFormErrorText}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={3} sm={12}>
                <div>
                  <label className="form-label" htmlFor="address">
                    <FaAddressCard />
                    <span className="mx-1">آدرس:</span>
                  </label>
                  <input
                    className="form-control"
                    type="address"
                    id="address"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className={style.dataFormErrorText}>
                      {errors.address.message}
                    </p>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={4} sm={12}>
                <div>
                  <label className="form-label" htmlFor="phone">
                    <FaPhone />
                    <span className="mx-1">شماره همراه:</span>
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    id="phone"
                    {...register("phone")}
                  />

                  {errors.phone && (
                    <p className={style.dataFormErrorText}>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div>
                  <label className="form-label" htmlFor="website">
                    <FaInternetExplorer />
                    <span className="mx-1">وبسایت:</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="website"
                    {...register("website")}
                  />
                  {errors.website && (
                    <p className={style.dataFormErrorText}>
                      {errors.website.message}
                    </p>
                  )}
                </div>
              </Col>
              <Col lg={4} sm={12}>
                <div>
                  <label className="form-label" htmlFor="company">
                    <FaUsersCog />
                    <span className="mx-1">نام شرکت:</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="company"
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className={style.dataFormErrorText}>
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </Col>
            </Row>

            <div className="d-flex justify-content-center  mt-5">
              <button
                className={`text-center mx-3 px-5 py-2 btn btn-success ${style.dataFormBtn}`}
                type="submit"
              >
                <>
                  <FaCheckDouble />
                  <span className="mx-1">تایید</span>
                </>
              </button>
              <button
                className={`text-center mx-3  btn btn-outline-warning ${style.dataFormBtnDelete}`}
                type="button"
                onClick={() => reset()}
              >
                <GiCycle />
                <span className="mx-1">پاک کردن فرم</span>
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </Card.Body>
    </Card>
  );
};

export default Form;
