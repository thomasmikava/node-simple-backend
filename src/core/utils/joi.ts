import * as origianljoi from "typesafe-joi";
import { NotUndefined } from "./generics";
import { ObjectId } from "mongodb";

declare module "typesafe-joi" {
	function objectId(): origianljoi.AnySchema<origianljoi.Value<ObjectId>>;
}

const Joi: typeof origianljoi = origianljoi.extend({
	base: origianljoi.string(),
	name: "objectId",
	language: {
		pre:
			"needs to be a string of 12 bytes or a string of 24 hex characters",
	},
	pre(value, state, options) {
		if (ObjectId.isValid(value)) {
			return new ObjectId(value);
		}

		return this.createError("objectId.pre", { v: value }, state, options);
	},
});

export interface IAnyObject {
	[key: string]: any;
}

export type SchemaToType<T extends origianljoi.Schema> = NotUndefined<
	origianljoi.Literal<T>
>;

export default Joi;
