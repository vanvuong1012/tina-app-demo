import { staticRequest } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout/Layout";
import { Hero } from "../components/Home/Hero";
import { useTina } from "tinacms/dist/edit-state";
import { Fragment } from "react";
import { Projects } from "../components/Home/Project";
import { FeaturedArticles } from "../components/Home/FeaturedArticles";
import { FinancialAndInsuarance } from "../components/Home/FinancialAndInsuarance";
import { ContactUs } from "../components/Home/ContactUs";
import { Footer } from "../components/Home/Footer";
import { Information } from "../components/Home/Information";


const query = `{
  page(relativePath:"home.mdx"){id
    blocks{
     __typename
     ... on PageBlocksHero{
       heading
       subheading
       image
     }
     ... on PageBlocksProjects{
      heading,
      subheading,
      items{
        image
        name
        decscription
        href
      } 
     }
     ... on PageBlocksFeatures{
      heading,
      subheading,
      items{   
        title  
        link
        href
      }
     }
     ... on PageBlocksFinancial{
      heading
      items{
        content
      }
    }
    ... on PageBlocksContact{
      heading
    }
    ... on PageBlocksInformation{
       image
       subheading
       items{
        image
        name
        decscription
        href
      }
    }
    ... on PageBlocksFooter{
      content
    }
   }
  }
}`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  return (
    <Layout>
      {data && data.page.blocks
        ? data.page.blocks.map(function (block, i) {
          switch (block.__typename) {
            case "PageBlocksHero":
              return (
                <Fragment key={i + block.__typename}>
                  <Hero data={block}/>
                </Fragment>

              );
            case "PageBlocksProjects":
              return (
                <Fragment key={i + block.__typename}>
                  <Projects data={block}/>
                </Fragment>
              );
              case "PageBlocksFeatures":
              return (
                <Fragment key={i + block.__typename}>
                   <FeaturedArticles data={block}/>
                </Fragment>
              );
              case "PageBlocksFinancial":
              return (
                <Fragment key={i + block.__typename}>
                   <FinancialAndInsuarance data={block}/>
                </Fragment>
              );
              case "PageBlocksContact":
              return (
                <Fragment key={i + block.__typename}>
                   <ContactUs data={block}/>
                </Fragment>
              );
              case "PageBlocksInformation":
                return (
                  <Fragment key={i + block.__typename}>
                     <Information data={block}/>
                  </Fragment>
                );
              case "PageBlocksFooter":
              return (
                <Fragment key={i + block.__typename}>
                   <Footer data={block}/>
                </Fragment>
              );
          }
        }) : null}
    </Layout>
  );
}


export const getStaticProps = async () => {
  const variables = {};
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
