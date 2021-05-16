/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "../../../components/Header/Header.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

// sections for this page


import blogPostsPageStyle from "../../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import {ICSFooter} from "../../../components/Footer/ICSFooter";
import ICSHeaderLinks from "../../../components/Header/ICSHeaderLinks";
import CardBody from "../../../components/Card/CardBody";
import {PDFViewer} from "../../../components/PDFViewer/PDFViewer";

import Button from "../../../components/CustomButtons/Button.js";



const useStyles = makeStyles(blogPostsPageStyle);

export default function BasePDFPage(props) {
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
                color="info"
            />




            <div className={classes.main}>
                <div className={classes.container} style={{marginTop:150, marginBottom : 20}}>

                    <br/>


                    <MenuBasePDF/>

                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} >
                            <CardBody plain className={classes.textCenter}>
                                <PDFViewer
                                    url={props.url}
                                />
                            </CardBody>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>



            <ICSFooter/>


        </div>
    );
}


function MenuBasePDF(){

    const classes = useStyles();

    return (

    <GridContainer >
        <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
            <Button round color="info" onClick={() => history.back()}>Retour</Button>
        </GridItem>
    </GridContainer>
    )
}
