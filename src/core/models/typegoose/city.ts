import { InstanceType, Typegoose, prop } from "typegoose";
import DatabaseMongoDB from "../../dbconfig/mongodb";

class City extends Typegoose {
	@prop()
	name: string;

	@prop()
	createdAt: Date;

	@prop()
	updatedAt: Date;
}

const CityModel = new City().getModelForClass(City, {
	existingConnection: DatabaseMongoDB,
	schemaOptions: {
		collection: "cities",
		timestamps: true,
		minimize: false,
	},
});

export type ICityModel = typeof CityModel;
export type ICityInstance = InstanceType<City>;

export default CityModel;
