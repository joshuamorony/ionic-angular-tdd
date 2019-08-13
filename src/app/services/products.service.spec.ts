import { ProductsService } from "./products.service";

describe("Provider: Products", () => {
  let productsService;

  beforeEach(() => {
    productsService = new ProductsService();
  });

  afterEach(() => {
    productsService = null;
  });

  it("should have a non empty array called products", () => {
    let products = productsService.products;

    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
  });
});
