import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

        //kinda like the try catch block. if anything errors out, it runs this
    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render(){
        if (this.state.hasError){
            return <h1>Something went wrong...</h1>
        }

        return this.props.children;
    }

}

export default ErrorBoundry;