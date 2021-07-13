import {Divider, Link, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import '../../Style/MainPage.scss'
import {DayBreakBlue, DefaultTheme} from "../../../theme";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import {useDispatch} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchUserPaymentById} from "../../Feature/PaymentSlice";
import {customerGetInfo} from "../../Feature/UserSlice";

const PaymentDetail = (props) => {

    const {
        customer,
        payment
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        item: {
            padding: 12,
            border: `1px solid ${DefaultTheme.gray5}`
        },
        info: {
            minHeight: 120,
            display: 'flex',
            flexDirection: "column",
            gridRowGap: 8
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col>
                    <div className={classes.item}>
                        <p style={{color: DefaultTheme.default6, fontWeight: 'bold'}}>{t('payment-detail-page.address.headline')}</p>
                        <Divider style={{margin: '12px -12px'}}/>
                        <div className={classes.info}>
                            <p style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 8}}>{customer.name}</p>
                            <p>9/1 Tran Trong Cung phuong 7, Ho Chi Minh, Viet Name</p>
                            <p>{t('payment-detail-page.address.phone')}: {customer.phone}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col>
                    <div className={classes.item}>
                        <p style={{color: DefaultTheme.default6, fontWeight: 'bold'}}>{t('payment-detail-page.delivery.headline')}</p>
                        <Divider style={{margin: '12px -12px'}}/>
                        <div className={classes.info}>
                            <p style={{display: 'flex', alignItems: 'center'}}>
                                <LocalAtmIcon style={{fontSize: 24, color: DefaultTheme.default6, marginRight: 8}}/>
                                {
                                    i18n.language === "en" ? payment.method.enTranslate : payment.method.vnTranslate
                                }
                            </p>
                            <p>{t('payment-detail-page.delivery.ship-date')}: {payment.paymentDate}</p>
                            <p>{t('payment-detail-page.delivery.ship-price')}: Free Ship</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const PaymentProducts = (props) => {

    const {
        payment
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        table: {
            width: '100%',
            borderCollapse: "collapse",
            '& td': {
                border: `1px solid #ddd`,
                padding: 16,
                borderLeft: 'none',
                borderRight: 'none',
            },
            '& th': {
                fontSize: 16,
                border: `1px solid #ddd`,
                padding: 16,
                color: 'white',
                background: DefaultTheme.default5,
                borderLeft: 'none',
                borderRight: 'none',
            },
            '& tr': {
                transition: '0.3s',
            },
        },
        code: {
            cursor: "pointer",
            color: DayBreakBlue.color7,
            '&:hover':{
                color: DayBreakBlue.color8,
                textDecoration: 'underline',
            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>{t('payment-detail-page.product-list.name')}</th>
                    <th>{t('payment-detail-page.product-list.price')}</th>
                    <th>{t('payment-detail-page.product-list.quantity')}</th>
                    <th>{t('payment-detail-page.product-list.discount')}</th>
                    <th>{t('payment-detail-page.product-list.rough')}</th>
                </tr>
                </thead>
                <tbody>
                {
                    payment.paymentDetail.map((paymentDetail, index) => (
                        <tr key={index}>
                            <td><Link to={"#"} className={classes.code}>{paymentDetail.product.name}</Link></td>
                            <td>{paymentDetail.product.price} đ</td>
                            <td>{paymentDetail.amount}</td>
                            <td>{paymentDetail.product.discount} đ</td>
                            <td>{
                                    paymentDetail.product.price * paymentDetail.amount -
                                    paymentDetail.product.discount * paymentDetail.amount
                                } đ
                            </td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>
    )
}

const PaymentDetailPage = ({match}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 100,
        }
    }));

    const {paymentId} = match.params;

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [payment, setPayment] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const fetchPayment = async () => {
            const result = unwrapResult(await dispatch(fetchUserPaymentById(paymentId)));
            setPayment(result);
            setIsLoading(false);
        }
        fetchPayment();
    }, [paymentId]);

    useEffect(() => {
        const fetchCustomer = async () => {
            const result = unwrapResult(await dispatch(customerGetInfo()));
            setCustomer(result);
        }
        fetchCustomer();
    }, [])

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={9}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{ width: '98%', padding: '8px 12px'}}>
                                    {
                                        !isLoading && (
                                            <p style={{fontSize: 24, fontWeight: '450'}}>
                                                {t('payment-detail-page.headline')}: #{payment.id} - {" "}
                                                {
                                                    i18n.language === "en" ?
                                                        payment.status.enTranslate :
                                                        payment.status.vnTranslate
                                                }
                                            </p>
                                        )
                                    }
                                </div>
                                <div className={"content-item"} style={{width: '98%', padding: 0}}>
                                    {
                                        !isLoading && (
                                            <PaymentProducts payment={payment}/>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={"content-item"} style={{padding: 0}}>
                                {
                                    !isLoading && (
                                        <PaymentDetail payment={payment} customer={customer}/>
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default PaymentDetailPage;
