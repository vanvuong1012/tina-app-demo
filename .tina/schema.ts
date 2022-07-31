import { defineConfig, defineSchema } from "tinacms";
import type { TinaTemplate } from "tinacms";


const heroBlock: TinaTemplate = {
  name: "hero",
  label: "Hero Block",
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "string",
      label: "Sub Heading",
      name: "subheading"
    },
    
    {
      type: "image",
      name: "image",
      label: "Hero Image",
    }
  ],
};

const projectSection: TinaTemplate = {
  name: "projects",
  label: "Projects Section",
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "string",
      label: "Sub Heading",
      name: "subheading"
    },
    {
      type: "object",
      label: "Project Items",
      name: "items",
      list: true,
      fields: [
        {
          name: "image",
          label: "Project Image",
          type: "image"
        },
        {
          name: "name",
          label: "Content name",
          type: "string"
        },
        {
          type: "string",
          label: "Decscription",
          name: "decscription",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "href",
          label: "Link URL",
          type: "string"
        },
      ]
    }
  ]
}

const featureSection: TinaTemplate = {
  name: "features",
  label: "Featured Articles",
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "string",
      label: "Sub Heading",
      name: "subheading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Patient Instructions Items",
      name: "items",
      list: true,
      fields: [
        {
          name: "title",
          label: "Patient Instructions Title",
          type: "string",
        },
        
        {
          name: "link",
          label: "Patient Instructions Link",
          type: "string",
        },
       
        {
          name: "href",
          label: "Link URL",
          type: "string"
        },
      ]
    }
  ]
}

const financialBlock: TinaTemplate = {
  name: "financial",
  label: "Financial Block",
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "object",
      label: "Content Items",
      name: "items",
      list: true,
      fields: [
        {
          type: "string",
          label: "Content",
          name: "content",
          ui: {
            component: "textarea",
          },
        },
      ]
    },
  ],
};

const contactBlock: TinaTemplate = {
  name: "contact",
  label: "Contact Block",
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
  ],
}

const footerBlock: TinaTemplate = {
  name: "footer",
  label: "Footer Block",
  fields: [
    {
      type: "string",
      label: "Content",
      name: "content"
    },
  ],
}

const schema = defineSchema({
  config: {
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Section",
          templates: [heroBlock, projectSection, featureSection, financialBlock, contactBlock, footerBlock],
        },
      ],
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "datetime",
          label: "Publised Date",
          name: "date"
        },
        {
          type: "image",
          label: "Cover Image",
          name: "image"
        },
        {
          type: "string",
          label: "Author",
          name: "author"
        },
        {
          type: "string",
          label: "Category",
          name: "category",
          options: ["tutorial", "throught", "productivity", "other"],
          list: true
        },
        {
          type: "string",
          label: "Tags",
          name: "tags",
          list: true,
          ui: {
            component: "tags"
          }
        },
        {
          type: "string",
          label: "description",
          name: "description",
          ui: {
            component: "textarea"
          }
        },
        {
          type: "rich-text",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "youtube",
              label: "Youtube Video",
              fields:[
                {
                  type:"string",
                  label:"Youtube Video URL",
                  name:"url "
                }
              ]
            }
          ]
        },
      ],
    },
  ],
});

export default schema;

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  schema,
  cmsCallback: (cms) => {
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["page"].includes(collection.name)) {
          if (document._sys.filename === "home") {
            return "/";
          }
        }

        if (["post"].includes(collection.name)) {
          return `/posts/${document._sys.filename}`;
        }

        return undefined;
      });

      cms.plugins.add(RouteMapping);
    });
    return cms;
  },
});
