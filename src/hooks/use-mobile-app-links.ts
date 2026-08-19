import { useQuery } from "@tanstack/react-query";
import { fetchProductionMobileAppLinks } from "@/lib/mobile-app-links";

export function useMobileAppLinks() {
  return useQuery({
    queryKey: ["mobile-app-links", "production"],
    queryFn: fetchProductionMobileAppLinks,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
