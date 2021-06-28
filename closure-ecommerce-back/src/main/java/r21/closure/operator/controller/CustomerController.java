package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.service.CustomerService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/get-customer-cart/")
    public ResponseEntity<Object> getCustomerCart(){
        List<CartDto> carts = customerService.getCustomerCart();
        return ResponseEntity.accepted().body(carts);
    }

}
