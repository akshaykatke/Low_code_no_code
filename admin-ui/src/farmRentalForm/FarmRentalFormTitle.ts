import { FarmRentalForm as TFarmRentalForm } from "../api/farmRentalForm/FarmRentalForm";

export const FARMRENTALFORM_TITLE_FIELD = "firstNameOfFarmer";

export const FarmRentalFormTitle = (record: TFarmRentalForm): string => {
  return record.firstNameOfFarmer || String(record.id);
};
