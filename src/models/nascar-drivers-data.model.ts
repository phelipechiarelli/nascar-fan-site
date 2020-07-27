import { NascarTeamsDataModel } from "./nascar-teams-data.model";
import { NascarCarsDataModel } from "./nascar-cars-data.model";

export class NascarDriversDataModel{
   public id: string;
   public first_name: string;
   public last_name: string;
   public full_name: string;
   public birthday: Date;
   public rookie_year: number;
   public gender: string;
   public status: string;
   public country: string;
   public birth_place: string;
   public twitter: string;
   public points_eligible: boolean;
   public team: NascarTeamsDataModel;
   public cars: NascarCarsDataModel;
}