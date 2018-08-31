import React ,{Component} from "react";
import {Link} from "react-router-dom";
import logo from "../.././images/logo.png"
import "./Nav.less";


class Nav extends Component{
render(){
    return(
    	<div className="navBar">
        <div className="mainContent">
        <div className="nav">
            <img src={logo} alt="" className="logo" />
           <ul>
               <li>
                   <Link to="/home">首页1</Link>
               </li>
               <li>
                   <Link to="/product">产品专区2</Link>
               </li>
               <li>
                   <Link to="/bluetooth">蓝牙方案</Link>
               </li>
               <li>
                   <Link to="/service">服务支持</Link>
               </li>
               <li>
                   <Link to="/news">新闻动态</Link>
               </li>
               <li>
                   <Link to="/about">关于我们</Link>
               </li>

           </ul>
        </div>
        </div>
        </div>
    )
}
}

export default Nav;