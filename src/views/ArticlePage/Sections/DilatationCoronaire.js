import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/Consentement_Dilat_coro.pdf"


import ArticleBase from "../ArticleBase";


export default function DilatationCoronaire() {
    return (
        <ArticleBase
            title={"Angioplastie coronaire"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on une dilatation coronaire ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Vous présentez des anomalies d’irrigation du cœur secondaires à des rétrécissements sur les artères coronaires. Un rétrécissement de ces artères peut entrainer des douleurs dans la poitrine tandis qu’une obstruction peut entrainer un infarctus. Vos médecins ont donc jugé préférable de traiter ces anomalies.
                            </div>

                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation de la dilatation coronaire</h4></CardHeader>
                        <CardBody>
                            <div>
                                La réalisation de la dilatation coronaire (appelée aussi angioplastie) vous est détaillée dans un livret édité par la Fédération Française de Cardiologie, qui vous est remis en même temps que ce texte. Pour résumer, la procédure est réalisée par introduction d’un cathéter dans l’artère fémorale (au pli de l’aine) ou radiale (au poignet) et consiste à dilater le ou les rétrécissements avec un ballonnet gonflable. Dans la majorité des cas, une endoprothèse (stent) est mise en place à ce niveau. Il s’agit d’une sorte de tube métallique grillagé qui est laissé en place et permet de maintenir l’artère ouverte. Ce stent est généralement en métal et parfois est dit « actif » car recouvert d’un médicament ayant pour but de réduire le risque de récidive du rétrécissement lorsque ce risque est particulièrement important.
                                <strong>Cependant, la mise en place d'un stent n'est pas toujours possible, ni même parfois souhaitable.</strong>
                            </div>

                            <div>
                                Lorsque l’artère coronaire est très calcifiée, on peut être amené à utiliser une fraise (rotablator) pour « abraser » la partie dure de l’artère. Dans certains cas, la présence de caillots ou le risque d’embolisation peut amener à utiliser un système d’aspiration ou un filtre de protection.
                            </div>

                            <div>
                                Comme pour la coronarographie, cet examen est pratiqué sous le contrôle des rayons X, à des doses aussi basses que possible selon les principes de précaution préconisés par le code de santé publique. Le détail des doses reçues fait partie intégrante des compte-rendus qui vous seront remis.
                            </div>

                            <div>
                                Le rétrécissement ou l'occlusion peut parfois être impossible à franchir ou à dilater. Le risque d’échec dépend essentiellement de la complexité de la lésion. Il est globalement de l’ordre de 2 à 5%, plus élevé lorsque l’artère à traiter est bouchée depuis longtemps.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>La dilatation coronaire comporte-t-elle des risques ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Malgré les progrès techniques portant à la fois sur les cathéters, les ballons, les stents et l'expérience des médecins, l'angioplastie coronaire, comme tout geste invasif ou chirurgical, comporte un risque d'incidents ou d'accidents.
                            </div>

                            <div>
                                Les complications à type d’infarctus, troubles du rythme cardiaque grave, accident vasculaire cérébral ou perforation coronaire sont très peu fréquentes. Exceptionnellement, une chirurgie cardiaque en urgence peu s’avérer nécessaire. Le décès est tout à fait exceptionnel.
                            </div>

                            <h5>Resténose</h5>
                            <div>
                                Au niveau des zones qui ont été dilatées va se produire une cicatrisation. Il existe un risque de récidive du rétrécissement (appelée resténose). Certaines lésions sont considérées comme à
                                haut risque de resténose et sont plutôt traitées avec des stents actifs qui diminuent ce risque. En cas de récidive, une nouvelle dilatation peut être réalisée. Dans certains cas, on peut être amené à envisager une chirurgie de pontage.
                            </div>

                            <h5>Complications au niveau du point de ponction</h5>
                            <div>
                                Elles sont devenues rares. La complication la plus commune est un hématome qui peut persister plusieurs jours, mais qui est habituellement sans conséquence. Plus rarement, une artère peut se boucher ou être blessée et nécessiter une réparation chirurgicale et/ou une transfusion sanguine
                            </div>

                            <h5>Complications allergiques</h5>
                            <div>
                                Elles sont exceptionnelles. Le plus souvent liées aux produits de contraste iodé ou aux produits anesthésiques. Si vous avez déjà présenté des manifestations allergiques, il faut absolument en informer le médecin.
                            </div>

                            <h5>Risque de radiodermite</h5>
                            <div>
                                Ce risque de brulure de la peau est exceptionnel et lié à une utilisation prolongée des rayons X. Dans ce cas, il vous sera recommandé de prendre contact avec votre médecin traitant dans le mois qui suit votre examen, afin qu’il examine attentivement votre peau. En cas d’apparition d’une rougeur de la peau, votre médecin prendra les mesures adaptées et nous en rendra compte.
                            </div>



                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels bénéfices peut-on attendre de la dilatation coronaire ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                En permettant un apport de sang plus important au niveau du muscle cardiaque au repos et à l’effort, la dilatation coronaire diminue ou abolit les douleurs d’angine de poitrine et améliore l'évolution à long terme.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Traitement antiagrégant après la dilatation</h4></CardHeader>
                        <CardBody>
                            <div>
                                Pour empêcher la formation de caillots, la pose d’un stent impose l’utilisation d’un traitement simultané par deux médicaments, le premier étant l’aspirine pris au long cours, le deuxième étant un autre médicament plus puissant donné pendant 1 mois à 1 an en fonction de votre maladie et du type de stent utilisé. La prise de ces médicaments (qui est en général débutée dans les 24 heures avant la procédure) comme leur durée de prescription doivent être absolument respectées sauf avis médical contraire. Si une opération est programmée dans les mois qui vont suivre la dilatation ou si vous présentez des risques d’hémorragie, avec alors un risque de saignement accru si vous prenez cette association de médicaments, il est impératif que vous en parliez avec le médecin avant la dilatation coronaire.
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
