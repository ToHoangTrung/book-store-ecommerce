package r21.closure.operator.service;

import r21.closure.operator.model.dto.CartDto;

import java.util.List;

public interface CartService {

    List<CartDto> getCustomerCart(Long id);

    List<CartDto> createOrUpdateCustomerCart(Long id, List<CartDto> cartDtos);

    void deleteCustomerCartProduct(Long productId, Long customerId);
}
