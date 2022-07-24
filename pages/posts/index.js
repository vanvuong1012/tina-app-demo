import { staticRequest } from "tinacms";
import Link from "next/link";
import { useTina } from "tinacms/dist/edit-state";

import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import { FeaturedPost } from "../../components/Blog/FeaturedPost/FeaturedPost";
import { Layout } from "../../components/Layout/Layout";

const query = `{
  postConnection {
    edges {
      node {
        id
        _sys {
          filename
        }
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
  const postsList = data.postConnection.edges;
  const sortedPosts = postsList.sort((a, b) => {
    return new Date(b.node.data.date) - new Date(a.node.data.date);
  });
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
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
