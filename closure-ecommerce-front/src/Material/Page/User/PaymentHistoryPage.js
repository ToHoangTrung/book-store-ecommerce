import {makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "../../Style/MainPage.scss"
import {useDispatch} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";
import {fetchAllUserPayment} from "../../Feature/PaymentSlice";
import {Link} from "react-router-dom";

const PaymentList = (props) => {

    const {
        payments
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

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>{t('payment-history-page.payment-list.code')}</th>
                        <th>{t('payment-history-page.payment-list.order-date')}</th>
                        <th>{t('payment-history-page.payment-list.total')}</th>
                        <th>{t('payment-history-page.payment-list.status')}</th>
                        <th>{t('payment-history-page.payment-list.method')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((payment, index) => (
                            <tr key={index}>
                                <td><Link to={"/order/detail/" + payment.id} className={classes.code}>{payment.id}</Link></td>
                                <td>{payment.paymentDate}</td>
                                <td>{payment.total} đ</td>
                                <td>
                                    {
                                        i18n.language === "en" ? payment.status.enTranslate : payment.status.vnTranslate
                                    }
                                </td>
                                <td>
                                    {
                                        i18n.language === "en" ? payment.method.enTranslate : payment.method.vnTranslate
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const PaymentHistoryPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 250,
        },
        headline: {
            fontSize: 32,
            fontWeight: 'bold',
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            const result = unwrapResult(await dispatch(fetchAllUserPayment()));
            setPayments(result);
            setIsLoading(false);
        }
        fetchPayments()
    }, [])

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col>
                            <div className={"content-item"} style={{padding: '8px 12px'}}>
                                <p className={classes.headline}>{t('payment-history-page.headline')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={"content-item"} style={{padding: 0, width: '98%'}}>
                                {
                                    !isLoading && (
                                        <PaymentList payments={payments}/>
                                    )
                                }
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={"content-item"} style={{padding: 0}}>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default PaymentHistoryPage;
