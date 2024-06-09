// App.js
import CommonAccordion from '@/app/components/CommonAccordian';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';


const faqItems = [
  {
    question: 'How quickly can I get approval for a loan for home improvement?',
    answer: 'Approval times can vary based on your lender and financial profile.'
  },
  {
    question: 'Is a good credit score necessary for a loan for home improvement?',
    answer: 'While a good credit score can enhance approval chances and influence interest rates, we consider various factors. Individuals with different credit profiles are encouraged to apply.'
  },
  {
    question: "Can I apply for a loan for home improvement if I'm self-employed?",
    answer: 'Yes, self-employed individuals can apply for a home improvement loan. Additional documentation may be required.'
  },
  {
    question: 'Can I use a loan for home improvement for DIY projects or labor costs?',
    answer: 'Yes, the loan can be used for various expenses including DIY projects and labor costs.'
  }
];

const Faqs = () => {
  return (
    // <div>
    //   <h1>FAQs</h1>
    //   <p>Finding the right loans can be confusing! We’ve simplified the finance game for you.</p>
    //   <CommonAccordion items={faqItems} />
    // </div>
    <Container
    maxWidth="xl"
    sx={{
      minHeight: "100vh",
      textAlign: "center",

      paddingTop: "5%",
      pt: { xs: 7, sm: 8, md: 9 }
    }}
  >
    <Box
      sx={{
        textAlign: "center",
        // mt: { xs: 5, sm: 3, md: 9 },
        maxWidth: { xs: "250px", sm: "650px" },
        mx: "auto",
      }}
    >
      
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: "rgba(52, 52, 53, 1)",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        FAQs
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        sx={{
          fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
          mt: { xs: 2, sm: 3 },
        }}
      >
       Finding the right loans can be confusing! We’ve simplified the finance game for you.      </Typography>
    </Box>

  
    <Box sx={{mt:{ xs: 2, sm: 4 } }}>
      <CommonAccordion items={faqItems} />
    </Box>
  </Container>

  );
};

export default Faqs;
