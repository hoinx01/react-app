import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import './vertical-menu.css';

const menuTree = {
    type:'vertical',
    items:[
        {
            level:1,
            label:'Khách hàng',
            subItems:[
                {
                    level:2,
                    label:'Thêm khách hàng',
                    link:'/admin/customers/create'
                },
                {
                    level:2,
                    label:'Danh sách khách hàng',
                    link:'/admin/customers'
                },
                {
                    level:2,
                    label:'test sublist',
                    subItems:[
                        {
                            level:3,
                            label: '1',
                            link: '/1'
                        },
                        {
                            level:3,
                            label: '2',
                            link: '/1'
                        },
                        {
                            level:3,
                            label: '2',
                            link: '/1'
                        }
                    ]
                }
            ]
        },
        {
            level: 1,
            label:'Đơn hàng',
            subItems:[
                {
                    level: 2,
                    label:'Bán hàng',
                    link:'/admin/orders/pos'
                },
                {
                    level: 2,
                    label:'Đặt hàng',
                    link:'/admin/orders/create'
                },
                {
                    level: 2,
                    label:'Danh sách đơn hàng',
                    link:'/admin/orders'
                }
            ]
        }
    ]
}

class MenuItem extends React.Component{
    hovered(){

    }
    render(){
        let style = {position:'relative'};
        style.display = this.props.display;
    
        if(this.props.detail.level > 1){
            style.left = 199;
        }
        
        if(this.props.detail.subItems){
            return (
                <li key={this.props.index} className='parent-item item' style={style}>
                    <a hreft='#'>{this.props.detail.label}</a>
                    <ul className='menu-item-wrapper'>
                        {
                            this.props.detail.subItems.map(function(subItem, subIndex){
                                // let dom = renderMenuItem(subItem, subIndex);
                                // return dom;
                                return <MenuItem detail={subItem} index={subIndex}/>
                            })
                        }
                    </ul>
                </li>
            );
        }
        else{
            return (
                <li key={this.props.index} className='item' style={style}>
                    <a href={this.props.detail.link}>{this.props.detail.label}</a>
                </li>
            );
        }
    }
}
function renderMenuItem(item, index){   
    let style = {position:'relative'};
    
    if(item.level > 1){
        style.display = 'none';
        style.left = 199;
    }
    
    if(item.subItems){
        return (
            <li key={index} className='parent-item item' style={style}>
                <a hreft='#'>{item.label}</a>
                <ul className='menu-item-wrapper'>
                    {
                        item.subItems.map(function(subItem, subIndex){
                            let dom = renderMenuItem(subItem, subIndex);
                            return dom;
                        })
                    }
                </ul>
            </li>
        );
    }
    else{
        return (
            <li key={index} className='item' style={style}><a href={item.link}>{item.label}</a></li>
        );
    }
}

class VerticalMenu extends React.Component{
    render(){
        return (
            <div className='vertical-menu-container' style={{backgroundColor:'yellow', flexGrow:1}}>
                <ul className='menu-item-wrapper'>
                    {
                        menuTree.items.map(function(item, index){
                            let dom = renderMenuItem(item,index);
                            return dom;
                        })
                    }
                </ul>
            </div>
            
        );
    }
}

export {VerticalMenu};