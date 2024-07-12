import React from "react";
import SlantedBanner from "../components/SlantedBanner";
import OurPartners from "../components/ourPartner/page";
import SwiperComponent from "../components/slider/page";
import CreditScoreCheck from "../components/creditScore/page";
import LoanComparison from "../components/loanComparison/page";
import KeyFeatures from "../components/keyFeatures/page";
import LoanHunt from "./loanHunt/page";
import travel from "../../../public/assest/homeRenovation/travel.png";
import medical from "../../../public/assest/homeRenovation/medical.png";
import marriage from "../../../public/assest/homeRenovation/marriage.png";
import subscription from "../../../public/assest/homeRenovation/subscription.png";
import business from "../../../public/assest/homeRenovation/business.png";
import bike from "../../../public/assest/homeRenovation/bike.png";
import TreasureHuntSection from "./treasureHuntSection/page";
import EMICalculator from "./emiCalculator/page";
import MoreOption from "../components/moreoption/page";
import HomePage from "../components/HomePage/page";
import LandingPageAnimation from "../components/HomePage/LandingPageAnimation/page";

const Landingpage = () => {
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
        heading="Your loan adventure begins now!"
        subheading="With Credmudra -Bharat ka loan search engine.
                    We’re here to make fund search a breeze."
        offerText="New year offer !!"
        animation={LandingPageAnimation}
      />
      <SlantedBanner />
      <OurPartners
        heading="Get funded by our partners"
        subheading="The coolest partners in the game. Let’s make financial moves together!"
      />
      <SwiperComponent heading=" (Nearly) Perfect loan navigators" />
      <LoanComparison
        heading="Find the best options for your desired loan"
        subheading="Check your eligibility from our partners."
        useBackgroundImage={false}
        typographyColor="#000"
        captionBackgroundColor=" #3B5BBA1A"
        captionTextColor=" #3B5BBA"
      />

      <CreditScoreCheck />
      <KeyFeatures useBackgroundImage={true} />
      <LoanHunt />
      <MoreOption
        options={options}
        heading="Your Funds, Your Time, Your Ways"
        backgroundColor={"linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%)"}
      />
      <TreasureHuntSection />
      <EMICalculator />
    </>
  );
};

export default Landingpage;
