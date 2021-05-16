import React from "react";

import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/Consentement_coro.pdf"


import ArticleBase from "../ArticleBase";


export default function InfoCoronarographie() {
    return (
        <ArticleBase
            title={"Informations sur la coronarographie"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Pourquoi vous propose-t-on une coronarographie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                La maladie coronaire peut être responsable d'angine de poitrine (douleurs dans la poitrine), d'infarctus du myocarde, d'insuffisance cardiaque (qui se traduit souvent par un essoufflement) et peut évoluer éventuellement vers un décès. L'évolution peut être en grande partie freinée par un traitement adapté, il est donc important de faire un diagnostic précis.
                            </div>
                            <div>
                                La coronarographie permet de faire un bilan exact des atteintes de vos artères coronaires (rétrécissement ou occlusion) au moyen d’un examen radiologique. Cet examen nécessite l’utilisation des rayons X, à des doses aussi basses que possible selon le principe de précaution ALARA préconisé par le code de la santé publique. Le détail des doses reçues fera partie intégrante des compte-rendus qui vous seront remis.
                            </div>

                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation de la coronarographie</h4></CardHeader>
                        <CardBody>
                            <div>
                                La réalisation du cathétérisme cardiaque et de la coronarographie vous est détaillée dans un livret édité par la Fédération française de cardiologie, qui vous est remis en même temps que ce texte.
                            </div>


                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>La coronarographie comporte-t-elle des risques ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Malgré les progrès techniques et l'expérience des médecins, le cathétérisme cardiaque et l'artériographie coronaire comportent, comme pour tout geste invasif ou chirurgical, un risque d'incidents ou d'accidents:
                            </div>


                            <h5>Complications allergiques</h5>
                            <div>
                                Le plus souvent liées à l'utilisation de produit radiologique iodé ou d'anesthésique local. Si vous avez déjà présenté des manifestations allergiques, il impératif d’en informer votre médecin.
                            </div>

                            <h5>
                                Complications au niveau du point de ponction de l'artère.</h5>
                            <div>
                                La complication la plus fréquente est la formation d'une ecchymose ou d'un hématome au point de ponction qui peut persister plusieurs jours, mais qui est habituellement sans conséquence. Cependant, l'augmentation de volume dans les jours qui suivent l'examen doit vous conduire à consulter rapidement. Plus rarement, le maniement des sondes peut occasionner des blessures vasculaires et nécessiter une réparation chirurgicale et (ou) une transfusion sanguine ou décrocher un fragment d'athérome responsable d'une embolie.
                            </div>

                            <h5>Complications cardiaques et vasculaires.</h5>
                            <div>
                                Au cours de l'examen peuvent survenir des malaises, des douleurs dans la poitrine, des palpitations liées à un trouble du rythme. Les complications graves sont, quant à elles, très rares. A titre indicatif, dans une revue publiée dans la littérature médicale, sur une grande série de patients, on note un risque de décès de 0.2/1000, de perturbations neurologiques (notamment paralysies) de 0.4/1000, d'infarctus du myocarde de 0.3/1000. D'autres complications moins sévères ont été rapportées, leur fréquence est inférieure à 1%.
                            </div>

                            <h5>Exposition au rayons X</h5>
                            <div>
                                A partir d’une dose de 3 Gy (qui peut se produire dans le cas d’un examen particulièrement long) il vous est recommandé de prendre contact avec votre médecin traitant dans le mois qui suit votre examen cardiaque, afin qu’il examine attentivement votre peau. En cas d’apparition d’un érythème, votre médecin prendra les mesures adaptées et nous en rendra compte.
                            </div>



                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Quels bénéfices peut-on attendre de la coronarographie ?</h4></CardHeader>
                        <CardBody>
                            <div>
                                Selon les résultats de la coronarographie et de l'ensemble du bilan clinique, des médicaments vous seront éventuellement prescrits. En fonction des lésions observées, il est possible que l’on vous propose après discussion avec votre cardiologue et/ou votre médecin traitant un geste de revascularisation: pontage coronaire ou angioplastie coronaire. La coronarographie contribuera à déterminer le traitement le plus approprié à votre état, afin de diminuer le risque de complications ultérieures et d'améliorer votre confort de vie.
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
