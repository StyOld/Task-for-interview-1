import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
            randomNumber: 0
        };
    };

    forceRandom = () => {
        let begin = -100;
        let end = 100;
        this.setState({
            randomNumber: Math.round(begin+Math.random()*(end-begin))
        });
    };

    toggleButton = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    };

    startRandom = () => {
        this.forceRandom();
    };

    stopRandom = () => {
        clearInterval(this.timerID);
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.forceRandom(), 2500);
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='font-weight-bold'>Header</h5>
                        <button
                            type='button'
                            onClick={this.toggleButton}
                            className={
                                this.state.toggle ? "btn btn-secondary btn-lg" : "btn btn-success btn-lg"
                            }
                        >
                            {this.state.toggle ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div className='row'>
                    {this.state.toggle &&
                    <div className='col-4 border'>
                        <p className='text-center'>Left</p>
                        <p className='text-center'>Sidebar</p>
                    </div>
                    }
                    <div className={this.state.toggle ? "col-8 border" : "col-12 border"}>
                        <div className='container mt-2 d-flex justify-content-between align-items-center'>
                            <button
                                type='button'
                                onClick={this.startRandom}
                                className='btn btn-success btn-sm'
                            >
                                Force Rand
                            </button>
                            <div>
                                Random Number : {this.state.randomNumber}
                            </div>
                            <button
                                type='button'
                                onClick={this.stopRandom}
                                className='btn btn-dark btn-sm'
                            >
                                Stop
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <h5 className='font-weight-bold'>Footer</h5>
                </div>
            </div>
        )
    }
}