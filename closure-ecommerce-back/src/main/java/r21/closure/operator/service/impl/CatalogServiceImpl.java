package r21.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.model.entity.mongo.MongoCatalog;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.repository.mongo.MongoProductRepository;
import r21.closure.operator.service.CatalogService;
import r21.closure.operator.util.CatalogMapper;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CatalogServiceImpl implements CatalogService {

    @Autowired
    private MongoProductRepository mongoProductRepository;


    @Override
    public List<CatalogDto> getAllCatalog() {
        List<MongoCatalog> catalogs = new LinkedList<>();
        mongoProductRepository.findAll().stream().map(MongoProduct::getCatalog).collect(Collectors.toList()).forEach(catalog -> {
            if(!catalogs.contains(catalog)) catalogs.add(catalog);
        });
        return catalogs.stream().map(CatalogMapper::catalogToCatalogDto).collect(Collectors.toList());
    }
}
