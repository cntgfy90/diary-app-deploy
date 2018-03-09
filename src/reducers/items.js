export const items = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = {
                title: action.title,
                id: action.id,
                selected: action.selected,
                comments: action.comments
            };
            return [
                ...state,
                newItem
            ];
        case 'REMOVE_ITEM':
            return state.filter(({ id }) => id !== action.id);
        case 'SELECT_ITEM':
            return state.map((item) => {
                return item.id === action.id ? {...item, selected: true}
                                             : {...item, selected: false}
            });
        case 'ADD_COMMENT':
            return state.map((item) => {
                return item.selected ? {...item, comments: item.comments.concat([action.text])}
                                     : {...item}
            });
        default:
            return state;
    }
};