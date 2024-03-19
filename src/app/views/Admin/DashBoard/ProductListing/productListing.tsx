import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './product.module.scss';
import { debounce } from 'lodash';
import Cookies from 'universal-cookie';
import { getProductData } from "../../../../utils/utils";
import { getProductSelector } from "../../../../../redux/reducers/products/selectors";
import { fetchPostProductRequest, fetchProductRequest } from "../../../../../redux/reducers/products/actions";
import { Row,
    Typography,
    Layout,
    Col,
    Input,
    Form,
    Tabs,
    Select,
    Button
} from "antd";

const ProductListing = () =>{
    const cookies = new Cookies();
    const userToken:any = cookies.get('userToken');
    const productStore:any = useSelector(getProductSelector);
    const dispatch = useDispatch();
    const getProductdata = getProductData(productStore?.products)
    useEffect(() => {
        dispatch(fetchProductRequest(userToken))
    }, [userToken]); 
    return (
        <>
            {getProductdata?.map((elem)=>(
                <>
                <h1>{elem?.mainTitle}</h1>
                <h5>{elem?.description}</h5>
                </>
            ))}
        </>
    )
}

export default ProductListing;
