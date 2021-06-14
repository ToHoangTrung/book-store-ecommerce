package r21.closure.operator.service.impl;

import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.model.entity.Catalog;
import r21.closure.operator.model.entity.QCatalog;
import r21.closure.operator.repository.CatalogRepository;
import r21.closure.operator.service.CatalogService;
import r21.closure.operator.util.CatalogMapper;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CatalogServiceImpl implements CatalogService {

    @Autowired
    private CatalogRepository catalogRepository;

    @Autowired
    private SubCatalogRepository subCatalogRepository;

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<CatalogDto> getALlCatalogAndTheirSubCatalog() {
        List<Catalog> catalogs = new JPAQuery<Catalog>(em)
                .from(QCatalog.catalog).distinct()
                .innerJoin(QCatalog.catalog.subCatalogs)
                .fetchJoin()
                .fetch();
        return catalogs.stream().map(CatalogMapper::catalogToCatalogDto).collect(Collectors.toList());
    }

    @Override
    public List<SubCatalogDto> getAllSubCatalog() {
        List<SubCatalog> subCatalogs = subCatalogRepository.findAll();
        return subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList());
    }
}
