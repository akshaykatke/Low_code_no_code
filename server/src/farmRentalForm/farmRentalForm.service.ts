import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FarmRentalFormServiceBase } from "./base/farmRentalForm.service.base";

@Injectable()
export class FarmRentalFormService extends FarmRentalFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
