package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.PaymentDto;
import r21.closure.operator.model.entity.mysql.MySqlPayment;
import r21.closure.operator.service.PaymentService;
import r21.closure.operator.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserService userService;

    @GetMapping("/get-all-user-payment")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> getAllCustomerPayment(HttpServletRequest request) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        List<PaymentDto> payments = paymentService.getAllCustomerPayment(customer.getId());
        return ResponseEntity.ok().body(payments);
    }

    @GetMapping("/get-one-user-payment/{id}")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> getOneCustomerPayment(HttpServletRequest request, @PathVariable Long id) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        PaymentDto payment = paymentService.getCustomerPaymentById(customer.getId(), id);
        return ResponseEntity.ok().body(payment);
    }

    @PostMapping("/create-user-payment")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> createUserPayment(HttpServletRequest request, @Valid @RequestBody List<CartDto> cartDtos) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        paymentService.createCustomerPayment(customer.getId(), cartDtos, MySqlPayment.Status.PENDING, MySqlPayment.Method.CASH);
        return ResponseEntity.ok().body("Create payment successfully");
    }
}
