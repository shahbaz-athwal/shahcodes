import AnimatedLogoCloud from "@/components/LogoCloud";

function TechStackPage() {
  return (
    <div className="container mt-8 p-2 dark:text-gray-300">
      <section className="text-justify mb-8">
        <h1 className="text-3xl text-center font-bold mb-8">My Tech Stack</h1>
        <p className="text-lg">
          I create web applications using <strong>Next.js</strong> and also work
          with <strong>React</strong> combined with <strong>Express</strong> in{" "}
          <strong>TypeScript</strong>. I practice Data Structures and Algorithms
          in <strong>Python</strong>. My go-to database is{" "}
          <strong>PostgreSQL</strong>.
        </p>
        <p className="text-lg mt-4">
          My favorite tool for streamlining workflows is <strong>Docker</strong>{" "}
          and I write my <strong>CI/CD</strong> pipelines in{" "}
          <strong>GitHub Actions</strong>.
        </p>
        <p className="text-lg mt-4">
          <strong>AWS</strong> services I use regularly, includes{" "}
          <strong>EC2</strong>, <strong>Elastic Beanstalk</strong>,{" "}
          <strong>S3</strong>, <strong>CloudFront</strong>,
          <strong> Route 53</strong>, <strong>RDS</strong>, and{" "}
          <strong>Lambda</strong>.
        </p>
        <p className="text-lg mt-4">
          Currently, I am learning <strong>Kubernetes</strong>, advanced{" "}
          <strong>Docker</strong> concepts, and <strong>System Design</strong>{" "}
          principles. Also, getting started with <strong>Open Source Contributions</strong>.
        </p>
      </section>
      <AnimatedLogoCloud />
    </div>
  );
}

export default TechStackPage;
