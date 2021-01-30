import React from "react";
import  "./menu-item.styles.scss";
import {withRouter} from "react-router-dom";  //withRouter is a Higher Order Component

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
    </div>
</div>
);

export default withRouter(MenuItem);   //Powering up MenuItem omponent using withRouter to access other things-locations/match/history with MenuItem.