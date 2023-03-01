import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const FarmRentalFormCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="caste"
          label="Caste"
          choices={[
            { label: "SC", value: "Sc" },
            { label: "ST", value: "St" },
            { label: "OBC", value: "Obc" },
            { label: "Other", value: "Other" },
            { label: "General", value: "General" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Crop" source="crop" />
        <TextInput label="Current Address" source="currentAddress" />
        <DateInput label="Date of birth" source="dateOfBirth" />
        <TextInput label="District" source="district" />
        <TextInput label="First Name of Farmer" source="firstNameOfFarmer" />
        <TextInput label="First Name of Father" source="firstNameOfFather" />
        <TextInput label="First Name of Mother" source="firstNameOfMother" />
        <DateTimeInput label="From Date" source="fromDate" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Landmark" source="landmark" />
        <TextInput label="Last Name of Farmer" source="lastNameOfFarmer" />
        <TextInput label="Last Name of Father" source="lastNameOfFather" />
        <TextInput label="Last Name of Mother" source="lastNameOfMother" />
        <SelectInput
          source="maritalStatus"
          label="Marital status"
          choices={[
            { label: "Married", value: "Married" },
            { label: "Unmarried", value: "Unmarried" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Mobile Number" source="mobileNumber" />
        <BooleanInput
          label="Mobile Number same as Whatsapp  number"
          source="mobileNumberSameAsWhatsappNumber"
        />
        <BooleanInput
          label="Permanent address same as current address?"
          source="permanentAddressSameAsCurrentAddress"
        />
        <NumberInput step={1} label="Pin Code" source="pinCode" />
        <SelectInput
          source="religion"
          label="Religion"
          choices={[
            { label: "Hindu", value: "Hindu" },
            { label: "Muslim", value: "Muslim" },
            { label: "Sikh", value: "Sikh" },
            { label: "Jain", value: "Jain" },
            { label: "Parsi", value: "Parsi" },
            { label: "Khristian", value: "Khristian" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="State" source="state" />
        <TextInput label="Tehsil" source="tehsil" />
        <SelectInput
          source="title"
          label="Title"
          choices={[
            { label: "MR.", value: "Mr" },
            { label: "Mrs.", value: "Mrs" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="To Date" source="toDate" />
        <NumberInput step={1} label="Whatsapp Number" source="whatsappNumber" />
      </SimpleForm>
    </Create>
  );
};
