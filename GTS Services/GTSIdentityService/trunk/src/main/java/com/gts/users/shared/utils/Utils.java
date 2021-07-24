package com.gts.users.shared.utils;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.gts.users.security.SecurityConstants;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class Utils {

	
	public static boolean hasTokenExpired(String token) {
		boolean returnValue = false;

		try {
			Claims claims = Jwts.parser()
					            .setSigningKey(SecurityConstants.getTokenSecret2())
					            .parseClaimsJws(token)
					            .getBody();

			Date tokenExpirationDate = claims.getExpiration();
			Date todayDate = new Date();

			returnValue = tokenExpirationDate.before(todayDate);
		} catch (ExpiredJwtException ex) {
			returnValue = true;
		}

		return returnValue;
	}

 
    public String generatePasswordResetToken(String userId)
    {
        String token = Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + SecurityConstants.PASSWORD_RESET_EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SecurityConstants.getTokenSecret2())
                .compact();
        return token;
    }
}

