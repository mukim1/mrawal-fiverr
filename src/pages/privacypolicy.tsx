import React from "react";
import Layout from "../components/Layouts/Layout";
import CardFor4Page from "../components/SmComponent/CardFor4Page";
import PrivacyPolicy from "../UI/Homepage/Privacy-policy/PrivacyPolicy";

const privacypolicy = () => {
  return (
    <Layout>
      <PrivacyPolicy text="Privacy Policy" />
    </Layout>
  );
};

export default privacypolicy;
