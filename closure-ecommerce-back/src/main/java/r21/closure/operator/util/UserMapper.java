package r21.closure.operator.util;

import r21.closure.operator.model.dto.UserDto;
import r21.closure.operator.model.entity.mysql.MySqlUser;

public class UserMapper {

    public static UserDto userToUserDtoNoRelationShip(MySqlUser entity) {
        UserDto dto = new UserDto();
        dto.setId(entity.getId());
        dto.setEmail(entity.getEmail());
        dto.setUsername(entity.getUsername());
        dto.setPhone(entity.getPhone());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static UserDto userToUserDto(MySqlUser entity) {
        UserDto dto = userToUserDtoNoRelationShip(entity);
        return dto;
    }

    public static MySqlUser userDtoToUser(UserDto dto) {
        MySqlUser entity = new MySqlUser();
        entity.setId(dto.getId());
        entity.setUsername(dto.getUsername());
        entity.setPhone(dto.getPhone());
        entity.setEmail(dto.getEmail());
        entity.setVersion(dto.getVersion());
        entity.setPassword(dto.getPassword());
        return entity;
    }
}
