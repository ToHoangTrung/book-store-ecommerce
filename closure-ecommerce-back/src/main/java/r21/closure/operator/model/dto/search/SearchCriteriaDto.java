package r21.closure.operator.model.dto.search;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchCriteriaDto {

    private String key;
    private String operation;
    private Object value;

    public SearchCriteriaDto(String key, String operation, Object value) {
        this.key = key;
        this.operation = operation;
        this.value = value;
    }

    public SearchCriteriaDto() {
        //Empty constructor
    }
}
