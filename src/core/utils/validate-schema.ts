import * as Joi from "typesafe-joi";
import CustomJoi, { SchemaToType } from "./joi";
import { MError } from "./errors";
import { ObjectId } from "bson";

export default function validateSchema<T, K extends Joi.Schema>(
	obj: T,
	schema: K
): SchemaToType<K> {
	const validatorResult = CustomJoi.validate(obj, schema);
	if (validatorResult.error !== null || validatorResult.value === undefined) {
		throw new MError(400, validatorResult.error || {}, "json");
	}
	const { value } = validatorResult;
	if (value === undefined) {
		throw new MError(400, validatorResult.error || {}, "json");
	}
	return validatorResult.value! as any;
}

export function validateObjectId(id: any) {
	if (!ObjectId.isValid(id))
		throw new MError(400, `"${id}" is not a valid object id`);
	return new ObjectId(id);
}

export function toObjectIds(
	ids: (string | ObjectId)[] | Set<string | ObjectId>
): ObjectId[] {
	if (ids instanceof Set) ids = [...ids];
	const objectIds: ObjectId[] = [];
	for (const id of ids) {
		objectIds.push(new ObjectId(id));
	}
	return objectIds;
}

export function toHexStrings(ids: ObjectId[]) {
	const serializedIds: string[] = [];
	for (const id of ids) {
		serializedIds.push(id.toHexString());
	}
	return serializedIds;
}
