import React from 'react';
import { Spin } from 'antd';

import './styles.scss';

export function Fallback() {
    return (
        <div className="router-lazy-spin">
            <Spin tip="Loading..." />
        </div>
    )
}
