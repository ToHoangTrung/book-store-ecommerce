import {Link, makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import "../../Style/MainPage.scss"

const OrderList = () => {

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
                    <th>{t('order.table.code')}</th>
                    <th>{t('order.table.order-date')}</th>
                    <th>{t('order.table.product')}</th>
                    <th>{t('order.table.total')}</th>
                    <th>{t('order.table.status')}</th>
                </tr>
                <tr>
                    <td><Link to={"#"} className={classes.code}>328124258</Link></td>
                    <td>07/10/2019</td>
                    <td>Khoa Học Khám Phá - Dữ Liệu Lớn</td>
                    <td>84.000 ₫</td>
                    <td>Giao hàng thành công</td>
                </tr>
                <tr>
                    <td><Link to={"#"} className={classes.code}>328124258</Link></td>
                    <td>07/10/2019</td>
                    <td>Khoa Học Khám Phá - Dữ Liệu Lớn</td>
                    <td>84.000 ₫</td>
                    <td>Giao hàng thành công</td>
                </tr>
                <tr>
                    <td><Link to={"#"} className={classes.code}>328124258</Link></td>
                    <td>07/10/2019</td>
                    <td>Khoa Học Khám Phá - Dữ Liệu Lớn</td>
                    <td>84.000 ₫</td>
                    <td>Giao hàng thành công</td>
                </tr>
            </table>
        </div>
    )
}

const OrderPage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 250,
        },
        headline: {
            fontSize: 32,
            fontWeight: 'bold',
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col>
                            <div className={"content-item"} style={{padding: '8px 12px'}}>
                                <p className={classes.headline}>{t('order.headline')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={"content-item"} style={{padding: 0, width: '98%'}}>
                                <OrderList/>
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

export default OrderPage;