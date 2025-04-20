class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message); // Initialize the base Error with message
        this.statusCode = statusCode; // Custom property for HTTP status
        this.message = message;       // Message again for clarity
        this.errors = errors;         // Array of validation or internal errors
        this.success = false;         // You can use this in the response structure
        this.data = null;             // Placeholder for failed data (optional)

        // Stack trace
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;
