import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Nicotine Vapes Mount Pleasant & Eglinton | Pleasant Cannabis" }, description: AUTHORITY_PAGES.vape.summary, alternates: { canonical: "https://www.pleasantcannabis.ca/nicotine-vape-mount-pleasant" } };
export default function Page(){ return <AuthorityLanding page={AUTHORITY_PAGES.vape} />; }
