import React from 'react';
import './resize-bar.css'

class ResizeBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='resize-bar'
                style={{ width: this.props.width, backgroundColor: 'white' }}
                onMouseDown={this.props.startResize}
            >
            </div>
            );
    }
}

export { ResizeBar };