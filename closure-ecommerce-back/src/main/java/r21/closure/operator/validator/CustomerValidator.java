package r21.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.exception.side.customer.CustomerNotFoundException;
import r21.closure.operator.repository.mysql.MySqlCustomerRepository;

@Component
public class CustomerValidator {

    @Autowired
    private MySqlCustomerRepository mySqlCustomerRepository;

    public MySqlCustomer getCustomerIfExist(Long id) {
        MySqlCustomer customer = mySqlCustomerRepository.findById(id).orElse(null);
        if (customer == null) {
            throw new CustomerNotFoundException(String.format("Customer with id: %s does not found", id));
        }
        return customer;
    }
}
