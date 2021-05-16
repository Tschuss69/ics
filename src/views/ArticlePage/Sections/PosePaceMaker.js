import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementPM.pdf"


import ArticleBase from "../ArticleBase";


export default function PosePaceMaker() {
    return (
        <ArticleBase>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on l’implantation d’un stimulateur cardiaque ?</h4></CardHeader>
                        <CardBody>
                           <div>Votre état cardiaque nécessite la mise en place d'un stimulateur cardiaque. Il s'agit d'un traitement courant, fiable et efficace de certaines maladies du cœur (se traduisant le plus souvent par un ralentissement marqué du rythme cardiaque) qui ne peuvent être contrôlées par la prise de médicaments. La stimulation cardiaque est également parfois utilisée dans le traitement de l’insuffisance cardiaque.</div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Qu’est-ce qu’un stimulateur cardiaque ?</h4></CardHeader>
                        <CardBody>
                            <div>Un stimulateur cardiaque est un petit boîtier, contenant des circuits électroniques alimentés par une batterie. Il est relié au cœur par une, deux ou trois sondes selon les cas. Il est capable d'analyser en permanence le rythme du cœur, notamment lorsqu’il est anormal, et de le stimuler en cas de besoin sans la moindre sensation désagréable. De plus, ce stimulateur (« pacemaker » des anglo-saxons) peut stocker des informations concernant le rythme cardiaque ainsi que des données relatives à son fonctionnement.</div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les principes de l’implantation et du suivi ?</h4></CardHeader>
                        <CardBody>
                            <div>Le stimulateur est mis en place au-dessous de la clavicule droite ou gauche, sous anesthésie locale (rarement générale), lors d'une intervention chirurgicale. Il est relié au cœur par une ou deux sondes introduites par voie veineuse et positionnées dans l’oreillette et/ou le ventricule droit. Une troisième sonde est parfois implantée pour resynchroniser le ventricule gauche dans certaines formes d’insuffisance cardiaque.
                                Après l'intervention, des suivis réguliers sont nécessaires afin de vérifier le bon fonctionnement du système. Un premier contrôle est effectué dans les 3 mois après l’implantation puis régulièrement (tous les 6 mois à 1 an en général) à l'aide d'un ordinateur spécifique appelé programmateur, permettant de communiquer à travers la peau de manière indolore avec votre stimulateur et d'en modifier si besoin les réglages. Le suivi peut aussi, dans certains cas, être effectué à distance par le réseau téléphonique. Un carnet indiquant que vous êtes porteur d'un stimulateur cardiaque vous sera remis. Après plusieurs années (durée variable selon le type d’appareil et le mode de fonctionnement), un changement du boîtier devra être effectué compte tenu d’une usure de la batterie.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques liés à l’implantation d’un stimulateur cardiaque ?</h4></CardHeader>
                        <CardBody>
                            <div>Comme toute procédure chirurgicale, l'implantation d'un stimulateur expose à un risque anesthésique variable, selon qu'il s'agit d'une anesthésie locale ou générale, ainsi qu'à de possibles complications dans 4 à 6% des cas. Celles-ci sont généralement bénignes mais peuvent parfois être plus graves et très exceptionnellement mortelles. Les complications précoces incluent notamment le risque de saignement (surtout en cas de traitement anticoagulant), d'infection, de lésion d’un vaisseau sanguin, d’épanchement de liquide ou de sang autour du cœur, de pneumothorax (effraction de la plèvre), de trouble du rythme cardiaque et de déplacement de sonde. Certains de ces problèmes peuvent nécessiter une réintervention précoce. Une allergie à un antibiotique ou aux produits iodés injectables doit être signalée avant l’intervention.</div>
                            <div>
                                À distance de l'opération, une reprogrammation du système peut être nécessaire et une réintervention peut être justifiée en cas de défaillance du système (panne ou fragilité du stimulateur et/ou d’une ou plusieurs sondes), de menace d'extériorisation du matériel à travers la peau ou d’infection.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quelles sont les conséquences dans ma vie quotidienne ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre vie quotidienne sera le plus souvent très peu modifiée par le port de cet appareil. Des précautions seront à prendre lors de la réalisation d’examens médicaux, notamment la pratique d’une IRM qui n’est possible que sous certaines conditions (toujours signaler que vous portez un tel appareillage car il est le plus souvent non compatible avec la réalisation d’une IRM). Les détecteurs de métaux seront en général sensibles à votre appareil. Les interférences (action d’un champ magnétique ou d’une onde sur l’appareil) sont rares mais celles qui peuvent vous concerner vous seront précisées par le médecin implanteur.
                            </div>
                            <div>
                                Il existe des associations de patients qui peuvent être aussi à votre écoute.
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
