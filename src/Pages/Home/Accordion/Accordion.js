import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div style={{ margin: '50px' }}>
            <Container>
                <h2 style={{ color: 'gray' }}>Some Basic Questions & Answer</h2>

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{ color: 'blue' }}>Why people use Lapel pins?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Fashion is a reflection of your choice, Everyone wants to make himself more attractive and unique, Coat pins are luxurious as well as stylish Stuff.We directly import our all stuffs from china and us , these are so authentic. Everyone willing to wear these in their blazer.Lapel pin is a pin which people wear in their blazer, coat for making it more beautiful.
                            Fashion is a reflection of your choice, Everyone wants to make himself more attractive and unique, Coat pins are luxurious as well as stylish Stuff.We directly import our all stuffs from china and us , these are so authentic. Everyone willing to wear these in their blazer.Lapel pin is a pin which people wear in their blazer, coat for making it more beautiful.
                            Fashion is a reflection of your choice, Everyone wants to make himself more attractive and unique, Coat pins are luxurious as well as stylish Stuff.We directly import our all stuffs from china and us , these are so authentic. Everyone willing to wear these in their blazer.Lapel pin is a pin which people wear in their blazer, coat for making it more beautiful.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{ color: 'blue' }}  >Why these are different in quality?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We directly import our all stuffs from china and us , these are so authentic. Everyone willing to wear these in their blazer.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{ color: 'blue' }}>What is lapel pin?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lapel pin is a pin which people wear in their blazer, coat for making it more beautiful.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>

        </div>
    );
}
