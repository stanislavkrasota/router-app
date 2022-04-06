import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import classNames from "classnames";

const NavBar = (props) => {
    const {links} = props;
    const activeLink = links.findIndex((l) => l.to === window.location.pathname);

    const [activeTab, setIndex] = useState(activeLink);
    useEffect(() => {
        setIndex(activeLink);
    }, [activeLink]);

    const col = Math.round(12 / links.length);

    const changeTab = () => {
        setIndex(links.findIndex((l) => l.to === window.location.pathname));
    }

    return  (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {links.map(({ label, to }, index) => (
                        <Grid item xs={col} key={index} onClick={changeTab}>
                            <Link to={to} className={classNames(styles.tab, activeTab === index && styles.active)}>
                                <span>{label}</span>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
    )
}

export default NavBar;
