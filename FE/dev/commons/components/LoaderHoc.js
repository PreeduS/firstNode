//temp
import React from 'react';

const LoaderHoc = Component =>{
    return class Loader extends React.Component{

        //check for styles props

        //style = {{opacity:.3}}

        render(){
        
            const loading = this.props.loading || false;
            
            if(loading){
                return(
                    <div style={{position:'relative'}}>
                    <div style={{position:'absolute',width:'100%',height:'100%',zIndex:2 }}>
                    Loading... </div>     
                    <div style = {{opacity:.3}} >
                        <Component {...this.props}/>
                    </div> 
                    </div>
                                   
                );
            }
            return <Component {...this.props} />
        }
    }
}

export default LoaderHoc;