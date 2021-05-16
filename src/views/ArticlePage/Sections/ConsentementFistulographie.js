import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementFistulographie.pdf"


import ArticleBase from "../ArticleBase";


export default function ConsentementFistulographie() {
    return (
        <ArticleBase
            title={"Fistolographie"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Introduction</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre médecin vous a proposé un examen radiologique. Il sera pratiqué avec votre consentement. Vous avez en effet la liberté de l’accepter ou de le refuser. Une information vous est fournie sur le déroulement de l’examen et de ses suites. Il est très important que vous répondiez bien aux questions qui vous seront éventuellement posées sur votre état de santé ainsi que sur les médicaments que vous prenez (liste écrite des médicaments). Certains traitements doivent en effet être modifiés ou interrompus pour certains examens d’imagerie.
                            </div>
                            <br/>
                            <div>
                                N’oubliez pas de vous munir de vos anciens examens pour une comparaison et surtout de respecter les recommandations qui vous sont faites.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>La radiographie utilise des rayons X :</h4></CardHeader>
                        <CardBody>
                            <div>
                                En matière d’irradiation des patients, aucun risque n’a pu être démontré chez les patients compte tenu des faibles doses utilisées et des précautions prises pour limiter au strict minimum la zone examinée.
                            </div>
                            <br/>
                            <div>
                                Toutefois, pour les femmes enceintes, des précautions doivent être prises systématiquement : c’est pourquoi il est important de signaler si vous pouvez être dans ce cas.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>De quoi s’agit-il ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La fistulographie est un examen qui consiste à visualiser votre abord d’hémodialyse (fistule).
                                Cet examen qui est réalisé par un médecin radiologue interventionnel, assisté d’un personnel paramédical (manipulateur), va aider les équipes médicales à choisir le traitement qui sera le mieux adapté à votre cas. La fistulographie est destinée à rechercher l’existence d’un rétrécissement ou d’une autre anomalie (anévrisme, présence de caillots, présence de collatérales, occlusion) qui peut expliquer le dysfonctionnement de votre fistule ou les signes que vous présentez pendant ou en dehors de la dialyse.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Le déroulement de l’examen :</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’examen est réalisé en ambulatoire sous anesthésie locale. Il est nécessaire de faire une piqûre (ponction) au niveau de l’abord d’hémodialyse, ou parfois au niveau de l’artère du bras, afin d’introduire dans l’artère un petit cathéter au travers duquel l’examen va être réalisé. Ce cathéter servira à injecter un liquide que l’on appelle produit de contraste iodé qui permettra de voir les vaisseaux sur un écran de télévision puis sur les clichés.
                            </div>
                            <br/>
                            <div>
                                Parfois, du gaz carbonique (CO2) est utilisé pour visualiser les anomalies à la place du produit iodé (notamment en cas d’allergie).
                            </div>
                            <br/>
                            <div>
                                Lorsque l’examen est terminé, le petit tuyau sera retiré de votre abord d’hémodialyse qui sera comprimé.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Est-ce une procédure expérimentale ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                <strong>Non, pas du tout.</strong> La destruction de tissus mous par réaction thermique est une méthode reconnue et utilisée depuis de nombreuses années. Son utilisation dans l’abdomen, le poumon et les os est une technique validée.
                            </div>
                            <br/>
                            <div>
                                L’utilisation d’un générateur de radiofréquence/micro-ondes et d’aiguilles appropriées permet aux médecins de traiter des patients atteints de cancer en utilisant cette source d’énergie. La radiofréquence est une intervention bien tolérée, à laquelle peu de complications sont associées.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Y a-t-il des risques liés à la fistulographie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Toute intervention sur le corps humain, même conduite dans des conditions de compétence et de sécurité maximales, comporte un risque de complication.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Combien de temps dure la procédure ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La durée de la procédure dépend de plusieurs facteurs incluant le nombre, la taille et la localisation des lésions. Vous serez conduit dans une salle d’intervention et vous serez pris en charge par une équipe spécialisée, dotée de moyens de contrôle et de suivi adaptés. La technique nécessite un abord percutané en réalisant un petit trou dans la peau.
                            </div>
                            <br/>
                            <div>
                                Avec les techniques modernes, la fistulographie est un examen sûr, cependant, elle peut entraîner des risques locaux au niveau du point de ponction, des risques généraux et des risques infectieux.
                                <ul>
                                    <li>Au niveau du point de ponction, il peut se produire un hématome (un bleu) ou un saignement. En cas d’hématome, celui-ci se résorbera ensuite dans 2 à 3 semaines.</li>
                                    <li>Sur un plan général, les risques sont dus à l’injection de l’iode. Tout produit iodé injecté dans le sang peut entraîner une réaction d’intolérance. Ces réactions imprévisibles sont plus fréquentes chez les patients ayant eu une injection mal tolérée d’un de ces produits ou ayant des antécédents allergiques. Elles peuvent être transitoires et sans gravité. Elles peuvent être plus sévères et se traduire par des troubles cardio-respiratoires et nécessiter un traitement urgent. Les complications réellement graves sont rarissimes. Le risque de décès est exceptionnel (jamais reporté dans notre centre).</li>
                                    <li>La réalisation d’une fistulographie peut s’accompagner dans des cas très rares (0,1%) d’une complication infectieuse.</li>
                                </ul>
                            </div>
                            <br/>
                            <div>
                                Dans certains cas, la fistulographie sera associée à un geste de dilatation ou de désobstruction ; si une telle association est envisagée, le médecin radiologue qui vous prend en charge vous donnera toutes les explications nécessaires avant l’intervention.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Résultats :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Un premier commentaire pourra vous être donné juste après l’examen. Il ne s’agira là que d’une première approche, car les images doivent être ensuite analysées par le médecin radiologue. Le compte-rendu écrit sera disponible lors de votre sortie de la clinique.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="danger"><h4>Ce que vous devez faire</h4></CardHeader>
                        <CardBody>
                            <h5>Apportez le jour de l’examen :</h5>
                            <div>
                                <ol>
                                    <li>Le dossier radiologique en votre possession (les fistulographies précédentes, dopplers, radiographies, échographies, scanners, IRM ...).</li>
                                    <li>La liste écrite des médicaments que vous prenez.</li>
                                </ol>
                            </div>
                            <br/>

                            <h5>Pour l’examen :</h5>
                            <div>
                                A moins de consignes particulières adaptées à votre état de santé, vous devez respecter les consignes suivantes : prendre vos médicaments usuels et un repas léger.
                            </div>

                            <br/>
                            <h5>Après l’examen :</h5>
                            <div>Après l’examen, le plus souvent vous pourrez rentrer chez vous directement, ou en passant par votre centre de dialyse en fonction de votre histoire récente.</div>
                            <br/>
                            <div>
                                En cas de saignement, vous devez, dans un premier temps, appuyer vous-même sur l’endroit de la piqûre (ponction) et prendre contact d’urgence avec votre centre de dialyse ou avec centre de radiologie au <strong>03 90 67 39 91</strong>.
                            </div>

                            <br/>

                            <h5>Dès votre retour à la maison :</h5>
                            <div>Vous devez vous reposer et surtout surveiller l’absence de fièvre et de nouveau saignement. Si besoin, reprenez contact avec nous ou votre centre de dialyse.</div>

                            <br/>

                            <h5>Appelez immédiatement votre médecin (centre de dialyse) ou notre service:</h5>
                            <div>
                                <ol>
                                    <li>Si vous commencez à saigner à l'endroit où le cathéter a été introduit (en cas de saignement, allongez vous et appuyez sur la zone du saignement ou faites appuyer par une personne de votre entourage).</li>
                                    <li>Si vous constatez un changement de couleur, de volume ou de température au niveau de la zone de ponction du vaisseau.</li>
                                    <li>Si vous avez des douleurs, une sensation de froid, une modification de la sensibilité, ou un changement de couleur du bras concerné par la ponction vasculaire.</li>
                                    <li>Si vous avez une boule qui persiste au niveau du point de ponction dans les semaines qui suivent l’examen.</li>
                                    <li>Si vous avez de la fièvre ou des frissons.</li>
                                </ol>
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
