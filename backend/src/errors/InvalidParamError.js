module.exports  = class InvalidParamError extends Error {
	constructor(message) {
		super()
        this.status = 422
		this.messageObject = message;
	}
}