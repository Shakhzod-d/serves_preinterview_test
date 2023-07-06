import React from "react";

import "./Section.css";
import { Header } from "../../components";
import { SectionA } from "../../components/SectionA/Section";
import { SectionB } from "../../components/SectionB/SectionB";
import { SectionC } from "../../components/SectionC/SectionC";
import { SectionD } from "../../components/SectionD/SectionD";
import { Footer } from "../../components/Footer/Footer";

export const Section = () => {
  return (
    <div className="section">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </div>
  );
};
