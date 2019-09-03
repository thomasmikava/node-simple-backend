import {
	controller,
	httpGet,
	request,
	httpPut,
	httpPost,
	httpDelete,
} from "inversify-express-utils";
import { ICityModel } from "../../core/models/typegoose/city";
import { inject } from "inversify";
import TYPES from "../types";
import { Request } from "express";
import { MError } from "../../core/utils/errors";
import {
	IRGETCities,
	IRGETCity,
	AGETCitySchema,
	IRPUTCity,
	APUTCitySchema,
	IRPOSTCity,
	APOSTCitySchema,
	ADELETECitySchema,
	IAPUTCity,
	IAGETCity,
} from "./validators";
import validateSchema from "../../core/utils/validate-schema";
import { withSpecials, wValidatedArg } from "../decorators";

@controller("/api/cities")
export class CitiesController {
	@inject(TYPES.MODELS.City) _CityModel: ICityModel;

	@httpGet("/")
	async getAllCities(): Promise<IRGETCities> {
		const cities = await this._CityModel.find();
		return cities;
	}

	@httpGet("/:cityId")
	@withSpecials
	async getCityById(
		@wValidatedArg(AGETCitySchema, "params") arg: IAGETCity
	): Promise<IRGETCity> {
		const city = await this._CityModel.findById(arg.cityId);
		if (!city) {
			throw new MError(404, "city not found");
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

	@httpPut("/:cityId")
	@withSpecials
	async changeCityById(
		@wValidatedArg(APUTCitySchema, ["params", "body"]) city: IAPUTCity
	): Promise<IRPUTCity> {
		const doc = await this._CityModel.findByIdAndUpdate(city.cityId, city, {
			new: true,
		});
		if (!doc) {
			throw new MError(404, "city not found");
		}
		return doc;
	}

	@httpPost("/")
	async addCity(@request() req: Request): Promise<IRPOSTCity> {
		const city = validateSchema(req.body, APOSTCitySchema);
		return this._CityModel.create(city);
	}

	@httpDelete("/:cityId")
	async deleteCityById(@request() req: Request) {
		const city = validateSchema(req.params, ADELETECitySchema);
		await this._CityModel.deleteOne({ _id: city.cityId });
	}
}
