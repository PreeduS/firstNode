import React from 'react';
import {connect} from 'react-redux';
import axios from 'Axios';

import styles from './styles/Threads.scss';

//import Thread from './components/Thread';

class Threads extends React.Component {
    constructor(){
        super();
        this.state = {
            threads:[]
        }
    }
    componentDidMount(){
        let that = this;

        axios.get('/api/thread/getThreads')
        .then(function (response) {
          console.log(response.data);
 
            that.setState({
                threads: response.data
            })

        })
        .catch(function (error) {
          console.log(error);
        });
      

    }

    render(){
        return(
            <div>
                zzz
            </div>
        );
    }
}

export default Threads;