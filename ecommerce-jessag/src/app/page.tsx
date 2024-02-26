'use client';
import FilterByPriority from "@/components/filterBar/filter-by-priority";
import FilterByType from "@/components/filterBar/filter-by-type";
import ProductsList from "@/components/products/products-list";

export default function Home() {
  return (
      <main className="py-5 px-40  min-h-screen bg-custom-bgMain max-[800px]:px-12">
        <section className="flex items-baseline justify-between max-[800px]:flex max-[800px]:flex-col max-[800px]:gap-3">
          <FilterByType />
          <div className="flex flex-col gap-4 max-[800px]:flex max-[800px]:flex-row">
            <FilterByPriority />
            <div>teste</div>
          </div>
        </section>
        <section className="flex flex-col items-center mt-8">
          <ProductsList />
        </section>
      </main>
  );
}
