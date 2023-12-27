import HeroItem from "../Molecules/HeroItem";

export default function HeroItems() {
  const heroItems = [
    {
      title: "TypeScript",
      description:
        "JavaScript superset to build my projects in a type-safe way.",
      href: "/",
      image: "/images/experience/typescript.svg",
    },
    {
      title: "ReactJS & NextJS",
      description:
        "Using these tools to build performant and scalable web applications.",
      href: "",
      image: "/images/experience/react.png",
    },
    {
      title: "Tailwind CSS",
      description:
        "I use this utility-first CSS framework to build my projects.",
      href: "",
      image: "/images/experience/tailwind.png",
    },

    {
      title: "REST, GraphQL",
      description:
        "I have experience with both. I prefer GraphQL for its flexibility and performance. But depends on the project.",
      href: "",
      image: "/images/experience/graphql.png",
    },
    {
      title: "Node JS",
      description:
        "Backend services for my projects. I have experience with ExpressJS, NestJS, and Fastify.",
      href: "",
      image: "/images/experience/node.png",
    },
    {
      title: "Cypress & Jest",
      description:
        "Testing is a must for every project. I use these tools to test my projects.",
      href: "",
      image: "/images/experience/cypress.png",
    },
  ];

  return (
    <div className="grid gap-2 md:grid-cols-3">
      {heroItems.map((item, index) => (
        <HeroItem key={index} item={item} />
      ))}
    </div>
  );
}
