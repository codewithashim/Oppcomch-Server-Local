import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    phone: z.string({
      required_error: "Phone number is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z
    .object({
      name: z
        .object({
          firstName: z.string().optional(),
          middleName: z.string().optional(),
          lastName: z.string().optional(),
        })
        .optional(),
      phone: z.string().optional(),
      password: z.string().optional(),
      email: z.string().optional(),
    })
    .optional(),
});

export const createUserValidator = {
  createUserZodSchema,
  updateUserZodSchema,
};
