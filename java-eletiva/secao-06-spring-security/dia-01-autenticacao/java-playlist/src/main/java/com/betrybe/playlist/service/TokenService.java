package com.betrybe.playlist.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.betrybe.playlist.entity.Person;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Token Service.
 */
@Service
public class TokenService {

  private final Algorithm algorithm;

  /**
   * Constructor.
   *
   * @param secret the secret
   */
  public TokenService(@Value("${playlist.security.token.secret}") String secret) {
    algorithm = Algorithm.HMAC256(secret);
  }

  /**
   * Generate token string.
   *
   * @param username the username
   * @return the string
   */
  public String generateToken(String username) {
    return JWT.create()
        .withSubject(username)
        .withExpiresAt(
            Instant.now().plus(2, ChronoUnit.DAYS)
        )
        .sign(algorithm);
  }

  /**
   * Validate token string.
   *
   * @param token the token
   * @return the string
   */
  public String validateToken(String token) {
    return JWT.require(algorithm)
        .build()
        .verify(token)
        .getSubject();
  }

}
