package com.gts.users.passwordreset;

public interface PasswordResetService {
	

	boolean requestPasswordReset(PasswordResetDto passwordResetDto);
	boolean resetPassword(PasswordResetDto passwordResetDto);
	boolean updatePassword(PasswordResetDto passwordResetDto);
}
