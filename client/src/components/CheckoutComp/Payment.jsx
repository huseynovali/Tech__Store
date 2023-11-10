import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Payment() {
    const formik = useFormik({
        initialValues: {
          cardNumber: '',
          expiryDate: '',
          cvc: '',
        },
        validationSchema: Yup.object({
          cardNumber: Yup.string()
            .required('Card number is required')
            .matches(/^\d{16}$/, 'Must be exactly 16 digits'),
          expiryDate: Yup.string()
            .required('Expiry date is required')
            .matches(/^\d{2}\/\d{2}$/, 'Must be in MM/YY format'),
          cvc: Yup.string()
            .required('CVC is required')
            .matches(/^\d{3}$/, 'Must be exactly 3 digits'),
        }),
        onSubmit: (values) => {
          // Form gönderildiğinde yapılacak işlemler
          console.log(values);
          // Örneğin, formu sunucuya gönderme veya başka bir işlem...
        },
      });
    
      return (
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8">Payment Information</h1>
          <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className={`w-full p-2 border rounded-md ${
                  formik.touched.cardNumber && formik.errors.cardNumber
                    ? 'border-red-500'
                    : ''
                }`}
                placeholder="Enter your card number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cardNumber}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className="text-red-500">{formik.errors.cardNumber}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-sm font-semibold mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className={`w-full p-2 border rounded-md ${
                  formik.touched.expiryDate && formik.errors.expiryDate
                    ? 'border-red-500'
                    : ''
                }`}
                placeholder="MM/YY"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.expiryDate}
              />
              {formik.touched.expiryDate && formik.errors.expiryDate ? (
                <div className="text-red-500">{formik.errors.expiryDate}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label htmlFor="cvc" className="block text-sm font-semibold mb-2">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                className={`w-full p-2 border rounded-md ${
                  formik.touched.cvc && formik.errors.cvc ? 'border-red-500' : ''
                }`}
                placeholder="Enter CVC"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cvc}
              />
              {formik.touched.cvc && formik.errors.cvc ? (
                <div className="text-red-500">{formik.errors.cvc}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Pay Now
            </button>
          </form>
        </div>
      );
}

export default Payment