import { notFound } from "next/navigation";
import { getCleaningPage, cleaningMetadata } from "@/utils/cleaningContent";
export const revalidate = 2592000; // applies to both page and metadata

import Header from "@/Components/UI/Header/Header";
import {
  getOptions,
} from "@/utils/fetchData";
import Footer from "@/Components/UI/Footer/Footer";
import Layout from "@/Components/UI/Layout/Layout";


export const metadata = cleaningMetadata("Move-Out Cleaning Hamilton | Fern Cleaning", "Arrange a move-out clean in Hamilton with Fern Cleaning. Tell us about your property and get a free, no-obligation quote.", "/move-out-cleaning-hamilton");

export default async function Home() {
  const data = await getCleaningPage(
    "move-out-cleaning-wellington",
    "/wp-json/wp/v2/cleaning-business",
  );
  const options = await getOptions();

  if (!data?.length) notFound();
  const sections = data[0]?.acf?.layout;

  return (
    <>
      <Header />
      <main>
        <Layout
          uspTable={options.usp_table}
          sections={sections}
          uspData={options.usp}
          hoursCalculatorData={options.hours_calculator}
          servicesData={options.services}
        />

        {/* <USP showTitle={true} statsArray={options.stats.items} cards={options.usp.items} title={options.usp.section_title} description={options.usp.section_description} /> */}
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
