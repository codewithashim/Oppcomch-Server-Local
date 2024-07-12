"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementOutcomeData = exports.ComorbiditiesDiagnosisData = exports.FindingsInvestigations = exports.NameOfInvestigations = exports.OtherExaminationFindings = exports.OtherExaminationName = exports.ThyroidGlandFindings = exports.ThyroidGlandName = exports.LocomotorSystemFindings = exports.LocomotorSystemName = exports.NeurologicalExaminationFindings = exports.NeurologicalExaminationName = exports.AbdomenFindings = exports.AbdomenName = exports.RespiratorySystemFindings = exports.RespiratorySystemName = exports.CardiovascularSystemFindings = exports.CardiovascularSystemName = exports.ClinicalExaminationFindings = exports.ClinicalExaminationName = exports.PersonalHistoryData = exports.PastIllnessData = exports.ChiefComplaints = void 0;
const mongoose_1 = require("mongoose");
// Define schema for each interface
const ChiefComplaintsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const PastIllnessDataSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const PersonalHistoryDataSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ClinicalExaminationNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ClinicalExaminationFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const CardiovascularSystemNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const CardiovascularSystemFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const RespiratorySystemNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const RespiratorySystemFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const AbdomenNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const AbdomenFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const NeurologicalExaminationNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const NeurologicalExaminationFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const LocomotorSystemNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const LocomotorSystemFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ThyroidGlandNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ThyroidGlandFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const OtherExaminationNameSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const OtherExaminationFindingsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const NameOfInvestigationsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const FindingsInvestigationsSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ComorbiditiesDiagnosisDataSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
const ManagementOutcomeDataSchema = new mongoose_1.Schema({
    value: { type: String, required: true },
}, { timestamps: true, toJSON: { virtuals: true } });
// Create models for each schema
exports.ChiefComplaints = (0, mongoose_1.model)("ChiefComplaints", ChiefComplaintsSchema);
exports.PastIllnessData = (0, mongoose_1.model)("PastIllnessData", PastIllnessDataSchema);
exports.PersonalHistoryData = (0, mongoose_1.model)("PersonalHistoryData", PersonalHistoryDataSchema);
exports.ClinicalExaminationName = (0, mongoose_1.model)("ClinicalExaminationName", ClinicalExaminationNameSchema);
exports.ClinicalExaminationFindings = (0, mongoose_1.model)("ClinicalExaminationFindings", ClinicalExaminationFindingsSchema);
exports.CardiovascularSystemName = (0, mongoose_1.model)("CardiovascularSystemName", CardiovascularSystemNameSchema);
exports.CardiovascularSystemFindings = (0, mongoose_1.model)("CardiovascularSystemFindings", CardiovascularSystemFindingsSchema);
exports.RespiratorySystemName = (0, mongoose_1.model)("RespiratorySystemName", RespiratorySystemNameSchema);
exports.RespiratorySystemFindings = (0, mongoose_1.model)("RespiratorySystemFindings", RespiratorySystemFindingsSchema);
exports.AbdomenName = (0, mongoose_1.model)("AbdomenName", AbdomenNameSchema);
exports.AbdomenFindings = (0, mongoose_1.model)("AbdomenFindings", AbdomenFindingsSchema);
exports.NeurologicalExaminationName = (0, mongoose_1.model)("NeurologicalExaminationName", NeurologicalExaminationNameSchema);
exports.NeurologicalExaminationFindings = (0, mongoose_1.model)("NeurologicalExaminationFindings", NeurologicalExaminationFindingsSchema);
exports.LocomotorSystemName = (0, mongoose_1.model)("LocomotorSystemName", LocomotorSystemNameSchema);
exports.LocomotorSystemFindings = (0, mongoose_1.model)("LocomotorSystemFindings", LocomotorSystemFindingsSchema);
exports.ThyroidGlandName = (0, mongoose_1.model)("ThyroidGlandName", ThyroidGlandNameSchema);
exports.ThyroidGlandFindings = (0, mongoose_1.model)("ThyroidGlandFindings", ThyroidGlandFindingsSchema);
exports.OtherExaminationName = (0, mongoose_1.model)("OtherExaminationName", OtherExaminationNameSchema);
exports.OtherExaminationFindings = (0, mongoose_1.model)("OtherExaminationFindings", OtherExaminationFindingsSchema);
exports.NameOfInvestigations = (0, mongoose_1.model)("NameOfInvestigations", NameOfInvestigationsSchema);
exports.FindingsInvestigations = (0, mongoose_1.model)("FindingsInvestigations", FindingsInvestigationsSchema);
exports.ComorbiditiesDiagnosisData = (0, mongoose_1.model)("ComorbiditiesDiagnosisData", ComorbiditiesDiagnosisDataSchema);
exports.ManagementOutcomeData = (0, mongoose_1.model)("ManagementOutcomeData", ManagementOutcomeDataSchema);
