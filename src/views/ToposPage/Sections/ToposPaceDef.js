import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";

import { Link } from "react-router-dom";

import sectionPillsStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";
import TrendingUp from "../../../../node_modules/@material-ui/icons/TrendingUp";


import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "../../../assets/img/examples/card-blog4.jpg";
import office2 from "../../../assets/img/office2.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg";
import CardHeader from "../../../components/Card/CardHeader";
import Info from "../../../components/Typography/Info";
import Danger from "../../../components/Typography/Danger";
import Success from "../../../components/Typography/Success";

import episode_fv_image from "../../../assets/pdf/toposPaceDef/episode_fv_image.png";
import {url_episodeFv} from "../../../index";

const useStyles = makeStyles({...sectionPillsStyle, ...blogsStyle});


export function ToposPaceDef() {




    const classes = useStyles();
    return(

        <span>
            <Card plain blog className={classes.card}>
                  <Link
                      to={url_episodeFv}
                      className={classes.dropdownLink}
                  >
            <GridContainer>

                <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                        <img src={episode_fv_image} alt="topo_episode_fv" />
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${cardBlog4})`,
                                opacity: "1"
                            }}
                        />
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${cardBlog4})`,
                                opacity: "1"
                            }}
                        />
                    </CardHeader>
                </GridItem>

                <GridItem xs={12} sm={8} md={8}>
                    <Info>
                        <h6 className={classes.cardCategory}>Cas clinique</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                        Episodes de FV enregistrés sur PM double.
                    </h3>
                    <p className={classes.description}>
                        Patiente de 80 ans qui vient pour consultation de suivi de son PM. Vous trouvez des épisodes de FV asymptomatique sur son PM. A vous de jouer !
                    </p>

                    <p className={classes.author}>
                        par{" "}<b>Dr Mathieu SCHAAF</b>
                    </p>

                </GridItem>

            </GridContainer>
                </Link>

            </Card>

        <Card plain blog className={classes.card}>
            <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                        <a href="#pablito" onClick={e => e.preventDefault()}>
                            <img src={office2} alt="..." />
                        </a>
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${office2})`,
                                opacity: "1"
                            }}
                        />
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${office2})`,
                                opacity: "1"
                            }}
                        />
                    </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                        <h6 className={classes.cardCategory}>
                            <TrendingUp />
                            TRENDING
                        </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            6 insights into the French Fashion landscape
                        </a>
                    </h3>
                    <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a traditional
                        boxed software company selling licenses. Today, it’s
                        moving to a subscription model. Yet its own business model
                        disruption is only part of the story — and…
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            {" "}
                            Read More{" "}
                        </a>
                    </p>
                    <p className={classes.author}>
                        by{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Mike Butcher</b>
                        </a>{" "}
                        , 2 days ago
                    </p>
                </GridItem>
            </GridContainer>
        </Card>
        <Card plain blog className={classes.card}>
            <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                        <a href="#pablito" onClick={e => e.preventDefault()}>
                            <img src={blog8} alt="..." />
                        </a>
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${blog8})`,
                                opacity: "1"
                            }}
                        />
                        <div
                            className={classes.coloredShadow}
                            style={{
                                backgroundImage: `url(${blog8})`,
                                opacity: "1"
                            }}
                        />
                    </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={8} md={8}>
                    <Success>
                        <h6 className={classes.cardCategory}>STARTUPS</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Lyft launching cross-platform service this week
                        </a>
                    </h3>
                    <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a traditional
                        boxed software company selling licenses. Today, it’s
                        moving to a subscription model. Yet its own business model
                        disruption is only part of the story — and…
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            {" "}
                            Read More{" "}
                        </a>
                    </p>
                    <p className={classes.author}>
                        by{" "}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Megan Rose</b>
                        </a>{" "}
                        , 2 days ago
                    </p>
                </GridItem>
            </GridContainer>
        </Card>
        </span>



    )
};