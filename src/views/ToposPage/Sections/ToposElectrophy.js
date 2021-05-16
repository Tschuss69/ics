import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button.js";

import office2 from "../../../assets/img/examples/office2.jpg";


import sectionPillsStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);


export function ToposElectrophy() {
    const classes = useStyles();
    return(
        <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
                <Card
                    raised
                    background
                    style={{ backgroundImage: "url(" + office2 + ")" }}
                >
                    <CardBody background>
                        <h6 className={classes.category}>WORLDS</h6>
                        <a href="#pablo">
                            <h3 className={classes.cardTitle}>
                                The Best Productivity Apps on Market
                            </h3>
                        </a>
                        <p className={classes.category}>
                            Don{"'"}t be scared of the truth because we need to restart the
                            human foundation in truth And I love you like Kanye loves Kanye
                            I love Rick Owens’ bed design but the back is...
                        </p>
                        <Button round href="#pablo" color="danger">
                            <FormatAlignLeft className={classes.icons} /> Read article
                        </Button>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
};