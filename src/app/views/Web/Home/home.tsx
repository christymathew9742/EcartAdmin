import React, { useEffect,useState,useRef} from "react";
import styles from './home.module.scss';
import { constantsText } from "../../../constants/constant";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getTodosSelector,getPendingSelector } from "../../../../redux/reducers/home/selectors";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from '@fortawesome/free-solid-svg-icons';

import { debounce } from 'lodash';

import { 
    Col, 
    Row,
    Typography,
    Button,
    Image,
    Skeleton,
} from "antd";
import { fetchTodoFailure, fetchTodoRequest, fetchTodoSuccess } from "../../../../redux/reducers/home/actions";
import Layout from "antd/es/layout/layout";
import CommonSkeleton from "../../../components/Skeleton/skeleton";

const Home: React.FC  = () => {
    debounce(() => {
        // Your resize handling logic here
        console.log('Window resized!');
    }, 200); 
    
    const isMobile:boolean = useMediaQuery({ maxWidth: 767 });
    const [payload,setPayload] : any = useState('chrisy');
    const [visibleImages, setVisibleImages]:any = useState([]);
    const [visibleCount, setVisibleCount]:any = useState(4);
    const data: any = useSelector(getTodosSelector);
    const dataStatus: any = useSelector(getPendingSelector);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        SliderSettings,
        minAddToCart
    } = constantsText
    const categoryImages = data?.img? Object.values(data?.img) : []
    const [productList,setProductList] = useState([])
    const test = () => {
        alert('hhhh')
    }
    useEffect(() => {
        dispatch(fetchTodoRequest(payload));
        dispatch(fetchTodoSuccess(payload));
        dispatch(fetchTodoFailure(payload));
    }, [payload]); 

    useEffect(() => {
        setProductList(data?.productList? Object.values(data?.productList):[])
        setVisibleImages(productList.slice(0, visibleCount));
    }, [visibleCount,productList]);
    const showMoreImages = ():any => {
        // Increase the visibleCount to show the next set of images
        setVisibleCount((prevCount:any):any => prevCount + 4);
    };
    
    return(
        <Layout
            className={styles['homePage']}
        >   
            <Row 
                style={{ 
                    height: '500px',  
                    backgroundImage: `url(${data?.bannerImg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}
                className={styles['homeBannerWrapper']}
                >
                {dataStatus ? (
                <Col
                    offset={isMobile? 0 : 12}
                >
                    <Row>
                        <Col 
                            className={styles['bannerRtImg']}
                        >
                            <Row
                                style={isMobile? {display:'block'}:{}}
                            >
                                <Typography.Paragraph>
                                    {data?.pTitle}
                                </Typography.Paragraph>
                                <Typography.Title
                                    level={2}
                                >
                                    {data?.hTitle}
                                </Typography.Title>
                                <Typography.Paragraph>
                                    {data?.content}
                                </Typography.Paragraph>
                                <Button >
                                    {data?.buttonLabel}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                ):(
                <CommonSkeleton
                    ClassName ="bannerSkeleton"
                    index = {0}
                    row ={10}
                    width="40%"
                    Twidth ="100%"
                    top="50%"
                    left="70%"
                />)}
            </Row>
            <Row
                justify="center"
                className={styles['categoryWrapper']}
            >
                <Col
                    span={20}
                >
                    {dataStatus? (
                    <>
                        <Typography.Title
                            level={2}
                        >
                            {constantsText?.TitleSec2 && dataStatus &&  constantsText?.TitleSec2}
                        </Typography.Title>
                        <Typography.Paragraph
                            className={styles['content']}
                        >
                            {constantsText?.ContentSec2 && dataStatus && constantsText?.ContentSec2}
                        </Typography.Paragraph>
                        <Slider 
                            slidesToShow= {isMobile?1:3}
                            {...SliderSettings}
                        >
                            {
                                categoryImages?.map((elem:any):any=>{
                                    return(
                                        <Image.PreviewGroup
                                            items={[elem?.img]}
                                        >
                                                <Image
                                                    width={320}
                                                    src={elem?.img}
                                                    style={{
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                                <Typography.Paragraph
                                                    className={styles['catName']}
                                                >
                                                    {elem?.name}
                                                </Typography.Paragraph>
                                        </Image.PreviewGroup>
                                    )
                                })
                            } 
                        </Slider>
                    </>
                    ):(
                    <CommonSkeleton
                        ClassName ="categorySkeleton"
                        index = {3}
                        row ={6}
                        width="80%"
                        Twidth ="50%"
                        top="10rem"
                        left="50%"
                    />
                    )}
                </Col>
            </Row>
            <Row
                justify="center"
                className={styles['productWrapper']}
            >
                <Col
                    span={20}
                >
                    <Typography.Title
                        level={2}
                    >
                        {constantsText?.ptoductListingTitle && dataStatus && constantsText?.ptoductListingTitle }
                    </Typography.Title>
                    {dataStatus ? (
                    <Row
                            gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',position:'relative',minHeight:'200px'}}
                    >
                        {visibleImages.map((elem:any, index:any):any => (
                            <Col
                                key={index} 
                                xs={24} 
                                sm={12} 
                                md={6} 
                                lg={6} 
                                xl={6}
                                style={{minWidth:'250px'}}
                                className={styles['products']}
                            >
                                <Image
                                    width={250}
                                    src={elem?.img}
                                    preview={false} 
                                    className={styles['productImg']}                               
                                />
                                {elem?.disrate && !isNaN((elem?.disrate/elem?.mrp)*100) && (elem?.disrate/elem?.mrp)*100<=100 && elem?.disrate<=elem?.mrp ? (
                                    <Button 
                                        className={styles['discountRainge']} 
                                        shape="circle" 
                                        disabled={true}
                                        style={{
                                            backgroundColor: '#E97171',
                                            color: '#FFFF'
                                        }}
                                        
                                    >
                                        {'-'+Math.ceil((elem?.disrate/elem?.mrp)*100)+'%'} 
                                    </Button>
                                ):(
                                    <Button 
                                        className={styles['discountRainge']} 
                                        shape="circle" 
                                        disabled={true}
                                        style={{
                                            backgroundColor: '#2EC1AC',
                                            color: '#FFFF'
                                        }} 
                                    >
                                        New
                                    </Button>
                                )}
                                <Button
                                    className={styles['addToCartBtn']}
                                    type="primary"
                                    onClick={test}
                                >
                                    {minAddToCart.addToCart}
                                </Button>
                                <Row
                                    className={styles['shareWrapper']}
                                >
                                    <Col
                                        span={8}
                                    >   
                                        <FontAwesomeIcon icon={faShare} />
                                        {minAddToCart.share}
                                    </Col>
                                    <Col
                                        span={8}
                                    >
                                        {minAddToCart.compare}
                                    </Col>
                                    <Col
                                        span={8}
                                    >
                                        {minAddToCart.like}
                                    </Col>
                                </Row>
                                {elem?.name ? (
                                <Col
                                    className={styles['productPriceTable']}
                                    style={{minWidth:'250px'}}
                                >
                                    <Row>
                                        <Typography.Title
                                            level={4}
                                        >
                                            {elem?.name}
                                        </Typography.Title>
                                    </Row>
                                    <Row>
                                        <Typography.Title
                                            level={5}
                                        >
                                            {elem?.type &&  elem?.type}
                                        </Typography.Title>
                                    </Row>
                                    <Row
                                        className={styles['priceWrapper']}
                                    >
                                        <Col>
                                            {elem?.disrate && elem?.disrate}
                                        </Col>
                                        <Col>
                                            {elem?.mrp && 'RS '+elem?.mrp }
                                        </Col>
                                    </Row>
                                </Col>
                                ) : ('')}
                            </Col>
                        ))}
                    </Row>):(
                        <CommonSkeleton
                            ClassName ="sliderSkeleton"
                            index = {4}
                            row ={6}
                            width="80%"
                            Twidth ="100%"
                            top="26rem"
                            left="50%"
                        />
                    )}
                    {visibleCount < productList.length && (
                        <Row
                            justify={'center'}
                        >
                            <Col
                                span={4}
                            >
                                <Button
                                    onClick={showMoreImages}
                                    className={styles['showmorebtn']}
                                >
                                    {constantsText?.ShowMore}
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
            <Row
                // justify="center"
                className={styles['roomsPrototipe']}
            >

                <Col
                    
                >hiughiuguyg</Col>
                <Col
                    
                >
                    jdowiejfowiejfiow
                </Col>
                <Col
                    
                >
                    kjijdewifjifhurhf
                </Col>

            </Row>
        </Layout>
    )
};

export default Home;