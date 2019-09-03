"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("../../core/utils/joi"));
const helper_schemas_1 = require("./helper-schemas");
exports.RGETCitiesSchema = joi_1.default.array().items(helper_schemas_1.CitySchema);
///
exports.AGETCitySchema = joi_1.default.object({
    cityId: joi_1.default.objectId().required(),
});
exports.RGETCitySchema = helper_schemas_1.CitySchema;
///
exports.APUTCitySchema = joi_1.default.object({
    cityId: joi_1.default.objectId().required(),
    name: joi_1.default.string().required(),
});
exports.RPUTCitySchema = helper_schemas_1.CitySchema;
///
exports.APOSTCitySchema = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.RPOSTCitySchema = helper_schemas_1.CitySchema;
///
exports.ADELETECitySchema = joi_1.default.object({
    cityId: joi_1.default.objectId().required(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvY2l0aWVzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBeUQ7QUFDekQscURBQThDO0FBRWpDLFFBQUEsZ0JBQWdCLEdBQUcsYUFBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBVSxDQUFDLENBQUM7QUFHOUQsR0FBRztBQUVVLFFBQUEsY0FBYyxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEMsTUFBTSxFQUFFLGFBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDakMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxjQUFjLEdBQUcsMkJBQVUsQ0FBQztBQUd6QyxHQUFHO0FBRVUsUUFBQSxjQUFjLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxNQUFNLEVBQUUsYUFBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNqQyxJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUM3QixDQUFDLENBQUM7QUFFVSxRQUFBLGNBQWMsR0FBRywyQkFBVSxDQUFDO0FBR3pDLEdBQUc7QUFFVSxRQUFBLGVBQWUsR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3pDLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQzdCLENBQUMsQ0FBQztBQUVVLFFBQUEsZUFBZSxHQUFHLDJCQUFVLENBQUM7QUFHMUMsR0FBRztBQUVVLFFBQUEsaUJBQWlCLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxNQUFNLEVBQUUsYUFBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNqQyxDQUFDLENBQUMifQ==