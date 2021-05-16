import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConcentementDai.pdf"


import ArticleBase from "../ArticleBase";


export default function PoseDai() {
    return (
        <ArticleBase>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on l’implantation d’un défibrillateur automatique ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il vous est proposé la mise en place d’un défibrillateur automatique implantable (DAI) car vous êtes dans l’une des deux situations suivantes :
                                <ul>
                                    <li>
                                        vous avez une maladie cardiaque qui vous expose à un risque de mort subite en rapport avec la survenue dans les mois ou les années à venir de troubles du rythme cardiaque graves. Ces troubles du rythme cardiaque graves sont dus à des accélérations intempestives de la fréquence cardiaque et peuvent être parfois mortels s’ils ne sont pas traités à temps.
                                    </li>
                                    <li>
                                        vous venez de présenter un trouble du rythme cardiaque grave. Le risque de récidive est important malgré les traitements qui pourraient être proposés et peut conduire à la mort
                                        subite.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                Des études scientifiques internationales ont montré que, dans ces cas, l’implantation d’un DAI permettait d’augmenter la probabilité de survie par rapport à une population identique n’ayant pas bénéficié de l’implantation d’un DAI.
                            </div>

                            <div>
                                Parallèlement, en cas d’insuffisance cardiaque et selon certains critères, il est possible qu’il soit utile d’implanter un DAI ayant en plus une fonction dite de « resynchronisation ». La resynchronisation permet de diminuer les signes d’insuffisance cardiaque chez environ 70% des patients implantés.
                            </div>

                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment fonctionne un défibrillateur automatique ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un DAI comporte un boîtier, alimenté par une batterie. Il est capable d’analyser en permanence le rythme cardiaque, de détecter les rythmes anormaux et de les traiter soit par une stimulation rapide, non ressentie, soit par un choc électrique interne. En outre, cet appareil a la fonction d’un stimulateur cardiaque (maintenir la fréquence cardiaque en cas de ralentissement excessif de cette fréquence) et des fonctions « mémoire » très développées. Ce système, mis en place lors d’une procédure chirurgicale au niveau de la partie haute du thorax (ou exceptionnellement au niveau de l’abdomen), est relié au cœur par une, deux ou trois sondes introduites par voie veineuse.
                                On peut également vous proposer la mise en place dans certains cas d’un défibrillateur sous-cutané relié à une sonde également sous cutanée. Dans ce cas aucun matériel n’est à l’intérieur du cœur ou des vaisseaux.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment se déroule l’implantation ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                <ul>
                                    <li>
                                        l est nécessaire d’être à jeun, avec une préparation pré-opératoire effectuée (douche antiseptique en particulier). Une allergie à un antibiotique ou aux produits iodés injectables doit être signalée avant l’intervention. Celle-ci se déroulera sur une table d’opération dans une salle spécialement équipée et peut se faire soit sous anesthésie générale, soit sous anesthésie locale.
                                    </li>
                                    <li>
                                        En cas d'anesthésie locale, le médecin réalise une piqûre pour faire l’anesthésie locale, pour réaliser l’incision puis la loge pour le boitier.
                                    </li>
                                    <li>
                                        La ou les sondes sont mises en place en passant par une (des) veine(s) abordée(s) dans la zone d’implantation du boitier. La ou les sondes sont ensuite positionnées dans les cavités cardiaques sous contrôle radiologique.
                                    </li>
                                    <li>
                                        En cours d’intervention, il est parfois nécessaire de déclencher des arythmies cardiaques et de délivrer des chocs par l’intermédiaire du DAI afin de vérifier le bon fonctionnement de l’appareil.
                                    </li>
                                    <li>
                                        L’opération dure en moyenne une heure, parfois plus selon le type de matériel implanté et les difficultés de mise en place des sondes, notamment la sonde pour la resynchronisation.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                Pour le cas particulier du Défibrillateur sous cutané, le boitier est donc implanté dans une loge latérale thoracique gauche et la sonde unique est mise en place dans le tissu sous cutané généralement sur le bord gauche du sternum grâce à une ou deux petites incisions supplémentaires.
                            </div>


                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels sont les risques liés à l’implantation du défibrillateur ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Comme toute procédure chirurgicale, l’implantation d’un défibrillateur expose à un risque anesthésique ainsi qu’à de possibles complications notamment infectieuses ou hémorragiques dans environ 5 % des cas. Très exceptionnellement, ces complications peuvent être mortelles.
                                A distance de l’implantation d’un défibrillateur, une réintervention peut être requise pour pallier à une défaillance du boîtier, un déplacement, une rupture des sondes ou à un problème infectieux. La stimulation permanente du ventricule gauche dans le cadre de la resynchronisation peut également être à l’origine d’une sensation de contraction musculaire ou de hoquet. Par ailleurs, un remplacement du boîtier sera réalisé après quelques années de fonctionnement (de 5 à 10 ans selon le modèle), en raison de l’usure de la batterie. Enfin, il est important de comprendre que la technologie du DAI est très complexe et expose à un risque de dysfonctionnement pouvant nécessiter une prise en charge spécifique allant de suivis plus fréquents à une reintervention et parfois même au changement du matériel,
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Comment se déroule le suivi après l‘hospitalisation ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Après l’intervention, un suivi régulier dans un centre spécialisé est nécessaire (environ tous les 3 à 6 mois) afin de vérifier le bon fonctionnement de l’appareil, ainsi que l’absence de complications. Cette surveillance « technique » dans le centre spécialisé ne se substitue pas mais complète la surveillance régulière par votre cardiologue traitant. Dans certains cas, un complément de suivi pourra être effectué à distance (sans venir en consultation) grâce à un appareillage spécifique (on parle de télécardiologie). Une carte indiquant que vous êtes porteur d’un défibrillateur vous sera remise à l’issue de votre intervention. Il y sera colligé la marque du DAI, la date d’implantation et les coordonnées du centre implanteur.
                            </div>
                            <div>
                                Votre vie quotidienne sera le plus souvent peu modifiée par le port de cet appareil.
                                Cependant certaines précautions sont à prendre en cas de réalisation d’actes médicaux ou chirurgicaux, et parfois au niveau professionnel. Elles vous seront expliquées de façon adaptée à votre situation personnelle par le médecin implanteur et son équipe.
                                Il existe des associations de patients qui peuvent aussi être à votre écoute.
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
