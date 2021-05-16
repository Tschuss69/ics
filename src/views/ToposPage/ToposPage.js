/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import MenuTopos from "./Sections/MenuTopos.js";


import blogPostsPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import {ICSFooter} from "../../components/Footer/ICSFooter";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";

import backgroundimage from "../../assets/img/bg10.jpg"

const useStyles = makeStyles(blogPostsPageStyle);

export default function ToposPage() {
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



      <Parallax image={backgroundimage} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                A Place for Entrepreneurs to Share and Discover New Stories
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>



      <div className={classes.main}>
        <div className={classes.container}>
          <MenuTopos />
        </div>
      </div>



      <ICSFooter/>


    </div>
  );
}
