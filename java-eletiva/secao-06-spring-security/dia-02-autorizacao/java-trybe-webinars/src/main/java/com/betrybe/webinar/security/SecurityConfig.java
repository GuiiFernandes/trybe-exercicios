package com.betrybe.webinar.security;

import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer.FrameOptionsConfig;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * The type Security config.
 */
@Configuration // Indica ao Spring que na classe existem definições de configuração
@EnableWebSecurity
// indica ao Spring que a classe é responsável por configurações do
// Spring Security que devem ser carregadas durante a inicialização da aplicação
@EnableMethodSecurity(securedEnabled = true) //habilita @Secured no projeto
public class SecurityConfig {

  //atributo que vai receber o JwtFilter
  private final JwtFilter jwtFilter;

  //Recebe o JwtFilter por injeção de dependência
  @Autowired
  public SecurityConfig(JwtFilter jwtFilter) {
    this.jwtFilter = jwtFilter;
  }

  /**
   * Security filter chain security filter chain.
   *
   * @param http the http
   * @return the security filter chain
   * @throws Exception the exception
   */
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
      throws Exception { //Define a cadeia de filtros do Spring Security
    return http //a cadeia é definida através do parâmetro http
        .csrf(
            AbstractHttpConfigurer::disable) //desabilita o CSRF (Cross-Site Request Forgery),
        // desnecessário para uma API REST.
        .sessionManagement(// Responsável por tornar as requisições stateless, ou seja, sem estado.
            session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        ).authorizeHttpRequests(authorize -> authorize //Define as autorizações das requisições
            .requestMatchers(HttpMethod.POST, "/persons").permitAll() //permitdo a todos
            .requestMatchers(HttpMethod.POST, "/auth/login").permitAll() //permitdo a todos
            .requestMatchers(toH2Console()).permitAll()
            .anyRequest().authenticated() //demais requisições precisam de autenticação
        ).headers(headers -> headers //Define as configurações de cabeçalho
            .frameOptions(FrameOptionsConfig::sameOrigin) //Permite o uso do H2 Console
        )
        //Adiciona o filtro jwtFilter antes do filtro de autenticação do Spring Security
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
        .build();
  }

  //Define um bean do tipo AuthenticationManager responsável por gerenciar a autenticação
  @Bean
  public AuthenticationManager authenticationManager(
      AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  //Define um bean do tipo PasswordEncoder que vai dizer
  // Qual o tipo de criptografia usada na senha do usuário..
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(); //Usa o algoritmo de criptografia BCrypt
    // Dessa forma o Spring pode usar a mesma classe para descriptografar a senha
  }
}
