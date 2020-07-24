import React from 'react';

class Stock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = 'HGJWFG4N8AQ66ICD';
   
        // let API_Call2 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=full&apikey=${API_KEY}`;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Stock Marcket</h1>
            </div>
        )
    }
}

export default Stock;