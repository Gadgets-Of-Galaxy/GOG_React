// import React from "react";
import {UserNavLinks} from "./UserNavLinks";
import {UserProfile} from "./UserProfile";
import "../styles/MyAccount.css"

export const MyAccount = ({user}) => {
    return (
        <div className="myAccount">
            <UserNavLinks activeLink="MyProfile" />
            <UserProfile user={user}/>
        </div>
    );
}