import React from "react";
import OurPartners from "../components/ourPartner/page";
import SlantedBanner from "../components/SlantedBanner";
import LoanComparison from "../components/loanComparison/page";
import CreditScoreCheck from "../components/creditScore/page";
import HomeImprovement from "./homeImprovement/page";
import HomeLoan from "./homeLoan/page";
import DreamHome from "./dreamHome/page";
import KeyFeatures from "../components/keyFeatures/page";
import EligibilityCriteria from "./eligibilityCriteria/page";
import TaxBenefits from "./taxtBenefits/page";
import Cities from "./cities/page";
import Faqs from "./faqs/page";
import ContactInfo from "./contactInfo/page";
import SwiperComponent from "../components/slider/page";
import SnapLoans from "./snapLoans/page";

import MoreOption from "../components/moreoption/page";
import travel from "../../../public/assest/homeRenovation/travel.png";
import medical from "../../../public/assest/homeRenovation/medical.png";
import marriage from "../../../public/assest/homeRenovation/marriage.png";
import subscription from "../../../public/assest/homeRenovation/subscription.png";
import business from "../../../public/assest/homeRenovation/business.png";
import bike from "../../../public/assest/homeRenovation/bike.png";
import HomePage from "../components/HomePage/page";
import Animation from "../components/HomePage/animation/page";

const HomeRenovation = () => {
  const options = [
    {
      img: business,
      text: " Loan for ",
      text2: "Business",
      amount: "Upto ₹ 10 lakh",
    },
    {
      img: medical,
      text: "Loan for",
      text2: " Medical Emergencies",
      amount: "Upto ₹ 10 lakh",
    },
    {
      img: travel,
      text: "Loan for",
      text2: "Travel",
      amount: "Upto ₹ 10 lakh",
    },
    {
      img: bike,
      text: "Loan for",
      text2: " Two Wheeler",
      amount: "Upto ₹ 10 lakh",
    },
    {
      img: marriage,
      text: "Loan for ",
      text2: "marriage",
      amount: "Upto ₹ 10 lakh",
    },
    {
      img: subscription,
      text: "Loan for ",
      text2: "Consumer Durable",
      amount: "Upto ₹ 10 lakh",
    },
  ];
  
  return (
    <>
      <HomePage
        heading="Upgrade your space with Loan for Home Improvement!"
        subheading="We've got it covered on all things renovation."
        offerText="Asian Paints Offer !!"
        animation ={Animation}
      />
      <SlantedBanner />
      <OurPartners  heading="Get funded by our partners"
        subheading="The coolest partners in the game. Let’s make financial moves together!"
       />
      <LoanComparison heading="Compare loan for home Improvement rates like a pro!"
        subheading="Check your eligibility from our partners."
    

      
      />
      <CreditScoreCheck />
      <HomeImprovement />
      <SwiperComponent heading=' Real talk: What our customers are saying'/>
      <HomeLoan />
      <DreamHome />
      <SnapLoans />
      <KeyFeatures />
      <EligibilityCriteria />
      <TaxBenefits />
      <Cities />
      <Faqs />
      <ContactInfo />
      <MoreOption options={options} heading='Dive into more with Credmudra' />

    </>
  );
};

export default HomeRenovation;
