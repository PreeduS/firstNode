import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/LoaderHoc.js';
import { Loader } from 'semantic-ui-react'

const LoaderHoc = Component =>{
    class LoaderHocContainer extends React.Component{
        render(){
            const {loading, ...rest} = this.props;

            if(loading){
                return(
                    <styles.Wrapper>
                        <styles.DimmerContainer>
                            <styles.LoaderContainer>
                                <div><Loader active inline size = "tiny"/> <span>Loading...</span></div>
                            </styles.LoaderContainer>
                        </styles.DimmerContainer>
                        <styles.Dimmer>
                            <Component {...rest}/>
                        </styles.Dimmer>
                    </styles.Wrapper>

                );
            }
            return <Component {...rest} />
        }
    }
    LoaderHocContainer.propTypes = {
        loading: PropTypes.bool.isRequired
    }
    return LoaderHocContainer;

}

export default LoaderHoc;



/*
componentDidMount(){
    console.log('componentDidMount--')//chech if loading true
    this.interval = setInterval( ()=> {
        console.log('interval ',this.state.dotsCount)
        this.setState({
            dotsCount: this.state.dotsCount < 3 ? this.state.dotsCount + 1 : 0
        });
    },500);
}
componentWillUnmount(){ console.log('componentWillUnmount--')
    clearInterval(this.interval);
}*/