package r21.closure.operator.service;

import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.security.dto.JwtResponse;
import r21.closure.operator.security.dto.LoginRequestDto;
import r21.closure.operator.security.dto.RegisterRequestDto;

import javax.servlet.http.HttpServletRequest;

public interface UserService {

    void userRegister(RegisterRequestDto registerDto);

    JwtResponse userLogin(LoginRequestDto loginRequestDto);

    UserDto getUserInfoFromJwt(HttpServletRequest request);

    CustomerDto getCustomerFromJwt(HttpServletRequest request);
}
