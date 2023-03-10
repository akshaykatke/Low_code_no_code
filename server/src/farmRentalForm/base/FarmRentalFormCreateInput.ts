/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumFarmRentalFormCaste } from "./EnumFarmRentalFormCaste";
import {
  IsEnum,
  IsString,
  IsDate,
  IsOptional,
  IsInt,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumFarmRentalFormGender } from "./EnumFarmRentalFormGender";
import { EnumFarmRentalFormMaritalStatus } from "./EnumFarmRentalFormMaritalStatus";
import { EnumFarmRentalFormReligion } from "./EnumFarmRentalFormReligion";
import { EnumFarmRentalFormTitle } from "./EnumFarmRentalFormTitle";

@InputType()
class FarmRentalFormCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumFarmRentalFormCaste,
  })
  @IsEnum(EnumFarmRentalFormCaste)
  @Field(() => EnumFarmRentalFormCaste)
  caste!: "Sc" | "St" | "Obc" | "Other" | "General";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  crop!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  currentAddress!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateOfBirth!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  district!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstNameOfFarmer!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstNameOfFather!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstNameOfMother!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  fromDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumFarmRentalFormGender,
  })
  @IsEnum(EnumFarmRentalFormGender)
  @Field(() => EnumFarmRentalFormGender)
  gender!: "Male" | "Female" | "Other";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  landmark?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastNameOfFarmer!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastNameOfFather!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastNameOfMother!: string;

  @ApiProperty({
    required: true,
    enum: EnumFarmRentalFormMaritalStatus,
  })
  @IsEnum(EnumFarmRentalFormMaritalStatus)
  @Field(() => EnumFarmRentalFormMaritalStatus)
  maritalStatus!: "Married" | "Unmarried" | "Other";

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  mobileNumber!: number;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  mobileNumberSameAsWhatsappNumber!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  permanentAddressSameAsCurrentAddress!: boolean;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  pinCode!: number;

  @ApiProperty({
    required: true,
    enum: EnumFarmRentalFormReligion,
  })
  @IsEnum(EnumFarmRentalFormReligion)
  @Field(() => EnumFarmRentalFormReligion)
  religion!:
    | "Hindu"
    | "Muslim"
    | "Sikh"
    | "Jain"
    | "Parsi"
    | "Khristian"
    | "Other";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  tehsil!: string;

  @ApiProperty({
    required: true,
    enum: EnumFarmRentalFormTitle,
  })
  @IsEnum(EnumFarmRentalFormTitle)
  @Field(() => EnumFarmRentalFormTitle)
  title!: "Mr" | "Mrs" | "Other";

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  toDate!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  whatsappNumber?: number | null;
}

export { FarmRentalFormCreateInput as FarmRentalFormCreateInput };
