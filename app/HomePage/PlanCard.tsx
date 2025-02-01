const PlanCard = ({ planName, details }: { planName: string; details: string[] }) => {
    return (
      <div className="border p-4 text-center bg-gray-800 text-white">
        <h2 className="text-2xl">{planName}</h2>
        <ul className="mt-4">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PlanCard;
  