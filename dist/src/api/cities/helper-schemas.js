"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("../../core/utils/joi"));
exports.CitySchema = joi_1.default.object({
    _id: joi_1.default.objectId().required(),
    name: joi_1.default.string().required(),
    createdAt: joi_1.default.date().required(),
    updatedAt: joi_1.default.date().required(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLXNjaGVtYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2NpdGllcy9oZWxwZXItc2NoZW1hcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUF5RDtBQUU1QyxRQUFBLFVBQVUsR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BDLEdBQUcsRUFBRSxhQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLFNBQVMsRUFBRSxhQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2hDLFNBQVMsRUFBRSxhQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ2hDLENBQUMsQ0FBQyJ9