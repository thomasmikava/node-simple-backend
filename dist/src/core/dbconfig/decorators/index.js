"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
function created_at(options) {
    return sequelize_typescript_1.Column({
        type: "TIMESTAMP",
        defaultValue: sequelize_typescript_1.Sequelize.literal("CURRENT_TIMESTAMP"),
        ...(options || {}),
    });
}
exports.created_at = created_at;
function updated_at(options) {
    return sequelize_typescript_1.Column({
        type: "TIMESTAMP",
        defaultValue: sequelize_typescript_1.Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        ...(options || {}),
    });
}
exports.updated_at = updated_at;
function PrimaryKeyUnsigned(options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        ...(options || {}),
    });
}
exports.PrimaryKeyUnsigned = PrimaryKeyUnsigned;
function IntColumn(options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.INTEGER,
        ...(options || {}),
    });
}
exports.IntColumn = IntColumn;
function IntNotNullableUnsignedColumn(options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        ...(options || {}),
    });
}
exports.IntNotNullableUnsignedColumn = IntNotNullableUnsignedColumn;
function IntNotNullableColumn(options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.INTEGER,
        allowNull: false,
        ...(options || {}),
    });
}
exports.IntNotNullableColumn = IntNotNullableColumn;
function UnsignedIntColumn(options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.INTEGER.UNSIGNED,
        ...(options || {}),
    });
}
exports.UnsignedIntColumn = UnsignedIntColumn;
function StringColumn(length, options) {
    return sequelize_typescript_1.Column({
        type: sequelize_typescript_1.Sequelize.STRING(length),
        ...(options || {}),
    });
}
exports.StringColumn = StringColumn;
function JSONColumn(target, name) {
    return {
        set(value) {
            this.setDataValue(name, JSON.stringify(value));
        },
        get() {
            try {
                const value = this.getDataValue(name);
                if (typeof value !== "string")
                    return value;
                return JSON.parse(this.getDataValue(name));
            }
            catch (e) {
                console.trace(e);
                return null;
            }
        },
        enumerable: true,
        configurable: true,
    };
}
exports.JSONColumn = JSONColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9kYmNvbmZpZy9kZWNvcmF0b3JzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBSThCO0FBRTlCLFNBQWdCLFVBQVUsQ0FBQyxPQUE4QztJQUN4RSxPQUFPLDZCQUFNLENBQUM7UUFDYixJQUFJLEVBQUUsV0FBVztRQUNqQixZQUFZLEVBQUUsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7UUFDcEQsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQU5ELGdDQU1DO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLE9BQThDO0lBQ3hFLE9BQU8sNkJBQU0sQ0FBQztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLFlBQVksRUFBRSxnQ0FBUyxDQUFDLE9BQU8sQ0FDOUIsK0NBQStDLENBQy9DO1FBQ0QsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVJELGdDQVFDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQ2pDLE9BQThDO0lBRTlDLE9BQU8sNkJBQU0sQ0FBQztRQUNiLElBQUksRUFBRSxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1FBQ2hDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFURCxnREFTQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxPQUE4QztJQUN2RSxPQUFPLDZCQUFNLENBQUM7UUFDYixJQUFJLEVBQUUsZ0NBQVMsQ0FBQyxPQUFPO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFMRCw4QkFLQztBQUVELFNBQWdCLDRCQUE0QixDQUMzQyxPQUE4QztJQUU5QyxPQUFPLDZCQUFNLENBQUM7UUFDYixJQUFJLEVBQUUsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsS0FBSztRQUNoQixHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDO0FBUkQsb0VBUUM7QUFFRCxTQUFnQixvQkFBb0IsQ0FDbkMsT0FBOEM7SUFFOUMsT0FBTyw2QkFBTSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGdDQUFTLENBQUMsT0FBTztRQUN2QixTQUFTLEVBQUUsS0FBSztRQUNoQixHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDO0FBUkQsb0RBUUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FDaEMsT0FBOEM7SUFFOUMsT0FBTyw2QkFBTSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGdDQUFTLENBQUMsT0FBTyxDQUFDLFFBQVE7UUFDaEMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELDhDQU9DO0FBRUQsU0FBZ0IsWUFBWSxDQUMzQixNQUFjLEVBQ2QsT0FBOEM7SUFFOUMsT0FBTyw2QkFBTSxDQUFDO1FBQ2IsSUFBSSxFQUFFLGdDQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNsQixDQUFDLENBQUM7QUFDSixDQUFDO0FBUkQsb0NBUUM7QUFFRCxTQUFnQixVQUFVLENBQUMsTUFBVyxFQUFFLElBQVk7SUFDbkQsT0FBTztRQUNOLEdBQUcsQ0FBQyxLQUFLO1lBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxHQUFHO1lBQ0YsSUFBSTtnQkFDSCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDM0M7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLElBQUksQ0FBQzthQUNaO1FBQ0YsQ0FBQztRQUNELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLFlBQVksRUFBRSxJQUFJO0tBQ2xCLENBQUM7QUFDSCxDQUFDO0FBbEJELGdDQWtCQyJ9