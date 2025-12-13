import ContentContainer from "@/components/ContentContainer";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/header/MainHeader";
import BioLinksPage from "@/components/links/inde";
import AppLayout from "@/layout/AppLayout";

export default function Home() {
  return (
    <>
      {" "}
      <BioLinksPage />
      {/* <AppLayout>
        <ContentContainer activeTab="home" />
      </AppLayout> */}
    </>
  );
}
