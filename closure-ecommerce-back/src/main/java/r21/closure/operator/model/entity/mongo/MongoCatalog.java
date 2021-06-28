package r21.closure.operator.model.entity.mongo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Objects;

@Getter
@Setter
public class MongoCatalog {

    @Field("id")
    private Long id;

    private String name;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        MongoCatalog catalog = (MongoCatalog) o;
        return Objects.equals(id, catalog.id);
    }

}
