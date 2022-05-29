import Head from "next/head";

const SEO = ({
  descrip = "Muhammad Kumail (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Kumail is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST",
  author = "MK",
  meta,
  title = "Muhammad Kumail | TheRealMVP",
  url = "",
}) => {
  const metaData = [
    {
      name: `description`,
      content: descrip,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: descrip,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:site_name`,
      content: `Muhammad Kumail`,
    },
    {
      property: `og:url`,
      content: `https://muhammadkumail.com/${url}`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: descrip,
    },
    {
      property: `twitter:url`,
      content: `https://muhammadkumail.com/${url}`,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href="https://www.muhammadkumail.com/" />
      <meta
        name="keywords"
        content="mern, react, fullstack, developer, programmer, designer, muhammad, kumail, therealmvp, entrepreneuer, freelancer, blockchain, solidity, ethereum, polygon, metaverse, aws, cloud, azure, gcp, lambda, serverless, flutter, react native"
      />
      {metaData.map(({ name, content, property }, i) =>
        property ? (
          <meta key={i} property={property} content={content} />
        ) : (
          <meta key={i} name={name} content={content} />
        )
      )}
    </Head>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

export default SEO;
