import { notFound } from "next/navigation";
import { getCleaningPage, cleaningMetadata } from "@/utils/cleaningContent";
import Footer from "@/Components/UI/Footer/Footer";
import Header from "@/Components/UI/Header/Header";
import Layout from "@/Components/UI/Layout/Layout";
import { getOptions } from "@/utils/fetchData";

export const metadata = cleaningMetadata("End-of-Tenancy Cleaning Hamilton | Fern Cleaning", "Professional end-of-tenancy cleaning in Hamilton. Let Fern Cleaning help prepare your rental for inspection. Request a free quote.", "/end-of-tenancy-cleaning");

export default async function Page() {
  const options = await getOptions();
  const data = await getCleaningPage(
    "end-of-tenancy-cleaning-k-cleaning-solution",
    "/wp-json/wp/v2/cleaning-business",
  );
  if (!data?.length) notFound();
  const sections = data[0]?.acf?.layout;

  return (
    <>
      <Header />
      <main>
        <Layout sections={sections} />
      </main>
      <Footer
        showFooterCta={false}
        className="mt-32"
        footerCtaData={options.footer_cta}
        contactInfo={options.contact_info}
        socialData={options.social_links}
        certifications={options.certifications}
      />
    </>
  );
}
