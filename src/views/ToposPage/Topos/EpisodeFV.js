/*eslint-disable*/
import React from "react";
import BasePDFPage from "./BasePDF";
// @material-ui/core components

import episode_fv from "../../../assets/pdf/toposPaceDef/episode_fv.pdf"


export default function EpisodeFv() {
    return (
        <BasePDFPage
            title={"Episode de FV ?"}
            url={episode_fv}
        />

    );
}
