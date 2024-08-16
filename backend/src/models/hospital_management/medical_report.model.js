import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: trie });

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
