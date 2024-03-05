package com.betrybe.webinar.controller.dto;

/**
 * The type Auth dto.
 */
//Dto para receber o body com os dados do usuário para autenticação
public record AuthDto(String username, String password) {

}
