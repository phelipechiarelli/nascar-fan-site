import { NascarDriverListSeriesModel } from "./nascar-driver-list-series.model";
import { NascarDriverListSeasonModel } from "./nascar-driver-list-season.model";
import { NascarDriversDataModel } from "./nascar-drivers-data.model";

export class NascarDriverListModel {
    public series: NascarDriverListSeriesModel;
    public season: NascarDriverListSeasonModel;
    public drivers: NascarDriversDataModel;
}