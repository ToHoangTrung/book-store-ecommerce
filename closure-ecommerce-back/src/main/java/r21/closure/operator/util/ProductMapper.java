package r21.closure.operator.util;

import r21.closure.operator.model.dto.ProductDto;
import r21.closure.operator.model.entity.mongo.MongoProduct;

public class ProductMapper {

    public static ProductDto productToProductDto(MongoProduct entity) {
        ProductDto dto = new ProductDto();
        dto.setId(entity.getId());
        dto.setSku(entity.getSku());
        dto.setAuthor(entity.getAuthor());
        dto.setDescription(entity.getDescription());
        dto.setDiscount(entity.getDiscount());
        dto.setInventoryStatus(entity.getInventoryStatus());
        dto.setName(entity.getName());
        dto.setPrice(entity.getPrice());
        dto.setThumbnail(entity.getThumbnail());
        dto.setPublishYear(entity.getPublishYear());
        dto.setCatalog(CatalogMapper.catalogToCatalogDto(entity.getCatalog()));
        return dto;
    }


}
