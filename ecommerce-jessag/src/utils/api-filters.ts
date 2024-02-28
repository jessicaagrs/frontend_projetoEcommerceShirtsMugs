import { FilterByTypeEnum } from "@/types/filter-types";
import { PriorityTypeEnum } from "@/types/priority-types";

function getCategory(type: FilterByTypeEnum) {
    if (type === FilterByTypeEnum.CAMISETAS) {
        return "t-shirts";
    }
    if (type === FilterByTypeEnum.CANECAS) {
        return "mugs";
    }
    return "";
}

function getFieldByPriority(priority: PriorityTypeEnum) {
    if (priority === PriorityTypeEnum.MAIOR_PRECO_MENOR) {
        return { field: "price_in_cents", order: "DSC" };
    }
    if (priority === PriorityTypeEnum.MENOR_PRECO_MAIOR) {
        return { field: "price_in_cents", order: "ASC" };
    }
    if (priority === PriorityTypeEnum.MAIS_VENDIDOS) {
        return { field: "sales", order: "DSC" };
    }
    return {
        field: "created_at",
        order: "ASC"
    };
}

export const mountQuery = (type: FilterByTypeEnum, priority: PriorityTypeEnum, page : number) => {

    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategory(type);

    if (type === FilterByTypeEnum.TODOSOSPRODUTOS) {
        return `query {
            allProducts (${page > 0 ? `page: ${page}, perPage: 10,` : ''} ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ''}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
              id
              name
              price_in_cents
              image_url
            }
          }
          `;
    }

    if (type === FilterByTypeEnum.CAMISETAS) {
        return `query {
            allProducts(${page > 0 ? `page: ${page}, perPage: 10,` : ''} ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ''}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
              id
              name
              price_in_cents
              image_url
            }
          }
          `;
    }
    if (type === FilterByTypeEnum.CANECAS) {
        return `query {
            allProducts(${page > 0 ? `page: ${page}, perPage: 10,` : ''} ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ''}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
              id
              name
              price_in_cents
              image_url
            }
          }
          `;
    } 

    return `query {
        allProducts {
          id
          name
          price_in_cents
          image_url
        }
      }
      `;
};