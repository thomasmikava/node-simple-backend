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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
let SatestoController = class SatestoController {
    async salute() {
        return "hello";
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/hi"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SatestoController.prototype, "salute", null);
SatestoController = __decorate([
    inversify_express_utils_1.controller("/api/hello")
], SatestoController);
exports.default = SatestoController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3NhdGVzdG8vY29udHJvbGxlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxRUFBOEQ7QUFHOUQsSUFBcUIsaUJBQWlCLEdBQXRDLE1BQXFCLGlCQUFpQjtJQUVyQyxLQUFLLENBQUMsTUFBTTtRQUNYLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7Q0FDRCxDQUFBO0FBSEE7SUFEQyxpQ0FBTyxDQUFDLEtBQUssQ0FBQzs7OzsrQ0FHZDtBQUptQixpQkFBaUI7SUFEckMsb0NBQVUsQ0FBQyxZQUFZLENBQUM7R0FDSixpQkFBaUIsQ0FLckM7a0JBTG9CLGlCQUFpQiJ9