import React from "react"

export const constantsText = {
    ROUTES: {
        HOME: '/',
        SHOP: '/shop',
        ABOUT: '/about',
        CONTACT: '/contact',
        PRODUCT:'/product',
        SIGN_IN:'/admin',
        SIGN_UP: '/register',
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