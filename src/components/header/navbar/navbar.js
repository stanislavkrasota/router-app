import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import classNames from "classnames";


const NavBar = ({ links }) => {

    const activeLink = links.findIndex((l) => l.to === window.location.pathname);

    const [activeTab, setIndex] = useState(activeLink);
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

//     const activeTab = links.findIndex((l) => l.href === window.location.pathname);
//
//     return (
//         <Tabs value={activeTab}
//             textColor={textColor}
//             indicatorColor={indicatorColor}
//             variant="fullWidth"
//             centered={centered}>
//             {links.map(({ label, href }, index) => (
//                 <LinkTab label={label} href={href} key={index}/>
//             ))}
//         </Tabs>
//     )
// }
//
// function LinkTab(props) {
//     return (
//         <Tab component="a" {...props}/>
//     );
}

export default NavBar;
