import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import './vertical-menu.css';
import {Link } from 'react-route';

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
                },
                {
                    level:2,
                    label:'Danh sách khách hàng',
                    link:'/admin/customers'
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
    constructor(props){
        super(props);
        this.state = {
            hovered:false
        };
    }
    hovered(){
        let state = this.state;
        state.hovered = true;
        this.setState(state);
    }
    unhovered(){
        let state = this.state;
        state.hovered = false;
        this.setState(state);
    }
    render(){
        let style ={};
        Object.assign(style, this.props.style);
        style.display = this.props.display;
    
        if(this.state.hovered)
            style.backgroundColor = 'white';
        
        if(this.props.detail.subItems){
            let displayChildren = 'none';
            
            if(this.state.hovered)
                displayChildren = 'block';
            return (
                <li key={this.props.index} className='parent-item item' style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <a hreft='#'>{this.props.detail.label}</a>
                    <ul className='menu-item-wrapper' style={{display:displayChildren, position:'absolute', left:199, width:199, top:-20}}>
                        {
                            this.props.detail.subItems.map(function(subItem, subIndex){
                                return <MenuItem detail={subItem} key={subIndex} index={subIndex} style={{position:'relative'}}/>
                            })
                        }
                    </ul>
                </li>
            );
        }
        else{
            return (
                <li key={this.props.index} className='item' style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <Link to={this.props.detail.link}>{this.props.detail.label}</Link>
                </li>
            );
        }
    }
}

class VerticalMenu extends React.Component{
    render(){
        return (
            <div className='vertical-menu-container' style={{position:'relative', backgroundColor:'yellow', flexGrow:1}}>
                <ul className='menu-item-wrapper' style={{position:'absolute', width:199}}>
                    {
                        menuTree.items.map(function(item, index){
                            return <MenuItem detail={item} key={index} index={index} display='block' style={{position:'relative'}}/>
                        })
                    }
                </ul>
            </div>
            
        );
    }
}

export {VerticalMenu};