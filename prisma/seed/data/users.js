module.exports = [
  {
    email: "alice@prisma.io",
    name: "Alice",
    posts: {
      create: {
        title: "Check out Prisma with Next.js",
        content: "https://www.prisma.io/nextjs",
        published: true,
      },
    },
  },
  {
    email: "bob@prisma.io",
    name: "Bob",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://twitter.com/prisma",
          published: true,
        },
        {
          title: "Follow Nexus on Twitter",
          content: "https://twitter.com/nexusgql",
          published: true,
        },
      ],
    },
  },
]