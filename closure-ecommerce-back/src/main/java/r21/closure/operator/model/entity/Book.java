package r21.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.neo4j.ogm.annotation.NodeEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@NodeEntity
@Table(schema = "book")
public class Book extends AbstractEntity{

    private Long id;

    private String name;

    private String price;
}
