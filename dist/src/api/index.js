"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const models_modules_1 = __importDefault(require("./models-modules"));
const path_1 = __importDefault(require("path"));
const services_modules_1 = __importDefault(require("./services-modules"));
const container_1 = require("./container");
const inversify_express_utils_1 = require("inversify-express-utils");
const errors_1 = require("../core/utils/errors");
const cors = require("cors");
const satesto_1 = __importDefault(require("./satesto"));
const cities_1 = __importDefault(require("./cities"));
const schools_1 = __importDefault(require("./schools"));
require("dotenv").config();
function default_1(port) {
    container_1.container.load(models_modules_1.default, services_modules_1.default, satesto_1.default, cities_1.default, schools_1.default);
    const server = new inversify_express_utils_1.InversifyExpressServer(container_1.container);
    server.setConfig(app => {
        app.use("/photos", express_1.default.static(path_1.default.join(__dirname, "../../", "photos/")));
        app.use(body_parser_1.default.json({
            limit: "2mb",
        })); // to support JSON-encoded bodies
        app.use(body_parser_1.default.urlencoded({
            // to support URL-encoded bodies
            extended: true,
        }));
        app.get("/", async (req, res) => {
            res.send("hello world!");
        });
        app.use(cors());
    });
    server.setErrorConfig(app => {
        // handle not found
        app.use((req, res) => {
            res.status(404).send("404 - Not Found!");
        });
        // handle error
        app.use((e, req, res, next) => {
            let outputError = false;
            console.log(e);
            if (!(e instanceof errors_1.MError) ||
                (process.env.NODE_ENV || "development") === "development") {
                outputError = true;
                console.log(e);
            }
            else if (!(e instanceof errors_1.MError)) {
                outputError = true;
                console.trace(e);
            }
            if (outputError)
                console.log("==============\n");
            if (res.headersSent)
                return;
            if (e instanceof errors_1.MError) {
                if (e.errorMessageType === "json")
                    res.status(e.errorCode).json(e.errorMessage);
                else
                    res.status(e.errorCode).send(e.errorMessage);
                return;
            }
            res.status(500).send(e.message);
        });
    });
    const serverInstance = server.build();
    serverInstance.listen(port);
    // const routeInfo = getRouteInfo(container);
    if ((process.env.NODE_ENV || "development") === "development") {
        // console.log(prettyjson.render({ routes: routeInfo }));
    }
}
exports.default = default_1;
process.on("uncaughtException", error => {
    console.trace(error);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLHNEQUFtRTtBQUNuRSxzRUFBNkM7QUFDN0MsZ0RBQXdCO0FBQ3hCLDBFQUFpRDtBQUNqRCwyQ0FBd0M7QUFDeEMscUVBQWlFO0FBQ2pFLGlEQUE4QztBQUU5Qyw2QkFBOEI7QUFDOUIsd0RBQXVDO0FBQ3ZDLHNEQUFtQztBQUNuQyx3REFBc0M7QUFFdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLG1CQUF3QixJQUFxQjtJQUM1QyxxQkFBUyxDQUFDLElBQUksQ0FDYix3QkFBYSxFQUNiLDBCQUFlLEVBQ2YsaUJBQWMsRUFDZCxnQkFBVyxFQUNYLGlCQUFhLENBQ2IsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksZ0RBQXNCLENBQUMscUJBQVMsQ0FBQyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FDTixTQUFTLEVBQ1QsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQ3pELENBQUM7UUFFRixHQUFHLENBQUMsR0FBRyxDQUNOLHFCQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2YsS0FBSyxFQUFFLEtBQUs7U0FDWixDQUFDLENBQ0YsQ0FBQyxDQUFDLGlDQUFpQztRQUNwQyxHQUFHLENBQUMsR0FBRyxDQUNOLHFCQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3JCLGdDQUFnQztZQUNoQyxRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FDRixDQUFDO1FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVB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