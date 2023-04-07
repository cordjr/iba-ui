import React from "react";
import {Nav} from "react-bootstrap";

import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import logo from "../../assets/react.svg";


interface SideBarProps {
    color: string,
    image: string,
    routes: []
}

export function SideBar({color, image, routes}: SideBarProps) {
    const location = useLocation();
    const activeRoute = (routeName: any) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    return (
        <div className="sidebar" data-image={image} data-color={color}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: "url(" + image + ")"
                }}
            />
            <div className="sidebar-wrapper">
                <div className="logo d-flex align-items-center justify-content-start">
                    <a
                        href="https://www.creative-tim.com?ref=lbd-sidebar"
                        className="simple-text logo-mini mx-1"
                    >
                        <div className="logo-img">
                            <img src={logo} alt="..."/>
                        </div>
                    </a>
                    <a className="simple-text" href="http://www.creative-tim.com">
                        Creative Tim
                    </a>
                </div>
                <Nav>
                    {routes.map((prop: any, key: any) => {
                        if (!prop.redirect)
                            return (
                                <li
                                    className={
                                        prop.upgrade
                                            ? "active active-pro"
                                            : activeRoute(prop.layout + prop.path)
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className={(props) => {
                                            if (props.isActive) {
                                                return "active"
                                            } else {
                                                return "navlink"
                                            }

                                        }}

                                    >
                                        <i className={prop.icon}/>
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        return null;
                    })}
                </Nav>
            </div>
        </div>
    );
}