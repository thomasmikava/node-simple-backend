"use strict";
// tslint:disable:no-console
Object.defineProperty(exports, "__esModule", { value: true });
class MError extends Error {
    constructor(errorCode, errorMessage, errorMessageType) {
        super(JSON.stringify(errorMessage));
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        if (errorMessageType === "json")
            this.errorMessageType = errorMessageType;
        else
            this.errorMessageType = "text/plain";
    }
}
exports.MError = MError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdXRpbHMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0QkFBNEI7O0FBRTVCLE1BQWEsTUFBTyxTQUFRLEtBQUs7SUFXaEMsWUFDQyxTQUFpQixFQUNqQixZQUE2QyxFQUM3QyxnQkFBeUI7UUFFekIsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLGdCQUFnQixLQUFLLE1BQU07WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDOztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO0lBQzNDLENBQUM7Q0FDRDtBQXZCRCx3QkF1QkMifQ==