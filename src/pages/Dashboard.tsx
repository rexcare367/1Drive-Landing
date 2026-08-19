import { ProductPage } from "@/components/product-page";
import { dashboardProduct, mobileProduct } from "@/lib/products";

export default function Dashboard() {
  return <ProductPage product={dashboardProduct} other={mobileProduct} />;
}
