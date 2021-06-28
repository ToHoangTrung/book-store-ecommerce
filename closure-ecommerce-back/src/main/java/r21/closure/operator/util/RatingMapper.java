package r21.closure.operator.util;

import r21.closure.operator.model.dto.RatingDto;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.entity.mysql.MySqlUser;
import r21.closure.operator.model.entity.neo4j.Neo4jRating;

public class RatingMapper {

    public static RatingDto buildProductRatingDto(MySqlCustomer customer, Neo4jRating rating) {
        RatingDto dto = new RatingDto();
        dto.setCustomer(CustomerMapper.customerToCustomerDto(customer));
        dto.setScore(rating.getScore());
        dto.setComment(rating.getComment());
        return dto;
    }
}
