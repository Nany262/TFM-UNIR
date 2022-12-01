import Joi from "joi";

const email = Joi.string().email();
const password = Joi.string();

const loginUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

export { loginUserSchema }