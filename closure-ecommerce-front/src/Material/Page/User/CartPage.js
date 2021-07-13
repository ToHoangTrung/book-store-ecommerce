import {Divider, makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme, NeutralGrayTheme, PolarGreenTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import '../../Style/MainPage.scss'
import {useDispatch} from "react-redux";
import {userGetInfo} from "../../Feature/UserSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {createOrUpdateUserCart, deleteUserCartProduct, fetchUserCart} from "../../Feature/CartSlice";

const CartProducts = (props) => {

    const {
        cartProducts,
        onDeleteCartProduct,
        onModifyProductAmount,
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
            borderBottom: `1px solid ${DefaultTheme.gray5}`,
        },
        logo: {
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center',
            height: '100%',
            '& img': {
                width: '75%',
                height: 150,
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
            fontSize: 20,
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

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                cartProducts.map((cartProduct, index) => (
                    <div key={index} style={{padding: '12px 0', borderBottom: `1px solid ${NeutralGrayTheme.gray5}`}}>
                        <Row noGutters>
                            <Col sm={2}>
                                <div className={classes.logo}>
                                    <p onClick={() => onDeleteCartProduct(cartProduct.product.id)}><HighlightOffIcon/></p>
                                    <img src={cartProduct.product.thumbnail}/>
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div style={{padding: '0 32px', gridRowGap: 16, fontSize: 18, display: 'flex', flexDirection: 'column'}}>
                                    <p className={classes.name}>{cartProduct.product.name}</p>
                                    <p style={{color: VolcanoTheme.color6, fontWeight: 'bold'}}>{cartProduct.product.price} đ</p>
                                    <p style={{color: DefaultTheme.gray7, fontSize: 16, textDecoration: 'line-through'}}>{cartProduct.product.price + cartProduct.product.discount} đ</p>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className={classes.quantity}>
                                    <div className={classes.addRemove}>
                                        <Button onClick={() => {
                                            if(cartProduct.amount > 1) onModifyProductAmount(cartProduct.id, -1)
                                        }}><RemoveIcon/></Button>
                                        <p style={{display: 'flex', alignItems: 'center', fontSize: 16, width: 35, justifyContent: 'center'}}>{cartProduct.amount}</p>
                                        <Button onClick={() => onModifyProductAmount(cartProduct.id,  1)}><AddIcon/></Button>
                                    </div>
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{paddingBottom: 8}}>{t('cart-page.total')}</p>
                                        <p style={{color: VolcanoTheme.color6, fontWeight: 'bold'}}>{cartProduct.product.price * cartProduct.amount} đ</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))
            }

        </div>
    )
}

const Checkout = (props) => {

    const {
        total,
    } = props

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

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.checkout}>
                <p className={classes.info}>
                    <span>{t('cart-page.rough')}</span>
                    <span>{total.totalPrice} đ</span>
                </p>
                <p className={classes.info}>
                    <span>{t('cart-page.discount')}</span>
                    <span>{total.totalDiscount} đ</span>
                </p>
                <Divider style={{margin: '0 -24px'}}/>
                <p className={classes.info}>
                    <span>{t('cart-page.total')}</span>
                    <span style={{color: VolcanoTheme.color6, fontSize: 24, fontWeight: 'bold'}}>{total.totalPrice - total.totalDiscount} đ</span>
                </p>
                <Button href={"/checkout/payment"}>{t('cart-page.checkout')}</Button>
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
        },
        notification: {
            background: VolcanoTheme.color6,
            padding: 32,
            borderRadius: 5,
            '& p': {
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [cartProducts, setCartProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = unwrapResult(await dispatch(fetchUserCart()));
            setCartProducts(result);
            setIsLoading(false);
        }
        fetchProducts();
    }, [refresh]);

    const getTotalPriceAndDiscount = () => {
        let totalPrice = 0;
        let totalDiscount = 0;
        cartProducts.map((cartProduct) => {
            totalPrice += cartProduct.product.price * cartProduct.amount;
            totalDiscount += cartProduct.product.discount * cartProduct.amount;
        });
        return {totalPrice, totalDiscount};
    }

    const handleDeleteCartProduct = async (id) => {
        unwrapResult(await dispatch(deleteUserCartProduct(id)));
        setRefresh(!refresh);
    }

    const handleModifyCartProductAmount = async (cartProductId, amount) => {
        cartProducts.find(x => x.id === cartProductId).amount += amount;
        setCartProducts([...cartProducts]);
        const result = unwrapResult(await dispatch(createOrUpdateUserCart(cartProducts)));
        setCartProducts(result);
    }

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={"content-list"}>
                    <Row>
                        <Col>
                            <div className={"content-item"} style={{padding: '8px 12px'}}>
                                <p className={classes.headline}>{t('cart-page.headline')}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            cartProducts.length === 0 ? (
                                <Col>
                                    <div className={classes.notification}>
                                        <p>{t('cart-page.empty-cart')}</p>
                                    </div>
                                </Col>
                            ) : (
                                <>
                                    <Col sm={9}>
                                        <div className={"content-item"} style={{padding: 0, width: '98%'}}>
                                            {
                                                !isLoading && (
                                                    <CartProducts
                                                        cartProducts={cartProducts}
                                                        onDeleteCartProduct={(id) => handleDeleteCartProduct(id)}
                                                        onModifyProductAmount={(cartProductId, amount) => handleModifyCartProductAmount(cartProductId, amount)}
                                                    />
                                                )
                                            }
                                        </div>
                                    </Col>
                                    <Col sm={3}>
                                        <div className={"content-item"}>
                                            {
                                                !isLoading && (
                                                    <Checkout
                                                        total={getTotalPriceAndDiscount()}
                                                    />
                                                )
                                            }
                                        </div>
                                    </Col>
                                </>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
