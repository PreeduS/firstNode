const initialState = {
    comments:{
        data:[],
        pending: false,  //pending overall
        //pending:{
           // loadMoreComments: false
        //},
        //status:{}  //comments/replies/commentGroup status
        status:{
            loadMoreComments: {
                //pending: false,
                status: null
            },
            comments:{}     //comments/replies/commentGroup status
                            //{value, status, commentGroupStatus }
        },
        activeTextarea: {}  //{active}
    },
    thread:{}
}
export default initialState;

/*

*/