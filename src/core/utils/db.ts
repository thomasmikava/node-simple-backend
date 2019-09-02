import { InstanceType } from "typegoose";
import { ObjectId } from "mongodb";

export function docToObj<T>(
	doc: T
): T extends InstanceType<infer R> ? R & { _id: ObjectId } : T {
	if ((doc as any).constructor.name === "model") {
		return (doc as any).toObject();
	}
	return doc as any;
}
