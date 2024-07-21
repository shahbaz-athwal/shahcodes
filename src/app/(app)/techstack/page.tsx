import AnimatedLogoCloud from "@/components/LogoCloud";
import { PageHeader } from "@/components/ui/page-header";

function Page() {
  return (
    <div className="p-1">
      <section className="mb-6">
      <PageHeader title="My Tech Stack" />
        <p className="text-base sm:text-[17px] mt-8 leading-relaxed">
          I create web applications using <strong>Next.js</strong> and also work
          with <strong>React</strong> combined with <strong>Express</strong> in{" "}
          <strong>TypeScript</strong>. I practice Data Structures and Algorithms
          in <strong>Python</strong>. My go-to database is{" "}
          <strong>PostgreSQL</strong>.
        </p>
        <p className="text-[17px] mt-4">
          My favorite tool for streamlining workflows is <strong>Docker</strong>{" "}
          and I write my <strong>CI/CD</strong> pipelines in{" "}
          <strong>GitHub Actions</strong>.
        </p>
        <p className="text-[17px] mt-4">
          <strong>AWS</strong> services I use regularly, includes{" "}
          <strong>EC2</strong>, <strong>Elastic Beanstalk</strong>,{" "}
          <strong>S3</strong>, <strong>CloudFront</strong>,
          <strong> Route 53</strong>, <strong>RDS</strong>, and{" "}
          <strong>Lambda</strong>.
        </p>
        <p className="text-[17px] mt-4">
          Currently, I am learning <strong>Kubernetes</strong>, advanced{" "}
          <strong>Docker</strong> concepts, and <strong>System Design</strong>{" "}
          principles. Also, getting started with <strong>Open Source Contributions</strong>.
        </p>
      </section>
      <AnimatedLogoCloud />
    </div>
  );
}

export default Page;
