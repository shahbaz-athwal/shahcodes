const DotIndicator = () => {
  return (
    <div className="w-2 h-2 rounded-full mb-6 sm:mb-0 flex-shrink-0 bg-zinc-600 dark:bg-gray-300 animate-bounce"></div>
  );
};

export const InformationCard = ({ title, date, description, badge }: any) => {
  return (
    <div className="flex items-center space-x-4 ml-2 my-8">
      <DotIndicator />
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <h3 className="text-[17px] sm:text-lg font-medium">{title}</h3>
          <p className="text-sm sm:text-base italic text-gray-500 dark:text-gray-400">
            {date}
          </p>
        </div>
        <p className="text-base sm:text-[17px] dark:text-gray-300">
          {description}
        </p>
      </div>
      {badge && (
        <span className="text-xs border border-gray-300 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
};
