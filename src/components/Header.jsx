import React from 'react';

export default class Header extends React.Component {
    render() {
        const {toggle, toggleLeftSidebar}=this.props;

        return (
                <div className='card-header d-flex justify-content-between content'>
                    <h5 className='font-weight-bold'>Header</h5>
                    <button
                        type='button'
                        onClick={toggleLeftSidebar}
                        className={`btn btn-lg ${toggle ? 'btn-secondary' : 'btn-success'}`}
                    >
                        {toggle ? "Hide" : "Show"}
                    </button>
                    <div className={`col-4 border sidebar ${toggle ? 'show' : ''}`}>
                            {[...Array(15)].map((x, i) =>
                                <p key={i} className='text-center'>
                                    Left SideBar
                                </p>
                            )}
                        </div>
                    </div>
        )
    }
}