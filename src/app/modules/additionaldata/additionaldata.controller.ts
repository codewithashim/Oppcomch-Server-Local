import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AdditionalDataService } from "./additionaldata.service";

const create = catchAsync(async (req: Request, res: Response) => {
  const { type } = req.params; 
  const data = req.body; 
  const result = await AdditionalDataService.create(type, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${type} created successfully!`,
    data: result,
  });
});

const getAll = catchAsync(async (req: Request, res: Response) => {
  const { type } = req.params;
  const result = await AdditionalDataService.getAll(type);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${type} fetched successfully!`,
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { type, id } = req.params;
  const result = await AdditionalDataService.getById(type, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${type} fetched successfully!`,
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const { type, id } = req.params;
  const data = req.body;
  const result = await AdditionalDataService.updateById(type, id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${type} updated successfully!`,
    data: result,
  });
});

const deleteById = catchAsync(async (req: Request, res: Response) => {
  const { type, id } = req.params;
  await AdditionalDataService.deleteById(type, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${type} deleted successfully!`,
  });
});

export const AdditionalDataController = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
