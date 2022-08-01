import { staticRequest } from "tinacms";
import Link from "next/link";
import { useTina } from "tinacms/dist/edit-state";
import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { FeaturedPost } from "../../components/Blog/FeaturedPost/FeaturedPost";
import { Layout } from "../../components/Layout/Layout";
const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    body
  }
}
`;

export default function Home(props) {
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  const postsList = data.getPostList.edges;
  const sortedPosts = postsList.sort((a, b) => {
    return new Date(b.node.data.date) - new Date(a.node.data.date);
  });
  return (
    <Layout>
      <div>{data.post.title}</div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let data = {};
  const variables = {};
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