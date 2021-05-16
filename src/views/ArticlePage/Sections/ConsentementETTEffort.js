import React from "react";


import Button from "../../../components/CustomButtons/Button.js";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardHeader from "../../../components/Card/CardHeader";
import concentement from "../../../assets/pdf/infoConsentements/ConsentementETTStress.pdf"


import ArticleBase from "../ArticleBase";
import CustomTable from "../../../components/Table/Table";








export default function ConsentementETTEffort() {



    return (
        <ArticleBase
            title={"Echographie de stress"}
        >
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Card blog>
                        <CardHeader color="info"><h4>Introduction</h4></CardHeader>
                        <CardBody>
                            <div>
                                Votre médecin vous a proposé une échocardiographie de stress qui est un examen par ultrasons de votre cœur à l’effort.
                            </div>
                            <br/>
                            <div>
                                Cet examen est plus sensible qu’un test d’effort normal pour repérer un éventuel trouble de l’irrigation sanguine du muscle cardiaque. Si votre cœur est en bonne santé, il travaillera plus vigoureusement pendant l’effort. En revanche, si une région du cœur est mal irriguée en raison du rétrécissement d’une artère coronaire, elle se contractera moins bien. L’échocardiographie de stress permet de déceler cette anomalie de la contraction.
                            </div>
                            <br/>
                            <div>
                                Cet examen peut aussi être utilisé pour évaluer une valve déficiente ou une anomalie congénitale du cœur (opérée ou non pendant l’enfance) au cours de l’effort. Lorsqu’il existe une anomalie valvulaire celle-ci peut se majorer ou être démasquée à l’effort, car le débit cardiaque (quantité de sang éjectée par le cœur à chaque battement) augmente normalement à l’effort ou dans des conditions pathologiques insuffisamment.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Réalisation pratique :</h4></CardHeader>
                        <CardBody>
                            <div>
                                Les images échocardiographiques sont enregistrées avant, pendant et après un «stress» (= effort) effectué sur une table spéciale avec un pédalo (bicyclette semi couchée) si le patient est capable de réaliser cet exercice.
                                <br/>
                                Si le patient n’est pas capable de réaliser cet effort pour des problèmes physiques (arthrose sévère du genou, hanche ou anomalies vasculaires invalidantes), l’examen pourra être réalisé avec une perfusion d’un médicament (Dobutamine) qui simulera un effort physique. Dans ce cas, une perfusion de Dobutamine sera réalisée pendant 5 à 20 min. La Dobutamine est un médicament qui stimule la contraction du cœur, progressivement le cœur bat plus fort et plus vite comme lors d’un effort physique. Si la fréquence cardiaque n’augmente pas suffisamment, le médecin pourra utiliser de petites doses d’Atropine pour compléter le test. A la fin du test, il arrive qu’un antidote soit injecté pour diminuer rapidement les effets de la Dobutamine.
                                <br/>
                                L’examen dure environ 60 minutes, y compris la préparation et la mise en place de l’ECG (électrocardiogramme) Vous n’avez pas besoin d’être à jeun. Votre médecin vous indiquera à l’avance si vous devez interrompre certains médicaments avant le test ou vous recevrez une lettre de notre part avec une liste de médicaments à arrêter.
                            </div>
                        </CardBody>
                    </Card>

                    <Card blog>
                        <CardHeader color="info"><h4>Effets secondaires possibles :</h4></CardHeader>
                        <CardBody>
                            <div>
                                En cas d’échocardiographie à l’effort, le risque correspond à celui d’un test à l’effort normal.
                            </div>
                            <br/>
                            <div>
                                En cas de perfusion de Dobutamine, les effets secondaires les plus fréquents sont des fourmillements au niveau de la tête et des mains, des forts battements du cœur, un besoin d’uriner. L’Atropine peut vous donner la sensation de bouche sèche. Le test à la Dobutamine peut également reproduire les douleurs dans la poitrine qui vous ont amené à consulter votre médecin. Les nausées et vomissements sont rares et les troubles sévères du rythme cardiaques encore plus rares.
                            </div>
                        </CardBody>
                    </Card>



                    <Card blog>
                        <CardHeader color="danger"><h4>En pratique</h4></CardHeader>
                        <CardBody>
                            <div>
                                L’examen dure environ <strong>1 heure</strong>, il est inutile d’être à jeun.
                                <br/>
                                Prévoir une <strong>tenue de sport</strong> ou confortable permettant de réaliser l'effort.
                            </div>
                            <br/>
                            <div>
                                Si vous prenez un des traitements ci-dessous, <strong>il est impératif de l'interrompre 48 heures avant l'échographie avec accord de votre cardiologue traitant</strong>
                            </div>


                            <h3 style={{textAlign : "center"}}>Médicaments à arrêter 48h avant l'examen avec accord de votre cardiologue traitant</h3>
                            <GridItem
                                xs={12}
                            >
                                <CustomTable
                                    tableHeaderColor="primary"
                                    tableHead={["Nom commercial", "Dénomination commune internationale"]}
                                    tableData={[
                                        ["ARTEX", "TERTATOLOL"],
                                        ["AVLOCARDYL", "PROPANOLOL"],
                                        ["CELECTOL", "CELIPROLOL"],
                                        ["CORGARD", "NADOLOL"],
                                        ["ISOPTINE", "VERAPAMIL"],
                                        ["KERLONE", "BETAXOLOL"],
                                        ["KREDEX", "CARVEDILOL"],
                                        ["MIKELAN", "CARTEOLOL"],
                                        ["PROCORALAN", "IVABRADINE"],
                                        ["SECTRAL", "ACEBUTOLOL"],
                                        ["SELOKEN, LOPRESSOR", "METOPROLOL"],
                                        ["SOPROL, CARDENSIEL, DETENSIEL, BISOCE, LODOZ", "BISOPROLOL"],
                                        ["SOTALEX", "SOTALOL"],
                                        ["TEMERIT", "NEBIVOLOL"],
                                        ["TENORMINE", "ATENOLOL"],
                                        ["TILDIEM", "DILTIAZEM"],
                                        ["TIMOPTOL", "TIMOLOL"],
                                        ["TRANDATE", "LABETOLOL"],
                                        ["TRASICOR", "OXPRENOLOL"],
                                        ["VISKEN", "PINDOLOL"]
                                    ]}
                                    coloredColls={[2]}
                                    colorsColls={["primary"]}
                                />

                            </GridItem>

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
