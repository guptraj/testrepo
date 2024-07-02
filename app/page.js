import AreaChart from '@/Components/AreaChart';
import BarChart from '@/Components/BarChart';
import LineChart from '@/Components/LineChart';
import PieChart from '@/Components/PieChart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
      <div className=" w-full gap-12 max-w-90%">
        <GridItem title="Area Chart">
          <AreaChart />
        </GridItem>

        <GridItem title="Bar Chart">
          <BarChart />
        </GridItem>

        <GridItem title="Line Chart">
          <LineChart />
        </GridItem>

        <GridItem title="Pie Chart">
          <PieChart />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center  border border-slate-900 bg-slate-900/50 rounded-xl h-[600px] mb-10">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
