import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FarmRentalFormController } from "../farmRentalForm.controller";
import { FarmRentalFormService } from "../farmRentalForm.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  crop: "exampleCrop",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  district: "exampleDistrict",
  firstNameOfFarmer: "exampleFirstNameOfFarmer",
  firstNameOfFather: "exampleFirstNameOfFather",
  firstNameOfMother: "exampleFirstNameOfMother",
  fromDate: new Date(),
  id: "exampleId",
  landmark: "exampleLandmark",
  lastNameOfFarmer: "exampleLastNameOfFarmer",
  lastNameOfFather: "exampleLastNameOfFather",
  lastNameOfMother: "exampleLastNameOfMother",
  mobileNumber: 42,
  mobileNumberSameAsWhatsappNumber: "true",
  permanentAddressSameAsCurrentAddress: "true",
  pinCode: 42,
  state: "exampleState",
  tehsil: "exampleTehsil",
  toDate: new Date(),
  whatsappNumber: 42,
};
const CREATE_RESULT = {
  crop: "exampleCrop",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  district: "exampleDistrict",
  firstNameOfFarmer: "exampleFirstNameOfFarmer",
  firstNameOfFather: "exampleFirstNameOfFather",
  firstNameOfMother: "exampleFirstNameOfMother",
  fromDate: new Date(),
  id: "exampleId",
  landmark: "exampleLandmark",
  lastNameOfFarmer: "exampleLastNameOfFarmer",
  lastNameOfFather: "exampleLastNameOfFather",
  lastNameOfMother: "exampleLastNameOfMother",
  mobileNumber: 42,
  mobileNumberSameAsWhatsappNumber: "true",
  permanentAddressSameAsCurrentAddress: "true",
  pinCode: 42,
  state: "exampleState",
  tehsil: "exampleTehsil",
  toDate: new Date(),
  whatsappNumber: 42,
};
const FIND_MANY_RESULT = [
  {
    crop: "exampleCrop",
    currentAddress: "exampleCurrentAddress",
    dateOfBirth: new Date(),
    district: "exampleDistrict",
    firstNameOfFarmer: "exampleFirstNameOfFarmer",
    firstNameOfFather: "exampleFirstNameOfFather",
    firstNameOfMother: "exampleFirstNameOfMother",
    fromDate: new Date(),
    id: "exampleId",
    landmark: "exampleLandmark",
    lastNameOfFarmer: "exampleLastNameOfFarmer",
    lastNameOfFather: "exampleLastNameOfFather",
    lastNameOfMother: "exampleLastNameOfMother",
    mobileNumber: 42,
    mobileNumberSameAsWhatsappNumber: "true",
    permanentAddressSameAsCurrentAddress: "true",
    pinCode: 42,
    state: "exampleState",
    tehsil: "exampleTehsil",
    toDate: new Date(),
    whatsappNumber: 42,
  },
];
const FIND_ONE_RESULT = {
  crop: "exampleCrop",
  currentAddress: "exampleCurrentAddress",
  dateOfBirth: new Date(),
  district: "exampleDistrict",
  firstNameOfFarmer: "exampleFirstNameOfFarmer",
  firstNameOfFather: "exampleFirstNameOfFather",
  firstNameOfMother: "exampleFirstNameOfMother",
  fromDate: new Date(),
  id: "exampleId",
  landmark: "exampleLandmark",
  lastNameOfFarmer: "exampleLastNameOfFarmer",
  lastNameOfFather: "exampleLastNameOfFather",
  lastNameOfMother: "exampleLastNameOfMother",
  mobileNumber: 42,
  mobileNumberSameAsWhatsappNumber: "true",
  permanentAddressSameAsCurrentAddress: "true",
  pinCode: 42,
  state: "exampleState",
  tehsil: "exampleTehsil",
  toDate: new Date(),
  whatsappNumber: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("FarmRentalForm", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FarmRentalFormService,
          useValue: service,
        },
      ],
      controllers: [FarmRentalFormController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /farmRentalForms", async () => {
    await request(app.getHttpServer())
      .post("/farmRentalForms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
      });
  });

  test("GET /farmRentalForms", async () => {
    await request(app.getHttpServer())
      .get("/farmRentalForms")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dateOfBirth: FIND_MANY_RESULT[0].dateOfBirth.toISOString(),
          fromDate: FIND_MANY_RESULT[0].fromDate.toISOString(),
          toDate: FIND_MANY_RESULT[0].toDate.toISOString(),
        },
      ]);
  });

  test("GET /farmRentalForms/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/farmRentalForms"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /farmRentalForms/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/farmRentalForms"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dateOfBirth: FIND_ONE_RESULT.dateOfBirth.toISOString(),
        fromDate: FIND_ONE_RESULT.fromDate.toISOString(),
        toDate: FIND_ONE_RESULT.toDate.toISOString(),
      });
  });

  test("POST /farmRentalForms existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/farmRentalForms")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateOfBirth: CREATE_RESULT.dateOfBirth.toISOString(),
        fromDate: CREATE_RESULT.fromDate.toISOString(),
        toDate: CREATE_RESULT.toDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/farmRentalForms")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
