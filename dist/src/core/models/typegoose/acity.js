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
class City extends typegoose_1.Typegoose {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], City.prototype, "oldId", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], City.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], City.prototype, "updatedAt", void 0);
exports.City = City;
const CityModel = new City().getModelForClass(City, {
    existingConnection: mongodb_1.default,
    schemaOptions: {
        collection: "cities",
        timestamps: true,
        minimize: false,
    },
});
exports.default = CityModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9tb2RlbHMvdHlwZWdvb3NlL2FjaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTBEO0FBQzFELHFFQUFxRDtBQUVyRCxNQUFhLElBQUssU0FBUSxxQkFBUztDQVlsQztBQVZBO0lBREMsZ0JBQUksRUFBRTs7a0NBQ007QUFHYjtJQURDLGdCQUFJLEVBQUU7O21DQUNRO0FBR2Y7SUFEQyxnQkFBSSxFQUFFOzhCQUNJLElBQUk7dUNBQUM7QUFHaEI7SUFEQyxnQkFBSSxFQUFFOzhCQUNJLElBQUk7dUNBQUM7QUFYakIsb0JBWUM7QUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtJQUNuRCxrQkFBa0IsRUFBRSxpQkFBZTtJQUNuQyxhQUFhLEVBQUU7UUFDZCxVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsSUFBSTtRQUNoQixRQUFRLEVBQUUsS0FBSztLQUNmO0NBQ0QsQ0FBQyxDQUFDO0FBS0gsa0JBQWUsU0FBUyxDQUFDIn0=