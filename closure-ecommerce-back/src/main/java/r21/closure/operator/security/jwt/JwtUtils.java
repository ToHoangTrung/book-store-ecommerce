package r21.closure.operator.security.jwt;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import r21.closure.operator.security.service.UserDetailsImpl;
import io.jsonwebtoken.*;

import java.util.Date;

@Component
public class JwtUtils {
    private static final org.slf4j.Logger Logger = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${authentication.jwt.secretJwtKey}")
    private String jwtSecret;

    @Value("${authentication.jwt.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {

        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String aur21oken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(aur21oken);
            return true;
        } catch (SignatureException e) {
            Logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            Logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            Logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            Logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            Logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
}
