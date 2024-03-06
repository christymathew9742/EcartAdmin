import React from "react";
import styles from './skeleton.module.scss';
import { 
    Col,
    Row,
    Skeleton,
} from 'antd';

interface ComponentProps {
    ClassName: string;
    index: number;
    row: number;
    Twidth: string;
    width:string;
    top: string;
    left: string;
}
const CommonSkeleton = (props:ComponentProps):any =>{
    const {ClassName='',index= 0,row= 6,Twidth='100%',width='100%',top='50%',left='50%'}  = props
    const SkStyle:any = {
        position:'absolute',
        top:top,
        left:left,
        transform: 'translate(-50%, -50%)',
        width: width,
    };

    return (
        <>
            {index !== 0 ? (
            <Row>
                {Array.from({ length: index }, (_, count) => (
                <>
                    <Col 
                        span={24/index}
                    >
                        <Skeleton
                            className={styles[ClassName]}
                            active 
                            paragraph={{ rows: row }}
                            title={{ width: Twidth }}
                            style= {SkStyle}
                        />
                    </Col>
                </>   
                ))}
            </Row>):
            (<Skeleton
                className={styles[ClassName]}
                active 
                paragraph={{ rows: row }}
                title={{ width: Twidth }}
                style= {SkStyle}
            />)}
        </>
    )
}

export default CommonSkeleton