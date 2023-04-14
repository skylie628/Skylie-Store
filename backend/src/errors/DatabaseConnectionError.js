module.exports = class DatabaseConnectionError extends Error {
	constructor(message) {
		super(message);
        this.status = 503
	}
}