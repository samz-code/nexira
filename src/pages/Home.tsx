import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Cursor } from '@/components/layout/Cursor';
import { Hero } from '@/components/sections/Hero';
import { Story } from '@/components/sections/Story';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { Opportunities } from '@/components/sections/Opportunities';
import { Impact } from '@/components/sections/Impact';
import { Future } from '@/components/sections/Future';
import { SouthSudan } from '@/components/sections/SouthSudan';
import { CTA } from '@/components/sections/CTA';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexira Enterprises Ltd',
    description:
      'A diversified holding company headquartered in Juba, South Sudan, investing in businesses that create sustainable economic growth, employment, innovation and long-term national development.',
    url: 'https://nexiraenterprises.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Juba',
      addressRegion: 'Central Equatoria',
      addressCountry: 'South Sudan',
    },
    email: 'partnerships@nexiraenterprises.com',
    sameAs: ['https://www.linkedin.com/company/nexira-enterprises'],
    department: [
      { '@type': 'Organization', name: 'Nexira Productions' },
      { '@type': 'Organization', name: 'Nexira Media' },
      { '@type': 'Organization', name: 'Nexira Farms' },
      { '@type': 'Organization', name: 'Horizon Seekers' },
      { '@type': 'Organization', name: 'Nexira Events' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Nexira Enterprises Ltd — Building South Sudan's Future</title>
        <meta
          name="description"
          content="A diversified holding company headquartered in Juba, South Sudan, investing in businesses that create sustainable economic growth, employment, innovation and long-term national development."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Ecosystem />
        <Opportunities />
        <Impact />
        <Future />
        <SouthSudan />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
