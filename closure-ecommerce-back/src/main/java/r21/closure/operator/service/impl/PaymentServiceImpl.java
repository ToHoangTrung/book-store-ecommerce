package r21.closure.operator.service.impl;

import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import r21.closure.operator.model.dto.CartDto;
import r21.closure.operator.model.dto.PaymentDetailDto;
import r21.closure.operator.model.dto.PaymentDto;
import r21.closure.operator.model.entity.mongo.MongoProduct;
import r21.closure.operator.model.entity.mysql.MySqlCustomer;
import r21.closure.operator.model.entity.mysql.MySqlPayment;
import r21.closure.operator.model.entity.mysql.MySqlPaymentDetail;
import r21.closure.operator.repository.mongo.MongoProductRepository;
import r21.closure.operator.repository.mysql.MySqlPaymentRepository;
import r21.closure.operator.service.CartService;
import r21.closure.operator.service.PaymentService;
import r21.closure.operator.util.PaymentMapper;
import r21.closure.operator.util.ProductMapper;
import r21.closure.operator.validator.CustomerValidator;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private MySqlPaymentRepository mySqlPaymentRepository;

    @Autowired
    private MongoProductRepository mongoProductRepository;

    @Autowired
    private CustomerValidator customerValidator;

    @Autowired
    private CartService cartService;

    @Override
    public List<PaymentDto> getAllCustomerPayment(Long customerId) {
        List<MySqlPayment> payments = mySqlPaymentRepository.findByCustomerId(customerId);
        return payments.stream().map(PaymentMapper::paymentToPaymentDto).collect(Collectors.toList());
    }

    @Override
    public PaymentDto getCustomerPaymentById(Long customerId, Long paymentId) {
        MySqlPayment mySqlPayment = mySqlPaymentRepository.findByCustomerIdAndId(customerId, paymentId);
        PaymentDto paymentDto = PaymentMapper.paymentToPaymentDto(mySqlPayment);

        List<PaymentDetailDto> paymentDetailDtos = new ArrayList<>();
        List<MySqlPaymentDetail> paymentDetails = mySqlPayment.getPaymentDetails();
        for(MySqlPaymentDetail mySqlPaymentDetail : mySqlPayment.getPaymentDetails()) {
            MongoProduct product = mongoProductRepository.findById(mySqlPaymentDetail.getProductId());
            if (product != null) {
                PaymentDetailDto paymentDetailDto = new PaymentDetailDto();
                paymentDetailDto.setId(mySqlPaymentDetail.getId());
                paymentDetailDto.setProduct(ProductMapper.productToProductDto(product));
                paymentDetailDto.setAmount(mySqlPaymentDetail.getAmount());
                paymentDetailDtos.add(paymentDetailDto);
            }
        }
        paymentDto.setPaymentDetail(paymentDetailDtos);
        return paymentDto;
    }

    @Override
    public void createCustomerPayment(Long customerId, List<CartDto> cartDtos, MySqlPayment.Status status, MySqlPayment.Method method) {
        MySqlPayment payment = new MySqlPayment();
        payment.setTotal(cartDtos.stream().mapToInt(cartDto ->
                cartDto.getProduct().getPrice() * cartDto.getAmount() -
                cartDto.getProduct().getDiscount() * cartDto.getAmount()).sum());
        MySqlCustomer customer = customerValidator.getCustomerIfExist(customerId);
        payment.setCustomer(customer);
        payment.setPaymentDate(LocalDate.now());
        payment.setStatus(status);
        payment.setMethod(method);
        List<MySqlPaymentDetail> paymentDetails = new ArrayList<>();
        cartDtos.forEach(cartDto -> {
            cartService.deleteCustomerCartProduct(cartDto.getProduct().getId(), customerId);
            MySqlPaymentDetail paymentDetail = new MySqlPaymentDetail();
            paymentDetail.setAmount(cartDto.getAmount());
            paymentDetail.setProductId(cartDto.getProduct().getId());
            paymentDetail.setPayment(payment);
            paymentDetails.add(paymentDetail);
        });
        payment.setPaymentDetails(paymentDetails);
        mySqlPaymentRepository.save(payment);
    }
}
