package r21.closure.operator.util;

import r21.closure.operator.model.dto.PaymentDetailDto;
import r21.closure.operator.model.entity.mysql.MySqlPaymentDetail;

public class PaymentDetailMapper {

    public static PaymentDetailDto paymentDetailToPaymentDetailDto(MySqlPaymentDetail entity) {
        PaymentDetailDto dto = new PaymentDetailDto();
        dto.setId(entity.getId());
        return dto;
    }
}
