import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IPatient, IPatientFilter } from "./patient.interface";
import { Patient } from "./patient.model";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { SortOrder } from "mongoose";
import { patinentSearchableFields } from "./patient.constents";

const createPatient = async (payload: IPatient): Promise<IPatient | null> => {
  const patient = await Patient.create(payload);
  return patient;
};


const getAllPatients = async (
  filters: IPatientFilter,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IPatient[]>> => {

  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: patinentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $paginationOptions: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Patient.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Patient.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};


const getPatientById = async (id: string): Promise<IPatient | null> => {
  const patient = await Patient.findById(id);
  return patient;
};

const updatePatient = async (
  id: string,
  payload: Partial<IPatient>
): Promise<IPatient | null> => {
  const isExist = await Patient.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Patient not found");
  }

  const { ...PatientData } = payload;
  const updatedPatientData: Partial<IPatient> = { ...PatientData };

  const result = await Patient.findOneAndUpdate(
    { _id: id },
    updatedPatientData,
    {
      new: true,
    }
  );
  return result;
};

const deletePatient = async (id: string): Promise<IPatient | null> => {
  const patient = await Patient.findByIdAndDelete(id);
  return patient;
};

export const PatientService = {
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  createPatient,
};
