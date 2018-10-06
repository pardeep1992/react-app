import React, { Component } from 'react';


class counter extends Component {
    state = {
        count: this.props.counter.value,
        disable: false
    }

    increaseCount= () =>{
        var count = this.state.count;
        count= count +1;
        this.setState({count});
        
        if(this.state.count === 4) {
        var disableVal= true;
        this.setState({disable: disableVal});        
        this.props.onPushCounter();
        }
    }

    resetCount = () =>{

        var count = this.state.count;
        count = count -1;
        this.setState({count});

        if(this.state.count <= 5) {
            var disableVal= false;
            this.setState({disable: disableVal});
        }

        this.state.count <= 1 && this.props.onDeleteCounter(this.props.counter.id);
    }

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-warning m-2">{this.state.count}</button>
                    <button className="btn btn-primary m-2" onClick={this.increaseCount} disabled= {this.state.disable}>Increase</button>
                    <button className="btn btn-danger m-2" onClick={this.resetCount}>Decrease</button>
                </div>
            </div>
        );
    }
}

 
export default counter;