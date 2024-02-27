package com.betrybe.report.service.exception;

/**
 * The type Custom error.
 */
public class CustomError extends RuntimeException {

  /**
   * Instantiates a new Custom error.
   *
   * @param message the message
   */
  public CustomError(String message) {
    super(message);
  }
}