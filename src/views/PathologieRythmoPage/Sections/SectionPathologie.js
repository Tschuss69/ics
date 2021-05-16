import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import Info from "../../../components/Typography/Info.js";

import Button from "../../../components/CustomButtons/Button.js";

import bg5 from "../../../assets/img/bg5.jpg";


import sectionInterestedStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";



import {Link} from "react-router-dom";





const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionPathologie() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
            <Link to={"/rythmologie/pathologie/ta"}>
              <Card plain blog>
                  <CardHeader plain  image>

                      <div
                          className={classes.coloredShadow}
                          style={{
                              backgroundImage: "url(" + bg5 + ")",
                              opacity: "1"
                          }}
                      />
                  </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6>TACHYCARDIE ATRIALE</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo">
                        Zone précise intra cardiaque pouvant entrainer des tachycardies.
                    </a>
                  </h4>
                    <Button color="white" round>
                        Read Article
                    </Button>
                </CardBody>
              </Card>
            </Link>
        </GridItem>

      </GridContainer>
    </div>
  );
}
