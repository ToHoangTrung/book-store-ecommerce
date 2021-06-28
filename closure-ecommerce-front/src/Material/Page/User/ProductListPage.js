import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {DefaultTheme, NeutralGrayTheme} from "../../../theme";
import Rating from '@material-ui/lab/Rating';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCatalog, selectAllCatalog} from "../../Feature/CatalogSlice";
import {fetchAllProduct, fetchProductsByCatalogId, selectAllProduct} from "../../Feature/ProductSlice";
import {unwrapResult} from "@reduxjs/toolkit";


const Catalogs = (props) => {

    const {
        catalogs,
        onChooseCatalog,
        highlightId,
    } = props

    const useStyles = makeStyles((theme) => ({
        root: {
            '& a':{
                width: '95%',
                margin: '0px auto',
                border: `1px solid ${DefaultTheme.default6}`,
                borderRadius: 5,
                textAlign: 'center',
                color: DefaultTheme.default6,
                fontWeight: 'bold',
                fontSize: 16,
                background: 'white',
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                '&:hover':{
                    background: DefaultTheme.default1,
                    textDecoration: 'none'
                }
            },
        }
    }));

    const {t} = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                {
                    catalogs.map((catalog, index) => (
                        <Col sm={3} key={index}>
                            <Link to={"/products/catalog/" + catalog.id}
                                  style={highlightId === catalog.id ? {background: DefaultTheme.default5} : null}>{catalog.name}</Link>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

const Products = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            '& label':{
                margin: 0
            },
            '& a': {
                '&:hover':{
                    textDecoration: 'none',
                }
            }
        },
        book: {
            border: `1px solid ${NeutralGrayTheme.gray4}`,
            color: 'black',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gridRowGap: 10,
            padding: 16,
            transition: '0.3s',
            '& img': {
                height: 200,
                width: '100%',
                margin: '0px auto',
            },
            '&:hover':{
                color: DefaultTheme.default7,
                boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
            }
        },
        name:{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            fontSize: 18,
            fontWeight: 'bold',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical'
        },
        price: {
            color: '#fa541c',
            fontSize: 18,
            fontWeight: 'bold'
        },
        prePrice: {
            textDecoration: "line-through",
            color: DefaultTheme.gray7
        },
        rating: {
            display: 'flex',
            alignItems: 'center',
            '& span':{
                '&:last-child':{
                    marginLeft: 8,
                    color: '#fa541c',
                }
            }
        }
    }));

    const classes = useStyles();

    const {
        products
    } = props

    return (
        <div className={classes.root}>
            <Row noGutters>
                {
                    products.map((product, index) => (
                        <Col sm={3}>
                            <Link to={"/products/" + product.id} className={classes.book}>
                                <img src={product.thumbnail}/>
                                <p className={classes.name}>{product.name}</p>
                                <p className={classes.price}>{product.price} đ</p>
                                <p className={classes.prePrice}>{product.price + product.discount} đ</p>
                                <p className={classes.rating}>
                                    <Rating name="size-small" defaultValue={2} size="small" />
                                    <span>(50)</span>
                                </p>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

const ProductListPage = ({match}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
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
        category: {
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 24,
            paddingLeft: 8,
            color: DefaultTheme.default6,
        },
        headline: {
            fontSize: 30,
            fontWeight: 'bold',
            padding: 16,
        }
    }));

    const [t] = useTranslation('common');
    const classes = useStyles();
    const dispatch = useDispatch();

    // const catalogs = useSelector(selectAllCatalog);
    const [catalogs, setCatalogs] = useState([]);
    const [products, setProducts] = useState([]);

    const {catalogId} = match.params;

    const [loading, setLoading] = useState(true);
    const [mainCatalog, setMainCatalog] = useState({
        id: 0,
        name: t('product-list.headline')
    })

    useEffect(() => {
        const fetchCatalogs = async () => {
            const result = unwrapResult(await dispatch(fetchAllCatalog()));
            setCatalogs(result);
            setMainCatalog(result.find(item => item.id == catalogId));
            setLoading(false);
            console.log(mainCatalog);
        }
        fetchCatalogs();
    },[catalogId]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = unwrapResult(await dispatch(fetchProductsByCatalogId(catalogId)));
            setProducts(result);
        }
        fetchProducts();
    }, [catalogId]);

    return (
        <div className={classes.root}>
            <Container fluid>
                <div className={classes.content}>
                    <Row>
                        <Col>
                            <div className={classes.item}>
                                <p className={classes.category}>{t('header.category')}</p>
                                <Catalogs catalogs={catalogs} highLightId={catalogId}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={classes.item} style={{padding: 0, width: '98%'}}>
                                <div className={classes.headline}>
                                    {
                                        !loading && (
                                            <p>{mainCatalog.name}</p>
                                        )
                                    }
                                </div>
                                <Products products={products}/>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={classes.item} style={{padding: 0}}>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProductListPage;
