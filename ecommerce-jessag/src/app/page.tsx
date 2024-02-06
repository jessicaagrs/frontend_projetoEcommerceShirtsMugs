'use client'
import FilterBar from "@/components/filterBar/filter-bar";
import FilterByPriority from "@/components/filterBar/filter-by-priority";
import ProductsList from "@/components/products/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className="py-5 px-40  min-h-screen">
        <section className="flex items-baseline justify-between">
          <FilterBar />
          <div className="flex flex-col gap-4">
            <FilterByPriority />
            <div>teste</div>
          </div>
        </section>
        <section>
          <ProductsList />
        </section>
      </main>
    </QueryClientProvider>
  );
}
