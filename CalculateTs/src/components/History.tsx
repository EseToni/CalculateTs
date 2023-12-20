import LucideHistory from "../assets/LucideHistory.svg";

const History = ({ history }: { history: string[] }) => {
  const renderHistory = () => {
    return history.map((history, index) => {
      const op = history.split("=")[0];
      const result = history.split("=")[1];
      return (
        <div key={index}>
          <h3>{op} =</h3>
          <h2>{result}</h2>
        </div>
      );
    });
  };

  return (
    <div className="contHistory">
      <div className="historyLogo">
        <img src={LucideHistory} alt="history" />
        <h1>History</h1>
      </div>
      <section>{renderHistory()}</section>
    </div>
  );
};

export default History;
