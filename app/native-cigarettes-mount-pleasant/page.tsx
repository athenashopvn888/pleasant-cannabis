import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getCigaretteSnapshot } from '../lib/cigaretteFeed';
export const dynamic = 'force-dynamic';
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Native Cigarettes Mount Pleasant & Eglinton | Pleasant Cannabis" }, description: AUTHORITY_PAGES.cigarettes.summary, alternates: { canonical: "https://www.pleasantcannabis.ca/native-cigarettes-mount-pleasant" } };
export default async function Page() {
  if (!(await getCigaretteSnapshot()).web.show) redirect('/items/vapes');
  return <AuthorityLanding page={AUTHORITY_PAGES.cigarettes} />;
}
