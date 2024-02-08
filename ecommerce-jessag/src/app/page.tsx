'use client';
import FilterByPriority from "@/components/filterBar/filter-by-priority";
import FilterByType from "@/components/filterBar/filter-by-type";
import ProductsList from "@/components/products/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className="py-5 px-40  min-h-screen bg-custom-bgMain">
        <section className="flex items-baseline justify-between">
          <FilterByType />
          <div className="flex flex-col gap-4">
            <FilterByPriority />
            <div>teste</div>
          </div>
        </section>
        <section className="flex flex-col items-center mt-8">
          <ProductsList />
        </section>
      </main>
    </QueryClientProvider>
  );
}
