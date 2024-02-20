package com.betrybe.alexandria.controllers.dto;

/**
 * The type Responde dto.
 *
 * @param <T> the type parameter
 */
public record ResponseDto<T>(String message, T data) {

}
