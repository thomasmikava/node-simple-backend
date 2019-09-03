"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const mongodb_1 = __importDefault(require("../../dbconfig/mongodb"));
const bson_1 = require("bson");
class School extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], School.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", bson_1.ObjectId)
], School.prototype, "cityId", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], School.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], School.prototype, "updatedAt", void 0);
const SchoolModel = new School().getModelForClass(School, {
    existingConnection: mongodb_1.default,
    schemaOptions: {
        collection: "schools",
        timestamps: true,
        minimize: false,
    },
});
exports.default = SchoolModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvbW9kZWxzL3R5cGVnb29zZS9zY2hvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBMEQ7QUFDMUQscUVBQXFEO0FBQ3JELCtCQUFnQztBQUVoQyxNQUFNLE1BQU8sU0FBUSxxQkFBUztDQVk3QjtBQVZBO0lBREMsZ0JBQUksRUFBRTs7b0NBQ007QUFHYjtJQURDLGdCQUFJLEVBQUU7OEJBQ0MsZUFBUTtzQ0FBQztBQUdqQjtJQURDLGdCQUFJLEVBQUU7OEJBQ0ksSUFBSTt5Q0FBQztBQUdoQjtJQURDLGdCQUFJLEVBQUU7OEJBQ0ksSUFBSTt5Q0FBQztBQUdqQixNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUN6RCxrQkFBa0IsRUFBRSxpQkFBZTtJQUNuQyxhQUFhLEVBQUU7UUFDZCxVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsS0FBSztLQUNmO0NBQ0QsQ0FBQyxDQUFDO0FBS0gsa0JBQWUsV0FBVyxDQUFDIn0=