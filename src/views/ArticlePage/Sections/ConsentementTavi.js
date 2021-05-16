import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/consentement_tavi.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementTavi() {
    return (
        <ArticleBase
            title={"TAVI - Remplacement de la valve aortique par voie percutanée"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Introduction</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vous êtes atteint(e) d’un rétrécissement important au niveau de la valve aortique. Il s’agit de la valve qui sépare le ventricule gauche (la pompe cardiaque), et qui permet le passage du sang du cœur vers le reste de l’organisme. Ce rétrécissement en empêchant le sang de s’écouler normalement est responsable des symptômes que vous présentez.
                            </div>
                            <div>
                                Le traitement de cette maladie consiste habituellement en un remplacement de votre valve malade par une valve artificielle de façon chirurgicale, en utilisant la chirurgie « à cœur ouvert ». Dans votre cas, cette intervention a été considérée par l’équipe médico-chirugicale comme à très haut risque ou contre indiquée.
                            </div>
                            <div>
                                Pour cette raison, nous pouvons vous proposer une méthode alternative qui consiste à mettre en place au niveau votre valve aortique malade une valve artificielle en passant par l’artère fémorale (au pli de l’aine). Cette intervention est réalisée sans ouverture chirurgicale sous contrôle des rayons X. La dose de rayon X utilisée est aussi basse que possible, selon le principe de précaution ALARA, préconisé par le code de la santé publique. Le détail des doses reçues fait partie intégrante des compte-rendus qui vous seront remis.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Description de la bioprothèse</h4></CardHeader>
                        <CardBody>
                            <div>
                                Cette valve artificielle est faite en péricarde (une fine membrane qui entoure le cœur) d’origine animale (bœuf), reproduisant la forme générale d’une valve aortique normale, fixée à l’intérieur d’un grillage métallique tubulaire et expansible (stent). Cette valve est comprimée sur un ballonnet gonflable monté à l’extrémité d’un tube (ou cathéter) et poussée jusqu’au cœur sous surveillance radiologique, puis déposée au niveau de la valve aortique malade par gonflage du ballonnet. Une fois en position, elle tient en place par la seule force d’expansion du stent. La taille est choisie en fonction de la taille de l’anneau aortique (endroit où le stent sera déployé).
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Méthodes d’implantation</h4></CardHeader>
                        <CardBody>
                            <div>
                                Pour introduire la valve artificielle jusqu’au cœur, on utilise la voie artérielle fémorale droite ou gauche. Néanmoins un calibre artériel fémoral supérieur à 7 mm voire 8 mm reste indispensable pour cette voie d’abord.
                            </div>

                            <div>
                                Les examens complémentaires suivants sont nécessaires avant d’envisager l’implantation de la valve : électrocardiogramme, échocardiogramme (étude du cœur par ultrasons permettant une analyse détaillée de l’état de votre cœur et de la valve aortique). Il sera nécessaire de réaliser une coronarographie (évaluation de l’état des artères coronaires) et éventuellement un scanner des artères fémorales et iliaques. Il s’agit là d’examens réalisés quotidiennement en cardiologie. Au cours de ces examens, le diamètre de votre anneau aortique (la structure sur laquelle s’attache la valve aortique) et celui de vos artères fémorales seront calculés afin de déterminer si la voie d’abord artérielle est possible.
                            </div>

                            <div>
                                Ce n’est qu’après la réalisation de ces examens que l'on saura si la valve artificielle peut être implantée. Juste avant l’implantation, votre valve malade sera dilatée à l’aide d’un ballonnet gonflable, un geste très régulièrement pratiqué. La valve sera mise en place immédiatement après cette dilatation. L’implantation de la valve sera suivie d’une autre série d’angiographies destinées à s’assurer de la précision du positionnement.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Implantation de la bioprothèse et suivi hospitalier :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’abord de l’artère fémorale se fait par simple ponction et sera refermé dans la mesure du possible par un système de fermeture automatique percutané. Après l’implantation de la valve, vous serez admis(e) dans le service de soins intensifs de cardiologie pour surveillance. Dans cette unité, des analyses sanguines seront réalisées quotidiennement et un échocardiogramme sera enregistré pour vérifier le bon fonctionnement de la valve. Vous serez ensuite transféré(e) dans le service de cardiologie dès lors que votre état sera stable. Votre hospitalisation devrait durer environ 5 jours.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Autres possibilités de traitement</h4></CardHeader>
                        <CardBody>
                            <div>
                                Il y a quatre possibilités de traitement :
                            </div>
                            <div>
                                <ol>
                                    <li>Continuer le traitement médical que vous recevez, mais les effets liés au rétrécissement aortique persisteront.</li>
                                    <li>Réaliser une dilatation aortique au ballonnet (élargissement de l'orifice valvulaire aortique au moyen d'un ballonnet gonflable), une technique qui peut améliorer de façon transitoire le fonctionnement de votre valve mais dont les résultats ne se maintiennent pas dans le temps.</li>
                                    <li>Mettre en place la valve par voie sous clavière ou transapicale. Dans ce cas, une anesthésie générale est nécessaire et la procédure est réalisée au bloc opératoire.</li>
                                    <li>Recourrir à une chirurgie classique mais celle-ci est associée à un très haut risque</li>
                                </ol>
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Bénéfices attendus</h4></CardHeader>
                        <CardBody>
                            <div>
                                En l’état actuel de nos connaissances, et compte tenu de votre état clinique, la mise en place de cette valve apparaît être la meilleure solution envisageable pour améliorer vos symptômes et diminuer de façon plus durable les risques de votre maladie. Les bénéfices attendus de ce geste thérapeutique sont une amélioration rapide de vos symptômes (essoufflement, douleurs thoraciques, malaises), une amélioration de la contractilité et du fonctionnement de votre cœur et, d'une façon plus générale, une amélioration de votre qualité de vie. Néanmoins, compte tenu du développement récent de cette technique nouvelle, le recul que nous avons reste encore limité. Le premier cas ayant été réalisé en Mars 2002.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Risques et effets secondaires</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les risques de l’intervention sont ceux du cathétérisme cardiaque, de la coronarographie, de la dilatation aortique (un examen pratiqué depuis de nombreuses années), auxquels s’ajoutent les risques potentiels liés à l’implantation de la valve elle-même. Les complications potentielles liées à ces gestes thérapeutiques sont : troubles du rythme cardiaque, complications vasculaires au site

                                d’insertion des cathéters (hématome, perforation ou obstruction artérielle pouvant donner lieu à un geste de réparation chirurgical), infarctus du myocarde, embolisation de matériel valvulaire ou de caillots, dissection de l’aorte (déchirure de la paroi aortique), perforation d'une cavité cardiaque, accident vasculaire cérébral, insuffisance rénale, endocardite (infection sur la valve), déplacement de la valve, fuite autour de la valve, dysfonctionnement de la valve, saignement nécessitant une transfusion, nécessité d’une intervention chirurgicale en urgence pour pontage coronarien ou remplacement valvulaire aortique, décès.
                                Contacts
                                Pour tout renseignement complémentaire vous pouvez contacter le Médecin qui à fait votre examen au ......................., qui sera, ainsi que tous les membres de l’équipe de cardiologie, à votre disposition pour répondre à vos questions concernant cet examen et les éventuels effets secondaires que vous pourriez constater.
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
