"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("../types"));
const errors_1 = require("../../core/utils/errors");
const validators_1 = require("./validators");
const validate_schema_1 = __importDefault(require("../../core/utils/validate-schema"));
const decorators_1 = require("../decorators");
let CitiesController = class CitiesController {
    async getAllCities() {
        const cities = await this._CityModel.find();
        return cities;
    }
    async getCityById(arg) {
        const city = await this._CityModel.findById(arg.cityId);
        if (!city) {
            throw new errors_1.MError(404, "city not found");
        }
        return city;
    }
    /* @httpGet("/:cityId")
    async getCityById(@request() req: Request): Promise<IRGETCity> {
        const { cityId } = validateSchema(req.params, AGETCitySchema);
        const city = await this._CityModel.findById(cityId);
        if (!city) {
            throw new MError(404, "city not found");
        }
        return city;
    } */
    async changeCityById(city) {
        const doc = await this._CityModel.findByIdAndUpdate(city.cityId, city, {
            new: true,
        });
        if (!doc) {
            throw new errors_1.MError(404, "city not found");
        }
        return doc;
    }
    async addCity(req) {
        const city = validate_schema_1.default(req.body, validators_1.APOSTCitySchema);
        return this._CityModel.create(city);
    }
    async deleteCityById(req) {
        const city = validate_schema_1.default(req.params, validators_1.ADELETECitySchema);
        await this._CityModel.deleteOne({ _id: city.cityId });
    }
};
__decorate([
    inversify_1.inject(types_1.default.MODELS.City),
    __metadata("design:type", Object)
], CitiesController.prototype, "_CityModel", void 0);
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "getAllCities", null);
__decorate([
    inversify_express_utils_1.httpGet("/:cityId"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.AGETCitySchema, "params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "getCityById", null);
__decorate([
    inversify_express_utils_1.httpPut("/:cityId"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.APUTCitySchema, ["params", "body"])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "changeCityById", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    __param(0, inversify_express_utils_1.request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "addCity", null);
__decorate([
    inversify_express_utils_1.httpDelete("/:cityId"),
    __param(0, inversify_express_utils_1.request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "deleteCityById", null);
CitiesController = __decorate([
    inversify_express_utils_1.controller("/api/cities")
], CitiesController);
exports.CitiesController = CitiesController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvY2l0aWVzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFPaUM7QUFFakMseUNBQW1DO0FBQ25DLHFEQUE2QjtBQUU3QixvREFBaUQ7QUFDakQsNkNBV3NCO0FBQ3RCLHVGQUE4RDtBQUM5RCw4Q0FBNEQ7QUFHNUQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFJNUIsS0FBSyxDQUFDLFlBQVk7UUFDakIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUlELEtBQUssQ0FBQyxXQUFXLENBQ3lCLEdBQWM7UUFFdkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNWLE1BQU0sSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7Ozs7UUFRSTtJQUlKLEtBQUssQ0FBQyxjQUFjLENBQ2dDLElBQWU7UUFFbEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3RFLEdBQUcsRUFBRSxJQUFJO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULE1BQU0sSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFHRCxLQUFLLENBQUMsT0FBTyxDQUFZLEdBQVk7UUFDcEMsTUFBTSxJQUFJLEdBQUcseUJBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDRCQUFlLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRCxLQUFLLENBQUMsY0FBYyxDQUFZLEdBQVk7UUFDM0MsTUFBTSxJQUFJLEdBQUcseUJBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFpQixDQUFDLENBQUM7UUFDM0QsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0QsQ0FBQTtBQXZEMkI7SUFBMUIsa0JBQU0sQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7b0RBQXdCO0FBR2xEO0lBREMsaUNBQU8sQ0FBQyxHQUFHLENBQUM7Ozs7b0RBSVo7QUFJRDtJQUZDLGlDQUFPLENBQUMsVUFBVSxDQUFDO0lBQ25CLHlCQUFZO0lBRVgsV0FBQSwwQkFBYSxDQUFDLDJCQUFjLEVBQUUsUUFBUSxDQUFDLENBQUE7Ozs7bURBT3hDO0FBY0Q7SUFGQyxpQ0FBTyxDQUFDLFVBQVUsQ0FBQztJQUNuQix5QkFBWTtJQUVYLFdBQUEsMEJBQWEsQ0FBQywyQkFBYyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7Ozs7c0RBU2xEO0FBR0Q7SUFEQyxrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUNDLFdBQUEsaUNBQU8sRUFBRSxDQUFBOzs7OytDQUd2QjtBQUdEO0lBREMsb0NBQVUsQ0FBQyxVQUFVLENBQUM7SUFDRCxXQUFBLGlDQUFPLEVBQUUsQ0FBQTs7OztzREFHOUI7QUF2RFcsZ0JBQWdCO0lBRDVCLG9DQUFVLENBQUMsYUFBYSxDQUFDO0dBQ2IsZ0JBQWdCLENBd0Q1QjtBQXhEWSw0Q0FBZ0IifQ==