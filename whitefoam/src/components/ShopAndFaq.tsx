import React, { useState } from 'react';
import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';

const marketplaces = [
  { name: 'Amazon', href: 'https://www.amazon.in/s?k=White+Foam+detergent' },
  { name: 'Flipkart', href: 'https://www.flipkart.com/search?q=White%20Foam%20detergent' },
  { name: 'BigBasket', href: 'https://www.bigbasket.com/ps/?q=White%20Foam%20detergent' },
  { name: 'Blinkit', href: 'https://blinkit.com/s/?q=White%20Foam%20detergent' },
];

const faqItems = [
  {
    question: 'What should I do before treating a stain?',
    answer: 'Check the garment care label, blot rather than rub fresh stains, and test detergent on a hidden area first. Use the stain guide for fabric-specific steps.',
  },
  {
    question: 'Can I use the products on coloured clothes?',
    answer: 'Follow the instructions on the product pack and the garment care label. Test on a hidden seam first, especially for delicate or colour-sensitive fabrics.',
  },
  {
    question: 'Where can I check ingredients and skin-safety information?',
    answer: 'Use the ingredient and safety information printed on the specific product pack. For product questions, contact White Foam support before use.',
  },
  {
    question: 'Is the detergent septic-system compatible?',
    answer: 'This site does not have verified septic-system compatibility information. Check the pack or contact the manufacturer before using it with a septic system.',
  },
  {
    question: 'How do returns and refunds work?',
    answer: 'Returns and refunds are handled by the store or marketplace where you purchased the product. Check that seller’s current policy and order details.',
  },
  {
    id: 'terms',
    question: 'Who handles payment, delivery, and purchase terms?',
    answer: 'Purchases are completed with the selected marketplace or local seller. Their current payment, delivery, availability, and purchase terms apply.',
  },
];

export const ShopAndFaq: React.FC = () => {
  const [location, setLocation] = useState('');

  const findNearbyStores = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = encodeURIComponent(`White Foam detergent near ${location}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section id="where-to-buy" className="border-y border-slate-200 bg-[#eaf7fc] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-wide text-indigo-800">Shop White Foam</p>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">Find your pack, your way.</h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-700">
              Check current listings, prices, and delivery availability with the seller. Marketplace stock and pricing can vary by location.
            </p>
            <form onSubmit={findNearbyStores} className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="store-location">City or PIN code</label>
              <input
                id="store-location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                required
                placeholder="Enter city or PIN code"
                className="min-h-11 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-500"
              />
              <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-indigo-800 px-4 text-sm font-bold text-white transition-colors hover:bg-indigo-900">
                <MapPin className="h-4 w-4" /> Find nearby
              </button>
            </form>
            <p className="text-xs text-slate-600">Opens a map search; local store inventory is not connected to this site.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900">Search marketplaces</h3>
            <div className="grid grid-cols-2 gap-3">
              {marketplaces.map((marketplace) => (
                <a
                  key={marketplace.name}
                  href={marketplace.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 items-center justify-between rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm transition hover:border-indigo-400 hover:shadow-md"
                >
                  {marketplace.name}
                  <ArrowUpRight className="h-4 w-4 text-indigo-800" />
                </a>
              ))}
            </div>
            <a href="https://wa.me/919111911111" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-900 underline decoration-indigo-300 underline-offset-4">
              <MessageCircle className="h-4 w-4" /> Ask customer care on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide text-indigo-800">Customer help</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Good to know</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Product and seller details can vary by pack and retailer. Check the product label for the most current instructions.</p>
            <a href="tel:+919111911111" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-indigo-900 underline decoration-indigo-300 underline-offset-4">
              <Phone className="h-4 w-4" /> Call +91 91119 11111
            </a>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqItems.map((item) => (
              <details key={item.question} id={'id' in item ? item.id : undefined} className="group py-4">
                <summary className="cursor-pointer list-none pr-8 text-sm font-bold text-slate-900 marker:hidden focus-visible:outline-offset-4">
                  {item.question}
                  <span aria-hidden="true" className="float-right text-indigo-800 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};