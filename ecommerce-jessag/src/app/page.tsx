'use client';
import FilterByPriority from "@/components/filterBar/filter-by-priority";
import FilterByType from "@/components/filterBar/filter-by-type";
import Paginator from "@/components/pagination/paginator";
import ProductsList from "@/components/products/products-list";

export default function Home() {
  return (
    <main className="py-5 px-40  min-h-screen bg-custom-bgMain max-[1280px]:px-12">
      <section className="flex items-baseline justify-between max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:gap-3">
        <FilterByType />
        <div className="flex flex-col gap-4 max-[1280px]:flex max-[1280px]:flex-row">
          <FilterByPriority />
          <Paginator />
        </div>
      </section>
      <section className="flex flex-col items-center mt-8">
        <ProductsList />
      </section>
    </main>
  );
}
