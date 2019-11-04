import React from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'

class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            quotes: null
         }
    }

    componentDidMount() {
        this.getQuote();
    }

    getQuote(){
        axios
        .get(`https://quests.wilders.dev/simpsons-quotes/quotes?count=15`)
        .then( result =>{
            this.setState({quotes: result.data})
        });
    }

    
    render() { 
        return ( 
            <div>
                {this.state.quotes!==null ? <QuoteCard quotes={this.state.quotes[0]}/> : <p>No data yet</p>}
            <button onClick={() => this.getQuote()}>Get Quote</button>
        </div>
         );
    }
}
 
export default QuoteList;

