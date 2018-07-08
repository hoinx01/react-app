﻿import React, { Component } from 'react';
//import './layout.css';
// import * as FontAwesome from 'react-icons/lib/fa';

import LeftMenu from './left-menu/LeftMenu';
import RightBlock from './right-block/RightBlock';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state ={
            leftMenu: {
                width: 200,
                resizing: false
            },
            resizeBar: {
                width: 1
            }
        }
    }

    mouseMove(event) {
        if (this.state.leftMenu.resizing) {
            if (event.clientX > this.state.resizeBar.width) {
                var leftMenu = this.state.leftMenu;
                leftMenu.width = event.clientX;
                this.setState({ leftMenu: leftMenu})
            }
        }
    }
    
    startResizeLeftMenu() {
        let leftMenu = this.state.leftMenu;
        leftMenu.resizing = true;
        this.setState({ leftMenu: leftMenu })
    }
    stopResizeLeftMenu() {
        if (this.state.leftMenu.resizing) {
            var leftMenu = this.state.leftMenu;
            leftMenu.resizing = false;
            this.setState({ leftMenu: leftMenu })
        }
    }

    render() {
        return (
            <div
                className='layout'
                style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}
                onMouseMove={this.mouseMove.bind(this)}
                onMouseUp={this.stopResizeLeftMenu.bind(this)}
            >
                <LeftMenu width={this.state.leftMenu.width} resizeBarWidth={this.state.resizeBar.width} startResize={this.startResizeLeftMenu.bind(this)} />
                <RightBlock />
            </div>
        );
    }
}
export { Layout };