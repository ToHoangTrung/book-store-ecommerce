package r21.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import r21.closure.operator.model.dto.multilingual.MultilingualDto;
import r21.closure.operator.model.entity.mysql.MySqlPayment;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PaymentDto extends AbstractDto{

    private Integer total;

    private LocalDate paymentDate;

    private List<PaymentDetailDto> paymentDetail = new ArrayList<>();

    private StatusDto status;

    private MethodDto method;

    public static class StatusDto extends MultilingualDto {
    }

    public static class MethodDto extends MultilingualDto{

    }

}
