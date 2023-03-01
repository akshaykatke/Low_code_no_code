/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFarmRentalFormArgs } from "./CreateFarmRentalFormArgs";
import { UpdateFarmRentalFormArgs } from "./UpdateFarmRentalFormArgs";
import { DeleteFarmRentalFormArgs } from "./DeleteFarmRentalFormArgs";
import { FarmRentalFormFindManyArgs } from "./FarmRentalFormFindManyArgs";
import { FarmRentalFormFindUniqueArgs } from "./FarmRentalFormFindUniqueArgs";
import { FarmRentalForm } from "./FarmRentalForm";
import { FarmRentalFormService } from "../farmRentalForm.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Farmrentalform)
export class FarmRentalFormResolverBase {
  constructor(
    protected readonly service: FarmRentalFormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "read",
    possession: "any",
  })
  async _farmRentalFormsMeta(
    @graphql.Args() args: FarmRentalFormFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FarmRentalForm])
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "read",
    possession: "any",
  })
  async farmRentalForms(
    @graphql.Args() args: FarmRentalFormFindManyArgs
  ): Promise<FarmRentalForm[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FarmRentalForm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "read",
    possession: "own",
  })
  async farmRentalForm(
    @graphql.Args() args: FarmRentalFormFindUniqueArgs
  ): Promise<FarmRentalForm | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmRentalForm)
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "create",
    possession: "any",
  })
  async createFarmRentalForm(
    @graphql.Args() args: CreateFarmRentalFormArgs
  ): Promise<FarmRentalForm> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmRentalForm)
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "update",
    possession: "any",
  })
  async updateFarmRentalForm(
    @graphql.Args() args: UpdateFarmRentalFormArgs
  ): Promise<FarmRentalForm | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FarmRentalForm)
  @nestAccessControl.UseRoles({
    resource: "FarmRentalForm",
    action: "delete",
    possession: "any",
  })
  async deleteFarmRentalForm(
    @graphql.Args() args: DeleteFarmRentalFormArgs
  ): Promise<FarmRentalForm | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}