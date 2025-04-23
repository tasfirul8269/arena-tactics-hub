
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Games from "@/components/home/Games";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Games />
      <CallToAction />
    </Layout>
  );
};

export default Index;
