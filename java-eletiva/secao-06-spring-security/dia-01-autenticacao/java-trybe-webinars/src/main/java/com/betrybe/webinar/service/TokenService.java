package com.betrybe.webinar.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * The type Token service.
 */
@Service
public class TokenService {

  // Atributo que armazena o algorítimo que será utilizado para assinar o token
  private final Algorithm algorithm;

  /**
   * Instantiates a new Token service.
   *
   * @param secret the secret
   */
  // O construtor recebe o secret
  // O secret será injetado através do @Value de uma variável criada
  // no Application.properties que vem das variáveis de ambiente
  public TokenService(@Value("${api.security.token.secret}") String secret) {
    this.algorithm = Algorithm.HMAC256(secret); //Então criamos o algoritmo com o secret
    //Usamos o padrão HMAC256 para criar o algoritmo
  }

  /**
   * Generate token string.
   *
   * @param username the username
   * @return the string
   */
  // Método que cria o token
  public String generateToken(String username) {
    return JWT.create() //Cria um novo token
        .withSubject(username) //Adiciona o username como subject
        .withExpiresAt(generateExpiration()) //Adiciona a data de expiração
        .sign(algorithm); //Assina o token com o algoritmo criado
  }

  private Instant generateExpiration() {
    return Instant.now()
        .plus(2, ChronoUnit.HOURS); //Adiciona um tempo de expiração de 2 horas
  }

  /**
   * Validate token string.
   *
   * @param token the token
   * @return the string
   */
  // Método que valida o token
  public String validateToken(String token) {
    return JWT.require(algorithm) //Requer o algoritmo para validar o token
        .build()
        .verify(token)
        .getSubject();
    // Verifica o token e retorna o subject (username conforme criado no generateToken)
  }
}
