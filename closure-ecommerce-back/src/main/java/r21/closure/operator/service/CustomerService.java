package r21.closure.operator.service;

import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.UserDto;

import java.util.List;

public interface CustomerService {

    List<CartDto> getCustomerCart();

    CustomerDto getCustomerById(Long id);
}
