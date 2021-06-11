import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Header from '../Component/Candidate/Header';
import {makeStyles} from "@material-ui/core";
import '../Style/MainPage.scss'
import LoginRegisterPage from "./User/LoginRegisterPage";
import BookListPage from "./User/BookListPage";
import BookDetailPage from "./User/BookDetailPage";
import CartPage from "./User/CartPage";
import PaymentPage from "./User/PaymentPage";
import OrderPage from "./User/OrderPage";
import OrderDetailPage from "./User/OrderDetailPage";

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
                        <Row>
                            <Col>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <Link to={"/books"}>Book list</Link>
                                    <Link to={"/books/1"}>Book detail</Link>
                                    <Link to={"/checkout/cart"}>Cart</Link>
                                    <Link to={"/checkout/payment"}>Payment</Link>
                                    <Link to={"/order/history"}>Order</Link>
                                    <Link to={"/order/view/1"}>Order Detail</Link>
                                    <Link to={"/login"}>Login</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className={classes.main}>
                        <Col xl={1}></Col>
                        <Col xl={10}>
                            <div style={{margin: '30px auto'}}>
                                <Route path="/books" component={BookListPage} exact/>
                                <Route path="/checkout/cart" component={CartPage} exact/>
                                <Route path="/checkout/payment" component={PaymentPage} exact/>
                                <Route path="/books/:bookId" component={BookDetailPage}/>
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
