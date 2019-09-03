import { ISchoolModel } from "../../core/models/typegoose/school";
import {
	IRGETAllSchools,
	IRGETSchoolById,
	IAGETSchoolById,
	AGETSchoolByIdSchema,
	IAPOSTSchool,
	IRPOSTSchool,
	APOSTSchoolSchema,
	APUTSchoolSchema,
	IAPUTSchoool,
	IRPUTSchool,
	IRGETSchoolsByCityId,
	IAGETSchoolsByCityId,
	AGETSchoolsByCityIdSchema,
} from "./validators";
import { inject } from "inversify";
import TYPES from "../types";
import {
	controller,
	httpGet,
	httpPut,
	httpPost,
} from "inversify-express-utils";
import { MError } from "../../core/utils/errors";
import { withSpecials, wValidatedArg } from "../decorators";

@controller("/api/schools")
export class SchoolsController {
	@inject(TYPES.MODELS.School) SchoolModel: ISchoolModel;

	@httpGet("/")
	async getAll(): Promise<IRGETAllSchools> {
		return this.SchoolModel.find();
	}

	@httpGet("/by-city")
	@withSpecials
	async getSchoolsByCityId(
		@wValidatedArg(AGETSchoolsByCityIdSchema, "query")
		arg: IAGETSchoolsByCityId
	): Promise<IRGETSchoolsByCityId> {
		return this.SchoolModel.find({ cityId: arg.cityId });
	}

	@httpGet("/:id")
	@withSpecials
	async getById(
		@wValidatedArg(AGETSchoolByIdSchema, "params") args: IAGETSchoolById
	): Promise<IRGETSchoolById> {
		const school = await this.SchoolModel.findById(args.id);
		if (!school) {
			throw new MError(404, "school not found");
		}
		return school;
	}

	@httpPost("/")
	@withSpecials
	async insert(
		@wValidatedArg(APOSTSchoolSchema, "body") args: IAPOSTSchool
	): Promise<IRPOSTSchool> {
		return this.SchoolModel.create(args);
	}

	@httpPut("/:_id")
	@withSpecials
	async changeById(
		@wValidatedArg(APUTSchoolSchema, ["params", "body"]) arg: IAPUTSchoool
	): Promise<IRPUTSchool> {
		const newSchool = await this.SchoolModel.findByIdAndUpdate(
			arg._id,
			arg,
			{ new: true }
		);
		if (!newSchool) {
			throw new MError(404, "school not found");
		}
		return newSchool;
	}
}
