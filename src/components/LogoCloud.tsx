
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
                
                <img
                  key={1}
                  src={"react.svg"}
                  className="h-10 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"docker.svg"}
                  className="h-12 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
               
                <img
                  key={1}
                  src={"java.svg"}
                  className="h-10 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"prisma.svg"}
                  className="h-10 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"github.svg"}
                  className="h-10 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"azure.svg"}
                  className="h-10 w-auto px-2  dark:invert"
                  alt={"ts"}
                />
            
                <img
                  key={1}
                  src={"jenkins.svg"}
                  className="h-10 w-auto px-2 brightness-0 dark:invert"
                  alt={"ts"}
                />
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
                <img
                  key={1}
                  src={"/aws.svg"}
                  className="h-10 w-auto px-2 pt-2 brightness-0  dark:invert"
                  alt={"aws"}
                />
                <img
                  key={1}
                  src={"/gcp.svg"}
                  className="h-10 w-auto px-2 brightness-0  dark:invert"
                  alt={"aws"}
                />
                 <img
                  key={1}
                  src={"git.svg"}
                  className="h-10 w-auto px-2 brightness-0 dark:invert"
                  alt={"ts"}
                />
            
                
                <img
                  key={1}
                  src={"sql.svg"}
                  className="h-10 w-auto px-2  brightness-0 dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"ts.svg"}
                  className="h-10 w-auto px-2  brightness-0 dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"node.svg"}
                  className="h-10 w-auto px-2 brightness-0 dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"/next.svg"}
                  className="h-14 w-auto px-2 pb-4 brightness-0 dark:invert"
                  alt={"ts"}
                />
                <img
                  key={1}
                  src={"py.svg"}
                  className="h-10 w-auto px-2  brightness-0 dark:invert"
                  alt={"ts"}
                />
                
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
