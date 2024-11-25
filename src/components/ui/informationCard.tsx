const DotIndicator = () => {
  return (
    <div className="mb-6 h-2 w-2 flex-shrink-0 animate-bounce rounded-full bg-zinc-600 dark:bg-gray-300 sm:mb-0"></div>
  );
};

export const InformationCard = ({ title, date, description, badge }: any) => {
  return (
    <div className="my-8 ml-2 flex items-center space-x-4">
      <DotIndicator />
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <h3 className="text-[17px] font-medium sm:text-lg">{title}</h3>
          <p className="text-sm italic text-gray-500 dark:text-gray-400 sm:text-base">{date}</p>
        </div>
        <p className="text-base dark:text-gray-300 sm:text-[17px]">{description}</p>
      </div>
      {badge && <span className="rounded-full border border-gray-300 px-2 py-0.5 text-xs">{badge}</span>}
    </div>
  );
};
