package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import r21.closure.operator.model.dto.ProductDto;
import r21.closure.operator.service.ProductService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/products")
public class ProductController extends AbstractController{

    @Autowired
    private ProductService productService;

    @GetMapping("/get-by-catalog-id/{id}")
    public ResponseEntity<Object> getProductsByCatalogId(@PathVariable Long id) {
        List<ProductDto> products = productService.getProductsByCatalogId(id);
        return ResponseEntity.accepted().body(products);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<Object> getProductById(@PathVariable Long id) {
        ProductDto product = productService.getProductById(id);
        return ResponseEntity.accepted().body(product);
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAllProduct() {
        List<ProductDto> products = productService.getAllProduct();
        return ResponseEntity.accepted().body(products);
    }

}
