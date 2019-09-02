import "reflect-metadata"; // !!!!!reflect-metadata SHOULD BE IMPORTED BEFORE api!!!!!
import api from "./api";
import cluster from "cluster";
import os from "os";
import "source-map-support/register";

require("dotenv").config();

if (cluster.isMaster) {
	const nCpus = os.cpus().length;
	for (let i = 0; i < +(process.env.numberOfClusters || nCpus); i += 1) {
		cluster.fork();
	}
} else {
	const port = process.env.APP_PORT || 4781;
	api(port);
	console.log(
		`Server running at http://127.0.0.1:${port}/ pid: ${process.pid}`
	);
}
