package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.model.entity.mysql.MySqlPayment;
import r21.closure.operator.service.CartService;
import r21.closure.operator.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @GetMapping("/get-user-cart")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> geUserCart(HttpServletRequest request) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        List<CartDto> carts = cartService.getCustomerCart(customer.getId());
        return ResponseEntity.ok().body(carts);
    }

    @PostMapping("/create-or-update-user-cart")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> createOrUpdateUserCart(HttpServletRequest request, @Valid @RequestBody List<CartDto> cartDtos) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        List<CartDto> carts = cartService.createOrUpdateCustomerCart(customer.getId(), cartDtos);
        return ResponseEntity.ok().body(carts);
    }

    @DeleteMapping("/delete/user-cart-product")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Object> deleteUserCartProduct(HttpServletRequest request, @RequestBody Long productId) {
        CustomerDto customer = userService.getCustomerFromJwt(request);
        cartService.deleteCustomerCartProduct(productId, customer.getId());
        return ResponseEntity.ok().body("Remove product from cart successfully");
    }
}

