import React from "react"

export const constantsText = {
    ROUTES: {
        HOMEs: '/test',
        SHOP: '/shop',
        ABOUT: '/about',
        CONTACT: '/contact',
        SIGN_IN:'/',
        SIGN_UP: '/register',
        HOME: '/main',
        DASHBOARD: '/dashboard',
        DASHBOARD_SLUG: '/:slug',
        ORDERS:'/orders',
        SETTINGS:'/settings',
        PRODUCT:'Product',
        PRODUCTS:{
            AddProducts:'/add-product',
            ListProduct:'/product-list',
            Categories:'/categories',
            Tags:'/tage',
            Attributes:'/attributes'
        },
        HEADER_LAYOUT:{
            Home:'Home',
            Shop:'Shop',
            About:'About',
            Contact:'Contact'
        },
        FOOTER_LAYOUT: {
            Send:'SUBSCRIBE',
        },
    },

    ADDNEWPRODUCT:{
        MainTitle:'Add new product',
        MainTitleData:{
            Name:'productTitle',
            Placeholder:'Product name',
            Rules: [
                {
                  required: true,
                  message: 'Title  cannot be blank',
                },
            ],

        },
        ContentData:{
            Name:'content',
            Placeholder:'Enter your content here...',
        }
    },
    MENUITEM : {
        MenuItems :[
            {
              key: '1',
              label:(
               `<a target="_blank" rel="noopener noreferrer" href="#">
                1st menu item
                </a>`
              )
            },
            {
              key: '2',
              label: (`
                <a target="_blank" rel="noopener noreferrer" href="#">
                  2nd menu item
                </a>
              `),
            },
            {
              key: '3',
              label: (`
                <a target="_blank" rel="noopener noreferrer" href="#">
                  3rd menu item
                </a>
              `),
            },
        ],
    },
    SELECTOPTIONS:[
        {
            value: '2',
            label: 'Simple Product',
        },
        {
            value: '1',
            label: 'Veriable Product',
        },
    ],
    LOGIN:{
        LogoSection:'LOREM',
        SIGNIN : {
            SignIn:'Sign In',
            UserNameLAbel:'Enter your email address',
            UserName:'userName',
            Fpassword:'Forgot Password',
            UplaceHolder:'Email',
            UserNameRules: [
                {
                  required: true,
                  message: 'Email  cannot be blank',
                },
                {
                    pattern: new RegExp(/\S+@\S+\.\S+/),
                    message: 'Enter valid email address',
                },
            ],
            PasswordLabel: 'Enter your Password',
            PasswordName: 'UserPassword',
            PplaceHolder:'Password',
            PasswordRules: [
                {
                  required: true,
                  message: 'Password cannot be blank',
                },
            ],
            gSign:'Sign in with Google',
        },
        SIGNUP:{
            SignUp:'Sign Up',
            EmailLabel:'Enter your email address',
            EmailName:'email',
            EplaceHolder:'Email',
            EmailRules: [
                {
                    required: true,
                    message: 'Email cannot be blank',
                },
                {
                pattern: new RegExp(/\S+@\S+\.\S+/),
                message: 'Enter valid email address',
                },
            ],
            UserName: 'Display name',
            Uname :'userName',
            Uplaceholder:'User name',
            UserNameRules: [
                {
                    required: true,
                    message: 'User name cannot be blank',
                },
            ],
            TeleNo:'Contact number',
            Tname:'telName',
            Tplaceholder:'Number',
            TeliNameRules: [
                {
                    required: true,
                    message: 'User name cannot be blank',
                },
            ],
            PasswordLabel: 'Enter your Password',
            PasswordName: 'password',
            PplaceHolder:'Password',
            PasswordRules: [
                {
                  required: true,
                  message: 'Password cannot be blank',
                },
            ],
            CPasswordLabel: 'Conform password',
            CPasswordName: 'ConformPassword',
            CPplaceHolder:'New password',
            dependencies: ['password'],
            Cpasswordrules: [
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }: { getFieldValue: (name: string) => any }): any => ({
                    validator(_: unknown, value: string) {
                        // Ensure the value matches the password field
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
            ],
        }
    },
    MAIN_LAYOUT: {
        TEXT: 'For system support please contact your on-site super admin',
        PHONE: '+91 1128827465',
        FOOTER: '© 2022 Eshop. All rights reserved. Terms of Service',
        HI: 'Hi',
    },
    SliderSettings :{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrow:false,
    },
    TitleSec2:'Browse The Range',
    ContentSec2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ptoductListingTitle:'Our Products',
    ShowMore:'Show More',
    minAddToCart :{
        share:'Share',
        compare:'Compare',
        like:'Like',
        addToCart:'Add to Cart',
    }
}