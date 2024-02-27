package com.betrybe.report.service.exception;

/**
 * The type Invalid date exception.
 */
public class InvalidDateException extends CustomError {

  /**
   * Instantiates a new Invalid date exception.
   */
  public InvalidDateException() {
    super("Data inválida!");
  }
}
