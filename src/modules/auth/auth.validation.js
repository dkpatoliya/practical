
const ajv = require("../../helper/validator");

const loginRequest = ajv.compile({
    type: "object",
    properties: {
        email: { type: "string", "format": "email", maxLength: 254 },
        password: { type: "string", maxLength: 128 },
    },
    required: ["email", "password"],
   
});

const registerRequest = ajv.compile({
    type: "object",
    properties: {
        f_name: { type: "string", maxLength: 50 },
        l_name: { type: "string", maxLength: 50 },
        email: { type: "string", "format": "email", maxLength: 254 },
        password: { type: "string", maxLength: 128 },
        gender: { enum: ["M", "F", "O"] },
        birth_date: { type: "string", format: "date" },
        profile_image: { type: "string" },
    },
    required: ["f_name", "l_name", "email", "password", "gender", "birth_date"],
   
});


module.exports = { loginRequest, registerRequest };
