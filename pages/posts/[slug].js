import { staticRequest } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { VideoPlayer } from "../../components/Blog/VideoPlayer";

import {
  Box,
  Heading,
  Code,
  Text,
  chakra,
  Link,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Image from "next/image";

const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    date
    image
    author
    category
    tags
    description
    body
  }
}
`;

export default function Slug(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  const components = {
    h1: (props) => <Heading as="h1" fontSize="6xl" my={2} {...props} />,
    h2: (props) => (
      <Heading
        as="h2"
        color={mode("purple.600", "purple.300")}
        fontSize="5xl"
        my={2}
        {...props}
      />
    ),
    h3: (props) => (
      <Heading
        as="h3"
        color={mode("purple.600", "purple.300")}
        fontSize="4xl"
        my={2}
        {...props}
      />
    ),
    h4: (props) => (
      <Heading
        as="h4"
        color={mode("purple.600", "purple.300")}
        fontSize="3xl"
        my={2}
        {...props}
      />
    ),
    h5: (props) => (
      <Heading
        as="h5"
        color={mode("purple.600", "purple.300")}
        fontSize="2xl"
        my={2}
        {...props}
      />
    ),
    h6: (props) => (
      <Heading
        as="h6"
        color={mode("purple.600", "purple.300")}
        fontSize="xl"
        my={2}
        {...props}
      />
    ),
    li: (props) => <Box as="li" fontSize="xl" my={2} mx={4} {...props} />,
    ul: (props) => <Box as="ul" fontSize="xl" my={2} mx={4} {...props} />,
    ol: (props) => <Box as="ol" fontSize="xl" my={2} mx={4} {...props} />,
    a: (props) => {
      return <Link href={props.href}>{props.children}</Link>;
    },
    code: (props) => {
      return (
        <Code colorScheme="purple" fontSize="xl" my={2}>
          {props.children}
        </Code>
      );
    },
    p: (props) => {
      return <Text fontSize="xl" my={2} {...props} />;
    },
    img: (props) => {
      const BlogImage = chakra(Image, {
        shouldForwardProp: (prop) =>
          ["height", "width", "quality", "src", "alt"].includes(prop),
      });
    },
    youtube: (props) => {
      return (<VideoPlayer url={props.url}/>) ;
    },
  }

  return (
    <>
      <div>
        <Box maxWidth="1080px" width="100%" mx="auto" mt={[2,4]} mb="4" px="4">
            <article>
              <Heading as="h1" color="purple.300" size="3xl" textAlign="center" my={8} >
                {data.post.title}
              </Heading>
              <TinaMarkdown content={data.post.body} components={components}/>
            </article>
        </Box>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
        postConnection {
          edges {
            node {
              _sys {
                filename
              }
            }
          }
        }
      }`,
    variables: {},
  });
  const paths = postsResponse.postConnection.edges.map((x) => {
    return { params: { slug: x.node._sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".mdx",
  };
  let data = null;
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
