import React from 'react';
import { Spin } from 'antd';
import cls from './styles.module.scss';


export function Fallback() {
    return (
        <div className={cls.routerLazySpin}>
            <Spin tip="Loading..." />
        </div>
    )
}
