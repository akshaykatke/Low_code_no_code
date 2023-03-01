import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FarmRentalFormResolverBase } from "./base/farmRentalForm.resolver.base";
import { FarmRentalForm } from "./base/FarmRentalForm";
import { FarmRentalFormService } from "./farmRentalForm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Farmrentalform)
export class FarmRentalFormResolver extends FarmRentalFormResolverBase {
  constructor(
    protected readonly service: FarmRentalFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
