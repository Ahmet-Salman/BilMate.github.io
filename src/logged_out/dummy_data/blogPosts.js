import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const content = (
  <Fragment>
    <Typography variant="h6" paragraph>
    {/* <a href="https://www.w3schools.com">Visit W3Schools</a> */}
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem.
    </Typography>
    <Typography variant="h6" paragraph>
      Title
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
    <Typography variant="h6" paragraph>
      Title
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem.
    </Typography>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
  </Fragment>
);

const posts = [
  {
    title: "Project Specification Document",
    id: 1,
    date: 1665997200,
    src: `${process.env.PUBLIC_URL}/images/logged_out/projectSpec.jpg`,
    snippet: <h4>Download The Report From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Project_Specification_Document.pdf`} class="alert-link">Here</a></h4>,
    content: content,
  },
  {
    title: "Analysis Requirement Report",
    id: 2,
    date: 1668330000,
    src: `${process.env.PUBLIC_URL}/images/logged_out/projAnalysis.jpg`,
    snippet: <h4>Download The Report From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Analysis_Requirements_Report.pdf`} class="alert-link">Here</a></h4>,
    content: content,
  },
  {
    title: "Demo Presentation",
    id: 3,
    date: 1672304400,
    src: `${process.env.PUBLIC_URL}/images/logged_out/demoPres.png`,
    snippet: <h4>Download The Presentation From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Demo_Presentation.pdf`} class="alert-link">Here</a></h4>,
    content: content,
  },
  {
    title: "Detail Design Report",
    id: 4,
    date: 1678698000,
    src: `${process.env.PUBLIC_URL}/images/logged_out/DetailedDesign.png`,
    snippet: <h4>Download The Report From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Detail_Design_Document.pdf`} class="alert-link">Here</a></h4>,
    content: content,
  }
  // {
  //   title: "Final Report",
  //   id: 5,
  //   date: 1684486800,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/finalRep.png`,
  //   snippet: <h4>Download The Report From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Demo_Presentation.pdf`} class="alert-link">Here</a></h4>,
  //   content: content,
  // },
  // {
  //   title: "Final Presentation",
  //   id: 6,
  //   date: 1684746000,
  //   src: `${process.env.PUBLIC_URL}/images/logged_out/finalPres.png`,
  //   snippet: <h4>Download The Presentation From <a href={`${process.env.PUBLIC_URL}/docs/T2335_Demo_Presentation.pdf`} class="alert-link">Here</a></h4>,
  //   content: content,
  // },
];

export default posts;