package r21.closure.operator.model.entity;

import jdk.jfr.Enabled;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema = "publisher")
public class Publisher extends AbstractEntity{

    private String name;
}
