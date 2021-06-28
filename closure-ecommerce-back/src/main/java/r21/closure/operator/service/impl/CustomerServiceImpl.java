package r21.closure.operator.service.impl;

import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.service.CustomerService;
import r21.closure.operator.util.CustomerMapper;
import r21.closure.operator.validator.CustomerValidator;
import r21.closure.operator.validator.UserValidator;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerValidator customerValidator;

    @Override
    public List<CartDto> getCustomerCart() {
        return null;
//        List<Cart> carts = StreamSupport
//                .stream(cartRepository.findAll().spliterator(), false)
//                .collect(Collectors.toList());
//        return carts.stream().map(CartMapper::cartToCartDto).collect(Collectors.toList());
    }

    @Override
    public CustomerDto getCustomerById(Long id) {
        MySqlCustomer customer = customerValidator.getCustomerIfExist(id);
        return CustomerMapper.customerToCustomerDto(customer);
    }


}
