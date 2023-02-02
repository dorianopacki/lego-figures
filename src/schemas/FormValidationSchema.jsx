import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'Name is too short')
        .max(255, 'Name is too long')
        .required('Name is required'),
    lastName: Yup.string()
        .min(1, 'Last name is too short')
        .max(255, 'Last name  is too short')
        .required('Last name  is too short'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}$/, 'Phone number must be a valid US format')
        .required('Phone number is required'),
    dob: Yup.date()
        .min(new Date("01.01.1900"), 'Birth date must be after 1900')
        .max(new Date(), 'Birth date must be in the past')
        .required('Birth date is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    street: Yup.string()
        .min(1, 'Street name is too short')
        .max(255, 'Street name is too long')
        .required('Street name is required'),
    city: Yup.string()
        .min(1, 'City name is too short')
        .max(255, 'City name is too long')
        .required('City name is required'),
    zipCode: Yup.string()
        .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid zip code format")
        .required("Zip code is required"),
    state: Yup.string().required("State is required")
});
