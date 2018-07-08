import React from 'react';
import {MerchantInfo} from './MerchantInfo';
import {UserInfo} from './UserInfo';
import {VerticalMenu} from './VerticalMenu';

class NavMenu extends React.Component {
    render() {
        return (
            <div className='nav-menu' style={{ flexGrow: 1, backgroundColor: 'red', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <MerchantInfo width={this.props.width}/>
                <VerticalMenu/>
                <UserInfo width={this.props.width}/>
            </div>
        );
    }
}

export { NavMenu };
