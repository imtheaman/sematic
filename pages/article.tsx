import { NextPage } from "next";

const HeaderArticle: NextPage<{ post: any }> = ({ post }) => {
  return <div>{JSON.stringify(post)}</div>;
};

export default HeaderArticle;

export const getStaticProps = async () => {
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-04-27&" +
    "sortBy=popularity&" +
    "6f2a024508594e8c938c9204495da379";
  const result = await fetch(url).then((res) => res.json());
  return {
    props: {
      post: result,
    },
  };
};
