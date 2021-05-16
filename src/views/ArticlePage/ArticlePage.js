/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";

import blogPostsPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import SectionPathologie from "./Sections/SectionPathologie";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import {ICSFooter} from "../../components/Footer/ICSFooter";

const useStyles = makeStyles(blogPostsPageStyle);

export default function ArticlePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                brand={"ICS"}
                links={<ICSHeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "info"
                }}
            />
            <Parallax image={require("assets/img/persistanceDeLaMemoire.jpg")} filter="dark" small>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                            <h2 className={classes.title}>La fibrillation atriale
                            </h2>

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classes.main}>
                <div className={classes.container}>
                    <SectionPathologie />
                </div>
            </div>
            <ICSFooter/>
        </div>
    );
}
