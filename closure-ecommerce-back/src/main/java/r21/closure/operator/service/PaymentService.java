package r21.closure.operator.service;

import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.PaymentDto;
import r21.closure.operator.model.entity.mysql.MySqlPayment;
import r21.closure.operator.model.entity.mysql.MySqlUser;

import java.util.List;

public interface PaymentService {

    List<PaymentDto> getAllCustomerPayment(Long customerId);

    PaymentDto getCustomerPaymentById(Long customerId, Long paymentId);

    void createCustomerPayment(Long customerId, List<CartDto> cartDtos, MySqlPayment.Status status, MySqlPayment.Method method);
}
