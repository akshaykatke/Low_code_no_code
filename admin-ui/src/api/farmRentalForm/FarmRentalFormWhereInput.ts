import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FarmRentalFormWhereInput = {
  caste?: "Sc" | "St" | "Obc" | "Other" | "General";
  crop?: StringFilter;
  currentAddress?: StringFilter;
  dateOfBirth?: DateTimeFilter;
  district?: StringFilter;
  firstNameOfFarmer?: StringFilter;
  firstNameOfFather?: StringFilter;
  firstNameOfMother?: StringFilter;
  fromDate?: DateTimeFilter;
  gender?: "Male" | "Female" | "Other";
  id?: StringFilter;
  landmark?: StringNullableFilter;
  lastNameOfFarmer?: StringFilter;
  lastNameOfFather?: StringFilter;
  lastNameOfMother?: StringFilter;
  maritalStatus?: "Married" | "Unmarried" | "Other";
  mobileNumber?: IntFilter;
  mobileNumberSameAsWhatsappNumber?: BooleanFilter;
  permanentAddressSameAsCurrentAddress?: BooleanFilter;
  pinCode?: IntFilter;
  religion?:
    | "Hindu"
    | "Muslim"
    | "Sikh"
    | "Jain"
    | "Parsi"
    | "Khristian"
    | "Other";
  state?: StringFilter;
  tehsil?: StringFilter;
  title?: "Mr" | "Mrs" | "Other";
  toDate?: DateTimeFilter;
  whatsappNumber?: IntNullableFilter;
};
