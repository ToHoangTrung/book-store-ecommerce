import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Divider, makeStyles} from "@material-ui/core";
import {DayBreakBlue, DefaultTheme, PolarGreenTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {fetchProductById} from "../../Feature/ProductSlice";
import StarRatings from "react-star-ratings";
import Fab from "@material-ui/core/Fab";
import {createOrUpdateUserCart} from "../../Feature/CartSlice";
import {Link} from "react-router-dom";

const ProductIntroduce = (props) => {

    const {
        product,
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        logo: {
            border: `1px solid ${DefaultTheme.gray5}`,
            width: '90%',
            height: 500,
            display: 'flex',
            justifyContent: 'center',
            padding: 16,
            '& img': {
                width: '100%',
            }
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 16
        },
        name: {
            fontWeight: 'bold',
            fontSize: 24,
        },
        source: {
            '& a': {
                marginLeft: 8,
                color: VolcanoTheme.color6,
                fontWeight: 'bold',
                cursor: 'pointer',
                '&:hover':{
                    color: VolcanoTheme.color7
                }
            }
        },
        rating: {
            display: 'flex',
            alignItems: 'center',
            '& span':{
                '&:last-child':{
                    marginLeft: 8,
                    color: VolcanoTheme.color6,
                }
            }
        },
        price: {
            color: VolcanoTheme.color6,
            fontSize: 24,
            fontWeight: 'bold'
        },
        action: {
            display: 'flex',
            gridColumnGap: 16,
            '& button': {
                fontWeight: 'bold',
                padding: '12px',
                background: 'white',
                color: 'white',
                width: 200,
                border: `1px solid ${PolarGreenTheme.color6}`,
                '&:nth-child(1)': {
                    background: PolarGreenTheme.color6,
                    '&:hover':{
                        border: `1px solid ${PolarGreenTheme.color6}`,
                        background: PolarGreenTheme.color7,
                    }
                },
                '&:nth-child(2)': {
                    color: PolarGreenTheme.color6,
                    '&:hover':{
                        border: `1px solid ${PolarGreenTheme.color6}`,
                        color: PolarGreenTheme.color6,
                        background: PolarGreenTheme.color1,
                    }
                }
            }
        },
        quantity: {
            display: 'flex',
            gridColumnGap: 16,
            alignItems: 'center'
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
        notification: {
            background: PolarGreenTheme.color5,
            padding: 16,
            borderRadius: 5,
            '& p': {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
            },
            '& a': {
                cursor: 'pointer',
                color: DayBreakBlue.color8,
                '&:hover':{
                    textDecoration: "underline",
                }
            }
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    const [count, setCount] = useState(1);
    const [isAddToCart, setIsAddToCart] = useState(false);

    const handleAddToCart = async () => {
        if (count > 0) {
            const cartProducts = [];
            const cartProduct = {
                id: "",
                product: {
                    id: product.id,
                },
                amount: count
            }
            cartProducts.push(cartProduct)
            unwrapResult(await dispatch(createOrUpdateUserCart(cartProducts)));
            setIsAddToCart(true);
        }
    }

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={4}>
                    <div className={classes.logo}>
                        <img src={product.thumbnail}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.name}>{product.name}</p>
                        <p className={classes.source}>
                            <span>{t('product-detail-page.introduce.publisher')}:</span>
                            <Link to={"#"}>{product.author}</Link></p>
                        <p className={classes.source}>
                            <span>{t('product-detail-page.introduce.author')}:</span>
                            <Link to={"#"}>{product.author}</Link></p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                        <p className={classes.price}>{product.price} đ</p>
                        <div className={classes.quantity}>
                            <p style={{fontWeight: 500, fontSize: 16, position: 'relative', top: '-1px'}}>{t('product-detail-page.introduce.quantity')}</p>
                            <div className={classes.addRemove}>
                                <Button onClick={() => {if(count > 1) setCount(count - 1)}}><RemoveIcon/></Button>
                                <p style={{display: 'flex', alignItems: 'center', fontSize: 16, width: 35, justifyContent: 'center'}}>
                                    {count < 1 ? 1 : count}
                                </p>
                                <Button onClick={() => setCount(count + 1)}><AddIcon/></Button>
                            </div>
                        </div>
                        <div className={classes.action}>
                            <Button onClick={handleAddToCart}>{t('product-detail-page.introduce.add-to-cart')}</Button>
                            <Button>{t('product-detail-page.introduce.buy-now')}</Button>
                        </div>
                        {
                            isAddToCart && (
                                <div className={classes.notification}>
                                    <p>
                                        {t('product-detail-page.introduce.notification.add-to-cart-success')} <span style={{margin: '0px 16px'}}>-</span>
                                        <Link to={"/checkout/cart"}>{t('product-detail-page.introduce.notification.go-to-cart')}</Link>
                                    </p>
                                </div>
                            )
                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}

const ProductReview = (props) => {

    const {
        ratings
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        review: {
            display: 'flex',
            flexDirection: 'column',
            gridRowGap: 10,
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            '& p': {
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold'
            }
        },
        username: {
            fontSize: 20,
            fontWeight: 'bold',
            cursor: 'pointer',
            color: PolarGreenTheme.color6,
            '&:hover':{
                color: PolarGreenTheme.color7,
            }
        },
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                ratings.map((rating, index) => (
                    <div className={classes.review} key={index}>
                        <Divider/>
                        <Row noGutters>
                            <Col sm={1}>
                                <div className={classes.logo}>
                                    <Fab disabled style={{background: PolarGreenTheme.color6, height: 45, width: 45}}>
                                        <p>{rating.customer.name.slice(0,1).toUpperCase()}</p>
                                    </Fab>
                                </div>
                            </Col>
                            <Col sm={11}>
                                <div style={{display: 'flex', flexDirection: 'column', gridRowGap: 4, paddingBottom: 12}}>
                                    <Link to={"#"} className={classes.username}>{rating.customer.name}</Link>
                                    <StarRatings rating={rating.score}
                                                 numberOfStars={5}
                                                 starDimension={20}
                                                 starRatedColor= {VolcanoTheme.color6}/>
                                    <p>{rating.comment}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))
            }
        </div>
    )

}

const ProductDetailPage = ({match}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: 100,
            '& a': {
                '&:hover':{
                    textDecoration: 'none'
                }
            }
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
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 16,
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();

    const dispatch = useDispatch();

    const {productId} = match.params;

    const [product, setProduct] = useState({});
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const result = unwrapResult(await  dispatch(fetchProductById(productId)));
            setProduct(result);
            setIsloading(false);
        }
        fetchProduct();
    }, {productId})

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={classes.content}>
                    <Row>
                        <Col>
                            <div className={"content-list"}>
                                <div className={"content-item"}>
                                    <ProductIntroduce product={product}/>
                                </div>
                                <div className={"content-item"}>
                                    <div className={classes.headline}>
                                        <p>{t('product-detail-page.review.headline')}</p>
                                    </div>
                                    {
                                        !isLoading && (
                                            <ProductReview ratings={product.ratings}/>
                                        )
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetailPage;
