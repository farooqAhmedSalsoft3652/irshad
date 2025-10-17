import React from "react";
import { Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { changePassword } from "../../Config/Validations";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const ChangePasswordForm = ({
  onSubmit,
  isSubmitting,
  errors,
  btnText = "Update",
  btnVariant = "btn btn-primary",
}) => {
  console.log(errors);
  return (
    <Formik
      initialValues={{
        old_password: "",
        new_password: "",
        confirm_password: "",
      }}
      validationSchema={changePassword}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="password-wrap">
          <Row className="mb-3">
            <Col md={12} className="my-1">
              <CustomInput
                label="Current Password"
                labelclass="mainLabel"
                type="password"
                required
                placeholder="Enter Current Password"
                inputclass="mb-3"
                id="old_password"
                value={values.old_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.old_password && errors.old_password}
              />
            </Col>
            <Col md={12} className="my-1">
              <CustomInput
                label="New Password"
                labelclass="mainLabel"
                type="password"
                required
                placeholder="Enter New Password"
                inputclass="mb-3"
                id="new_password"
                value={values.new_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.new_password && errors.new_password}
              />
            </Col>
            <Col md={12} className="my-1">
              <CustomInput
                label="Confirm Password"
                labelclass="mainLabel"
                type="password"
                required
                placeholder="Confirm Password"
                inputclass="mb-3"
                id="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirm_password && errors.confirm_password
                }
              />
            </Col>
            <Col md={12} className="mt-2">
              <CustomButton
                variant={btnVariant}
                className="px-5"
                text={btnText}
                pendingText="Submitting..."
                isPending={isSubmitting}
                type="submit"
              />
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
