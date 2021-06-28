package r21.closure.operator.util;

import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.model.entity.mongo.MongoCatalog;

public class CatalogMapper {

    public static CatalogDto catalogToCatalogDto(MongoCatalog entity) {
        CatalogDto dto = new CatalogDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        return dto;
    }
}
