import React from 'react';
import {makeStyles} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {DefaultTheme} from "../../../theme";
import Rating from '@material-ui/lab/Rating';


const CategoryList = ({categories}) => {

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

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={2}>
                    <Link to={"#"}>Văn học</Link>
                </Col>
                <Col sm={2}>
                    <Link to={"#"}>Sách thiếu nhi</Link>
                </Col>
                <Col sm={2}>
                    <Link to={"#"}>Kinh tế</Link>
                </Col>
                <Col sm={2}>
                    <Link to={"#"}>Tiểu sử, hồi ký</Link>
                </Col>
                <Col sm={2}>
                    <Link to={"#"}>Tâm lý, kỹ năng sống</Link>
                </Col>
                <Col sm={2}>
                    <Link to={"#"}>Giáo khoa, tham khảo</Link>
                </Col>
            </Row>
        </div>
    )
}

const BookList = ({book}) => {

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
            color: 'black',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            gridRowGap: 8,
            padding: 8,
            transition: '0.3s',
            '& img': {
                height: 200,
                width: '90%',
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

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={3}>
                    <Link to={"/books/1"} className={classes.book}>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/_/b_i-dl11-m_t-1_2.jpg"}/>
                        <p className={classes.name}>Date A Live - Tập 11 - Tobiichi Devil - Bản Đặc Biệt - Tặng Kèm Bookmark + Postcard Bí Mật + Poster (Hình Shidou - Kurumi)</p>
                        <p className={classes.price}>108.000 đ</p>
                        <p className={classes.prePrice}>120.000 đ</p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to={"/books/1"} className={classes.book}>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/_/b_i-dl11-m_t-1_2.jpg"}/>
                        <p className={classes.name}>Date A Live - Tập 11 - Tobiichi Devil - Bản Đặc Biệt - Tặng Kèm Bookmark + Postcard Bí Mật + Poster (Hình Shidou - Kurumi)</p>
                        <p className={classes.price}>108.000 đ</p>
                        <p className={classes.prePrice}>120.000 đ</p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to={"/books/1"} className={classes.book}>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/_/b_i-dl11-m_t-1_2.jpg"}/>
                        <p className={classes.name}>Date A Live - Tập 11 - Tobiichi Devil - Bản Đặc Biệt - Tặng Kèm Bookmark + Postcard Bí Mật + Poster (Hình Shidou - Kurumi)</p>
                        <p className={classes.price}>108.000 đ</p>
                        <p className={classes.prePrice}>120.000 đ</p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link to={"/books/1"} className={classes.book}>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/b/_/b_i-dl11-m_t-1_2.jpg"}/>
                        <p className={classes.name}>Date A Live - Tập 11 - Tobiichi Devil - Bản Đặc Biệt - Tặng Kèm Bookmark + Postcard Bí Mật + Poster (Hình Shidou - Kurumi)</p>
                        <p className={classes.price}>108.000 đ</p>
                        <p className={classes.prePrice}>120.000 đ</p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

const BookListPage = () => {

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
                            <div className={classes.item}>
                                <p className={classes.category}>{t('header.category')}</p>
                                <CategoryList/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={9}>
                            <div className={classes.item} style={{padding: 0, width: '98%'}}>
                                <BookList/>
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

export default BookListPage;