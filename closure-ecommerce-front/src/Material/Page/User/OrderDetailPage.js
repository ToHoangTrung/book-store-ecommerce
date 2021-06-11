import {Divider, Link, makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import '../../Style/MainPage.scss'
import {DayBreakBlue, DefaultTheme} from "../../../theme";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";

const OrderDetail = () => {

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
                        <p style={{color: DefaultTheme.default6, fontWeight: 'bold'}}>{t('order-detail.address')}</p>
                        <Divider style={{margin: '12px -12px'}}/>
                        <div className={classes.info}>
                            <p style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 8}}>Tô Hoàng Trung</p>
                            <p>9/1 Tran Trong Cung phuong 7, Ho Chi Minh, Viet Name</p>
                            <p>{t('order-detail.phone')}: 0359569985</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col>
                    <div className={classes.item}>
                        <p style={{color: DefaultTheme.default6, fontWeight: 'bold'}}>{t('order-detail.delivery')}</p>
                        <Divider style={{margin: '12px -12px'}}/>
                        <div className={classes.info}>
                            <p style={{display: 'flex', alignItems: 'center'}}>
                                <LocalAtmIcon style={{fontSize: 24, color: DefaultTheme.default6, marginRight: 8}}/>Tiền mặt</p>
                            <p>Giao vào Thứ sáu, 11/10</p>
                            <p>Miễn phí vận chuyển</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row noGutters>
                <Col>
                    <div className={classes.item}>
                        <p style={{color: DefaultTheme.default6, fontWeight: 'bold'}}>{t('order-detail.payment')}</p>
                        <Divider style={{margin: '12px -12px'}}/>
                        <div className={classes.info}>
                            <p>Thanh toán tiền mặt khi nhận hàng</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const OrderProduct = () => {

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
                <tr>
                    <th>{t('order-detail.products.name')}</th>
                    <th>{t('order-detail.products.price')}</th>
                    <th>{t('order-detail.products.quantity')}</th>
                    <th>{t('order-detail.products.discount')}</th>
                    <th>{t('order-detail.products.rough')}</th>
                </tr>
                <tr>
                    <td><Link to={"#"} className={classes.code}>Khoa Học Khám Phá - Dữ Liệu Lớn</Link></td>
                    <td>84.000 ₫</td>
                    <td>1</td>
                    <td>0 ₫</td>
                    <td>84.000 ₫</td>
                </tr>
            </table>
        </div>
    )
}

const OrderDetailPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 100,
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col sm={9}>
                            <div className={"content-list"}>
                                <div className={"content-item"} style={{ width: '98%', padding: '8px 12px'}}>
                                    <p style={{fontSize: 24, fontWeight: '450'}}>{t('order-detail.headline')}: #328124258 - Giao hàng thành công</p>
                                </div>
                                <div className={"content-item"} style={{width: '98%', padding: 0}}>
                                    <OrderProduct/>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={"content-item"} style={{padding: 0}}>
                                <OrderDetail/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default OrderDetailPage;