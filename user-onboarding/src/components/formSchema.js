import * as yup from "yup";

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "Must be at least 2 characters"),
    last_name: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(2, "Must be at least 2 characters"),
    email: yup
        .string()
        .trim()
        .email("This must be an email address")
        .required("Email is required"),
    tos: yup.boolean()
        .required("You must agree to the Terms of Service before signing up")
})

export default formSchema;