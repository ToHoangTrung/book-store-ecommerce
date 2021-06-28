import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Header from '../Component/Candidate/Header';
import {makeStyles} from "@material-ui/core";
import '../Style/MainPage.scss'
import LoginRegisterPage from "./User/LoginRegisterPage";
import CartPage from "./User/CartPage";
import PaymentPage from "./User/PaymentPage";
import OrderPage from "./User/OrderPage";
import OrderDetailPage from "./User/OrderDetailPage";
import ProductDetailPage from "./User/ProductDetailPage";
import ProductListPage from "./User/ProductListPage";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100
    },
    main: {
        background: '#FBFBFB'
    },
    top: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.png"})`,
        backgroundRepeat: "no-repeat",
    }
}));

const MainPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container fluid>
                <BrowserRouter>
                    <div className={"header"}>
                        <Row>
                            <Col>
                                <Header/>
                            </Col>
                        </Row>
                    </div>
                    <Row className={classes.main}>
                        <Col xl={1}></Col>
                        <Col xl={10}>
                            <div style={{margin: '30px auto'}}>
                                <Route path="/products/catalog/:catalogId" component={ProductListPage} exact/>
                                <Route path="/checkout/cart" component={CartPage} exact/>
                                <Route path="/checkout/payment" component={PaymentPage} exact/>
                                <Route path="/products/:productId" component={ProductDetailPage} exact/>
                                <Route path="/order/history" component={OrderPage}/>
                                <Route path="/order/view/:orderId" component={OrderDetailPage}/>
                                <Route path="/login" component={LoginRegisterPage}/>
                            </div>
                        </Col>
                        <Col xl={1}></Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default MainPage;
