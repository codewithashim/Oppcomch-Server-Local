"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionalDataService = void 0;
const additionaldata_model_1 = require("./additionaldata.model");
const create = (Model, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const created = yield Model.create(payload);
        return created;
    }
    catch (error) {
        console.error(`Error creating document in ${Model.modelName}:`, error);
        throw new Error('Error creating document');
    }
});
const getAll = (Model) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Model.find();
        return data;
    }
    catch (error) {
        console.error(`Error fetching documents from ${Model.modelName}:`, error);
        throw new Error('Error fetching documents');
    }
});
const getById = (Model, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Model.findById(id);
        return data;
    }
    catch (error) {
        console.error(`Error fetching document by ID from ${Model.modelName}:`, error);
        throw new Error('Error fetching document by ID');
    }
});
const updateById = (Model, id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield Model.findByIdAndUpdate(id, payload, { new: true });
        return updated;
    }
    catch (error) {
        console.error(`Error updating document by ID in ${Model.modelName}:`, error);
        throw new Error('Error updating document by ID');
    }
});
const deleteById = (Model, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Model.findByIdAndDelete(id);
        return deleted;
    }
    catch (error) {
        console.error(`Error deleting document by ID from ${Model.modelName}:`, error);
        throw new Error('Error deleting document by ID');
    }
});
const getModelByType = (type) => {
    switch (type) {
        case 'chiefComplaints': return additionaldata_model_1.ChiefComplaints;
        case 'pastIllnessData': return additionaldata_model_1.PastIllnessData;
        case 'personalHistoryData': return additionaldata_model_1.PersonalHistoryData;
        case 'clinicalExaminationName': return additionaldata_model_1.ClinicalExaminationName;
        case 'clinicalExaminationFindings': return additionaldata_model_1.ClinicalExaminationFindings;
        case 'cardiovascularSystemName': return additionaldata_model_1.CardiovascularSystemName;
        case 'cardiovascularSystemFindings': return additionaldata_model_1.CardiovascularSystemFindings;
        case 'respiratorySystemName': return additionaldata_model_1.RespiratorySystemName;
        case 'respiratorySystemFindings': return additionaldata_model_1.RespiratorySystemFindings;
        case 'abdomenName': return additionaldata_model_1.AbdomenName;
        case 'abdomenFindings': return additionaldata_model_1.AbdomenFindings;
        case 'neurologicalExaminationName': return additionaldata_model_1.NeurologicalExaminationName;
        case 'neurologicalExaminationFindings': return additionaldata_model_1.NeurologicalExaminationFindings;
        case 'locomotorSystemName': return additionaldata_model_1.LocomotorSystemName;
        case 'locomotorSystemFindings': return additionaldata_model_1.LocomotorSystemFindings;
        case 'thyroidGlandName': return additionaldata_model_1.ThyroidGlandName;
        case 'thyroidGlandFindings': return additionaldata_model_1.ThyroidGlandFindings;
        case 'otherExaminationName': return additionaldata_model_1.OtherExaminationName;
        case 'otherExaminationFindings': return additionaldata_model_1.OtherExaminationFindings;
        case 'nameOfInvestigations': return additionaldata_model_1.NameOfInvestigations;
        case 'findingsInvestigations': return additionaldata_model_1.FindingsInvestigations;
        case 'comorbiditiesDiagnosisData': return additionaldata_model_1.ComorbiditiesDiagnosisData;
        case 'managementOutcomeData': return additionaldata_model_1.ManagementOutcomeData;
        default:
            console.error(`Invalid data type: ${type}`);
            throw new Error(`Invalid data type: ${type}`);
    }
};
exports.AdditionalDataService = {
    create: (type, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const model = getModelByType(type);
        try {
            return yield create(model, payload);
        }
        catch (error) {
            throw error;
        }
    }),
    getAll: (type) => __awaiter(void 0, void 0, void 0, function* () {
        const model = getModelByType(type);
        try {
            return yield getAll(model);
        }
        catch (error) {
            throw error;
        }
    }),
    getById: (type, id) => __awaiter(void 0, void 0, void 0, function* () {
        const model = getModelByType(type);
        try {
            return yield getById(model, id);
        }
        catch (error) {
            throw error;
        }
    }),
    updateById: (type, id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const model = getModelByType(type);
        try {
            return yield updateById(model, id, payload);
        }
        catch (error) {
            throw error;
        }
    }),
    deleteById: (type, id) => __awaiter(void 0, void 0, void 0, function* () {
        const model = getModelByType(type);
        try {
            return yield deleteById(model, id);
        }
        catch (error) {
            throw error;
        }
    }),
};
