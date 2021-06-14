package r21.closure.operator.util;

import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.model.entity.Catalog;

import java.util.stream.Collectors;

public class CatalogMapper {

    public static CatalogDto catalogToCatalogDtoNoRelationShip(Catalog entity) {
        CatalogDto dto = new CatalogDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static CatalogDto catalogToCatalogDto(Catalog entity) {
        CatalogDto dto = catalogToCatalogDtoNoRelationShip(entity);
        return dto;
    }

    public static Catalog catalogDtoToCatalog(CatalogDto dto) {
        Catalog entity = new Catalog();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setVersion(dto.getVersion());
        return entity;
    }
}
