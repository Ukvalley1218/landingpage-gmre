import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UTMTracker() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // 📌 GET VALUES (FIXED ORDER)
    const reference =
      params.get("reference") ||
      sessionStorage.getItem("reference") ||
      "direct";

    const utm_source =
      params.get("utm_source") || sessionStorage.getItem("utm_source") || null;

    const utm_medium =
      params.get("utm_medium") || sessionStorage.getItem("utm_medium") || null;

    const utm_campaign =
      params.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || null;

    const utm_content =
      params.get("utm_content") || sessionStorage.getItem("utm_content") || null;

    // 📌 STORE IN SESSION
    sessionStorage.setItem("reference", reference);
    if (utm_source) sessionStorage.setItem("utm_source", utm_source);
    if (utm_medium) sessionStorage.setItem("utm_medium", utm_medium);
    if (utm_campaign) sessionStorage.setItem("utm_campaign", utm_campaign);
    if (utm_content) sessionStorage.setItem("utm_content", utm_content);

    console.log("REFERENCE:", reference);
  }, [location.search]);

  return null;
}
