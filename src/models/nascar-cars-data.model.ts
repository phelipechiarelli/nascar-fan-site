import { NascarCarsManufacturerDataModel } from "./nascar-car-manufacturer-data.model";
import { NascarCarEngineDataModel } from "./nascar-car-engine-data.model";
import { NascarCarOwnerDataModel } from "./nascar-car-owner-data.model";
import { NascarTeamDataModel } from "./nascar-team-data.model";

export class NascarCarsDataModel {
   public id: string;
   public number: string;
   public sponsors: string;
   public status: string;
   public crew_chief: string;
   public manufacturer: NascarCarsManufacturerDataModel;
   public engine: NascarCarEngineDataModel;
   public owner: NascarCarOwnerDataModel;
   public team: NascarTeamDataModel;
}