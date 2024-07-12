"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string({
            required_error: "Phone number is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z
            .object({
            firstName: zod_1.z.string().optional(),
            middleName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        })
            .optional(),
        phone: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
    })
        .optional(),
});
exports.createUserValidator = {
    createUserZodSchema,
    updateUserZodSchema,
};
