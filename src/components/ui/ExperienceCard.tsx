type CardExperienceProps = {
  title: string;
  location: string;
  date: string;
  additionalInfo?: string;
  onClick?: () => void;
};

const ExperienceCard = ({
  title,
  location,
  date,
  additionalInfo,
  onClick,
}: CardExperienceProps) => {
  return (
    <div
      className="min-w-[300px] h-38 p-5 flex flex-col justify-start gap-2 border-1 rounded-xl border-sky-950 bg-sky-900 drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-500"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm text-green-300">{date}</span>
        <span className="text-sm text-gray-400">{location}</span>
      </div>

      <span className="text-md flex-1">{title}</span>

      {additionalInfo && <div className="mt-auto">{additionalInfo}</div>}
    </div>
  );
};

export default ExperienceCard;
