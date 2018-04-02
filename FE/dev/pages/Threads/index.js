import React from 'react';
import {connect} from 'react-redux';
import axios from 'Axios';

import styles from './styles/Threads.scss';

import Thread from './components/Thread';

class Threads extends React.Component {
    constructor(){
        super();
        this.state = {
            threads:[]
        }
    }
    componentDidMount(){
        let that = this;

        axios.get('/api/threads/getThreads')
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
        let {threads} = this.state
        return(
            <div>
                {threads.length && threads.map(t => 
                    <Thread key = {t.id} {...t}/>
                )}

            </div>
        );
    }
}

export default Threads;