import { notFound } from "next/navigation";
import { getCleaningPage, cleaningMetadata } from "@/utils/cleaningContent";
export const revalidate = 2592000; // applies to both page and metadata

import Header from "@/Components/UI/Header/Header";
import {
  getOptions,
} from "@/utils/fetchData";
import Footer from "@/Components/UI/Footer/Footer";
import Layout from "@/Components/UI/Layout/Layout";


export const metadata = cleaningMetadata("Professional Cleaners in Hamilton | Fern Cleaning", "Professional home cleaning in Hamilton and surrounding areas. Regular cleans, move-in and move-out cleaning, carpets, ovens and windows. Request a free quote.", "/");

export default async function Home() {
  const data = await getCleaningPage(
    "fern-cleaning",
    "/wp-json/wp/v2/cleaning-business",
  );
  const options = await getOptions();

  if (!data?.length) notFound();
  const cmsSections = data[0]?.acf?.layout || [];
  const sections = cmsSections.some((section) => ["services", "tabs_section", "show_services"].includes(section.acf_fc_layout))
    ? cmsSections
    : [cmsSections[0], { acf_fc_layout: "services" }, ...cmsSections.slice(1)].filter(Boolean);

  return (
    <>
      <Header />
      <main>
        <Layout
          uspTable={options.usp_table}
          sections={sections}
          uspData={options.usp}
          locationsCovered={options.locations_covered}
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
