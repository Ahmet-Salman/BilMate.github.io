import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography
        id="team-section"
        variant="h3"
        align="center"
        className="mg-bottom"
      >
        The Team
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Onuralp Avcı"
              image={
                <img
                  style={{ borderRadius: "10px" }}
                  src={`${process.env.PUBLIC_URL}/images/onur.jpg`}
                  alt="Onuralp"
                />
              }
              features={[
                "Android Developer",
                "Product Deployment Engineer",
                "Frontend Architect",
                <div>
                  Check Logbook{" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/logbooks/T2335_21902364_cs491_logbook.html`}
                    class="alert-link"
                  >
                    Here
                  </a>
                </div>,
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Javid Moradi"
              image={
                <div style={{ float: "right", textAlign: "center" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`${process.env.PUBLIC_URL}/images/javid.jpg`}
                    alt="Javid"
                  />
                </div>
              }
              features={[
                "Android Developer",
                "UI Tester",
                "UX Expert",
                <div>
                  Check Logbook{" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/logbooks/T2335_21903645_cs491_logbook.html`}
                    class="alert-link"
                  >
                    Here
                  </a>
                </div>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Ahmet Salman"
              image={
                <div style={{ float: "right", textAlign: "center" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`${process.env.PUBLIC_URL}/images/ahmet.jpg`}
                    alt="Ahmet"
                  />
                </div>
              }
              features={[
                "Backend Developer",
                "AWS Integration",
                "DB Designer",
                <div>
                  Check Logbook{" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/logbooks/T2335_21901004_cs491_logbook.html`}
                    class="alert-link"
                  >
                    Here
                  </a>
                </div>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Atasagun Samed Şanap"
              image={
                <div style={{ float: "right", textAlign: "center" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`${process.env.PUBLIC_URL}/images/atasagun.jpg`}
                    alt="Atasagun"
                  />
                </div>
              }
              features={[
                "Backend Developer",
                "Graphic Designer",
                "Monetization Startegist",
                <div>
                  Check Logbook{" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/logbooks/T2335_21902435_cs491_logbook.html`}
                    class="alert-link"
                  >
                    Here
                  </a>
                </div>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "600" : "200"}
          >
            <PriceCard
              title="Ebrar Bozkurt"
              image={
                <div style={{ float: "right", textAlign: "center" }}>
                  <img
                    style={{ borderRadius: "10px" }}
                    src={`${process.env.PUBLIC_URL}/images/ebrar.jpg`}
                    alt="Ebrar"
                  />
                </div>
              }
              features={[
                "Backend Developer",
                "Security Expert",
                <div>
                  Check Logbook{" "}
                  <a
                    href={`${process.env.PUBLIC_URL}/logbooks/T2335_21802824_cs491_logbook.html`}
                    class="alert-link"
                  >
                    Here
                  </a>
                </div>,
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
