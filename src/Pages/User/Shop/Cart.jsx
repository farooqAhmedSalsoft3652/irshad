import React, { useEffect, useState } from 'react'
import { images } from '../../../Assets'
import {Container, Row, Col,  Table } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik'
import { useFormStatus } from '../../../Hooks/useFormStatus'
import { productData } from '../../../Config/data'
import { useNavigate, useParams } from 'react-router-dom'
import CustomButton from '../../../Components/CustomButton'
import BackButton2 from '../../../Components/BackButton/BackButton2'
import "./style.css"
import { usePageTitle } from '../../../Utils/helper'

const Cart = () => {
  usePageTitle("My Cart", true);

  const { isSubmitting, startSubmitting, stopSubmitting } = useFormStatus(); // use your custom hook   

  const navigate = useNavigate()
  const handleSubmit = async (values,  { resetForm }) => {
    startSubmitting();
    console.log("Form Submit Values" ,values)
    // navigate('/view-cart')
    stopSubmitting();
    resetForm();
  };


  return (
    <section className='page-content product-view'>
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex align-items-center mb-4 mb-xxl-5">
            <BackButton2 className="me-2" /><h2 className="page-title fw-bold mb-0">My Cart</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Formik
              initialValues={{
              product_quantity: 1, // Default value set to 1
            }}
            // validationSchema={ProductValidation}
            
              onSubmit={handleSubmit}
              enableReinitialize
            >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
            }) => {
              const increaseValue = () => {
                setFieldValue('product_quantity', Number(values.product_quantity) + 1);
              };

              const decreaseValue = () => {
                if (values.product_quantity > 1) {
                  setFieldValue('product_quantity', Number(values.product_quantity) - 1);
                }
              };
              return (
                <>     
                <Form>
                  <Table responsive  className='table-cart'>
                    <thead>
                      <tr>
                        <th className="product-remove"><span className="d-none">Remove item</span></th>
                        <th className="product-thumbnail"><span className="d-none">Thumbnail image</span></th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-item">
                        <td className="product-remove">
                          <a href="#" className="remove">×</a>
                        </td>
                        <td className="product-thumbnail">
                          <a className="img-box" href="/product-detail/30">
                            <img alt="img-product" src={images.productImage} />
                          </a>
                        </td>
                        <td className="product-name" cart-data-title="Product">
                            <a className="cart-title" href="/product-detail/30">Cotton jersey top</a>
                            <div className="cart-meta-category">Abc  Category</div>
                        </td>
                        <td className="product-price" cart-data-title="Price">
                          <div className="cart-price">$8.00</div>
                        </td>
                        <td className="product-quantity" cart-data-title="Quantity">
                          <div className="quantity-picker">
                            <span className="btn-quantity minus-btn" onClick={decreaseValue}>-</span>
                            <Field
                              name="product_quantity"
                              type="number"
                              className="form-control"
                              value={values.product_quantity}
                              onChange={handleChange}
                              min="1"
                            />
                            <span className="btn-quantity plus-btn"  onClick={increaseValue}>+</span>
                          </div>
                          {/* {touched.product_quantity && errors.product_quantity && (
                            <div className="text-danger">{errors.product_quantity}</div>
                          )} */}
                        </td>
                        <td className="product-total" cart-data-title="Total">
                          <div className="cart-total">$8.00</div>
                        </td>
                      </tr>
                      <tr className="cart-item">
                        <td className="product-remove">
                          <a href="#" className="remove">×</a>
                        </td>
                        <td className="product-thumbnail">
                          <a className="img-box" href="/product-detail/30">
                            <img alt="img-product" src={images.productImage} />
                          </a>
                        </td>
                        <td className="product-name" cart-data-title="Product">
                            <a className="cart-title" href="/product-detail/30">Cotton jersey top</a>
                            <div className="cart-meta-category">Abc  Category</div>
                        </td>
                        <td className="product-price" cart-data-title="Price">
                          <div className="cart-price">$8.00</div>
                        </td>
                        <td className="product-quantity" cart-data-title="Quantity">
                          <div className="quantity-picker">
                            <span className="btn-quantity minus-btn" onClick={decreaseValue}>-</span>
                            <Field
                              name="product_quantity"
                              type="number"
                              className="form-control"
                              value={values.product_quantity}
                              onChange={handleChange}
                              min="1"
                            />
                            <span className="btn-quantity plus-btn"  onClick={increaseValue}>+</span>
                          </div>
                          {touched.product_quantity && errors.product_quantity && (
                            <div className="text-danger">{errors.product_quantity}</div>
                          )}
                        </td>
                        <td className="product-total" cart-data-title="Total">
                          <div className="cart-total">$8.00</div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Form>
                </>
              );
            }}
            </Formik>
          </Col>
          
          <Col lg={4}>
            <div className="cart-checkout">
              <div className="checkout-item sub-total">
                <h3 className="item-title">Subtotal</h3>
                <span className="item-value">$24</span>
              </div>
              <div className="checkout-item delivery-charges">
                <h3 className="item-title">Delivery Charges</h3>
                <span className="item-value">$10</span>
              </div>
              <div className="checkout-item cart-total">
                <h3 className="item-title">Total</h3>
                <span className="item-value">$59.00</span>
              </div>
              <div className="checkout-buttons d-flex gap-3 px-lg-3">
                <CustomButton
                  variant="btn-primary"
                  className="btn"
                  onClick={() => navigate('/checkout')}
                  >
                  Checkout
                </CustomButton>
                <CustomButton
                  variant="btn-outline-primary"
                  className="btn"
                >
                  Continue Shipping
                </CustomButton>
              </div>
            </div>
          </Col>
        </Row>

      </Container>  
    </section>
  )
}

export default Cart
