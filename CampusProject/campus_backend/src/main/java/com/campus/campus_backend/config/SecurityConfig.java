package com.campus.campus_backend.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import com.campus.campus_backend.security.GoogleOAuthSuccessHandler;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final GoogleOAuthSuccessHandler successHandler;

    public SecurityConfig(GoogleOAuthSuccessHandler successHandler) {
        this.successHandler = successHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                )
                .oauth2Login(oauth -> oauth
                        .successHandler(successHandler)
                        .failureHandler((request, response, exception) -> {
                            System.out.println("==================================");
                            System.out.println("GOOGLE LOGIN FAILED");
                            System.out.println("Exception Message:");
                            System.out.println(exception.getMessage());
                            exception.printStackTrace();
                            response.sendRedirect("/login?error");
                        })
                );

        return http.build();
    }
}
