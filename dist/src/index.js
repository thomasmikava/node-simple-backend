"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // !!!!!reflect-metadata SHOULD BE IMPORTED BEFORE api!!!!!
const api_1 = __importDefault(require("./api"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
require("source-map-support/register");
require("dotenv").config();
if (cluster_1.default.isMaster) {
    const nCpus = os_1.default.cpus().length;
    for (let i = 0; i < +(process.env.numberOfClusters || nCpus); i += 1) {
        cluster_1.default.fork();
    }
}
else {
    const port = process.env.APP_PORT || 4781;
    api_1.default(port);
    console.log(`Server running at http://127.0.0.1:${port}/ pid: ${process.pid}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0QkFBMEIsQ0FBQywyREFBMkQ7QUFDdEYsZ0RBQXdCO0FBQ3hCLHNEQUE4QjtBQUM5Qiw0Q0FBb0I7QUFDcEIsdUNBQXFDO0FBRXJDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixJQUFJLGlCQUFPLENBQUMsUUFBUSxFQUFFO0lBQ3JCLE1BQU0sS0FBSyxHQUFHLFlBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckUsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNmO0NBQ0Q7S0FBTTtJQUNOLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztJQUMxQyxhQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUNWLHNDQUFzQyxJQUFJLFVBQVUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUNqRSxDQUFDO0NBQ0YifQ==