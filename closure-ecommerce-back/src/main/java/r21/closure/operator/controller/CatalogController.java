package r21.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import r21.closure.operator.model.dto.CatalogDto;
import r21.closure.operator.service.CatalogService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/catalogs")
public class CatalogController extends AbstractController{

    @Autowired
    private CatalogService catalogService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllCatalog(){
        List<CatalogDto> catalogs = catalogService.getAllCatalog();
        return ResponseEntity.accepted().body(catalogs);
    }
}
