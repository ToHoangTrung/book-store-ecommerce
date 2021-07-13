package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.security.dto.JwtResponse;
import r21.closure.operator.security.dto.LoginRequestDto;
import r21.closure.operator.security.dto.RegisterRequestDto;
import r21.closure.operator.service.UserService;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class UserController extends AbstractController{

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Object> userRegister(@RequestBody RegisterRequestDto registerRequestDto)  {
        userService.userRegister(registerRequestDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> userLogin(@RequestBody LoginRequestDto loginRequestDto) {
        JwtResponse jwtResponse = userService.userLogin(loginRequestDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(jwtResponse);
    }


    @GetMapping("/get-user-info")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> getUserInfoFromJwt(HttpServletRequest request) {
        UserDto user = userService.getUserInfoFromJwt(request);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
    }

    @GetMapping("/get-customer-info")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> getCustomerInfoFromJwt(HttpServletRequest request) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(customer);
    }
}
