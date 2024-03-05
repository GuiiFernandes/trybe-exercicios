package com.betrybe.webinar.audit;

import com.betrybe.webinar.entity.Person;
import java.util.Optional;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * The type Auditor aware user.
 */
public class AuditorAwareUser implements AuditorAware<String> {

  @Override
  public Optional<String> getCurrentAuditor() {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    if (auth == null) {
      return Optional.of("unknown");
    }
    Person auditor = (Person) auth.getPrincipal();
    return Optional.of(auditor.getEmail());
  }
}