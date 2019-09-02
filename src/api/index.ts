import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import ModelsModules from "./models-modules";
import path from "path";
import ServicesModules from "./services-modules";
import { container } from "./container";
import { InversifyExpressServer } from "inversify-express-utils";
import { MError } from "../core/utils/errors";

import cors = require("cors");
import SatestoModules from "./satesto";

require("dotenv").config();

export default function(port: number | string) {
	container.load(
		ModelsModules,
		ServicesModules,
		SatestoModules,
	);

	const server = new InversifyExpressServer(container);




	

	server.setConfig(app => {
		app.use(
			"/photos",
			express.static(path.join(__dirname, "../../", "photos/"))
		);

		app.use(
			bodyParser.json({
				limit: "2mb",
			})
		); // to support JSON-encoded bodies
		app.use(
			bodyParser.urlencoded({
				// to support URL-encoded bodies
				extended: true,
			})
		);

		app.get("/", async (req: Request, res: Response) => {
			res.send("hello world!");
		});

		app.use(cors());
	});

	server.setErrorConfig(app => {
		// handle not found
		app.use((req: Request, res: Response) => {
			res.status(404).send("404 - Not Found!");
		});

		// handle error
		app.use((e: Error, req: Request, res: Response, next: NextFunction) => {
			let outputError = false;
			console.log(e);
			if (
				!(e instanceof MError) ||
				(process.env.NODE_ENV || "development") === "development"
			) {
				outputError = true;
				console.log(e);
			} else if (!(e instanceof MError)) {
				outputError = true;
				console.trace(e);
			}
			if (outputError) console.log("==============\n");
			if (res.headersSent) return;
			if (e instanceof MError) {
				if (e.errorMessageType === "json")
					res.status(e.errorCode).json(e.errorMessage);
				else res.status(e.errorCode).send(e.errorMessage);
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

process.on("uncaughtException", error => {
	console.trace(error);
});
