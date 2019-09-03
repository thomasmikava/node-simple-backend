import { InstanceType, Typegoose, prop } from "typegoose";
import DatabaseMongoDB from "../../dbconfig/mongodb";
import { ObjectId } from "bson";

class School extends Typegoose {
	@prop()
	name: string;

	@prop()
	cityId: ObjectId;

	@prop()
	createdAt: Date;

	@prop()
	updatedAt: Date;
}

const SchoolModel = new School().getModelForClass(School, {
	existingConnection: DatabaseMongoDB,
	schemaOptions: {
		collection: "schools",
		timestamps: true,
		minimize: false,
	},
});

export type ISchoolModel = typeof SchoolModel;
export type ISchoolInstance = InstanceType<School>;

export default SchoolModel;
