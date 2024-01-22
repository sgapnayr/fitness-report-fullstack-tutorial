import BaseTable from "@/components/BaseTable";
import BaseWrapper from "@/components/BaseWrapper";

export default function Home() {
  return (
    <BaseWrapper>
      <h1 className="my-8 w-full text-center font-bold text-3xl">
        Fitness Reports
      </h1>
      <BaseTable />
    </BaseWrapper>
  );
}
