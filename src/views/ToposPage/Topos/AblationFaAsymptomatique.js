/*eslint-disable*/
import React from "react";
import BasePDFPage from "./BasePDF";
// @material-ui/core components

import ablation_fa_asymptomatique from "../../../assets/pdf/toposElectrophy/ablation_fa_asymptomatique.pdf"


export default function AblationFaAsymptomatique() {
    return (
        <BasePDFPage
            title={"Ablation de FA asymptomatiUE ?"}
            url={ablation_fa_asymptomatique}
        />

    );
}
