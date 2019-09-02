"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_schema_1 = __importDefault(require("../../core/utils/validate-schema"));
const http_1 = require("http");
const errors_1 = require("../../core/utils/errors");
const mongodb_1 = require("mongodb");
const inversify_express_utils_1 = require("inversify-express-utils");
const metadataKeys = {
    user: Symbol("user"),
    admin: Symbol("admin"),
    objectId: Symbol("objectId"),
    validation: Symbol("validation"),
};
function wUser(target, propertyKey, parameterIndex) {
    // tslint:disable-next-line:only-arrow-functions
    const existingRequiredParameters = Reflect.getOwnMetadata(metadataKeys.user, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(metadataKeys.user, existingRequiredParameters, target, propertyKey);
    inversify_express_utils_1.request()(target, propertyKey, parameterIndex);
}
exports.wUser = wUser;
function wAdmin(target, propertyKey, parameterIndex) {
    // tslint:disable-next-line:only-arrow-functions
    const existingRequiredParameters = Reflect.getOwnMetadata(metadataKeys.admin, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(metadataKeys.admin, existingRequiredParameters, target, propertyKey);
    inversify_express_utils_1.request()(target, propertyKey, parameterIndex);
}
exports.wAdmin = wAdmin;
function wParamObjectId(param) {
    // tslint:disable-next-line:only-arrow-functions
    return function (target, propertyKey, parameterIndex) {
        const existingRequiredParameters = Reflect.getOwnMetadata(metadataKeys.objectId, target, propertyKey) || [];
        existingRequiredParameters.push(parameterIndex);
        Reflect.defineMetadata(metadataKeys.objectId, existingRequiredParameters, target, propertyKey);
        inversify_express_utils_1.requestParam(param)(target, propertyKey, parameterIndex);
    };
}
exports.wParamObjectId = wParamObjectId;
function wValidatedArg(schema, reqPart, additional) {
    // tslint:disable-next-line:only-arrow-functions
    return function (target, propertyKey, parameterIndex) {
        const existingRequiredParameters = Reflect.getOwnMetadata(metadataKeys.validation, target, propertyKey) || [];
        existingRequiredParameters.push([
            parameterIndex,
            schema,
            reqPart,
            additional,
        ]);
        Reflect.defineMetadata(metadataKeys.validation, existingRequiredParameters, target, propertyKey);
        inversify_express_utils_1.request()(target, propertyKey, parameterIndex);
    };
}
exports.wValidatedArg = wValidatedArg;
// tslint:disable-next-line:cognitive-complexity
function withSpecials(target, propertyName, descriptor) {
    const method = descriptor.value;
    descriptor.value = function () {
        const paramObjectIdParameters = Reflect.getOwnMetadata(metadataKeys.objectId, target, propertyName);
        if (paramObjectIdParameters && paramObjectIdParameters.length > 0) {
            for (const pIndex of paramObjectIdParameters) {
                if (!mongodb_1.ObjectId.isValid(arguments[pIndex])) {
                    throw new errors_1.MError(400, "not valid objectId");
                }
                arguments[pIndex] = new mongodb_1.ObjectId(arguments[pIndex]);
            }
        }
        const validationParameters = Reflect.getOwnMetadata(metadataKeys.validation, target, propertyName);
        if (validationParameters && validationParameters.length > 0) {
            for (const args of validationParameters) {
                const [index, schema, reqPart, additional] = args;
                let obj;
                if (arguments[index] instanceof http_1.IncomingMessage) {
                    obj = getObject(arguments[index], reqPart, additional);
                }
                else {
                    obj = arguments[index];
                }
                const validationResult = validate_schema_1.default(obj, schema);
                arguments[index] = validationResult;
            }
        }
        return method.apply(this, arguments);
    };
}
exports.withSpecials = withSpecials;
function getObject(req, reqPart, additional) {
    let object = {};
    if (typeof reqPart === "string") {
        object = req[reqPart];
    }
    else {
        for (let i = 0; i < reqPart.length; ++i) {
            Object.assign(object, req[reqPart[i]]);
        }
    }
    if (!additional)
        return object;
    const keys = Object.keys(additional);
    for (const key of keys) {
        if (req[key]) {
            const obj = additional[key];
            const keys2 = Object.keys(obj);
            for (const key2 of keys2) {
                object[obj[key2]] = req[key][key2];
            }
        }
    }
    return object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2RlY29yYXRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1RkFBOEQ7QUFFOUQsK0JBQXVDO0FBQ3ZDLG9EQUFpRDtBQUNqRCxxQ0FBbUM7QUFFbkMscUVBQWdFO0FBWWhFLE1BQU0sWUFBWSxHQUFHO0lBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzVCLFVBQVUsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDO0NBQ2hDLENBQUM7QUFFRixTQUFnQixLQUFLLENBQ3BCLE1BQVcsRUFDWCxXQUE0QixFQUM1QixjQUFzQjtJQUV0QixnREFBZ0Q7SUFDaEQsTUFBTSwwQkFBMEIsR0FDL0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEUsMEJBQTBCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxjQUFjLENBQ3JCLFlBQVksQ0FBQyxJQUFJLEVBQ2pCLDBCQUEwQixFQUMxQixNQUFNLEVBQ04sV0FBVyxDQUNYLENBQUM7SUFDRixpQ0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBaEJELHNCQWdCQztBQUVELFNBQWdCLE1BQU0sQ0FDckIsTUFBVyxFQUNYLFdBQTRCLEVBQzVCLGNBQXNCO0lBRXRCLGdEQUFnRDtJQUNoRCxNQUFNLDBCQUEwQixHQUMvQixPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FB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