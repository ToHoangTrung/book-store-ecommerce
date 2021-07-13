import React, {useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Header from '../Component/Candidate/Header';
import {makeStyles} from "@material-ui/core";
import '../Style/MainPage.scss'
import LoginRegisterPage from "./User/LoginRegisterPage";
import CartPage from "./User/CartPage";
import PaymentCheckoutPage from "./User/PaymentCheckoutPage";
import ProductDetailPage from "./User/ProductDetailPage";
import ProductListPage from "./User/ProductListPage";
import {unwrapResult} from "@reduxjs/toolkit";
import {userGetInfo} from "../Feature/UserSlice";
import {useDispatch} from "react-redux";
import PaymentHistoryPage from "./User/PaymentHistoryPage";
import PaymentDetailPage from "./User/PaymentDetailPage";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 200
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
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserInfo = async () => {
            unwrapResult(await dispatch(userGetInfo()))
        }
        fetchUserInfo();
    }, []);

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
                                <Route path="/checkout/payment" component={PaymentCheckoutPage} exact/>
                                <Route path="/products/:productId" component={ProductDetailPage} exact/>
                                <Route path="/order/history" component={PaymentHistoryPage}/>
                                <Route path="/order/detail/:paymentId" component={PaymentDetailPage}/>
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
