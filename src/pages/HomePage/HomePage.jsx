import { Helmet } from 'react-helmet';
import SummerCamp from './../../components/SummerCamp/SummerCamp';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Middle Way - Мережа дитячих садочків та приватна школа</title>
        <meta
          name="description"
          lang="uk"
          content="Middle Way Camp - сайт компанії Middle Way, сайт літнього табору для відпочинку дітей."
        />
        <meta
          name="keywords"
          lang="uk"
          content="літній табір, Карпати, відпочинок дітей, активний відпочинок, дитячий відпочинок, гірський табір, пригоди у природі, туризм, екскурсії, табір для дітей, спорт та розваги, організований відпочинок"
        />
        <link rel="canonical" href="https://middle-way-capm2024.netlify.app/" />
        <link
          rel="alternate"
          href="https://middle-way-capm2024.netlify.app/"
          hreflang="uk"
        />
      </Helmet>
      <SummerCamp />
    </>
  );
};

export default HomePage;
