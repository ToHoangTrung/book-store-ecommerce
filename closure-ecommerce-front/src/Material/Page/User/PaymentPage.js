import {Divider, makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Button from "@material-ui/core/Button";

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
                        <sppan>{t('payment.type.cash')}</sppan>
                    </p>
                </div>
            </div>

        </div>
    )
}

const PaymentAddress = () => {

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

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p style={{fontSize: 16}}>{t('payment.address')}</p>
                <Button className={classes.edit}>{t('payment.edit')}</Button>
            </div>
            <Divider style={{margin: '12px -12px'}}/>
            <div>
                <p style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 8}}>Tô Hoàng Trung</p>
                <p>9/1 Tran Trong Cung phuong 7, Ho Chi Minh, Viet Name</p>
                <p>{t('payment.phone')}: 0359569985</p>
            </div>
        </div>
    )
}

const PaymentOrder = () => {

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

    return (
        <div className={classes.root}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <p style={{fontSize: 16}}>{t('payment.order.order')}</p>
                    <p>1 {t('payment.order.product')}
                        <span className={classes.moreInfo}>{t('payment.order.more-info')}</span></p>
                </div>
                <Button className={classes.edit}>{t('payment.edit')}</Button>
            </div>
            <Divider style={{margin: '12px -12px'}}/>
            <div>
                <div className={classes.item}>
                    <p>{t('checkout.rough')}</p>
                    <p>780.000 đ</p>
                </div>
                <div className={classes.item}>
                    <p>{t('checkout.shipping')}</p>
                    <p>0 đ</p>
                </div>
                <Divider style={{margin: '12px -12px'}}/>
                <div className={classes.item}>
                    <p style={{fontWeight: 'bold'}}>{t('checkout.total')}</p>
                    <p style={{fontSize: 24, color: VolcanoTheme.color6}}>780.000 đ</p>
                </div>
            </div>
        </div>
    )
}

const PaymentPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gridGap: 24,
        },
        item: {
            background: 'white',
            border: `1px solid ${DefaultTheme.gray5}`,
            padding: 24,
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
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={classes.content}>
                    <Row>
                        <Col>
                            <div className={classes.item} style={{padding: '8px 12px'}}>
                                <p className={classes.headline}>{t('payment.headline')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={classes.content}>
                                <div className={classes.item} style={{width: '98%'}}>
                                    <PaymentType/>
                                </div>
                                <div className={classes.item} style={{width: '98%', padding: 0}}>
                                    <Button className={classes.orderBtn}>{t('payment.order.order')}</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={classes.content}>
                                <div className={classes.item} style={{padding: 12}}>
                                    <PaymentAddress/>
                                </div>
                                <div className={classes.item} style={{padding: 12}}>
                                    <PaymentOrder/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default PaymentPage;