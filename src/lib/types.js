/**
 * Transaction Types & Interfaces
 */

export const SUBSIDY_STATUS = {
  VALID: "Valid",
  NOT_VALID: "Not Valid",
  NOT_APPLICABLE: "N/A",
};

export const RFID_STATUS = {
  VALID: "Valid",
  NOT_VALID: "Not Valid",
  NOT_APPLICABLE: "N/A",
};

export const FRAUD_TYPE = {
  NO_FRAUD: "No Fraud",
  FRAUD_RFID: "Fraud RFID",
  MISMATCH_SUBSIDY: "Mismatch Subsidi",
  UNKNOWN: "Unknown",
};

export const VEHICLE_TYPE = {
  MOTORCYCLE: "Motorcycle",
  CAR: "Car",
  TRUCK: "Truck",
};

export const FUEL_TYPE = {
  PERTALITE: "Pertalite",
  PERTAMAX: "Pertamax",
  PERTAMAX_TURBO: "Pertamax Turbo",
  SOLAR: "Solar",
};

/**
 * Table Headers
 */
export const TABLE_HEADERS = [
  "Time",
  "SPBU",
  "Dispenser",
  "Vehicle Type",
  "Brand",
  "Color",
  "License Plate",
  "Fuel Type",
  "Volume (L)",
  "Subsidy Status",
  "RFID Match",
  "Fraud Detection",
  "Evidence",
];

/**
 * UI Text Constants
 */
export const UI_STRINGS = {
  TITLE: "Real-Time Transaction Log",
  SHOWING_TRANSACTIONS: (filtered, total) =>
    `Showing ${filtered} of ${total} transactions`,
  ALL_SUBSIDY: "All Subsidy",
  ALL_RFID: "All RFID",
  ALL_FRAUD: "All Fraud",
  RESET: "Reset",
};

/**
 * @typedef {Object} Transaction
 * @property {string} time - Transaction time (HH:MM:SS)
 * @property {string} spbu - SPBU location name
 * @property {string} dispenser - Dispenser ID
 * @property {string} vehicle - Vehicle type
 * @property {string} brand - Vehicle brand
 * @property {string} color - Vehicle color
 * @property {string} plate - License plate number
 * @property {string} fuel - Fuel type
 * @property {string} volume - Fuel volume in liters
 * @property {string} subsidy - Subsidy status
 * @property {string} rfid - RFID match status
 * @property {string|null} fraud - Fraud detection result
 */
