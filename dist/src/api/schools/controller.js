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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("../types"));
const inversify_express_utils_1 = require("inversify-express-utils");
const errors_1 = require("../../core/utils/errors");
const decorators_1 = require("../decorators");
let SchoolsController = class SchoolsController {
    async getAll() {
        return this.SchoolModel.find();
    }
    async getSchoolsByCityId(arg) {
        return this.SchoolModel.find({ cityId: arg.cityId });
    }
    async getById(args) {
        const school = await this.SchoolModel.findById(args.id);
        if (!school) {
            throw new errors_1.MError(404, "school not found");
        }
        return school;
    }
    async insert(args) {
        return this.SchoolModel.create(args);
    }
    async changeById(arg) {
        const newSchool = await this.SchoolModel.findByIdAndUpdate(arg._id, arg, { new: true });
        if (!newSchool) {
            throw new errors_1.MError(404, "school not found");
        }
        return newSchool;
    }
};
__decorate([
    inversify_1.inject(types_1.default.MODELS.School),
    __metadata("design:type", Object)
], SchoolsController.prototype, "SchoolModel", void 0);
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getAll", null);
__decorate([
    inversify_express_utils_1.httpGet("/by-city"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.AGETSchoolsByCityIdSchema, "query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getSchoolsByCityId", null);
__decorate([
    inversify_express_utils_1.httpGet("/:id"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.AGETSchoolByIdSchema, "params")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getById", null);
__decorate([
    inversify_express_utils_1.httpPost("/"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.APOSTSchoolSchema, "body")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "insert", null);
__decorate([
    inversify_express_utils_1.httpPut("/:_id"),
    decorators_1.withSpecials,
    __param(0, decorators_1.wValidatedArg(validators_1.APUTSchoolSchema, ["params", "body"])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "changeById", null);
SchoolsController = __decorate([
    inversify_express_utils_1.controller("/api/schools")
], SchoolsController);
exports.SchoolsController = SchoolsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvc2Nob29scy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBY3NCO0FBQ3RCLHlDQUFtQztBQUNuQyxxREFBNkI7QUFDN0IscUVBS2lDO0FBQ2pDLG9EQUFpRDtBQUNqRCw4Q0FBNEQ7QUFHNUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJN0IsS0FBSyxDQUFDLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUlELEtBQUssQ0FBQyxrQkFBa0IsQ0FFdkIsR0FBeUI7UUFFekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBSUQsS0FBSyxDQUFDLE9BQU8sQ0FDbUMsSUFBcUI7UUFFcEUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNaLE1BQU0sSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFJRCxLQUFLLENBQUMsTUFBTSxDQUMrQixJQUFrQjtRQUU1RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFJRCxLQUFLLENBQUMsVUFBVSxDQUNzQyxHQUFpQjtRQUV0RSxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQ3pELEdBQUcsQ0FBQyxHQUFHLEVBQ1AsR0FBRyxFQUNILEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNiLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2YsTUFBTSxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Q0FDRCxDQUFBO0FBbkQ2QjtJQUE1QixrQkFBTSxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztzREFBMkI7QUFHdkQ7SUFEQyxpQ0FBTyxDQUFDLEdBQUcsQ0FBQzs7OzsrQ0FHWjtBQUlEO0lBRkMsaUNBQU8sQ0FBQyxVQUFVLENBQUM7SUFDbkIseUJBQVk7SUFFWCxXQUFBLDBCQUFhLENBQUMsc0NBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUE7Ozs7MkRBSWxEO0FBSUQ7SUFGQyxpQ0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNmLHlCQUFZO0lBRVgsV0FBQSwwQkFBYSxDQUFDLGlDQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFBOzs7O2dEQU85QztBQUlEO0lBRkMsa0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFDYix5QkFBWTtJQUVYLFdBQUEsMEJBQWEsQ0FBQyw4QkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQTs7OzsrQ0FHekM7QUFJRDtJQUZDLGlDQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2hCLHlCQUFZO0lBRVgsV0FBQSwwQkFBYSxDQUFDLDZCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7Ozs7bURBV3BEO0FBbkRXLGlCQUFpQjtJQUQ3QixvQ0FBVSxDQUFDLGNBQWMsQ0FBQztHQUNkLGlCQUFpQixDQW9EN0I7QUFwRFksOENBQWlCIn0=