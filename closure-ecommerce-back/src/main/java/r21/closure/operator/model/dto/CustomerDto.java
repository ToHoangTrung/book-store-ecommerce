package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CustomerDto extends AbstractDto{

    private String name;

    private String phone;

    private LocalDate birthday;

    private String cmnd;

    private UserDto userInfo;
}
