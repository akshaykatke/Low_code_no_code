import { Module } from "@nestjs/common";
import { FarmRentalFormModuleBase } from "./base/farmRentalForm.module.base";
import { FarmRentalFormService } from "./farmRentalForm.service";
import { FarmRentalFormController } from "./farmRentalForm.controller";
import { FarmRentalFormResolver } from "./farmRentalForm.resolver";

@Module({
  imports: [FarmRentalFormModuleBase],
  controllers: [FarmRentalFormController],
  providers: [FarmRentalFormService, FarmRentalFormResolver],
  exports: [FarmRentalFormService],
})
export class FarmRentalFormModule {}
