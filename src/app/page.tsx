import ContentContainer from "@/components/ContentContainer";
import Footer from "@/components/footer/footer";
import MainHeader from "@/components/header/MainHeader";
import AppLayout from "@/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <ContentContainer activeTab="home" />
    </AppLayout>
  );
}
