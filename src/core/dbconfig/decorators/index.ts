import {
	Column,
	Sequelize,
	IPartialDefineAttributeColumnOptions,
} from "sequelize-typescript";

export function created_at(options?: IPartialDefineAttributeColumnOptions) {
	return Column({
		type: "TIMESTAMP",
		defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
		...(options || {}),
	});
}

export function updated_at(options?: IPartialDefineAttributeColumnOptions) {
	return Column({
		type: "TIMESTAMP",
		defaultValue: Sequelize.literal(
			"CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
		),
		...(options || {}),
	});
}

export function PrimaryKeyUnsigned(
	options?: IPartialDefineAttributeColumnOptions
) {
	return Column({
		type: Sequelize.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
		...(options || {}),
	});
}

export function IntColumn(options?: IPartialDefineAttributeColumnOptions) {
	return Column({
		type: Sequelize.INTEGER,
		...(options || {}),
	});
}

export function IntNotNullableUnsignedColumn(
	options?: IPartialDefineAttributeColumnOptions
) {
	return Column({
		type: Sequelize.INTEGER.UNSIGNED,
		allowNull: false,
		...(options || {}),
	});
}

export function IntNotNullableColumn(
	options?: IPartialDefineAttributeColumnOptions
) {
	return Column({
		type: Sequelize.INTEGER,
		allowNull: false,
		...(options || {}),
	});
}

export function UnsignedIntColumn(
	options?: IPartialDefineAttributeColumnOptions
) {
	return Column({
		type: Sequelize.INTEGER.UNSIGNED,
		...(options || {}),
	});
}

export function StringColumn(
	length: number,
	options?: IPartialDefineAttributeColumnOptions
) {
	return Column({
		type: Sequelize.STRING(length),
		...(options || {}),
	});
}

export function JSONColumn(target: any, name: string): any {
	return {
		set(value) {
			this.setDataValue(name as any, JSON.stringify(value) as any);
		},
		get() {
			try {
				const value = this.getDataValue(name);
				if (typeof value !== "string") return value;
				return JSON.parse(this.getDataValue(name));
			} catch (e) {
				console.trace(e);
				return null;
			}
		},
		enumerable: true,
		configurable: true,
	};
}
