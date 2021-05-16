/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

import NotListedLocationIcon from "../../../node_modules/@material-ui/icons/NotListedLocation";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import { FaHeartbeat, FaChild } from 'react-icons/fa';
import {GiHeartOrgan} from 'react-icons/gi';
import {AiFillTrademarkCircle} from 'react-icons/ai';
import {AiFillCamera} from 'react-icons/ai';
import LocalHospitalIcon from "../../../node_modules/@material-ui/icons/LocalHospital";
import {Typography} from "@material-ui/core";



/**
 *
 * {
        titleButton : "Médecins",
        iconButton : LocalHospitalIcon,
        links : [
            {
                titleLink : "Cas cliniques",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Présentation",
                urlLink : "/presentation",
                urlSearch : null
            },
        ]
    }
 */

const useStyles = makeStyles(styles);



const menus = [
    {
        titleButton : "Rythmologie",
        iconButton : FaHeartbeat,
        links : [
            {
                titleLink : "Rythologie",
                urlLink : "/rythmologie",
                search : null
            },
            {
                titleLink : "Où sommes nous ?",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Interventions - Consentements",
                urlLink : "/procedures",
                urlSearch : "?active=0"
            },
        ]
    },
    {
        titleButton : "Coronarographie",
        iconButton : GiHeartOrgan,
        links : [
            {
                titleLink : "Coronarographie",
                urlLink : "/coronarographie",
                search : null
            },
            {
                titleLink : "Où sommes nous ?",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Interventions - Consentements",
                urlLink : "/procedures",
                urlSearch : "?active=1"
            },
        ]
    },
    {
        titleButton : "Radiologie interventionnelle",
        iconButton : AiFillTrademarkCircle,
        links : [
            {
                titleLink : "Radiologie interventionnele",
                urlLink : "/radiologie",
                search : null
            },
            {
                titleLink : "Où sommes nous ?",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Interventions - Consentements",
                urlLink : "/procedures",
                urlSearch : "?active=4"
            },
        ]
    },
    {
        titleButton : "Cardio congénitale",
        iconButton : FaChild,
        links : [
            {
                titleLink : "Congénital",
                urlLink : "/congenital",
                search : null
            },
            {
                titleLink : "Où sommes nous ?",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Interventions - Consentements",
                urlLink : "/procedures",
                urlSearch : "?active=2"
            },
        ]
    },
    {
        titleButton : "Imagerie cardiaque",
        iconButton : AiFillCamera,
        links : [
            {
                titleLink : "Echographie",
                urlLink : "/echographie",
                search : null
            },
            {
                titleLink : "Où sommes nous ?",
                urlLink : "/localisation",
                search : null
            },
            {
                titleLink : "Interventions - Consentements",
                urlLink : "/procedures",
                urlSearch : "?active=3"
            },
        ]
    },
    {
        titleButton : "Médecins",
        iconButton : LocalHospitalIcon,
        links : [
            {
                titleLink : "Outils rythmologiques",
                href : "https://www.cardiotools.fr",
                search : null
            },
            {
                titleLink : "Outils d'échographie cardiaque",
                href : "https://www.easyecho.fr/outils",
                search : null
            },
        ]
    }
    ];

export function IcsHeaderItem(props){

    const classes = useStyles();


    return menus.map((menu) =>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor={props.dropdownHoverColor}
                    buttonText={menu.titleButton}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={menu.iconButton}
                    dropdownList={
                        menu.links.map((e) =>
                            {
                                if (e.hasOwnProperty("href")) {
                                    return (<Typography><a href={e.href}>{e.titleLink}</a></Typography>)
                                } else {
                                    return (<Link to={{
                                        pathname: e.urlLink,
                                        search: e.urlSearch
                                    }} className={classes.dropdownLink}>
                                        {e.titleLink}
                                    </Link>)
                                }
                            }
                        )
                    }
                />
            </ListItem>

    )
}