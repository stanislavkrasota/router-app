import React from "react";
import Navbar from "./navbar/navbar";
import Routing from "../../constants/routing"

export default function Header() {
    let links = Object.entries(Routing()).map((e) => ( {label: e[0], to: e[1] } ));
    links = links.filter((l) => l.to !== Routing().Welcome);
    return (
        <Navbar links={links}
            textColor={'primary'}
            indicatorColor={'primary'}
        />
    )
}
