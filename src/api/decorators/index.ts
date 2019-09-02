import * as originalJoi from "typesafe-joi";
import validateSchema from "../../core/utils/validate-schema";
import { IAnyObject } from "../../core/utils/joi";
import { IncomingMessage } from "http";
import { MError } from "../../core/utils/errors";
import { ObjectId } from "mongodb";
import { Request } from "express";
import { request, requestParam } from "inversify-express-utils";

interface IAnyObjectString {
	[key: string]: string;
}

interface IValidationParameters {
	params?: IAnyObjectString;
	body?: IAnyObjectString;
	query?: IAnyObjectString;
}

const metadataKeys = {
	user: Symbol("user"),
	admin: Symbol("admin"),
	objectId: Symbol("objectId"),
	validation: Symbol("validation"),
};

export function wUser(
	target: any,
	propertyKey: string | symbol,
	parameterIndex: number
) {
	// tslint:disable-next-line:only-arrow-functions
	const existingRequiredParameters: number[] =
		Reflect.getOwnMetadata(metadataKeys.user, target, propertyKey) || [];
	existingRequiredParameters.push(parameterIndex);
	Reflect.defineMetadata(
		metadataKeys.user,
		existingRequiredParameters,
		target,
		propertyKey
	);
	request()(target, propertyKey, parameterIndex);
}

export function wAdmin(
	target: any,
	propertyKey: string | symbol,
	parameterIndex: number
) {
	// tslint:disable-next-line:only-arrow-functions
	const existingRequiredParameters: number[] =
		Reflect.getOwnMetadata(metadataKeys.admin, target, propertyKey) || [];
	existingRequiredParameters.push(parameterIndex);
	Reflect.defineMetadata(
		metadataKeys.admin,
		existingRequiredParameters,
		target,
		propertyKey
	);
	request()(target, propertyKey, parameterIndex);
}

export function wParamObjectId(param: string) {
	// tslint:disable-next-line:only-arrow-functions
	return function(
		target: any,
		propertyKey: string | symbol,
		parameterIndex: number
	) {
		const existingRequiredParameters: number[] =
			Reflect.getOwnMetadata(
				metadataKeys.objectId,
				target,
				propertyKey
			) || [];
		existingRequiredParameters.push(parameterIndex);
		Reflect.defineMetadata(
			metadataKeys.objectId,
			existingRequiredParameters,
			target,
			propertyKey
		);
		requestParam(param)(target, propertyKey, parameterIndex);
	};
}

type ReqPart = "body" | "query" | "params";

type validationMetadata = [
	number,
	originalJoi.Schema,
	ReqPart | ReqPart[],
	IValidationParameters | undefined
];

export function wValidatedArg(
	schema: originalJoi.Schema,
	reqPart: ReqPart | ReqPart[],
	additional?: IValidationParameters
) {
	// tslint:disable-next-line:only-arrow-functions
	return function(
		target: any,
		propertyKey: string | symbol,
		parameterIndex: number
	) {
		const existingRequiredParameters: validationMetadata[] =
			Reflect.getOwnMetadata(
				metadataKeys.validation,
				target,
				propertyKey
			) || [];
		existingRequiredParameters.push([
			parameterIndex,
			schema,
			reqPart,
			additional,
		]);
		Reflect.defineMetadata(
			metadataKeys.validation,
			existingRequiredParameters,
			target,
			propertyKey
		);
		request()(target, propertyKey, parameterIndex);
	};
}

// tslint:disable-next-line:cognitive-complexity
export function withSpecials(
	target: any,
	propertyName: string,
	descriptor: TypedPropertyDescriptor<any>
) {
	const method = descriptor.value;
	descriptor.value = function() {

		const paramObjectIdParameters: number[] = Reflect.getOwnMetadata(
			metadataKeys.objectId,
			target,
			propertyName
		);
		if (paramObjectIdParameters && paramObjectIdParameters.length > 0) {
			for (const pIndex of paramObjectIdParameters) {
				if (!ObjectId.isValid(arguments[pIndex])) {
					throw new MError(400, "not valid objectId");
				}
				arguments[pIndex] = new ObjectId(arguments[pIndex]);
			}
		}

		const validationParameters: validationMetadata[] = Reflect.getOwnMetadata(
			metadataKeys.validation,
			target,
			propertyName
		);

		if (validationParameters && validationParameters.length > 0) {
			for (const args of validationParameters) {
				const [index, schema, reqPart, additional] = args;
				let obj: any;
				if (arguments[index] instanceof IncomingMessage) {
					obj = getObject(arguments[index], reqPart, additional);
				} else {
					obj = arguments[index];
				}
				const validationResult = validateSchema(obj, schema);
				arguments[index] = validationResult;
			}
		}

		return method.apply(this, arguments);
	};
}

function getObject(
	req: Request,
	reqPart: ReqPart | ReqPart[],
	additional?: IValidationParameters
) {
	let object: IAnyObject = {};
	if (typeof reqPart === "string") {
		object = req[reqPart];
	} else {
		for (let i = 0; i < reqPart.length; ++i) {
			Object.assign(object, req[reqPart[i]]);
		}
	}
	if (!additional) return object;
	const keys = Object.keys(additional);
	for (const key of keys) {
		if (req[key]) {
			const obj: IAnyObjectString = additional[key];
			const keys2 = Object.keys(obj);
			for (const key2 of keys2) {
				object[obj[key2]] = req[key][key2];
			}
		}
	}
	return object;
}
