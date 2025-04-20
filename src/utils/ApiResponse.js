class ApiResponse {
    /**
     * Custom API Response structure
     * @param {number} statusCode - HTTP status code (e.g., 200, 201)
     * @param {any} data - Payload to return (object, array, string, etc.)
     * @param {string} message - Human-readable message
     */
    constructor(statusCode, data = null, message = "Success") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;
        this.timestamp = new Date().toISOString();
    }

    /**
     * Formats response into standard JSON
     */
    toJSON() {
        return {
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
            success: this.success,
            timestamp: this.timestamp
        };
    }
}

export { ApiResponse };
