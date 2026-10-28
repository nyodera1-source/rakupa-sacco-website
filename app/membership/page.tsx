'use client';
import { FormEvent, useState } from 'react';
import { PageIntro } from '../../components/sections';

export default function Membership() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <>
    <PageIntro title="Membership & Downloads">Join RAKUPA SACCO by completing the membership form and submitting the required documents.</PageIntro>
    <section className="section"><div className="container grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
      <form className="card grid gap-5" onSubmit={submit}>
        <div><div className="eyebrow">Online application</div><h2 className="mt-2 text-2xl font-bold text-[var(--navy)]">Membership application form</h2><p className="mt-2 text-sm text-[var(--muted)]">Complete the form below. Fields marked * are required.</p></div>
        {sent && <div className="rounded bg-[var(--soft)] p-4 text-sm font-semibold text-[var(--navy)]">Your application is ready for submission. The online receiving service will be connected before launch.</div>}
        <label className="grid gap-2 font-semibold">Full names *<input required name="fullName" className="rounded border p-3 font-normal" /></label>
        <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 font-semibold">Telephone number *<input required name="phone" type="tel" className="rounded border p-3 font-normal" /></label><label className="grid gap-2 font-semibold">Email address *<input required name="email" type="email" className="rounded border p-3 font-normal" /></label></div>
        <label className="grid gap-2 font-semibold">Physical address *<textarea required name="address" rows={3} className="rounded border p-3 font-normal" /></label>
        <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 font-semibold">National ID / Passport number *<input required name="idNumber" className="rounded border p-3 font-normal" /></label><label className="grid gap-2 font-semibold">KRA PIN *<input required name="kraPin" className="rounded border p-3 font-normal" /></label></div>
        <fieldset className="grid gap-4 rounded border p-4"><legend className="px-2 font-bold">Next of kin</legend><label className="grid gap-2 font-semibold">Full names *<input required name="nextOfKinName" className="rounded border p-3 font-normal" /></label><div className="grid gap-4 md:grid-cols-2"><label className="grid gap-2 font-semibold">Relationship *<input required name="nextOfKinRelationship" className="rounded border p-3 font-normal" /></label><label className="grid gap-2 font-semibold">Telephone number *<input required name="nextOfKinPhone" type="tel" className="rounded border p-3 font-normal" /></label></div></fieldset>
        <div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2 font-semibold">ID copy *<input required name="idCopy" type="file" accept="image/*,.pdf" className="rounded border p-3 font-normal" /></label><label className="grid gap-2 font-semibold">KRA PIN certificate *<input required name="kraCopy" type="file" accept="image/*,.pdf" className="rounded border p-3 font-normal" /></label></div>
        <label className="flex gap-3 text-sm"><input required type="checkbox" name="confirm" /> I confirm that the information provided is accurate.</label>
        <button className="button button-primary w-fit" type="submit">Submit application</button>
      </form>
      <aside className="grid content-start gap-5"><div className="card"><div className="eyebrow">Registration deposit</div><h2 className="mt-2 text-2xl font-bold text-[var(--navy)]">Pay the registration deposit</h2><p className="mt-3 leading-7 text-[var(--muted)]">After completing the form, pay the registration deposit using:</p><dl className="mt-5 grid gap-3"><div><dt className="text-sm font-bold text-[var(--muted)]">Paybill</dt><dd className="text-2xl font-bold text-[var(--orange)]">400222</dd></div><div><dt className="text-sm font-bold text-[var(--muted)]">Account number</dt><dd className="text-2xl font-bold text-[var(--orange)]">492493#Name</dd></div></dl><p className="mt-4 text-sm leading-6 text-[var(--muted)]">Replace “Name” with your name as instructed by the SACCO.</p></div><div className="card"><div className="eyebrow">Need help?</div><p className="mt-3 leading-7">Call <a className="font-bold text-[var(--green)]" href="tel:0716619164">0716619164</a> or email <a className="font-bold text-[var(--green)]" href="mailto:info@rakupasacco.co.ke">info@rakupasacco.co.ke</a> for assistance.</p></div></aside>
    </div></section>
  </>;
}
