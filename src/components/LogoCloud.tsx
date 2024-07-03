import Image from "next/image";

const logos = [
  { src: "/logos/react.svg", alt: "React" },
  { src: "/logos/docker.svg", alt: "Docker" },
  { src: "/logos/java.svg", alt: "Java" },
  { src: "/logos/prisma.svg", alt: "Prisma" },
  { src: "/logos/github.svg", alt: "GitHub" },
  { src: "/logos/azure.svg", alt: "Azure" },
  { src: "/logos/jenkins.svg", alt: "Jenkins" },
];

const logosReverse = [
  { src: "/logos/aws.svg", alt: "AWS" },
  { src: "/logos/gcp.svg", alt: "GCP" },
  { src: "/logos/git.svg", alt: "Git" },
  { src: "/logos/sql.svg", alt: "SQL" },
  { src: "/logos/ts.svg", alt: "TypeScript" },
  { src: "/logos/node.svg", alt: "Node.js" },
  { src: "/logos/next.svg", alt: "Next.js" },
  { src: "/logos/py.svg", alt: "Python" },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, index) => (
                  <div key={index}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={40}
                      height={40}
                      className="dark:invert"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud-reverse flex-row justify-around gap-6"
              >
                {logosReverse.map((logo, index) => (
                  <div key={index}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={40}
                      height={40}
                      className="brightness-0 dark:invert"
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
