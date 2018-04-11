const getCommentsStructure = require('./getCommentsStructure');


const getAll = result =>{
    return getCommentsStructure(result);
}

module.exports = {
    getAll: getAll
}