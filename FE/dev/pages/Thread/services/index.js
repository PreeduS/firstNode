import axios from 'axios';

const services = {
    loadComments: threadId =>
        axios.get('/api/thread/getall',{threadId})
    ,
    loadMoreComments: (threadId, lastId) =>
        axios.get('/api/thread/loadMoreComments',{threadId, lastId})
    ,
    addComment: (threadId, content) =>
        axios.post('/api/Thread/addComment',{threadId, content})
    ,
    addReply: (threadId, content, replyTo) =>
        axios.post('/api/Thread/addReply',{threadId, content, replyTo})
    ,

}

export default services;