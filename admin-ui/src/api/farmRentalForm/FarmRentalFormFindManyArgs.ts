import { FarmRentalFormWhereInput } from "./FarmRentalFormWhereInput";
import { FarmRentalFormOrderByInput } from "./FarmRentalFormOrderByInput";

export type FarmRentalFormFindManyArgs = {
  where?: FarmRentalFormWhereInput;
  orderBy?: Array<FarmRentalFormOrderByInput>;
  skip?: number;
  take?: number;
};
