import { 
  ChiefComplaints, 
  PastIllnessData, 
  PersonalHistoryData, 
  ClinicalExaminationName, 
  ClinicalExaminationFindings, 
  CardiovascularSystemName, 
  CardiovascularSystemFindings, 
  RespiratorySystemName, 
  RespiratorySystemFindings, 
  AbdomenName, 
  AbdomenFindings, 
  NeurologicalExaminationName, 
  NeurologicalExaminationFindings, 
  LocomotorSystemName, 
  LocomotorSystemFindings, 
  ThyroidGlandName, 
  ThyroidGlandFindings, 
  OtherExaminationName, 
  OtherExaminationFindings, 
  NameOfInvestigations, 
  FindingsInvestigations, 
  ComorbiditiesDiagnosisData, 
  ManagementOutcomeData 
} from "./additionaldata.model";
import { Document, Model } from "mongoose";

interface MongooseDocument extends Document {}

interface MongooseModel<T extends MongooseDocument> extends Model<T> {}

const create = async (Model: MongooseModel<any>, payload: any): Promise<any> => {
  try {
    const created = await Model.create(payload);
    return created;
  } catch (error) {
    console.error(`Error creating document in ${Model.modelName}:`, error);
    throw new Error('Error creating document');
  }
};

const getAll = async (Model: MongooseModel<any>): Promise<any[]> => {
  try {
    const data = await Model.find();
    return data;
  } catch (error) {
    console.error(`Error fetching documents from ${Model.modelName}:`, error);
    throw new Error('Error fetching documents');
  }
};

const getById = async (Model: MongooseModel<any>, id: string): Promise<any> => {
  try {
    const data = await Model.findById(id);
    return data;
  } catch (error) {
    console.error(`Error fetching document by ID from ${Model.modelName}:`, error);
    throw new Error('Error fetching document by ID');
  }
};

const updateById = async (Model: MongooseModel<any>, id: string, payload: any): Promise<any> => {
  try {
    const updated = await Model.findByIdAndUpdate(id, payload, { new: true });
    return updated;
  } catch (error) {
    console.error(`Error updating document by ID in ${Model.modelName}:`, error);
    throw new Error('Error updating document by ID');
  }
};

const deleteById = async (Model: MongooseModel<any>, id: string): Promise<any> => {
  try {
    const deleted = await Model.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.error(`Error deleting document by ID from ${Model.modelName}:`, error);
    throw new Error('Error deleting document by ID');
  }
};

const getModelByType = (type: string): MongooseModel<any> => {
  switch (type) {
    case 'chiefComplaints': return ChiefComplaints;
    case 'pastIllnessData': return PastIllnessData;
    case 'personalHistoryData': return PersonalHistoryData;
    case 'clinicalExaminationName': return ClinicalExaminationName;
    case 'clinicalExaminationFindings': return ClinicalExaminationFindings;
    case 'cardiovascularSystemName': return CardiovascularSystemName;
    case 'cardiovascularSystemFindings': return CardiovascularSystemFindings;
    case 'respiratorySystemName': return RespiratorySystemName;
    case 'respiratorySystemFindings': return RespiratorySystemFindings;
    case 'abdomenName': return AbdomenName;
    case 'abdomenFindings': return AbdomenFindings;
    case 'neurologicalExaminationName': return NeurologicalExaminationName;
    case 'neurologicalExaminationFindings': return NeurologicalExaminationFindings;
    case 'locomotorSystemName': return LocomotorSystemName;
    case 'locomotorSystemFindings': return LocomotorSystemFindings;
    case 'thyroidGlandName': return ThyroidGlandName;
    case 'thyroidGlandFindings': return ThyroidGlandFindings;
    case 'otherExaminationName': return OtherExaminationName;
    case 'otherExaminationFindings': return OtherExaminationFindings;
    case 'nameOfInvestigations': return NameOfInvestigations;
    case 'findingsInvestigations': return FindingsInvestigations;
    case 'comorbiditiesDiagnosisData': return ComorbiditiesDiagnosisData;
    case 'managementOutcomeData': return ManagementOutcomeData;
    default: 
      console.error(`Invalid data type: ${type}`);
      throw new Error(`Invalid data type: ${type}`);
  }
};

export const AdditionalDataService = {
  create: async (type: string, payload: any): Promise<any> => {
    const model = getModelByType(type);
    try {
      return await create(model, payload);
    } catch (error) {
      throw error;
    }
  },
  getAll: async (type: string): Promise<any[]> => {
    const model = getModelByType(type);
    try {
      return await getAll(model);
    } catch (error) {
      throw error;
    }
  },
  getById: async (type: string, id: string): Promise<any> => {
    const model = getModelByType(type);
    try {
      return await getById(model, id);
    } catch (error) {
      throw error;
    }
  },
  updateById: async (type: string, id: string, payload: any): Promise<any> => {
    const model = getModelByType(type);
    try {
      return await updateById(model, id, payload);
    } catch (error) {
      throw error;
    }
  },
  deleteById: async (type: string, id: string): Promise<any> => {
    const model = getModelByType(type);
    try {
      return await deleteById(model, id);
    } catch (error) {
      throw error;
    }
  },
};
