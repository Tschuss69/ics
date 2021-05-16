import React from "react";
// nodejs library that concatenates classes

// plugin that creates slider

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";


import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import NavPills from "../../../components/NavPills/NavPills";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = React.useState([101, 790]);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                    horizontal={{
                        tabsGrid: { xs: 12, sm: 2, md: 3 },
                        contentGrid: { xs: 12, sm: 10, md: 9 }
                    }}
                    color="rose"
                    tabs={[
                        {
                            tabButton: "Définition",
                            tabContent: definition
                        },
                        {
                            tabButton: "Est-ce fréquent?",
                            tabContent: (
                                <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.{" "}
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </p>
                      </span>
                            )
                        },
                        {
                            tabButton: "Les risques",
                            tabContent: (
                                <span>
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.{" "}
                        </p>
                        <br />
                        <p>
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
                      </span>
                            )
                        },
                        {
                            tabButton: "Les causes",
                            tabContent: (
                                <span>
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.{" "}
                        </p>
                        <br />
                        <p>
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </p>
                      </span>
                            )
                        }
                    ]}
                />
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

const definition =
        <div>
            La fibrillation atriale est une maladie des oreillettes cardiaque.
            Normalement, la contraction des oreillettes est sous la dépendance du nœud sinusal, métronome du cœur situé dans l’oreillette droite.
            A son signal, toutes les cellules des oreillettes s’activent (se contractent un même temps) permettant l’éjection du sang des oreillettes vers les ventricules.
            Lorsque les oreillettes sont en fibrillation, il existe de multiples circuits rapides et anarchiques (300 à 400 battements/min), la contraction n’est plus harmonieuse, le rythme transmis au ventricule est irrégulier et rapide (tachycardie).
        </div>;


