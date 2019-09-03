"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("../../core/utils/joi"));
const helper_schemas_1 = require("./helper-schemas");
exports.RGETAllSchoolsSchema = joi_1.default.array().items(helper_schemas_1.SchoolSchema);
///
exports.AGETSchoolByIdSchema = joi_1.default.object({
    id: joi_1.default.objectId().required(),
});
exports.RGETSchoolByIdSchema = helper_schemas_1.SchoolSchema;
///
exports.APOSTSchoolSchema = helper_schemas_1.SchoolSchema.forbiddenKeys("_id", "updatedAt", "createdAt");
exports.RPOSTSchoolSchema = helper_schemas_1.SchoolSchema;
///
exports.APUTSchoolSchema = helper_schemas_1.SchoolSchema.forbiddenKeys("updatedAt", "createdAt").optionalKeys("name", "cityId");
exports.RPUTSchoolSchema = helper_schemas_1.SchoolSchema;
///
exports.AGETSchoolsByCityIdSchema = joi_1.default.object({
    cityId: joi_1.default.objectId().required(),
});
exports.RGETSchoolsByCityIdSchema = joi_1.default.array().items(helper_schemas_1.SchoolSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvc2Nob29scy92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQXlEO0FBQ3pELHFEQUFnRDtBQUVuQyxRQUFBLG9CQUFvQixHQUFHLGFBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQVksQ0FBQyxDQUFDO0FBR3BFLEdBQUc7QUFFVSxRQUFBLG9CQUFvQixHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7SUFDOUMsRUFBRSxFQUFFLGFBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDN0IsQ0FBQyxDQUFDO0FBR1UsUUFBQSxvQkFBb0IsR0FBRyw2QkFBWSxDQUFDO0FBR2pELEdBQUc7QUFFVSxRQUFBLGlCQUFpQixHQUFHLDZCQUFZLENBQUMsYUFBYSxDQUMxRCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFdBQVcsQ0FDWCxDQUFDO0FBR1csUUFBQSxpQkFBaUIsR0FBRyw2QkFBWSxDQUFDO0FBRzlDLEdBQUc7QUFDVSxRQUFBLGdCQUFnQixHQUFHLDZCQUFZLENBQUMsYUFBYSxDQUN6RCxXQUFXLEVBQ1gsV0FBVyxDQUNYLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUlwQixRQUFBLGdCQUFnQixHQUFHLDZCQUFZLENBQUM7QUFHN0MsR0FBRztBQUVVLFFBQUEseUJBQXlCLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNuRCxNQUFNLEVBQUUsYUFBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNqQyxDQUFDLENBQUM7QUFLVSxRQUFBLHlCQUF5QixHQUFHLGFBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQVksQ0FBQyxDQUFDIn0=