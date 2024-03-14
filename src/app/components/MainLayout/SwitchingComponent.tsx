import React from 'react';
import { constantsText } from '../../constants/constant';

import DashboardMain from '../../views/Admin/DashBoard/dashBoard'
import Products from '../../views/Admin/DashBoard/Products/product'
import ProductHome from '../../views/Admin/DashBoard/home/home'

const {
ROUTES: {
    DASHBOARD,
    PRODUCTS,
    ORDERS,
    SETTINGS,
    HOME
},
} = constantsText;

const SwitchingComponent = ({ slug }: any) => {
    console.log(slug)
    switch ('/' + slug) {
        case DASHBOARD:
          return <DashboardMain />;
          break;
        case PRODUCTS?.AddProducts:
          return <Products/>;
          break;
        case HOME:
          return <ProductHome/>;
          break;
        default:
          return null;
          break;
    }
}

export default SwitchingComponent;