export class OperationalException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = "fail";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
