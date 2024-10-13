export class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero!");

        // Set the prototype explicitly to maintain the correct prototype chain
        Object.setPrototypeOf(this, DivisionByZeroError.prototype);

        // Set the error name to the class name
        this.name = 'DivisionByZeroError';
    }
}
