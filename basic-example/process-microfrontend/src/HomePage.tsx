import React from "react";
import { Link } from "react-router-dom";

interface ProcessCardProps {
  process: IProcess;
}

export const ProcessCard = ({ process }: ProcessCardProps): JSX.Element => {
  return (
    <div style={{ border: "solid 1px", margin: "5px", padding: "5px" }}>
      <Link to={`/${process.id}`}>{process.name}</Link>
    </div>
  );
};

export const HomePage = (): JSX.Element => {
  const [processes, setProcesses] = React.useState<IProcess[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    const newProcesses: IProcess[] = [
      {
        id: 1,
        name: "Apply for leave",
      },
      {
        id: 2,
        name: "Configure machine for UI testing",
      },
      {
        id: 3,
        name: "Release version of promapp",
      },
    ];

    setTimeout(() => {
      setProcesses(newProcesses);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>All Processes</h2>

      {loading && <p>Loading processes...</p>}

      <ul>
        {processes.map((p) => (
          <li key={p.id}>
            <ProcessCard process={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
