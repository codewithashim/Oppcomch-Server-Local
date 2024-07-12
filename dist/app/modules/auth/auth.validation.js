"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const createLoginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
        password: zod_1.z.string({
            required_error: 'password is required',
        }),
    }),
});
const refreshTokenSchema = zod_1.z.object({
    cookie: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: 'refreshToken is required',
        }),
    }),
});
const changePasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: 'oldPassword is required',
        }),
        newPassword: zod_1.z.string({
            required_error: 'newPassword is required',
        }),
    }),
});
exports.AuthValidation = {
    createLoginZodSchema,
    refreshTokenSchema,
    changePasswordSchema,
};
