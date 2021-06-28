package r21.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.model.exception.side.user.*;
import r21.closure.operator.repository.mysql.MySqlUserRepository;
import r21.closure.operator.security.dto.RegisterRequestDto;

import java.util.List;

@Component
public class UserValidator {

    @Autowired
    private MySqlUserRepository mySqlUserRepository;

    public void validateUserExistByUsername(String username) {
        boolean check = mySqlUserRepository.existsByUsername(username);
        if (Boolean.TRUE.equals(check)) {
            throw new UsernameHaveAlreadyExistException(String.format("Username: '%s' have already exist", username));
        }
    }

    public void validateUserExistByEmail(String email) {
        boolean check = mySqlUserRepository.existsByEmail(email);
        if (Boolean.TRUE.equals(check)) {
            throw new EmailHaveAlreadyExistException(String.format("Email: '%s' have already exist", email));
        }
    }

    public void validateRoleValid(String role) {
        List<String> roles = MySqlUser.Role.getUserRoles();
        if (!roles.contains(role)) {
            throw new RoleNotSupportException(String.format("User does not support this role: %s", role));
        }
    }

    public void validateRegisterRequest(RegisterRequestDto dto) {
        validateUserExistByEmail(dto.getEmail());
        validateUserExistByUsername(dto.getUsername());
        validateRoleValid(dto.getRole());
    }

    public MySqlUser getUserIfExistByEmail(String email) {
        MySqlUser user = mySqlUserRepository.findByEmail(email);
        if (user == null) {
            throw new EmailNotFoundException(String.format("Email: %s does not found", email));
        }
        return user;
    }

    public MySqlUser getUserIfExistByUsername(String username) {
        MySqlUser user = mySqlUserRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("Username: %s does not found", username));
        }
        return user;
    }
}
