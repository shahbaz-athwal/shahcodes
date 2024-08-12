import { IconLoader2 } from "@tabler/icons-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <IconLoader2 className="animate-spin mr-2" />
    </div>
  );
};

export default Loading;
