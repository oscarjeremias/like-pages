import { HeadPage  } from "../components/head";
import { NextSeoPage } from "../components/nextSeo";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { CardHomePage  } from "../components/CardHomePage"
import { useState } from "react";
import axios from "axios";

interface IdataAbasFooter {
  title: string;
  description: string;
}

function Home(props:any) {
  const [cardActive,setCardActive] = useState<boolean>(false)
  const [dataAbasFooter,setDataAbasFooter] = useState<IdataAbasFooter>({
    title: "",
    description: ""
  })
  return (
    <>
      <HeadPage
      title={props.data.homePageTitle} 
      description={props.data.homePageTextFrist} 
      tags={props.data.homePageTags}/>

      <NextSeoPage 
      title={props.data.homePageTitle} 
      description={props.data.homePageTextFrist} 
      image={props.data.favicon.url} 
        url={""}/> 

      <Header url_image={props.data.favicon.url} />
      <Main 
        frist_text={props.data.homePageTextFrist}
        text_logo={props.data.homePageTextLogo}
        image_frist={props.data.homePageFristImage.url}
        secund_text={props.data.homePageTextSecund}
        frist_button_text={props.data.homePageTextButton}
        response_secund_text={props.data.homePageTextRespostaDoTextSecund}
        services={props.data.services1}
      />
      <Footer abasFooter={props.data.abasFooter} setCardActive={setCardActive} setDataAbasFooter={setDataAbasFooter}/>
      <CardHomePage cardActive={cardActive} setCardActive={setCardActive} dataAbasFooter={dataAbasFooter}/>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const res = await axios(`${process.env.URL_CMS}`, {
    method: "post",
    data: {
      query: `
      query MyQuery {
    pages {
    homePageTitle
    homePageTextSecund
    homePageTextFrist
    homePageTextButton
    favicon {
      url
    }
    homePageTextRespostaDoTextSecund
    homePageTextLogo
    homePageTags
    homePageFristImage {
      url
    }
    services1 {
      ... on Service {
        title
      }
    }
    abasFooter {
       ... on Service {
         title
         description
    }
   }
  }
}
      `
    }
  })

  return {
    props: {
      data: res.data.data.pages[0],
    }
  }
}
