import uuid from 'uuid';

// ADD_ITEM action creator
export const addItem = (
    {
        title = '',
        comments = [],
        id = uuid(),
        selected = false
    }
    ) => ({
    type: 'ADD_ITEM',
    title,
    comments,
    id,
    selected
});

// REMOVE_ITEM action creator
export const removeItem = ({ id } = {}) => ({
    type: 'REMOVE_ITEM',
    id
});

// SELECT_ITEM action creator
export const selectItem = ({ id } = {}) => ({
    type: 'SELECT_ITEM',
    id
});

// ADD_COMMENT action creator
export const addComment = (
    {
        text = '',
        id = uuid()
    }
) => ({
    type: 'ADD_COMMENT',
    text,
    id
});