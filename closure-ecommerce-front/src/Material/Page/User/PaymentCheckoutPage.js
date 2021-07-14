import {Divider, makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme, PolarGreenTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Button from "@material-ui/core/Button";
import '../../Style/MainPage.scss'
import {unwrapResult} from "@reduxjs/toolkit";
import {customerGetInfo, userGetInfo} from "../../Feature/UserSlice";
import {useDispatch} from "react-redux";
import {fetchUserCart} from "../../Feature/CartSlice";
import {createUserPayment} from "../../Feature/PaymentSlice";
import CustomSimpleModal from "../../Component/Custom/CustomSimpleModal";
import {Link, useHistory} from "react-router-dom";


const PaymentType = () => {

    const useStyles = makeStyles((theme) => ({
        root: {

        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 16,
        },
        check: {
          height: 20,
          width: 20,
          marginRight: 16,
        },
        text: {
            display: 'flex',
            fontSize: 16,
            alignItems: 'center',
            '& span': {
                '&:nth-child(1)': {
                    color: DefaultTheme.default6,
                    paddingRight: 16,
                }
            }
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.list}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type="radio" className={classes.check}/>
                    <p className={classes.text}>
                        <span><LocalAtmIcon style={{fontSize: 32}}/></span>
f                        <span>{t('payment-checkout-page.type.cash')}</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

const PaymentAddress = (props) => {

    const {
        customer
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        edit: {
            color: 'white',
            background: DefaultTheme.default6,
            '&:hover': {
                background: DefaultTheme.default7,
            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{fontSize: 16}}>{t('payment-checkout-page.address.headline')}</p>
                <Button className={classes.edit}>{t('payment-checkout-page.edit')}</Button>
            </div>
            <Divider style={{margin: '12px -12px'}}/>
            <div>
                <p style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 8}}>{customer.name}</p>
                <p>9/1 Tran Trong Cung phuong 7, Ho Chi Minh, Viet Name</p>
                <p>{t('payment-checkout-page.address.phone')}: {customer.phone}</p>
            </div>
        </div>
    )
}

const PaymentProducts = (props) => {

    const {
        cartProducts
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        edit: {
            color: 'white',
            background: DefaultTheme.default6,
            '&:hover': {
                background: DefaultTheme.default7,
            }
        },
        moreInfo: {
            color: DayBreakBlue.color7,
            marginLeft: 8,
            cursor: "pointer",
            '&:hover': {
                color: DayBreakBlue.color8,
            }
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();
    const [total, setTotal] = useState({
        totalPrice: 0,
        totalDiscount: 0,
    });

    useEffect(() => {
        let totalPrice = 0;
        let totalDiscount = 0;
        cartProducts.map((cartProduct) => {
            totalPrice += cartProduct.product.price * cartProduct.amount;
            totalDiscount += cartProduct.product.discount * cartProduct.amount;
        });
        setTotal(prevState => ({
            ...prevState,
            totalPrice: totalPrice,
            totalDiscount: totalDiscount,
        }))
    }, [])

    return (
        <div className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <p style={{fontSize: 16}}>{t('payment-checkout-page.order.headline')}</p>
                    <p>{cartProducts.length} {t('payment-checkout-page.order.product')}
                        <span className={classes.moreInfo}>{t('payment-checkout-page.order.more-info')}</span></p>
                </div>
                <Button className={classes.edit}>{t('payment-checkout-page.edit')}</Button>
            </div>
            <Divider style={{margin: '12px -12px'}}/>
            <div>
                <div className={classes.item}>
                    <p>{t('payment-checkout-page.order.rough')}</p>
                    <p>{total.totalPrice - total.totalDiscount} đ</p>
                </div>
                <div className={classes.item}>
                    <p>{t('payment-checkout-page.order.shipping')}</p>
                    <p>0 đ</p>
                </div>
                <Divider style={{margin: '12px -12px'}}/>
                <div className={classes.item}>
                    <p style={{fontWeight: 'bold'}}>{t('payment-checkout-page.order.total')}</p>
                    <p style={{fontSize: 24, color: VolcanoTheme.color6}}>{total.totalPrice - total.totalDiscount} đ</p>
                </div>
            </div>
        </div>
    )
}

const PaymentCheckoutPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        headline: {
            fontSize: 32,
            fontWeight: 'bold',
        },
        orderBtn: {
            width: '100%',
            color: 'white',
            padding: 16,
            fontWeight: 'bold',
            fontSize: 24,
            background: DefaultTheme.default6,
            '&:hover':{
                background: DefaultTheme.default7,
            }
        },
        notification: {
            background: PolarGreenTheme.color5,
            padding: 32,
            borderRadius: 5,
            '& p': {
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
            },
            '& a': {
                cursor: 'pointer',
                color: DayBreakBlue.color8,
                '&:hover':{
                    textDecoration: "underline",
                },
                fontSize: 30,

            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [cartProducts, setCartProducts] = useState([]);
    const [customer, setCustomer] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isCheckout, setIsCheckout] = useState(false);

    useEffect(() => {
        const fetchCustomer = async () => {
            const result = unwrapResult(await dispatch(customerGetInfo()));
            setCustomer(result);
        }
        fetchCustomer();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = unwrapResult(await dispatch(fetchUserCart()));
            setCartProducts(result);
            setIsLoading(false);
        }
        fetchProducts();
    }, []);

    const handlePaymentCheckout = async () => {
        unwrapResult(await dispatch(createUserPayment(cartProducts)));
        setIsCheckout(true);
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                {
                    isCheckout === true ? (
                        <div className={"content-list"}>
                            <div className={classes.notification}>
                                <p>
                                    {t('payment-checkout-page.notification.success')}
                                    <span style={{margin: '0px 16px'}}>-</span>
                                    <Link to={"/order/history"}>
                                        {t('payment-checkout-page.notification.go-to-order-history')}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={"content-list"}>
                            <Row>
                                <Col>
                                    <div className={"content-item"} style={{padding: '8px 12px'}}>
                                        <p className={classes.headline}>{t('payment-checkout-page.headline')}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={9}>
                                    <div className={"content-list"}>
                                        <div className={"content-item"} style={{width: '98%'}}>
                                            <PaymentType/>
                                        </div>
                                        <div className={"content-item"} style={{width: '98%', padding: 0}}>
                                            <Button className={classes.orderBtn} onClick={handlePaymentCheckout}>{t('payment-checkout-page.order-btn')}</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={3}>
                                    <div className={"content-list"}>
                                        <div className={"content-item"} style={{padding: 12}}>
                                            <PaymentAddress customer={customer}/>
                                        </div>
                                        <div className={"content-item"} style={{padding: 12}}>
                                            {
                                                !isLoading && (
                                                    <PaymentProducts cartProducts={cartProducts}/>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }

            </Container>
        </div>
    );
};

export default PaymentCheckoutPage;
