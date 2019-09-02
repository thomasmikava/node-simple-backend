import { InstanceType, Typegoose, prop } from "typegoose";
import ClassroomsMongoDB from "../../dbconfig/mongodb";

export class City extends Typegoose {
	@prop()
	name: string;

	@prop()
	oldId?: number;

	@prop()
	createdAt: Date;

	@prop()
	updatedAt: Date;
}

const CityModel = new City().getModelForClass(City, {
	existingConnection: ClassroomsMongoDB,
	schemaOptions: {
		collection: "cities",
		timestamps: true,
		minimize: false,
	},
});

export type ICityInstance = InstanceType<City>;
export type ICityModel = typeof CityModel;

export default CityModel;
