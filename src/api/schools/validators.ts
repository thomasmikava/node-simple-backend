import Joi, { SchemaToType } from "../../core/utils/joi";
import { SchoolSchema } from "./helper-schemas";

export const RGETAllSchoolsSchema = Joi.array().items(SchoolSchema);
export type IRGETAllSchools = SchemaToType<typeof RGETAllSchoolsSchema>;

///

export const AGETSchoolByIdSchema = Joi.object({
	id: Joi.objectId().required(),
});
export type IAGETSchoolById = SchemaToType<typeof AGETSchoolByIdSchema>;

export const RGETSchoolByIdSchema = SchoolSchema;
export type IRGETSchoolById = SchemaToType<typeof RGETSchoolByIdSchema>;

///

export const APOSTSchoolSchema = SchoolSchema.forbiddenKeys(
	"_id",
	"updatedAt",
	"createdAt"
);
export type IAPOSTSchool = SchemaToType<typeof APOSTSchoolSchema>;

export const RPOSTSchoolSchema = SchoolSchema;
export type IRPOSTSchool = SchemaToType<typeof RPOSTSchoolSchema>;

///
export const APUTSchoolSchema = SchoolSchema.forbiddenKeys(
	"updatedAt",
	"createdAt"
).optionalKeys("name", "cityId");

export type IAPUTSchoool = SchemaToType<typeof APUTSchoolSchema>;

export const RPUTSchoolSchema = SchoolSchema;
export type IRPUTSchool = SchemaToType<typeof RPUTSchoolSchema>;

///

export const AGETSchoolsByCityIdSchema = Joi.object({
	cityId: Joi.objectId().required(),
});
export type IAGETSchoolsByCityId = SchemaToType<
	typeof AGETSchoolsByCityIdSchema
>;

export const RGETSchoolsByCityIdSchema = Joi.array().items(SchoolSchema);
export type IRGETSchoolsByCityId = SchemaToType<
	typeof RGETSchoolsByCityIdSchema
>;
