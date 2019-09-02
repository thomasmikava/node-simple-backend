"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const origianljoi = __importStar(require("typesafe-joi"));
const mongodb_1 = require("mongodb");
const Joi = origianljoi.extend({
    base: origianljoi.string(),
    name: "objectId",
    language: {
        pre: "needs to be a string of 12 bytes or a string of 24 hex characters",
    },
    pre(value, state, options) {
        if (mongodb_1.ObjectId.isValid(value)) {
            return new mongodb_1.ObjectId(value);
        }
        return this.createError("objectId.pre", { v: value }, state, options);
    },
});
exports.default = Joi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbHMvam9pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBEQUE0QztBQUU1QyxxQ0FBbUM7QUFNbkMsTUFBTSxHQUFHLEdBQXVCLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbEQsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUU7SUFDMUIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsUUFBUSxFQUFFO1FBQ1QsR0FBRyxFQUNGLG1FQUFtRTtLQUNwRTtJQUNELEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU87UUFDeEIsSUFBSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksa0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDRCxDQUFDLENBQUM7QUFVSCxrQkFBZSxHQUFHLENBQUMifQ==