import React from 'react';

class RightBlock extends React.Component {
    render() {
        return (
            <div className='right-block' style={{ flexGrow: 1, backgroundColor:'green' }}>
                {/* {this.props.children} */}
            </div>
            );
    }
}

export default RightBlock;