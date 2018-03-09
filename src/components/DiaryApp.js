import React from 'react';
import DiaryColumnLeft from './DiaryColumnLeft';
import DiaryColumnRight from './DiaryColumnRight';

const DiaryApp = () => (
    <div className="DairyApp">
        <DiaryColumnLeft />
        <DiaryColumnRight />
    </div>
);

export default DiaryApp;