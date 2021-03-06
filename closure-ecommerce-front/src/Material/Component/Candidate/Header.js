import React, {useState} from 'react';
import {Col, Container, Nav, Row} from 'react-bootstrap';
import {useTranslation, withTranslation} from "react-i18next";
import {Divider, makeStyles} from "@material-ui/core";
import {DefaultTheme} from '../../../theme';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from "@material-ui/core/Button";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser, userLogOut} from "../../Feature/UserSlice";
import {useForm} from "react-hook-form";
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import {useHistory} from "react-router-dom";

const Header = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            fontSize: 17,
            height: 90,
            borderBottom: `1px solid ${DefaultTheme.gray5}`,
            '& a':{
                fontWeight: 500,
                color: 'black',
                textAlign: 'center',
                transition: '0.3s',
                '&:hover' :{
                    color: DefaultTheme.default6,
                }
            }
        },
        logo: {
            display: 'flex',
            alignItems: "center",
            justifyContent: "flex-start",
            '& img':{
                height: 70,
                width: 70,
                marginRight: 20
            },
            '& a':{
                fontSize: 30,
                fontWeight: 'bold',
                color: DefaultTheme.default6,
                '&:hover':{
                    color: DefaultTheme.default6,
                }
            }
        },
        form: {
            width: '95%',
            display: 'flex',
            border: `2px solid ${DefaultTheme.default6}`,
            borderRadius: 5,
            '& input': {
                border: `none`,
                fontSize: 14,
                width: '90%',
                padding: '12px 16px',
                transition: '0.3s',
            },
            '& button': {
                width: '10%',
                color: DefaultTheme.default6,
                fontWeight: 'bold',
                transition: '0.3s',
                '& svg':{
                    fontSize: 30,
                },
                '&:hover': {
                    background: 'white',
                    color: DefaultTheme.default8,
                }
            }
        },
        icon: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontSize: 14,
            '&:hover':{
                '& p': {
                    color: DefaultTheme.default7
                },
                '& svg': {
                    color: DefaultTheme.default7
                }
            },
            '& p': {
                color: DefaultTheme.default6
            },
            '& svg': {
                fontSize: 24,
                color: DefaultTheme.default6
            }
        },
        dropdown: {
            background: 'white',
            position: "absolute",
            zIndex: 1000,
            right: '100%',
            top: 45,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 5,
            boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
            '& a': {
                minWidth: 250,
                padding: 12,
                display: 'flex',
                '& svg': {
                    marginRight: 8,
                },
            }
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    const handleChangeLanguage = (lan) => {
        console.log(i18n)
        i18n.changeLanguage(lan);
        localStorage.setItem('lan', lan);
    }

    const currentUser = useSelector(getCurrentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleLogout = () => {
        dispatch(userLogOut());
        history.push("/");
    }

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className={classes.root}>
            <Container fluid style={{height: '100%'}}>
                <Row style={{alignItems: "center", height: '100%'}}>
                    <Col xl={1}></Col>
                    <Col xl={2} className={classes.logo}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVugaMxBHniTVZtkTuKDWGue3TCtZW8PGEnGWRWkG2Srmy9YP3FLomq8Y7GAVgEaz94o&usqp=CAU"} alt="logo"/>
                        <Nav.Link href="/">
                            CLOSURE
                        </Nav.Link>
                    </Col>
                    <Col xl={5}>
                        <form className={classes.form}>
                            <input {...register("keyword", {})} placeholder={t('header.search')}/>
                            <Button><SearchOutlinedIcon/></Button>
                        </form>
                    </Col>
                    <Col xl={1}>
                        <Nav.Link href={"#"} className={classes.icon}><NotificationsNoneOutlinedIcon/>
                            <p>{t('header.notification')}</p></Nav.Link>
                    </Col>
                    <Col xl={1}>
                        <Nav.Link href={"/checkout/cart"} className={classes.icon}><ShoppingCartOutlinedIcon/>
                            <p>{t('header.cart')}</p></Nav.Link>
                    </Col>
                    <Col xl={1}>
                        {
                            currentUser.id === undefined ? (
                                <Nav.Link href={"/login"} className={classes.icon}><ExitToAppOutlinedIcon/>
                                    <p>{t('header.login')}</p></Nav.Link>
                            ) : (
                                <div>
                                    <Nav.Link to={"#"} className={classes.icon}
                                              onMouseEnter={() => setShowDropdown(!showDropdown)}>
                                        <PersonOutlineOutlinedIcon/>
                                        <p>{currentUser.username.toUpperCase()}</p>
                                    </Nav.Link>
                                </div>
                            )
                        }

                    </Col>
                    <Col xl={1}>
                        {
                            showDropdown && (
                                <div className={classes.dropdown} onMouseLeave={() => setShowDropdown(!showDropdown)}>
                                    <Nav.Link href={"#"}>
                                        <PermContactCalendarOutlinedIcon/>
                                        <p>
                                            {t('header.profile')}
                                        </p>
                                    </Nav.Link>
                                    <Divider/>
                                    <Nav.Link href={"/order/history"}>
                                        <ShoppingBasketOutlinedIcon/>
                                        <p>
                                            {t('header.order')}
                                        </p>
                                    </Nav.Link>
                                    <Divider/>
                                    <Nav.Link href={"#"} onClick={handleLogout}>
                                        <ExitToAppOutlinedIcon/>
                                        <p>
                                            {t('header.logout')}
                                        </p>
                                    </Nav.Link>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default withTranslation()(Header);
