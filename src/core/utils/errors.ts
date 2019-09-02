// tslint:disable:no-console

export class MError extends Error {
	errorCode: number;
	errorMessage: string | { [key: string]: any };
	errorMessageType?: string;

	constructor(errorCode: number, errorMessage: string);
	constructor(
		errorCode: number,
		errorMessage: { [key: string]: any },
		errorMessageType: "json"
	);
	constructor(
		errorCode: number,
		errorMessage: string | { [key: string]: any },
		errorMessageType?: string
	) {
		super(JSON.stringify(errorMessage));
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		if (errorMessageType === "json")
			this.errorMessageType = errorMessageType;
		else this.errorMessageType = "text/plain";
	}
}
