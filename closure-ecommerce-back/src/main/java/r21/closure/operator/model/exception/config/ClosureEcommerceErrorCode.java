package r21.closure.operator.model.exception.config;

public class ClosureEcommerceErrorCode {

    //main base error code
    public static final String CLOSURE_RESOURCE_NOT_FOUND_EXCEPTION = "CLOSURE-EX-MAIN-RESOURCE-NOT-FOUND";
    public static final String CLOSURE_RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION = "CLOSURE-EX-MAIN-RESOURCE-HAVE-ALREADY-EXIST";
    public static final String CLOSURE_CONCURRENT_UPDATE_EXCEPTION = "CLOSURE-EX-MAIN-CONCURRENT-UPDATE";
    public static final String CLOSURE_UN_HANDLE_EXCEPTION = "CLOSURE-EX-UN-HANDLER";
    public static final String CLOSURE_INPUT_TYPE_INVALID_EXCEPTION = "CLOSURE-EX-INPUT-TYPE-INVALID";

    //user error code
    public static final String USER_USERNAME_HAVE_ALREADY_EXIST = "CLOSURE-EX-USER-USERNAME-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_HAVE_ALREADY_EXIST = "CLOSURE-EX-USER-EMAIL-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_NOT_FOUND = "CLOSURE-EX-USER-USERNAME-NOT-FOUND";
    public static final String USER_USERNAME_NOT_FOUND = "CLOSURE-EX-USER-EMAIL-NOT-FOUND";
    public static final String USER_PASSWORD_NOT_CORRECT = "CLOSURE-EX-USER-PASSWORD-NOT-CORRECT";
    public static final String USER_ROLE_NOT_SUPPORT = "CLOSURE-EX-USER-ROLE-NOT-SUPPORT";

    //product error code
    public static final String PRODUCT_NOT_FOUND = "CLOSURE-EX-PRODUCT-NOT-FOUND";

    //customer error code
    public static final String CUSTOMER_NOT_FOUND = "CUSTOMER-EX-NOT-FOUND";

    //cart error code
    public static final String CART_PRODUCT_NOT_FOUND = "CART-EX-PRODUCT-NOT-FOUND";

}
