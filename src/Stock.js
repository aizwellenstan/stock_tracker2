import React from 'react';
import Plot from 'react-plotly.js';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockSymbol: 'AAPL',
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(this);
        const API_KEY = 'HGJWFG4N8AQ66ICD';
        // let StockSymbol = 'AAPL'
   
        // let API_Call2 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=full&apikey=${API_KEY}`;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunc = [];
        let stockChartYValuesFunc = [];

        fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);

                for(var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunc.push(key)
                    stockChartYValuesFunc.push(data['Time Series (Daily)']
                    [key]['1. open']);
                }

                pointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunc,
                    stockChartYValues: stockChartYValuesFunc
                })
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Stock Marcket</h1>
                <Plot
                    data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={ {width: 720, height: 440, title: this.state.stockSymbol} }
                />
            </div>
        )
    }
}

export default Stock;