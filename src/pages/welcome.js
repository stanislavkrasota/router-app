import React, { Component } from "react";
import { Box } from "@mui/material";
import HomeService from "../services/home.service";
import { IP_PATTERN } from "../constants/en";
import DeviceDetector from "device-detector-js";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getUserById();
    }

    getUserById() {
        HomeService.getClientIp().then(data => {
            let ip = data.match(IP_PATTERN)[0];
            const deviceDetector = new DeviceDetector();
            const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
            const {client, device, os} = deviceDetector.parse(userAgent);
            this.setState({
                ip: ip,
                deviceName: os.name,
                deviseBrand: device.brand,
                browser: `${client.name} v.${client.version}`
            });
        });
    }

    render() {
        return (
            <div>
                <h1 className={'margin-centered'}>Welcome</h1>

                <Box className={'mt-2'}>
                    Warning!
                    Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies. Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like Secure. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.

                    Personal data disclosing your real identity: your IP address, <b>{this.state.ip}</b>. You are browsing with <b>{this.state.browser}</b> on <b>{this.state.deviceName}</b>, <b>{this.state.deviseBrand}</b> with monitor res. <b>{window.innerWidth}x{window.innerHeight}px</b>.
                </Box>
            </div>
        )
    }
}

export default Welcome;
