package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingDto extends AbstractDto{

    private CustomerDto customer;

    private Double score;

    private String comment;
}
