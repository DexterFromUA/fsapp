const del = require('del');
const path = require('path');

module.exports = (file) => {
    return del.sync([path.join(__dirname, '..', 'uploads', file), '!../uploads'])
};
