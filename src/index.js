/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "./assets/scss/material-kit-pro-react.scss?v=1.8.0";


// pages for this product

import IcsPage from "./views/ICSPage/ICSPage";


import RythmoPage from "./views/RythmologiePage/RythmoPage";
import PathologieRythmoPage from "./views/PathologieRythmoPage/PathologieRythmoPage";
import TachycardieAtrialePage from "./views/TachycardieAtrialePage/TachycardieAtrialePage";
import Localisation from "./views/Localisation/Localisation";
import {ListePathologieRythmoPatient} from "./views/ListePathologieRythmoPatient/ListePathologieRythmoPatient";
import {ListeProcedureRythmoPatient} from "./views/ListeProcedureRythmoPatient/ListeProcedureRythmoPatient";
import ToposPage from "./views/ToposPage/ToposPage";
import EpisodeFv from "./views/ToposPage/Topos/EpisodeFV";
import AblationFa from "./views/ArticlePage/Sections/AblationFa";
import InfoFa from "./views/ArticlePage/Sections/InfoFa";
import {url_procedure_exploration} from "./Navigation/urlRythmologie";
import ExplorationElectrophysiologique from "./views/ArticlePage/Sections/ExplorationElectrophysiologique";
import ListeProcedurePage from "./views/ListeProcedure/ListeProcedurePage";
import PosePaceMaker from "./views/ArticlePage/Sections/PosePaceMaker";
import PoseDai from "./views/ArticlePage/Sections/poseDai";
import DilatationCoronaire from "./views/ArticlePage/Sections/DilatationCoronaire";
import InfoCoronarographie from "./views/ArticlePage/Sections/InfoCoronarographie";
import InfoTv from "./views/ArticlePage/Sections/InfoTv";
import CoronarographiePage from "./views/CoronarographiePage/CoronarographiePage";
import RadiologieInterventionnellePage from "./views/RadiologieInterventionnellePage/RadiologieInterventionnellePage";
import EchographiePage from "./views/EchographiePage/EchographiePage";
import CongenitalPage from "./views/CongenitalPage/CongenitalPage";
import ConsentementTavi from "./views/ArticlePage/Sections/ConsentementTavi";
import ConsentementHolterSousCutane from "./views/ArticlePage/Sections/Consentement_holter_sousCutane";
import ConsentementChocElectrique from "./views/ArticlePage/Sections/Consentement_chocElectrique";
import ConsentementFermetureFop from "./views/ArticlePage/Sections/ConsentementFop";
import ConsentementRadiofrequence from "./views/ArticlePage/Sections/ConsentementRadioFrequence";
import ConsentementNephrostomie from "./views/ArticlePage/Sections/ConsentementNephrostomie";
import ConsentementFistulographie from "./views/ArticlePage/Sections/ConsentementFistulographie";
import ConsentementEmbolisationVaricocele from "./views/ArticlePage/Sections/ConsentementEmbolisationVaricocele";
import ConsentementEmbolisationProstate from "./views/ArticlePage/Sections/ConsentementEmbolisationProstate";
import ConsentementEmbolisationVaricePelvienneFemme
    from "./views/ArticlePage/Sections/ConsentementEmbolisationVaricePelvienneFemme";
import ConsentementEmbolisationVaricePelvienneHomme
    from "./views/ArticlePage/Sections/ConsentementEmbolisationVaricePelvienneHomme";
import ConsentementEmbolisationUterine from "./views/ArticlePage/Sections/ConsentementEmbolisationUterine";
import ConsentementDrainageBiliaire from "./views/ArticlePage/Sections/ConsentementDrainageBiliaire";
import ConsentementDrainageCollection from "./views/ArticlePage/Sections/ConsentementDrainageCollection";

import ConsentementAngioplastieVeineuse from "./views/ArticlePage/Sections/ConsentementAngioplastieVeineuse";
import ConsentementAngioplastieFistuleAV from "./views/ArticlePage/Sections/ConsentementAngioplastieFistuleAV";
import ConsentementAngioplastieArterielle from "./views/ArticlePage/Sections/ConsentementAngioplastieArterielle";
import ConsentementAngiographie from "./views/ArticlePage/Sections/ConsentementAngiographie";
import ConsentementETTEffort from "./views/ArticlePage/Sections/ConsentementETTEffort";
import ConsentementEto from "./views/ArticlePage/Sections/ConsentementEto";
import AblationFaAsymptomatique from "./views/ToposPage/Topos/AblationFaAsymptomatique";
import ErrorPage from "./views/ErrorPage/ErrorPage";



export const url_localisation = "/localisation";
export const url_listePathologieRythmoPatient = "/rythmologie/pathologies";
export const url_listeProcedureRythmoPatient = "/rythmologie/procedures";
export const url_article = "/article"
export const url_fichePathologie_patient_FA = "/rythmologie/pathologies/FA";
export const url_presentations = "/presentation";

export const url_episodeFv = "/presentation/episodefv";
export const url_rythmologie = "/rythmologie";
export const url_ablationFa = "/rythmologie/procedures/ablationFa";
export const url_posePM = "/rythmologie/procedures/paceMaker";
export const url_poseDai = "/rythmologie/procedures/defibrillateur";
export const url_infoTV = "/rythmologie/procedures/ablationTv";

export const url_dilatationCoronaire = "/coronarographie/procedures/dilatationCoronaire";
export const url_infoCoronarographie = "/coronarographie/procedures/infoCoronarographie";


export const url_listeProcedurePatient = "/procedures";
export const url_coronarographie = "/coronarographie";
export const url_echographie = "/echographie";

export const url_radiologie = "/radiologie";
export const url_congenital = "/congenital";


export const url_consentementTavi = "/coronarographie/procedures/consentementTavi";
export const url_consentementFop = "/coronarographie/procedures/consentementFop";
export const url_consentementHolterImplantable = "/rythmologie/procedures/consentementHolterImplantable";
export const url_consentementChocElectrique = "/rythmologie/procedures/chocElectrique";

export const url_consentementRadiofrequence = "/radiologie/procedures/radiofrequence";
export const url_consentementNephrostomie = "/radiologie/procedures/nephrostomie";
export const url_consentementFistulographie = "/radiologie/procedures/fistulographie";
export const url_consentementEmbolisationVaricocele = "/radiologie/procedures/embolisationvaricocele";
export const url_consentementEmbolisationProstate = "/radiologie/procedures/embolisationprostate";
export const url_consentementEmbolisationVaricePelvienneFemme = "/radiologie/procedures/embolisationvaricepelviennefemme";
export const url_consentementEmbolisationVaricePelvienneHomme = "/radiologie/procedures/embolisationvaricepelviennehomme";
export const url_consentementEmbolisationFibromeUterin = "/radiologie/procedures/embolisationfibromeuterin";
export const url_consentementDrainageBiliaire = "/radiologie/procedures/drainagebiliaire";
export const url_consentementDrainageCollection = "/radiologie/procedures/drainagecollection";
export const url_consentementAngioplastieVeineuse = "/radiologie/procedures/angioplastieveineuse";
export const url_consentementAngioplastieFistuleArterioVeineuse = "/radiologie/procedures/angioplastiefistuleav";
export const url_consentementAngioplastieArterielle = "/radiologie/procedures/angioplastiearterielle";
export const url_consentementAngiographie = "/radiologie/procedures/angiographie";

export const url_consentementEttStress = "/echographie/consentement/echoragphiestress";
export const url_consentementEto = "/echographie/consentement/eto";


export const url_presentation = "/presentation";
export const url_presentation_ablationFaAsymptomatique = "/presentation/ablationFaAsymptomatique";







var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/error-page" component={ErrorPage} />

        <Route path="/rythmologie/" component={RythmologieRouter} />
        <Route path="/coronarographie/" component={CoronarographieRouter} />
        <Route path="/radiologie/" component={RadiologieRouter} />
        <Route path="/echographie/" component={EchographieRouter} />
        <Route path="/congenital/" component={CongenitalRouter} />
        <Route path={url_presentation} component={PresentationRouter} />

        <Route exact path={url_localisation} component={Localisation} />
        <Route exact path={url_procedure_exploration} component={ExplorationElectrophysiologique} />
        <Route exact path={url_listeProcedurePatient} component={ListeProcedurePage} />






      <Route path="/" component={IcsPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);


function RythmologieRouter(){

  return(
      <Switch>
          <Route exact path={url_rythmologie} component={RythmoPage} />
          <Route exact path="/rythmologie/pathologie" component={PathologieRythmoPage} />
          <Route exact path="/rythmologie/pathologie/ta" component={TachycardieAtrialePage} />
          <Route exact path={url_listePathologieRythmoPatient} component={ListePathologieRythmoPatient} />
          <Route exact path={url_fichePathologie_patient_FA} component={InfoFa} />
          <Route exact path={url_listeProcedureRythmoPatient} component={ListeProcedureRythmoPatient} />
          <Route exact path={url_ablationFa} component={AblationFa} />
          <Route exact path={url_posePM} component={PosePaceMaker} />
          <Route exact path={url_poseDai} component={PoseDai} />
          <Route exact path={url_infoTV} component={InfoTv} />
          <Route exact path={url_consentementHolterImplantable} component={ConsentementHolterSousCutane} />
          <Route exact path={url_consentementChocElectrique} component={ConsentementChocElectrique} />
      </Switch>
  )
}

function CoronarographieRouter(){

    return(
        <Switch>
            <Route exact path={url_coronarographie} component={CoronarographiePage} />
            <Route exact path={url_dilatationCoronaire} component={DilatationCoronaire} />
            <Route exact path={url_infoCoronarographie} component={InfoCoronarographie} />
            <Route exact path={url_consentementTavi} component={ConsentementTavi} />
            <Route exact path={url_consentementFop} component={ConsentementFermetureFop} />
        </Switch>
    )
};

function RadiologieRouter(){

    return(
        <Switch>
            <Route exact path={url_radiologie} component={RadiologieInterventionnellePage} />
            <Route exact path={url_consentementRadiofrequence} component={ConsentementRadiofrequence} />
            <Route exact path={url_consentementNephrostomie} component={ConsentementNephrostomie} />
            <Route exact path={url_consentementFistulographie} component={ConsentementFistulographie} />
            <Route exact path={url_consentementEmbolisationVaricocele} component={ConsentementEmbolisationVaricocele} />
            <Route exact path={url_consentementEmbolisationVaricePelvienneFemme} component={ConsentementEmbolisationVaricePelvienneFemme} />
            <Route exact path={url_consentementEmbolisationVaricePelvienneHomme} component={ConsentementEmbolisationVaricePelvienneHomme} />
            <Route exact path={url_consentementEmbolisationFibromeUterin} component={ConsentementEmbolisationUterine} />
            <Route exact path={url_consentementEmbolisationProstate} component={ConsentementEmbolisationProstate} />
            <Route exact path={url_consentementDrainageBiliaire} component={ConsentementDrainageBiliaire} />
            <Route exact path={url_consentementDrainageCollection} component={ConsentementDrainageCollection} />
            <Route exact path={url_consentementAngioplastieVeineuse} component={ConsentementAngioplastieVeineuse} />
            <Route exact path={url_consentementAngioplastieArterielle} component={ConsentementAngioplastieArterielle} />
            <Route exact path={url_consentementAngiographie} component={ConsentementAngiographie} />
            <Route exact path={url_consentementAngioplastieFistuleArterioVeineuse} component={ConsentementAngioplastieFistuleAV} />
        </Switch>
    )
}

function EchographieRouter(){

    return(
        <Switch>
            <Route exact path={url_echographie} component={EchographiePage} />
            <Route exact path={url_consentementEttStress} component={ConsentementETTEffort} />
            <Route exact path={url_consentementEto} component={ConsentementEto} />
        </Switch>
    )
}

function CongenitalRouter(){

    return(
        <Switch>
            <Route exact path={url_congenital} component={CongenitalPage} />
        </Switch>
    )
}

function PresentationRouter(){

    return(
        <Switch>
            <Route exact path={url_presentation} component={ToposPage} />
            <Route exact path={url_presentation_ablationFaAsymptomatique} component={AblationFaAsymptomatique} />
            <Route exact path={url_episodeFv} component={EpisodeFv} />
        </Switch>
    )
}






