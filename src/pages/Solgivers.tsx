import React from "react";
import SolNavbar from "@/components/solgivers/SolNavbar";
import SolHero from "@/components/solgivers/SolHero";
import SolAbout from "@/components/solgivers/SolAbout";
import SolServices from "@/components/solgivers/SolServices";
import SolBusiness from "@/components/solgivers/SolBusiness";
import SolHistory from "@/components/solgivers/SolHistory";
import SolTeam from "@/components/solgivers/SolTeam";
import SolLocation from "@/components/solgivers/SolLocation";
import SolContact from "@/components/solgivers/SolContact";
import SolFooter from "@/components/solgivers/SolFooter";

const Solgivers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <SolNavbar />
      <SolHero />
      <SolAbout />
      <SolServices />
      <SolBusiness />
      <SolHistory />
      <SolTeam />
      <SolLocation />
      <SolContact />
      <SolFooter />
    </div>
  );
};

export default Solgivers;
