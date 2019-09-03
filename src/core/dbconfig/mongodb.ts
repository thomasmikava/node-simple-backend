import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DatabaseMongoDB: mongoose.Connection = mongoose.createConnection(
	process.env.MONGODB_CONNECTION_URL || "mongodb://localhost/satesto",
	{
		...({ ignoreUndefined: true } as any),
		useNewUrlParser: true,
		useCreateIndex: true,
	}
);
export default DatabaseMongoDB;
