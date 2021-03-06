"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const DatabaseMongoDB = mongoose_1.default.createConnection(process.env.MONGODB_CONNECTION_URL || "mongodb://localhost/satesto", {
    ...{ ignoreUndefined: true },
    useNewUrlParser: true,
    useCreateIndex: true,
});
exports.default = DatabaseMongoDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RiY29uZmlnL21vbmdvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsd0RBQWdDO0FBRWhDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxlQUFlLEdBQXdCLGtCQUFRLENBQUMsZ0JBQWdCLENBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLElBQUksNkJBQTZCLEVBQ25FO0lBQ0MsR0FBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQVU7SUFDckMsZUFBZSxFQUFFLElBQUk7SUFDckIsY0FBYyxFQUFFLElBQUk7Q0FDcEIsQ0FDRCxDQUFDO0FBQ0Ysa0JBQWUsZUFBZSxDQUFDIn0=