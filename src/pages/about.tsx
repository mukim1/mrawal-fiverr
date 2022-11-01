import React from "react";
import Layout from "../components/Layouts/Layout";
import PrivacyPolicy from "../UI/Homepage/Privacy-policy/PrivacyPolicy";

const about = () => {
  return (
    <Layout>
      <PrivacyPolicy text="About us" />
    </Layout>
  );
};

export default about;
