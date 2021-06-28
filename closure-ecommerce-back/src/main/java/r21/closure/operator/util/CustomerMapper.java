package r21.closure.operator.util;

import r21.closure.operator.model.dto.CustomerDto;
import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.entity.mysql.MySqlUser;

public class CustomerMapper {

    public static CustomerDto customerToCustomerDto(MySqlCustomer entity) {
        CustomerDto dto = new CustomerDto();
        dto.setId(entity.getId());
        dto.setBirthday(entity.getBirthday());
        dto.setName(entity.getName());
        dto.setPhone(entity.getPhone());
        UserDto userInfo = new UserDto();
        userInfo.setId(entity.getUser().getId());
        userInfo.setUsername(entity.getUser().getUsername());
        userInfo.setEmail(entity.getUser().getEmail());
        dto.setUserInfo(userInfo);
        return dto;
    }
}
