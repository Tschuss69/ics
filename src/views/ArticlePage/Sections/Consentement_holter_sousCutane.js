import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/consentement_holter_sous_cutane.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementHolterSousCutane() {
    return (
        <ArticleBase
            title={"Holter sous cutané"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Informations</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre état cardiaque nécessite la mise en place d’un enregistreur d’événements cardiaques en position sous- cutanée.
                            </div>
                            <br/>
                            <div>
                                L’enregistreur d’événements cardiaques (ou encore Holter longue durée) est un petit boîtier, contenant des circuits électroniques alimentés par une pile (dont la durée moyenne est de 2 à 3 ans selon les modèles). Il est capable d’analyser en permanence le rythme cardiaque et de détecter des rythmes anormaux (ralentissement important ou accélération du rythme cardiaque) et permet de corréler les symptômes (palpitations ou malaises) à l’évolution du rythme cardiaque.
                            </div>
                            <br/>
                            <div>
                                L’enregistreur est mis en place en position sous-cutanée sous anesthésie locale dans des conditions d’asepsie. Le siège de l’implantation est choisi avec vous par le cardiologue qui réalise le geste. Le plus souvent le dispositif est mis en place le long du bord gauche du sternum afin d’enregistrer au mieux les battements cardiaques.
                            </div>
                            <br/>
                            <div>
                                L’implantation peut se réaliser en ambulatoire. Lorsque l’enregistreur est usé, il est procédé à son explantation par une petite procédure chirurgicale locale en ambulatoire.
                            </div>
                            <br/>
                            <div>
                                Un carnet indiquant que vous êtes porteur d’un enregistreur vous sera également remis.
                            </div>
                            <br/>
                            <div>
                                Une surveillance à distance grâce à un transmetteur (telecardiologie) peut vous être proposée.
                            </div>
                            <br/>
                            <div>
                                Comme toute procédure chirurgicale, l’implantation d’un enregistreur cardiaque expose à un risque anesthésique faible car il s’agit d’une anesthésie locale. Des complications rares peuvent survenir : allergie, hémorragie locale, hématomes et infection. Ces complications sont prévenues par l’ensemble de la procédure de préparation qui vous a été expliquée.
                            </div>
                            <br/>
                            <div>
                                Ce document constitue une notice explicative des risques et bénéfices de l’implantation d’un enregistreur cardiaque. Il ne constitue pas une décharge de responsabilité de l’équipe médicale qui vous prend en charge et qui vous a commenté ces informations générales en les rapportant à votre situation particulière.
                            </div>
                        </CardBody>
                    </Card>


                </GridItem>
            </GridContainer>

            <GridContainer >
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <a href={concentement} download>
                        <Button color="primary" size="lg">
                            Telecharger le concentement
                        </Button>
                    </a>

                </GridItem>
            </GridContainer>

        </ArticleBase>
    );
}
