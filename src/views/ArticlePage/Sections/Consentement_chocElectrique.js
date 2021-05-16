import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/consentement_tavi.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementChocElectrique() {
    return (
        <ArticleBase
            title={"Choc électrique"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>En quoi consiste un choc électrique externe ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Le choc électrique externe (cardioversion) est un acte médical consistant à faire passer volontairement et de manière brève un courant électrique dans votre cœur lorsque celui-ci est trop rapide en raison de certaines tachycardies (en particulier la fibrillation atriale) afin de rétablir un rythme cardiaque normal. Le courant est appliqué sur le thorax par l’intermédiaire de deux palettes métalliques ou autocollantes reliées à un appareil appelé défibrillateur externe.
                            </div>
                            <div>
                                Réalisée dans certains cas en urgence, la cardioversion peut aussi être réalisée de manière programmée pour arrêter une tachycardie qui persiste et ramener le rythme cardiaque à la normale.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Avant le choc électrique externe</h4></CardHeader>
                        <CardBody>
                            <div>
                                <ul>
                                    <li>Vous devez être, sauf cas particuliers, sous traitement anticoagulant efficace,</li>
                                    <li>La réalisation d’une échographie cardiaque trans-œsophagienne est parfois nécessaire, notamment si votre traitement anticoagulant est jugé insuffisant,</li>
                                    <li>Vous devez voir l’anesthésiste en consultation avant le choc</li>
                                    <li>Souvent vous devez faire une prise de sang</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation du choc électrique externe</h4></CardHeader>
                        <CardBody>
                            <div>
                                <ul>
                                    <li>Vous devez être à jeun</li>
                                    <li>Le choc électrique externe est réalisé au cours d’une brève anesthésie générale</li>
                                    <li>Un ou plusieurs chocs électriques seront délivrés pour rétablir le rythme normal</li>
                                    <li>Après le choc, vous serez surveillé en salle de réveil pendant une ou deux heures</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Le choc électrique externe comporte-t-il des risques ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les risques sont les suivants :
                                <ul>
                                    <li>Ceux de l’anesthésie générale</li>
                                    <li>Une brûlure superficielle de la peau sur le thorax à l’endroit où les palettes sont appliquées</li>
                                    <li>Un rythme cardiaque anormalement lent</li>
                                    <li>Un autre trouble du rythme cardiaque</li>
                                    <li>Un accident thrombo-embolique par migration d’un caillot sanguin présent dans les cavités cardiaques, notamment un accident vasculaire cérébral. Ce risque est contrôlé par l’utilisation du traitement anticoagulant.</li>
                                    <li>Si vous êtes porteur d’un stimulateur cardiaque ou d’un défibrillateur, un mauvais fonctionnement de l’appareil peut occasionnellement survenir après le choc électrique externe.</li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les bénéfices du choc électrique externe ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                <ul>
                                    <li>Le choc électrique externe permet de rétablir un rythme normal dans environ 90% des cas. Le taux de succès est moins important si la fibrillation atriale dure depuis plus d’un an, s’il y a déjà eu de nombreux épisodes de fibrillation atriale et s’il existe une dilatation importante des oreillettes, une insuffisance cardiaque ou des valves cardiaques anormales. Il peut être observé des récidives très précoces du trouble du rythme après un choc efficace.</li>
                                    <li>Le rétablissement d’un rythme normal a pour but de diminuer vos symptômes.</li>
                                    <li>Le choc électrique externe n’empêche pas les récidives du trouble du rythme. Un traitement adapté pourra vous être proposé.</li>
                                    <li>Les reprises d’activités professionnelles ou de la vie quotidienne vous seront expliquées de façon adaptée à votre situation personnelle par le médecin et son équipe.</li>
                                </ul>
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
