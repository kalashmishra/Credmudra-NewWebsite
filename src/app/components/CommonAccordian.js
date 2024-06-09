
"use client"
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
import { Container } from "@mui/material";

const CommonAccordion = ({ items }) => {
    const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" align='left'>
      {items.map((item, index) => (
        <Accordion elevation={0}
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
         key={index} sx={{  backgroundColor: "transparent",
         marginTop: "40px",
        
         boxShadow: "0 3px 6px rgba(0,0,0,.08)",
         borderRadius: "10px",
         border: "none !important",
         "&::before": {
           content: "''",
           height: "0px",
         },}}>
          <AccordionSummary
            expandIcon={<Icon path={mdiMenuDown} size={1} />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: { xs: ".7rem", sm: "1rem", md: "1rem" },
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default CommonAccordion;
