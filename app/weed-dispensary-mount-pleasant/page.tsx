import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Weed Dispensary Mount Pleasant & Eglinton | Pleasant Cannabis" }, description: AUTHORITY_PAGES.geo.summary, alternates: { canonical: "https://www.pleasantcannabis.ca/weed-dispensary-mount-pleasant" } };
export default function Page(){ return <AuthorityLanding page={AUTHORITY_PAGES.geo} />; }
