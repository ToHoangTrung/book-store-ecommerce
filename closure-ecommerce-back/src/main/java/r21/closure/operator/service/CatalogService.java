package r21.closure.operator.service;

import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.model.dto.SubCatalogDto;

import java.util.List;

public interface CatalogService {
    List<CatalogDto> getALlCatalogAndTheirSubCatalog();

    List<SubCatalogDto> getAllSubCatalog();
}
