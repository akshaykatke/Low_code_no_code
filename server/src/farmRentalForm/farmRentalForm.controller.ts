import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FarmRentalFormService } from "./farmRentalForm.service";
import { FarmRentalFormControllerBase } from "./base/farmRentalForm.controller.base";

@swagger.ApiTags("farmRentalForms")
@common.Controller("farmRentalForms")
export class FarmRentalFormController extends FarmRentalFormControllerBase {
  constructor(
    protected readonly service: FarmRentalFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
