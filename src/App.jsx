import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Button from "@mui/material/Button";
import { PieChart } from "@mui/x-charts/PieChart";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <AccessAlarmIcon />

      <Button className="border-dotted border-2 border-red-500">
        Outlined
      </Button>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
}
