import React from 'react';

class UserInfo extends React.Component{
    render(){
        let style = {};
        let width = this.props.width/3;
        if(width < 20)
            style.display = 'none';
        
        return (
            <div style={style}>
                <img src='https://hinhanhdephd.com/wp-content/uploads/2017/06/anh-girl-xinh-de-thuong-nhat-nam-2017-10.jpg' width={width} height={width} alt='merchant-avatar'/>
                <span>Nguyễn Xuân Hồi</span>
            </div>
        );
    }
}

export {UserInfo};