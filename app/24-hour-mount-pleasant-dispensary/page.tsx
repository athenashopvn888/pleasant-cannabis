import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "24 Hour Mount Pleasant Dispensary | Pleasant Cannabis" }, description: AUTHORITY_PAGES.hours.summary, alternates: { canonical: "https://www.pleasantcannabis.ca/24-hour-mount-pleasant-dispensary" } };
export default function Page(){ return <AuthorityLanding page={AUTHORITY_PAGES.hours} />; }
