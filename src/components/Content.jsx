import React from 'react';

export default class Content extends React.Component {
    render() {
        const {randomNumber, getRandomNumber, stopRandom}=this.props;

        return (
                <div className='row'>
                    <div className='card-body col-12'>
                        <div className='text-center'>
                            <div>
                                Random Number in [0; 1000] : <strong>{randomNumber}</strong>
                            </div>
                            <button
                                type='button'
                                onClick={getRandomNumber}
                                className='btn btn-success btn-sm mr-4 mt-2'
                            >
                                Force Rand
                            </button>
                            <button
                                type='button'
                                onClick={stopRandom}
                                className='btn btn-dark btn-sm mt-2'
                            >
                                Stop
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}