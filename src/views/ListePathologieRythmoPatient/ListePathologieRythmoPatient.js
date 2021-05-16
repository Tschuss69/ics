import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
// sections of this Page


import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Liste from "../../components/Liste/liste";
import blog8 from "../../assets/img/examples/blog8.jpg";
import schema_fa_simple from "../../assets/img/pathologies/rythmologie/FA/schema_fa_simple.png"
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax/Parallax";
import ICSHeaderLinks from "../../components/Header/ICSHeaderLinks";
import {ICSFooter} from "../../components/Footer/ICSFooter";

import backgroundImage from "../../assets/img/salleInterventionnelle.jpg"

const useStyles = makeStyles({...presentationStyle, ...sectionsPageStyle});

const listePathologiePatient = [
    {
        image : schema_fa_simple,
        alt: "alt",
        text : "Ceci est le texte de l'article",
        title : "Les troubles du rythme résumés en une seule video !",
        categorie : "TACHYCARDIE",
        link : "/rythmologie/pathologies/trouble du rythme",
        resume : "Cette vidéo permet de compendre le mécanisme des différents troubles du rythme."
    },
    {
        image : schema_fa_simple,
        alt: "alt",
        text : "Ceci est le texte de l'article",
        title : "Fibrillation atriale",
        categorie : "TACHYCARDIE",
        link : "/rythmologie/pathologies/FA",
        resume : "Trouble du rythme très fréquent, et pouvant engendrer, fatigue, essoufflement, et AVC, il se traite actuellement bien par l'ablation."
    },
    {
        image : blog8,
        alt: "alt",
        text : "Ceci est le texte de l'article",
        title : "Flutter droit",
        categorie : "TACHYCARDIE",
        link : "/rythmologie/pathologies/flutterDroit",
        resume : "Circuit éléctrique tournant autour de la valve tricuspide. Cette tachycardie se traite facilement par l'ablation."
    },
    {
        image : blog8,
        alt: "alt",
        text : "Ceci est le texte de l'article",
        title : "Flutter atypique",
        categorie : "TACHYCARDIE",
        link : "/rythmologie/pathologies/flutterDroit",
        resume : "Circuit électrique, tournant généralement autour d'une cicatrice, le plus souvent de l'oreillette gauche, parfois de l'oreillette droite. Une ablation permet de supprimer ce circuit anormal."
    },
    {
        image : blog8,
        alt: "alt",
        text : "Ceci est le texte de l'article",
        title : "Tachycardie atriale",
        categorie : "TACHYCARDIE",
        link : "/rythmologie/pathologies/TA",
        resume : "un Foyer millimétrique de cellules des oreillettes prennent le contrôle du rythme cardiaque et impose une fréqeunce cardiaque plus élévée au coeur. L'ablation permet de supprimer ces cellules anormales."
    }
]


export function ListePathologieRythmoPatient() {

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
                image={backgroundImage}
                className={classes.parallax}
                filter="dark"
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1>
                                    Informations sur les pathologies en rythmologie
                                    <span className={classes.proBadge}>ICS</span>
                                </h1>
                                <h3 className={classes.title}>
                                    Vous trouverez ici des explications simples sur certaines pathologies que l'on traite en rythmologie.
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


