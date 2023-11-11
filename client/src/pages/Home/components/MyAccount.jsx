// import React from "react";
import {UserNavLinks} from "./UserNavLinks";
import {UserProfile} from "./UserProfile";
import "../styles/MyAccount.css"

export const MyAccount = () => {
    return (
        <div className="myAccount">
            <UserNavLinks />
            <UserProfile />
        </div>
    );
}