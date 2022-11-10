export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
};