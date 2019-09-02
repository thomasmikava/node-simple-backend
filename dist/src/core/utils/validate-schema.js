"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("./joi"));
const errors_1 = require("./errors");
const bson_1 = require("bson");
function validateSchema(obj, schema) {
    const validatorResult = joi_1.default.validate(obj, schema);
    if (validatorResult.error !== null || validatorResult.value === undefined) {
        throw new errors_1.MError(400, validatorResult.error || {}, "json");
    }
    const { value } = validatorResult;
    if (value === undefined) {
        throw new errors_1.MError(400, validatorResult.error || {}, "json");
    }
    return validatorResult.value;
}
exports.default = validateSchema;
function validateObjectId(id) {
    if (!bson_1.ObjectId.isValid(id))
        throw new errors_1.MError(400, `"${id}" is not a valid object id`);
    return new bson_1.ObjectId(id);
}
exports.validateObjectId = validateObjectId;
function toObjectIds(ids) {
    if (ids instanceof Set)
        ids = [...ids];
    const objectIds = [];
    for (const id of ids) {
        objectIds.push(new bson_1.ObjectId(id));
    }
    return objectIds;
}
exports.toObjectIds = toObjectIds;
function toHexStrings(ids) {
    const serializedIds = [];
    for (const id of ids) {
        serializedIds.push(id.toHexString());
    }
    return serializedIds;
}
exports.toHexStrings = toHexStrings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtc2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbHMvdmFsaWRhdGUtc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0RBQWdEO0FBQ2hELHFDQUFrQztBQUNsQywrQkFBZ0M7QUFFaEMsU0FBd0IsY0FBYyxDQUNyQyxHQUFNLEVBQ04sTUFBUztJQUVULE1BQU0sZUFBZSxHQUFHLGFBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELElBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDMUUsTUFBTSxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDM0Q7SUFDRCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ2xDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN4QixNQUFNLElBQUksZUFBTSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzRDtJQUNELE9BQU8sZUFBZSxDQUFDLEtBQWEsQ0FBQztBQUN0QyxDQUFDO0FBYkQsaUNBYUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxFQUFPO0lBQ3ZDLElBQUksQ0FBQyxlQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksZUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUMzRCxPQUFPLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLFdBQVcsQ0FDMUIsR0FBbUQ7SUFFbkQsSUFBSSxHQUFHLFlBQVksR0FBRztRQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkMsTUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQ2pDLEtBQUssTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFO1FBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUM7QUFURCxrQ0FTQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFlO0lBQzNDLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztJQUNuQyxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtRQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDdEIsQ0FBQztBQU5ELG9DQU1DIn0=