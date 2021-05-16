import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./../../components/Header/Header.js";
// sections of this Page


import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Liste from "../../components/Liste/liste";
import blog8 from "../../assets/img/examples/blog8.jpg";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import {ICSFooter} from "../../components/Footer/ICSFooter";
import schema_fa_simple from "../../assets/img/pathologies/rythmologie/FA/schema_fa_simple.png";


const useStyles = makeStyles({...presentationStyle, ...sectionsPageStyle});



const listePathologiePatient = [
    {
        image : schema_fa_simple,
        alt : "schema_fa",
        text : "Ceci est le texte de l'article",
        title : "Ablation de fibrillation atriale",
        categorie : "ELECTROPHYSIOLOGIE",
        link : "/rythmologie/procedures/ablationFa",
        resume : "Intervention permettant de stopper/ralentir l'évolution de la fibrillation atriale."

    },
    {
        image : blog8,
        alt : "schema_fa",
        text : "Ceci est le texte de l'article",
        title : "Exploration électrophysiologique",
        categorie : "ELECTROPHYSIOLOGIE",
        link : "/rythmologie/procedures/exploration",
        resume : "Intervention permettant de faire le dignostique précis des tachycardie et de certaines bradycardies"
    }
]


export function ListeProcedureRythmoPatient() {

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

            <Parallax
                image={require("../../assets/img/salleInterventionnelle.jpg")}
                className={classes.parallax}
                filter="dark"
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1>
                                    En quoi consiste l'itervention ?
                                    <span className={classes.proBadge}>ICS</span>
                                </h1>
                                <h3 className={classes.title}>
                                    Vous trouverez ici des explications simples sur l'objectif, le principe et les risques éventuels de chaque intervention.
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classes.main}>
                <Liste
                    liste={listePathologiePatient}
                />
            </div>

            <ICSFooter/>
        </div>
    );
}


