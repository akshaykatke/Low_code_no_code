export type FarmRentalFormUpdateInput = {
  caste?: "Sc" | "St" | "Obc" | "Other" | "General";
  crop?: string;
  currentAddress?: string;
  dateOfBirth?: Date;
  district?: string;
  firstNameOfFarmer?: string;
  firstNameOfFather?: string;
  firstNameOfMother?: string;
  fromDate?: Date;
  gender?: "Male" | "Female" | "Other";
  landmark?: string | null;
  lastNameOfFarmer?: string;
  lastNameOfFather?: string;
  lastNameOfMother?: string;
  maritalStatus?: "Married" | "Unmarried" | "Other";
  mobileNumber?: number;
  mobileNumberSameAsWhatsappNumber?: boolean;
  permanentAddressSameAsCurrentAddress?: boolean;
  pinCode?: number;
  religion?:
    | "Hindu"
    | "Muslim"
    | "Sikh"
    | "Jain"
    | "Parsi"
    | "Khristian"
    | "Other";
  state?: string;
  tehsil?: string;
  title?: "Mr" | "Mrs" | "Other";
  toDate?: Date;
  whatsappNumber?: number | null;
};
