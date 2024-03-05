package com.betrybe.trybrecho.util;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * The type Jpa config.
 */
@Configuration
@EnableJpaAuditing
@EnableTransactionManagement
public class JpaConfig {

}
