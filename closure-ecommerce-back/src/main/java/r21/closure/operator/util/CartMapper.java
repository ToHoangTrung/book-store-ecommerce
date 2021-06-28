package r21.closure.operator.util;

import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.entity.redis.Cart;

public class CartMapper {

    public static CartDto cartToCartDto(Cart entity){
        CartDto dto = new CartDto();
        dto.setAmount(entity.getAmount());
        dto.setProductId(entity.getProductId());
        dto.setUserId(entity.getUserId());
        return dto;
    }
}
