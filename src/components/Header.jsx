import React from 'react';

export default class Header extends React.Component {
    render() {
        const {toggle, toggleLeftSidebar}=this.props;

        return (
            <div className="card-header content">
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='font-weight-bold'>Header</h5>
                    <button
                        type='button'
                        onClick={toggleLeftSidebar}
                        className={`btn btn-lg ${toggle ? 'btn-secondary' : 'btn-success'}`}
                    >
                        {toggle ? "Hide" : "Show"}
                    </button>
                </div>
            </div>
        )
    }
}