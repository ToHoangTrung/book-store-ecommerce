package r21.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.model.exception.user.PasswordNotCorrectException;
import r21.closure.operator.repository.UserRepository;
import r21.closure.operator.security.dto.JwtResponse;
import r21.closure.operator.security.dto.LoginRequestDto;
import r21.closure.operator.security.dto.RegisterRequestDto;
import r21.closure.operator.security.jwt.AuthTokenFilter;
import r21.closure.operator.security.jwt.JwtUtils;
import r21.closure.operator.security.service.UserDetailsImpl;
import r21.closure.operator.service.UserService;
import r21.closure.operator.validator.UserValidator;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthTokenFilter aur21okenFilter;

    @Override
    public void userRegister(RegisterRequestDto registerDto) {
        userValidator.validateRegisterRequest(registerDto);
        MySqlUser user = new MySqlUser(registerDto.getUsername(), registerDto.getEmail(), encoder.encode(registerDto.getPassword()), registerDto.getRole());
        userRepository.save(user);
    }

    @Override
    public JwtResponse userLogin(LoginRequestDto loginRequestDto) {
        MySqlUser user = userValidator.getUserIfExist(loginRequestDto.getEmail());
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), loginRequestDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
            return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles.get(0));
        } catch (Exception e){
            throw new PasswordNotCorrectException("Password does not correct");
        }
    }

    @Override
    public UserDto getUserFromJwt(HttpServletRequest request) {
        return null;
    }
}
