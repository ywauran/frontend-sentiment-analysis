import React from "react";
import Accordion from "../components/Accordion";
import General from "../components/General";
import Service from "../components/Service";
import PublicRelations from "../components/PublicRelations";
import Counseling from "../components/Counseling";
import Category from "../components/Category";

const CalculatePage = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <Accordion
          title="Umum"
          content={
            <>
              <General />
            </>
          }
        />
        <Accordion
          title="Pelayanan"
          content={
            <>
              <Service />
            </>
          }
        />
        <Accordion
          title="Kehumasan"
          content={
            <>
              <PublicRelations />
            </>
          }
        />
        <Accordion
          title="Penyuluhan"
          content={
            <>
              <Counseling />
            </>
          }
        />
        <Accordion
          title="Kategori"
          content={
            <>
              <Category />
            </>
          }
        />
      </div>
    </>
  );
};

export default CalculatePage;
