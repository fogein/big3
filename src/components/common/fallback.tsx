import React from 'react';
import { Spin } from 'antd';

import classes from './styles.module.scss';
 let cls:any = classes

export function Fallback() {
    return (
        <div className={cls.routerLazySpin}>
            <Spin tip="Loading..." />
        </div>
    )
}
