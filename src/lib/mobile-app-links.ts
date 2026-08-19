import { APP_URL } from "@/lib/site-images";

export type MobileAppLinks = {
  ios: string | null;
  android: string | null;
};

type MobileAppLog = {
  type?: string | null;
  link?: string | null;
  created_at?: string | null;
};

type MobileAppLogResponse = {
  success?: boolean;
  data?: MobileAppLog[] | null;
};

function pickLatestLink(logs: MobileAppLog[], type: "ios" | "android"): string | null {
  const matches = logs.filter(
    (row) => row.type === type && typeof row.link === "string" && row.link.trim(),
  );

  matches.sort((a, b) => {
    const aTime = a.created_at ? Date.parse(a.created_at) : 0;
    const bTime = b.created_at ? Date.parse(b.created_at) : 0;
    return bTime - aTime;
  });

  return matches[0]?.link?.trim() ?? null;
}

/** Production App Store / Play Store URLs from GET /api/mobile_app_log. */
export async function fetchProductionMobileAppLinks(): Promise<MobileAppLinks> {
  const empty: MobileAppLinks = { ios: null, android: null };
  const url = new URL("api/mobile_app_log", APP_URL);
  url.searchParams.set("environment", "production");

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to load mobile app links");
  }

  const json = (await response.json()) as MobileAppLogResponse;
  if (!json.success || !Array.isArray(json.data)) {
    throw new Error("Failed to load mobile app links");
  }

  return {
    ios: pickLatestLink(json.data, "ios"),
    android: pickLatestLink(json.data, "android"),
  };
}
