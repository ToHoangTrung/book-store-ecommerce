package r21.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import r21.closure.operator.model.entity.User;
import r21.closure.operator.model.exception.user.EmailHaveAlreadyExistException;
import r21.closure.operator.model.exception.user.EmailNotFoundException;
import r21.closure.operator.model.exception.user.RoleNotSupportException;
import r21.closure.operator.model.exception.user.UsernameHaveAlreadyExistException;
import r21.closure.operator.repository.UserRepository;
import r21.closure.operator.security.dto.RegisterRequestDto;

import java.util.List;

@Component
public class AuthValidator {

    @Autowired
    private UserRepository userRepository;

    public void validateUserExistByUsername(String username) {
        boolean check = userRepository.existsByUsername(username);
        if (Boolean.TRUE.equals(check)) {
            throw new UsernameHaveAlreadyExistException(String.format("Username: '%s' have already exist", username));
        }
    }

    public void validateUserExistByEmail(String email) {
        boolean check = userRepository.existsByEmail(email);
        if (Boolean.TRUE.equals(check)) {
            throw new EmailHaveAlreadyExistException(String.format("Email: '%s' have already exist", email));
        }
    }

    public void validateRoleValid(String role) {
        List<String> roles = User.Role.getUserRoles();
        if (!roles.contains(role)) {
            throw new RoleNotSupportException(String.format("User does not support this role: %s", role));
        }
    }

    public void validateRegisterRequest(RegisterRequestDto dto) {
        validateUserExistByEmail(dto.getEmail());
        validateUserExistByUsername(dto.getUsername());
        validateRoleValid(dto.getRole());
    }

    public User getUserIfExist(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new EmailNotFoundException(String.format("Email: %s does not found", email));
        }
        return user;
    }
}
