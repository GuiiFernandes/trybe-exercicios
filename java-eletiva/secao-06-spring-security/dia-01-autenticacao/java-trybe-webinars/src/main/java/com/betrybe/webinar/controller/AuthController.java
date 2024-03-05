package com.betrybe.webinar.controller;

import com.betrybe.webinar.controller.dto.AuthDto;
import com.betrybe.webinar.controller.dto.TokenDto;
import com.betrybe.webinar.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Auth controller.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthenticationManager authenticationManager;
  private final TokenService tokenService;

  @Autowired
  public AuthController(AuthenticationManager authenticationManager, TokenService tokenService) {
    this.authenticationManager = authenticationManager;
    this.tokenService = tokenService;
  }

  //Crio a rota post /auth/login que recebe os dados do usuário pelo body da requisição
  @PostMapping("/login")
  public TokenDto login(@RequestBody AuthDto authDto) {
    //Crio um objeto do tipo UsernamePasswordAuthenticationToken
    // que recebe o objeto do AuthDto para validar a existência do usuário.
    UsernamePasswordAuthenticationToken userAuth = new UsernamePasswordAuthenticationToken(
        authDto.username(), authDto.password() //passo o username e password para o token
    );
    //Crio um objeto do tipo Authentication que recebe o usuário para
    // a authenticationManager.authenticate autenticar se os dados daquele usuário são válidos.
    Authentication auth = authenticationManager.authenticate(userAuth);
    //Caso a autenticação falhe um erro é lançado que vai ser tratado pelo Advice
    //Caso dê certo, gero um token para o usuário autenticado
    String token = tokenService.generateToken(auth.getName());
    //Retorno um tokenDto com o token gerado
    return new TokenDto(token);
  }

}
