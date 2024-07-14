"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const mongoose_1 = require("mongoose");
const patientsSchema = new mongoose_1.Schema({
    patientInformation: {
        name: { type: String },
        maritalStatus: {
            type: String,
            enum: ["Single", "Married"],
        },
        registrationNo: { type: String },
        occupation: { type: String },
        age: { type: String },
        sex: { type: String },
        division: { type: String },
        district: { type: String },
        phoneNumber: { type: String },
        thana: { type: String },
        admissionUnit: { type: String },
        addressDetails: { type: String },
        admissionDate: { type: Date },
        releaseDate: { type: Date },
        hospitalStay: { type: String },
    },
    bmi: {
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        value: {
            type: Number
        },
        category: {
            type: String
        },
    },
    chiefComplaints: [
        {
            complaints: { type: String },
            duration: { type: String },
        },
    ],
    aboutIllness: {
        historyOfPastIllness: [
            {
                historyOfPastIllness: { type: String },
                duration: { type: String },
            },
        ],
        personalHistory: [
            {
                personalHistory: { type: String },
                duration: { type: String },
            },
        ],
        treatmentHistory: [
            {
                drugsName: { type: String },
                duration: { type: String },
            },
        ],
        historyOfPresentIllness: { type: String },
        others: { type: String },
    },
    generalExamination: {
        vitalSigns: [
            {
                tempFahrenheit: { type: String },
                pulsePerMin: { type: String },
                respiratoryRatePerMin: { type: String },
                bloodPressure: { type: String },
                spo2: { type: String },
            },
        ],
        clinicalExamination: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
    },
    systemicExamination: {
        cardiovascularSystem: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        respiratorySystem: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        abdomen: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        neurologicalExamination: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        locomotorSystem: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        thyroidGland: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
        otherExamination: [
            {
                name: { type: String },
                findings: { type: String },
                comments: { type: String },
            },
        ],
    },
    investigations: {
        CBC: [
            {
                hb: { type: String },
                plateletCount: { type: String },
                hct: { type: String },
                tc: { type: String },
                p: { type: String },
                l: { type: String },
                reticulocyteCount: { type: String },
                m: { type: String },
                b: { type: String },
                mcv: { type: String },
                totalCirEosinophilCount: { type: String },
                esr: { type: String },
                igE: { type: String },
            },
        ],
        urineRME: [
            {
                albumin: { type: String },
                pusCell: { type: String },
                sugar: { type: String },
                cast: { type: String },
                ketoneBody: { type: String },
                benceJonesProtein: { type: String },
            },
        ],
        serumElectrolyte: [
            {
                na: { type: String },
                k: { type: String },
                cl: { type: String },
            },
        ],
        procedureStudy: {
            asciticFluidStudy: [
                {
                    polymorph: { type: String },
                    lymphocytes: { type: String },
                    malignantCell: { type: String },
                    protein: { type: String },
                    glucose: { type: String },
                    ada: { type: String },
                    saag: { type: String },
                },
            ],
            csfStudy: [
                {
                    polymorph: { type: String },
                    lymphocytes: { type: String },
                    malignantCell: { type: String },
                    protein: { type: String },
                    glucose: { type: String },
                    ada: { type: String },
                    oligoclonalBand: { type: String },
                },
            ],
            echocardiogram: [
                {
                    rwma: { type: String },
                    lvh: { type: String },
                    vegetation: { type: String },
                    lvidd: { type: String },
                    ef: { type: String },
                    pericardialEffusion: { type: String },
                    valvularDisease: { type: String },
                },
            ],
            pluralFluidStudy: [
                {
                    polymorph: { type: String },
                    lymphocytes: { type: String },
                    malignantCell: { type: String },
                    protein: { type: String },
                    glucose: { type: String },
                    ada: { type: String },
                },
            ],
            synovialFluidStudy: [
                {
                    polymorph: { type: String },
                    lymphocytes: { type: String },
                    malignantCell: { type: String },
                    protein: { type: String },
                    glucose: { type: String },
                    ada: { type: String },
                },
            ],
        },
        investigations: [
            {
                nameOfInvestigations: { type: String },
                value: { type: String },
                comments: { type: String },
            },
        ],
    },
    diagnosis: [
        {
            mainDiagnosis: { type: String },
            comorbidities: { type: String },
        },
    ],
    management: [
        {
            nameOfDrugs: { type: String },
            duration: { type: String },
            outcome: { type: String },
        },
    ],
});
exports.Patient = (0, mongoose_1.model)("Patient", patientsSchema);
