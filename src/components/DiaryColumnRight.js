import React from 'react';
import ItemsCard from './ItemsCard';
import CommentsCard from './CommentsCard';

const DiaryColumnRight = () => (
    <div className="DiaryColumnRight">
        <ItemsCard title="Items" />
        <CommentsCard title="Comments" />
    </div>
);

export default DiaryColumnRight;