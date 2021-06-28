package r21.closure.operator.service;

import r21.closure.operator.model.dto.ProductDto;

import java.util.List;

public interface ProductService {

    List<ProductDto> getProductsByCatalogId(Long id);

    ProductDto getProductById(Long id);

    List<ProductDto> getAllProduct();
}
