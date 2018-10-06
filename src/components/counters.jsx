import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:0}
        ]
    }

    handlePushCounter = () =>{
        var counters = [...this.state.counters];
        
        var id = counters.length;
        

        counters= counters.concat([{id: id+1, value:0}]);
        this.setState({counters});
        // console.log(counters.length);
    }

    handleDeleteCounter = (index) =>{
        console.log(index)
        var counters = this.state.counters.filter(c => c.id !== index);

        this.setState({counters});
        console.log('abc' + counters);
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    {this.state.counters.map(counter => 
                        (
                            <Counter key={counter.id} counter={counter} 
                            onPushCounter = {this.handlePushCounter}
                            onDeleteCounter= {this.handleDeleteCounter} />
                        ))}
                </div>
            </div>
         );
    }
}
 
export default Counters;