import { Model, Types } from "mongoose";

export type IPatient = {
  patientInformation: {
    name: string;
    maritalStatus: "Single" | "Married";
    registrationNo: string;
    occupation: string;
    age: string;
    sex: string;
    division: string;
    district: string;
    phoneNumber: string;
    thana: string; 
    admissionUnit: string;
    addressDetails: string;
    admissionDate: string; 
    releaseDate: string; 
    hospitalStay: string;
  };
  chiefComplaints: {
    complaints: string;
    duration: string;
  }[];
  aboutIllness: {
    historyOfPastIllness: {
      historyOfPastIllness: string;
      duration: string;
    }[];
    personalHistory: {
      personalHistory: string;
      duration: string;
    }[];
    treatmentHistory: {
      drugsName: string;
      duration: string;
    }[];
    historyOfPresentIllness: string;
    others: string;
  };
  generalExamination: {
    vitalSigns: {
      tempFahrenheit: string;
      pulsePerMin: string;
      respiratoryRatePerMin: string;
      bloodPressure: string;
      spo2: string;
    }[];
    clinicalExamination: {
      name: string;
      findings: string;
      comments: string;
    }[];
  };
  systemicExamination: {
    cardiovascularSystem: {
      name: string;
      findings: string;
      comments: string;
    }[];
    respiratorySystem: {
      name: string;
      findings: string;
      comments: string;
    }[];
    abdomen: {
      name: string;
      findings: string;
      comments: string;
    }[];
    neurologicalExamination: {
      name: string;
      findings: string;
      comments: string;
    }[];
    locomotorSystem: {
      name: string;
      findings: string;
      comments: string;
    }[];
    thyroidGland: {
      name: string;
      findings: string;
      comments: string;
    }[];
    otherExamination: {
      name: string;
      findings: string;
      comments: string;
    }[];
  };
  investigations: {
    CBC: {
      hb: string;
      plateletCount: string;
      hct: string;
      tc: string;
      p: string;
      l: string;
      reticulocyteCount: string;
      m: string;
      b: string;
      mcv: string;
      totalCirEosinophilCount: string;
      esr: string;
      igE: string;
    }[];
    urineRME: {
      albumin: string;
      pusCell: string;
      sugar: string;
      cast: string;
      ketoneBody: string;
      benceJonesProtein: string;
    }[];
    serumElectrolyte: {
      na: string;
      k: string;
      cl: string;
    }[];
    procedureStudy: {
      asciticFluidStudy: {
        polymorph: string;
        lymphocytes: string;
        malignantCell: string;
        protein: string;
        glucose: string;
        ada: string;
        saag: string;
      }[];
      csfStudy: {
        polymorph: string;
        lymphocytes: string;
        malignantCell: string;
        protein: string;
        glucose: string;
        ada: string;
        oligoclonalBand: string;
      }[];
      echocardiogram: {
        rwma: string;
        lvh: string;
        vegetation: string;
        lvidd: string;
        ef: string;
        pericardialEffusion: string;
        valvularDisease: string;
      }[];
      pluralFluidStudy: {
        polymorph: string;
        lymphocytes: string;
        malignantCell: string;
        protein: string;
        glucose: string;
        ada: string;
      }[];
      synovialFluidStudy: {
        polymorph: string;
        lymphocytes: string;
        malignantCell: string;
        protein: string;
        glucose: string;
        ada: string;
      }[];
    };
    investigations: {
      nameOfInvestigations: string;
      value: string;
      comments: string;
    }[];
  };
  diagnosis: {
    mainDiagnosis: string;
    comorbidities: string;
  }[];
  management: {
    nameOfDrugs: string;
    duration: string;
    outcome: string;
  }[];
};


export type PatientModel = Model<IPatient, Record<string, unknown>>;


export type IPatientFilter = {
  searchTerm?: string;
  patient?: Types.ObjectId;
};
