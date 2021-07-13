package r21.closure.operator.util;

import r21.closure.operator.model.dto.PaymentDto;
import r21.closure.operator.model.entity.mysql.MySqlPayment;

public class PaymentMapper {

    public static PaymentDto paymentToPaymentDto(MySqlPayment entity) {
        PaymentDto dto = new PaymentDto();
        dto.setId(entity.getId());
        dto.setPaymentDate(entity.getPaymentDate());
        dto.setTotal(entity.getTotal());
        dto.setMethod(paymentMethodToPaymentMethodDto(entity.getMethod()));
        dto.setStatus(paymentStatusToPaymentStatusDto(entity.getStatus()));
        return dto;
    }

    public static PaymentDto.MethodDto paymentMethodToPaymentMethodDto(MySqlPayment.Method entity) {
        PaymentDto.MethodDto dto = new PaymentDto.MethodDto();
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        dto.setName(entity.name());
        return dto;
    }

    public static PaymentDto.StatusDto paymentStatusToPaymentStatusDto(MySqlPayment.Status entity) {
        PaymentDto.StatusDto dto = new PaymentDto.StatusDto();
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        dto.setName(entity.name());
        return dto;
    }
}
