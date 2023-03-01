import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const FarmRentalFormShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Caste" source="caste" />
        <TextField label="Crop" source="crop" />
        <TextField label="Current Address" source="currentAddress" />
        <TextField label="Date of birth" source="dateOfBirth" />
        <TextField label="District" source="district" />
        <TextField label="First Name of Farmer" source="firstNameOfFarmer" />
        <TextField label="First Name of Father" source="firstNameOfFather" />
        <TextField label="First Name of Mother" source="firstNameOfMother" />
        <TextField label="From Date" source="fromDate" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Landmark" source="landmark" />
        <TextField label="Last Name of Farmer" source="lastNameOfFarmer" />
        <TextField label="Last Name of Father" source="lastNameOfFather" />
        <TextField label="Last Name of Mother" source="lastNameOfMother" />
        <TextField label="Marital status" source="maritalStatus" />
        <TextField label="Mobile Number" source="mobileNumber" />
        <BooleanField
          label="Mobile Number same as Whatsapp  number"
          source="mobileNumberSameAsWhatsappNumber"
        />
        <BooleanField
          label="Permanent address same as current address?"
          source="permanentAddressSameAsCurrentAddress"
        />
        <TextField label="Pin Code" source="pinCode" />
        <TextField label="Religion" source="religion" />
        <TextField label="State" source="state" />
        <TextField label="Tehsil" source="tehsil" />
        <TextField label="Title" source="title" />
        <TextField label="To Date" source="toDate" />
        <TextField label="Whatsapp Number" source="whatsappNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
