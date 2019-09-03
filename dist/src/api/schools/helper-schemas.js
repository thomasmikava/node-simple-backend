"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("../../core/utils/joi"));
exports.SchoolSchema = joi_1.default.object({
    _id: joi_1.default.objectId().required(),
    name: joi_1.default.string().required(),
    cityId: joi_1.default.objectId().required(),
    createdAt: joi_1.default.date().required(),
    updatedAt: joi_1.default.date().required(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLXNjaGVtYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3NjaG9vbHMvaGVscGVyLXNjaGVtYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBeUQ7QUFFNUMsUUFBQSxZQUFZLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxHQUFHLEVBQUUsYUFBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM5QixJQUFJLEVBQUUsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixNQUFNLEVBQUUsYUFBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNqQyxTQUFTLEVBQUUsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNoQyxTQUFTLEVBQUUsYUFBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNoQyxDQUFDLENBQUMifQ==