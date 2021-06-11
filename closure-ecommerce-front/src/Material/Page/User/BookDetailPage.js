import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, makeStyles} from "@material-ui/core";
import {DefaultTheme, PolarGreenTheme, VolcanoTheme} from "../../../theme";
import {useTranslation} from "react-i18next";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const BookIntroduce = ({book}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        logo: {
            border: `1px solid ${DefaultTheme.gray5}`,
            width: '90%',
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
        }
    }));

    const [t, i18n] = useTranslation('common');
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Row noGutters>
                <Col sm={4}>
                    <div className={classes.logo}>
                        <img src={"https://cdn0.fahasa.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/t/h/tham-tu-lung-danh-conan-tap-98.jpg"}/>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className={classes.info}>
                        <p className={classes.name}>Thám Tử Lừng Danh Conan - Tập 98</p>
                        <p className={classes.source}>
                            <span>{t('book-introduce.publisher')}:</span>
                            <Link to={"#"}>NXB Kim Đồng</Link></p>
                        <p className={classes.source}>
                            <span>{t('book-introduce.author')}:</span>
                            <Link to={"#"}>Gosho Aoyama, Yutaka Abe, Den</Link></p>
                        <p className={classes.rating}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <span>(50)</span>
                        </p>
                        <p className={classes.price}>18.000 đ</p>
                        <div className={classes.quantity}>
                            <p style={{fontWeight: 500, fontSize: 16, position: 'relative', top: '-1px'}}>{t('book-introduce.quantity')}</p>
                            <div className={classes.addRemove}>
                                <Button><RemoveIcon/></Button>
                                <p style={{display: 'flex', alignItems: 'center', fontSize: 16, width: 35, justifyContent: 'center'}}>1</p>
                                <Button><AddIcon/></Button>
                            </div>
                        </div>
                        <div className={classes.action}>
                            <Button>{t('book-introduce.add-to-cart')}</Button>
                            <Button>{t('book-introduce.buy-now')}</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const BookDetailPage = () => {

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
                                <BookIntroduce/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default BookDetailPage;