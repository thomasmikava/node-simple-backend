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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL21vZGVscy90eXBlZ29vc2UvY2l0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEwRDtBQUMxRCxxRUFBdUQ7QUFFdkQsTUFBYSxJQUFLLFNBQVEscUJBQVM7Q0FZbEM7QUFWQTtJQURDLGdCQUFJLEVBQUU7O2tDQUNNO0FBR2I7SUFEQyxnQkFBSSxFQUFFOzttQ0FDUTtBQUdmO0lBREMsZ0JBQUksRUFBRTs4QkFDSSxJQUFJO3VDQUFDO0FBR2hCO0lBREMsZ0JBQUksRUFBRTs4QkFDSSxJQUFJO3VDQUFDO0FBWGpCLG9CQVlDO0FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7SUFDbkQsa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGFBQWEsRUFBRTtRQUNkLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO0tBQ2Y7Q0FDRCxDQUFDLENBQUM7QUFLSCxrQkFBZSxTQUFTLENBQUMifQ==