import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/Search.svg";
import Store from "../assets/images/Store.svg";
function Nav() {
    return (<nav className="nav-wrapper">

        <div className="nav-content">
            <ul className="list-styled">
                <li>
                    <img src={Logo} alt="apple" />
                </li>
                <li>
                    <a className="link-styled">
                        Store
                    </a>
                </li>
                <li>
                    <a className="link-styled">
                        Macs
                    </a>
                </li><li>
                    <a className="link-styled">
                        ipad
                    </a>
                </li><li>
                    <a className="link-styled">
                        iphone
                    </a>
                </li><li>
                    <a className="link-styled">

                        Watch   </a>
                </li>
                <li>
                    <a className="link-styled">
                        Airpods
                    </a>
                </li><li>
                    <a className="link-styled">
                        Tv & Homes
                    </a>
                </li><li>
                    <a className="link-styled">
                        Entertainment
                    </a>
                </li><li>
                    <a className="link-styled">
                        Accessories
                    </a>
                </li><li>
                    <a className="link-styled">
                        Support
                    </a>
                </li>
                <li>
                    <img src={Search} alt="Search" />
                </li>
                <li>
                    <img src={Store} alt="Store" />
                </li>
            </ul>

        </div>
    </nav>);
}

export default Nav;