import React from "react";
import Navbar from "./navbar/navbar";
import Routing from "../../constants/routing";
import styles from "./header.module.scss"
import LogoutIcon from '@mui/icons-material/Logout';
import classNames from "classnames";
import { Tooltip } from "@mui/material";
import StorageService from "../../services/storage.service";
import { AUTH_USER } from "../../constants/en";
import { useNavigate } from "react-router-dom";


export default function Header(props) {
    const {isAuth} = props;
    const {handleAuth} = props;
    let navigate = useNavigate();

    const getLinks = () => {
        let links = Object.entries(Routing()).map((e) => ( {label: e[0], to: e[1] } ));
        links = isAuth
            ? links.filter((l) => l.to !== Routing().Home)
            : links.filter((l) => l.to !== Routing().Welcome);
        return links;
    }

    function doLogout() {
        StorageService.removeLSItem(AUTH_USER);
        handleAuth(false);
        navigate(Routing().Home);
    }

    return (
        <>
            <Navbar links={getLinks()}/>
            <div className={classNames('absolute', isAuth ? 'd-block' : 'd-none', styles.logout)}>
                <Tooltip title={'Logout'} placement={'right'}>
                    <LogoutIcon onClick={doLogout}/>
                </Tooltip>
            </div>
        </>
    )
}
