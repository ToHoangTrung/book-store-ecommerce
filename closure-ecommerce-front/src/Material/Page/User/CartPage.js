import {Divider, makeStyles} from "@material-ui/core";
import {DefaultTheme, PolarGreenTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const BookList = ({books}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            borderBottom: `1px solid ${DefaultTheme.gray5}`
        },
        logo: {
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            height: '100%',
            '& img': {
                width: '75%',
            },
            '& p': {
                width: '20%',
                cursor: 'pointer',
                paddingLeft: 8,
                transition: '0.3s',
                "&:hover":{
                    color:  VolcanoTheme.color7,
                }
            }
        },
        name: {
            fontWeight: 'bold',
            paddingBottom: 16,
            cursor: "pointer",
            transition: '0.3s',
            "&:hover":{
                color: DefaultTheme.default7,
            }
        },
        quantity: {
            padding: 16,
            display: 'flex',
            gridRowGap: 16,
            flexDirection: 'column',
            marginLeft: 'auto',
            width: 'fit-content',
        },
        addRemove: {
            display: 'flex',
            border: `1px solid ${DefaultTheme.gray5}`,
            '& button': {
                minWidth: 35,
                '& svg':{
                    fontSize: 24,
                    color: DefaultTheme.gray7
                }
            }
        },
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <div className={classes.logo}>
                        <p><HighlightOffIcon/></p>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_225628.jpg"}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div style={{padding: 16, gridRowGap: 16, fontSize: 16,}}>
                        <p className={classes.name}>Robot Nắp Chai Colamaru Phượng Hoàng - Bottleman 172765</p>
                        <p style={{color: VolcanoTheme.color6, fontWeight: 'bold'}}>188.000 đ</p>
                        <p style={{color: DefaultTheme.gray7, fontSize: 14, textDecoration: 'line-through'}}>199.000 đ</p>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className={classes.quantity}>
                        <div className={classes.addRemove}>
                            <Button><RemoveIcon/></Button>
                            <p style={{display: 'flex', alignItems: 'center', fontSize: 16, width: 35, justifyContent: 'center'}}>1</p>
                            <Button><AddIcon/></Button>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <p style={{paddingBottom: 8}}>{t('book-introduce.total')}</p>
                            <p style={{color: VolcanoTheme.color6, fontWeight: 'bold'}}>195.020 đ</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const Checkout = () => {

    const useStyles = makeStyles((theme) => ({
        root: {

        },
        checkout: {
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 16,
            '& a': {
                fontWeight: 'bold',
                padding: '12px',
                color: 'white',
                border: `1px solid ${PolarGreenTheme.color6}`,
                background: PolarGreenTheme.color6,
                '&:hover':{
                    background: PolarGreenTheme.color7,
                }
            }
        },
        info: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& span': {
                '&:nth-child(1)': {
                    color: DefaultTheme.gray7,
                }
            }
        }
    }))

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.checkout}>
                <p className={classes.info}>
                    <span>{t('checkout.rough')}</span>
                    <span>780.000 đ</span>
                </p>
                <p className={classes.info}>
                    <span>{t('checkout.discount')}</span>
                    <span>0 đ</span>
                </p>
                <Divider style={{margin: '0 -24px'}}/>
                <p className={classes.info}>
                    <span>{t('checkout.total')}</span>
                    <span style={{color: VolcanoTheme.color6, fontSize: 24, fontWeight: 'bold'}}>780.000 đ</span>
                </p>
                <Button href={"/checkout/payment"}>{t('checkout.checkout')}</Button>
            </div>
        </div>
    )
}


const CartPage = () => {

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
                                <p className={classes.headline}>{t('checkout.headline')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={classes.item} style={{padding: 0, width: '98%'}}>
                                <BookList/>
                                <BookList/>
                                <BookList/>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={classes.item}>
                                <Checkout/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;