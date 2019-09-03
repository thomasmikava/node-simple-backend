import Joi, { SchemaToType } from "../../core/utils/joi";

export const SchoolSchema = Joi.object({
	_id: Joi.objectId().required(),
	name: Joi.string().required(),
	cityId: Joi.objectId().required(),
	createdAt: Joi.date().required(),
	updatedAt: Joi.date().required(),
});
export type ISchool = SchemaToType<typeof SchoolSchema>;
