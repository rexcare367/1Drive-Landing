import { ProductPage } from "@/components/product-page";
import { dashboardProduct, mobileProduct } from "@/lib/products";

export default function MobileApp() {
  return <ProductPage product={mobileProduct} other={dashboardProduct} />;
}
