import React, { useContext, useRef } from 'react';
import { SignupSchema } from '../schemas/FormValidationSchema'
import { Formik, Form, Field } from 'formik';
import { USStates } from '../data/USStates'
import { MyContext } from '../data/context';
import '../styles/CredentialsForm.scss';

const CredentialsForm = () => {
    const { setState } = useContext(MyContext);
    const ref = useRef(null)
    return (
        <div>
            <h1 className='credentials__Title'>SHIPPING DETAILS</h1>
            <Formik
                innerRef={ref}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    dob: '',
                    street: '',
                    city: '',
                    state: '',
                    zipCode: ''
                }}
                validationSchema={SignupSchema}
            >
                {({ errors, touched }) => (
                    <Form className='formContainer'
                        onChangeCapture={() => setState(ref.current)}
                    >

                        <div className='form__FirstName'>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                            />
                            {errors.firstName && touched.firstName ? (
                                <div className='errorMessage'>{errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className='form__SecondName'>
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                            />
                            {errors.lastName && touched.lastName ? (
                                <div className='errorMessage'>{errors.lastName}</div>
                            ) : null}
                        </div>

                        <div className='form__Phone'>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Phone Number"
                            />
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <div className='errorMessage'>{errors.phoneNumber}</div>
                            ) : null}
                        </div>

                        <div className='form__Email'>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            {errors.email && touched.email ? (
                                <div className='errorMessage'>{errors.email}</div>
                            ) : null}
                        </div>

                        <div className='form__Dob'>
                            <label htmlFor="dob">Birth Date</label>
                            <Field
                                id="dob"
                                name="dob"
                                placeholder="Date of Birth"
                                type="date"
                            />
                            {errors.dob && touched.dob ? (
                                <div className='errorMessage'>{errors.dob}</div>
                            ) : null}
                        </div>

                        <div className='form__Street'>
                            <label htmlFor="street">Street</label>
                            <Field
                                id="street"
                                name="street"
                                placeholder="Street"
                            />
                            {errors.street && touched.street ? (
                                <div className='errorMessage'>{errors.street}</div>
                            ) : null}
                        </div>

                        <div className='form__City'>
                            <label htmlFor="city">City</label>
                            <Field
                                id="city"
                                name="city"
                                placeholder="City"
                            />
                            {errors.city && touched.city ? (
                                <div className='errorMessage'>{errors.city}</div>
                            ) : null}
                        </div>

                        <div className='form__State'>
                            <label htmlFor="state">State</label>
                            <Field
                                id="state"
                                name="state"
                                placeholder="State"
                                as="select"
                            >
                                <option selected value={""}>
                                    Choose an option
                                </option>
                                {USStates.map(state => {
                                    return <option value={state} key={state}>
                                        {state}
                                    </option>
                                })}
                            </Field>
                            {errors.state && touched.state ? (
                                <div className='errorMessage'>{errors.state}</div>
                            ) : null}
                        </div>

                        <div className='form__ZipCode'>
                            <label htmlFor="zipCode">Zip Code</label>
                            <Field
                                id="zipCode"
                                name="zipCode"
                                placeholder="Zip Code"
                            />
                            {errors.zipCode && touched.zipCode ? (
                                <div className='errorMessage'>{errors.zipCode}</div>
                            ) : null}
                        </div>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
};

export default CredentialsForm