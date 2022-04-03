import { ResponsiveBar } from "@nivo/bar";
import { NextPage } from "next";

const InsightBar: NextPage = () => {
  const data = [
    {
      country: "india",
      stock: 30,
      realEstate: 60,
      crypto: 5,
      others: 5,
    },
    {
      country: "switzerland",
      stock: 62,
      realEstate: 10,
      crypto: 18,
      others: 10,
    },
    {
      country: "finland",
      stock: 70,
      realEstate: 12,
      crypto: 16,
      others: 2,
    },
    {
      country: "england",
      stock: 44,
      realEstate: 35,
      crypto: 14,
      others: 7,
    },
    {
      country: "germany",
      stock: 50,
      realEstate: 30,
      crypto: 5,
      others: 15,
    },
  ];
  return (
    <div className="rounded-lg bg-white shadow-md">
      <ResponsiveBar
        data={data}
        keys={["stock", "realEstate", "crypto", "others"]}
        margin={{ top: 30, right: 120, bottom: 40, left: 80 }}
        padding={0.5}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "crypto",
            },
            id: "lines",
          },
        ]}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [0, 25, 50, 75, 100],
          legend: "investments",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={2}
        labelSkipHeight={2}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        indexBy="country"
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default InsightBar;
