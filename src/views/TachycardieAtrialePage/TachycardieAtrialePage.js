import React from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
// sections of this Page
import SectionBlogs from "./Sections/SectionBlogs.js";

import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";


export default function TachycardieAtrialePage() {

  return (



    <div>
      <Header
        color="info"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
        <br/>
        <GridContainer justify="center">
            <GridItem xs={12} sm={11} md={11} lg={11}>
              <Card blog>
                  <CardBody plain>
                      <SectionBlogs id="blogs" />
                  </CardBody>
              </Card>
            </GridItem>
        </GridContainer>

    </div>
  );
}
