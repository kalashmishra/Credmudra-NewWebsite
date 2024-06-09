import React from "react";
import HomePage from "./homePage/page";
import OurPartners from "./ourPartners/page";
import SlantedBanner from "../components/SlantedBanner";
import LoanComparison from "./loanComparsion/page";
import CreditScoreCheck from "./creditScore/page";
import HomeImprovement from "./homeImprovement/page";
import Testimonials from "./realTalks/page";
import HomeLoan from "./homeLoan/page";
import DreamHome from "./dreamHome/page";
import SnapLoans from "./snapLoans/page";
import KeyFeatures from "./keyFeatures/page";
import EligibilityCriteria from "./eligibilityCriteria/page";
import TaxBenefits from "./taxtBenefits/page";
import Cities from "./cities/page";
import Faqs from "./faqs/page";
import ContactInfo from "./contactInfo/page";
import MoreOption from "./moreOption/page";

const HomeRenovation = () => {
  return (
    <>
      <HomePage />
      <SlantedBanner />
      <OurPartners />
      <LoanComparison />
      <CreditScoreCheck />
      <HomeImprovement />
      <Testimonials />
      <HomeLoan />
      <DreamHome />
      <SnapLoans />
      <KeyFeatures />
      <EligibilityCriteria />
      <TaxBenefits />
      <Cities />
      <Faqs />
      <ContactInfo />
      <MoreOption />
    </>
  );
};

export default HomeRenovation;
