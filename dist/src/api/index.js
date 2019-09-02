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
require("dotenv").config();
function default_1(port) {
    container_1.container.load(models_modules_1.default, services_modules_1.default, satesto_1.default);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLHNEQUFtRTtBQUNuRSxzRUFBNkM7QUFDN0MsZ0RBQXdCO0FBQ3hCLDBFQUFpRDtBQUNqRCwyQ0FBd0M7QUFDeEMscUVBQWlFO0FBQ2pFLGlEQUE4QztBQUU5Qyw2QkFBOEI7QUFDOUIsd0RBQXVDO0FBRXZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixtQkFBd0IsSUFBcUI7SUFDNUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsd0JBQWEsRUFBRSwwQkFBZSxFQUFFLGlCQUFjLENBQUMsQ0FBQztJQUUvRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGdEQUFzQixDQUFDLHFCQUFTLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQ04sU0FBUyxFQUNULGlCQUFPLENBQUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUN6RCxDQUFDO1FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FDTixxQkFBVSxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUssRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUNGLENBQUMsQ0FBQyxpQ0FBaUM7UUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FDTixxQkFBVSxDQUFDLFVBQVUsQ0FBQztZQUNyQixnQ0FBZ0M7WUFDaEMsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQ0YsQ0FBQztRQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FB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