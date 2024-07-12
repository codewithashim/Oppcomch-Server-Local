import { Schema, model, Document, Model } from "mongoose";

// Define interfaces for each schema
interface IChiefComplaints extends Document {
  value: string;
}

interface IPastIllnessData extends Document {
  value: string;
}

interface IPersonalHistoryData extends Document {
  value: string;
}

interface IClinicalExaminationName extends Document {
  value: string;
}

interface IClinicalExaminationFindings extends Document {
  value: string;
}

interface ICardiovascularSystemName extends Document {
  value: string;
}

interface ICardiovascularSystemFindings extends Document {
  value: string;
}

interface IRespiratorySystemName extends Document {
  value: string;
}

interface IRespiratorySystemFindings extends Document {
  value: string;
}

interface IAbdomenName extends Document {
  value: string;
}

interface IAbdomenFindings extends Document {
  value: string;
}

interface INeurologicalExaminationName extends Document {
  value: string;
}

interface INeurologicalExaminationFindings extends Document {
  value: string;
}

interface ILocomotorSystemName extends Document {
  value: string;
}

interface ILocomotorSystemFindings extends Document {
  value: string;
}

interface IThyroidGlandName extends Document {
  value: string;
}

interface IThyroidGlandFindings extends Document {
  value: string;
}

interface IOtherExaminationName extends Document {
  value: string;
}

interface IOtherExaminationFindings extends Document {
  value: string;
}

interface INameOfInvestigations extends Document {
  value: string;
}

interface IFindingsInvestigations extends Document {
  value: string;
}

interface IComorbiditiesDiagnosisData extends Document {
  value: string;
}

interface IManagementOutcomeData extends Document {
  value: string;
}

// Define schema for each interface
const ChiefComplaintsSchema = new Schema<IChiefComplaints>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const PastIllnessDataSchema = new Schema<IPastIllnessData>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const PersonalHistoryDataSchema = new Schema<IPersonalHistoryData>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ClinicalExaminationNameSchema = new Schema<IClinicalExaminationName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ClinicalExaminationFindingsSchema = new Schema<IClinicalExaminationFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const CardiovascularSystemNameSchema = new Schema<ICardiovascularSystemName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const CardiovascularSystemFindingsSchema = new Schema<ICardiovascularSystemFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const RespiratorySystemNameSchema = new Schema<IRespiratorySystemName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const RespiratorySystemFindingsSchema = new Schema<IRespiratorySystemFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const AbdomenNameSchema = new Schema<IAbdomenName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const AbdomenFindingsSchema = new Schema<IAbdomenFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const NeurologicalExaminationNameSchema = new Schema<INeurologicalExaminationName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const NeurologicalExaminationFindingsSchema = new Schema<INeurologicalExaminationFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const LocomotorSystemNameSchema = new Schema<ILocomotorSystemName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const LocomotorSystemFindingsSchema = new Schema<ILocomotorSystemFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ThyroidGlandNameSchema = new Schema<IThyroidGlandName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ThyroidGlandFindingsSchema = new Schema<IThyroidGlandFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const OtherExaminationNameSchema = new Schema<IOtherExaminationName>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const OtherExaminationFindingsSchema = new Schema<IOtherExaminationFindings>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const NameOfInvestigationsSchema = new Schema<INameOfInvestigations>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const FindingsInvestigationsSchema = new Schema<IFindingsInvestigations>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ComorbiditiesDiagnosisDataSchema = new Schema<IComorbiditiesDiagnosisData>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const ManagementOutcomeDataSchema = new Schema<IManagementOutcomeData>(
  {
    value: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// Create models for each schema
export const ChiefComplaints = model<IChiefComplaints>("ChiefComplaints", ChiefComplaintsSchema);
export const PastIllnessData = model<IPastIllnessData>("PastIllnessData", PastIllnessDataSchema);
export const PersonalHistoryData = model<IPersonalHistoryData>("PersonalHistoryData", PersonalHistoryDataSchema);
export const ClinicalExaminationName = model<IClinicalExaminationName>("ClinicalExaminationName", ClinicalExaminationNameSchema);
export const ClinicalExaminationFindings = model<IClinicalExaminationFindings>("ClinicalExaminationFindings", ClinicalExaminationFindingsSchema);
export const CardiovascularSystemName = model<ICardiovascularSystemName>("CardiovascularSystemName", CardiovascularSystemNameSchema);
export const CardiovascularSystemFindings = model<ICardiovascularSystemFindings>("CardiovascularSystemFindings", CardiovascularSystemFindingsSchema);
export const RespiratorySystemName = model<IRespiratorySystemName>("RespiratorySystemName", RespiratorySystemNameSchema);
export const RespiratorySystemFindings = model<IRespiratorySystemFindings>("RespiratorySystemFindings", RespiratorySystemFindingsSchema);
export const AbdomenName = model<IAbdomenName>("AbdomenName", AbdomenNameSchema);
export const AbdomenFindings = model<IAbdomenFindings>("AbdomenFindings", AbdomenFindingsSchema);
export const NeurologicalExaminationName = model<INeurologicalExaminationName>("NeurologicalExaminationName", NeurologicalExaminationNameSchema);
export const NeurologicalExaminationFindings = model<INeurologicalExaminationFindings>("NeurologicalExaminationFindings", NeurologicalExaminationFindingsSchema);
export const LocomotorSystemName = model<ILocomotorSystemName>("LocomotorSystemName", LocomotorSystemNameSchema);
export const LocomotorSystemFindings = model<ILocomotorSystemFindings>("LocomotorSystemFindings", LocomotorSystemFindingsSchema);
export const ThyroidGlandName = model<IThyroidGlandName>("ThyroidGlandName", ThyroidGlandNameSchema);
export const ThyroidGlandFindings = model<IThyroidGlandFindings>("ThyroidGlandFindings", ThyroidGlandFindingsSchema);
export const OtherExaminationName = model<IOtherExaminationName>("OtherExaminationName", OtherExaminationNameSchema);
export const OtherExaminationFindings = model<IOtherExaminationFindings>("OtherExaminationFindings", OtherExaminationFindingsSchema);
export const NameOfInvestigations = model<INameOfInvestigations>("NameOfInvestigations", NameOfInvestigationsSchema);
export const FindingsInvestigations = model<IFindingsInvestigations>("FindingsInvestigations", FindingsInvestigationsSchema);
export const ComorbiditiesDiagnosisData = model<IComorbiditiesDiagnosisData>("ComorbiditiesDiagnosisData", ComorbiditiesDiagnosisDataSchema);
export const ManagementOutcomeData = model<IManagementOutcomeData>("ManagementOutcomeData", ManagementOutcomeDataSchema);
