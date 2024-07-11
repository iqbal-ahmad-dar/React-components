import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "../../assets/css/Accordion/index.module.css"
const propTypes = {
  accordions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
const Accordions = ({ accordions = [], label }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!Array.isArray(accordions)) {
    return null;
  }
  return (
    <div className='mb-2.5'>
      {label && <label className={style.label}>{label}</label>}

      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {accordion.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {accordion.subtitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
Accordions.propTypes = propTypes;
export default Accordions;
