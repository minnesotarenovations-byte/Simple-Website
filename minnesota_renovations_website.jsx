import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Hammer, Handshake, Home, Phone, Mail } from "lucide-react";

const logoUrl = "/mnt/data/logo.jpeg";

export default function MinnesotaRenovationsWebsite() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
              <Handshake className="h-4 w-4" />
              Project Facilitation • Contractor Coordination • Client Care
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                The right contractor for the right project.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Minnesota Renovations helps clients clearly define their project needs, then matches those needs with capable contractors and subcontractors who can do the work professionally and with care.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:naomi@mnreno.com"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-blue-400 hover:bg-blue-400/10"
              >
                How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="rounded-[2rem] border border-slate-800 bg-black/40 p-6 shadow-2xl">
              <img
                src={logoUrl}
                alt="Minnesota Renovations logo"
                className="w-full max-w-md rounded-3xl object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">A simple, trusted process</h2>
          <p className="mt-4 text-slate-300">
            I serve as a project facilitator, helping bridge the gap between the client’s needs and the contractor’s capability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Home,
              title: "Discover the Need",
              text: "We listen first, clarify the scope, identify priorities, and define what success looks like before work begins."
            },
            {
              icon: Hammer,
              title: "Match the Right Team",
              text: "We connect the project with contractors or subcontractors who have the proper capability, professionalism, and fit."
            },
            {
              icon: CheckCircle,
              title: "Facilitate with Care",
              text: "We help keep communication clear, expectations aligned, and the client experience handled with respect."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-xl">
              <item.icon className="h-9 w-9 text-orange-400" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900/70 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Experience clients and contractors can trust</h2>
            <p className="mt-5 leading-8 text-slate-300">
              With over 15 years of experience in the construction and renovation industry, Minnesota Renovations is trusted and well received by clients, contractors, and subcontractors. Our teams are highly professional and show the utmost care for every client and every project.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "15+ years of industry experience",
              "Trusted project facilitation",
              "Professional contractor network",
              "Client-first communication"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <CheckCircle className="h-6 w-6 text-blue-400" />
                <p className="mt-3 font-medium text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ready to talk through your project?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Whether you are a homeowner, property manager, investor, or contractor, Minnesota Renovations can help clarify the need and connect the project to the right capability.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="tel:9523033133" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-6 py-3 font-semibold hover:border-blue-400 hover:bg-blue-400/10">
            <Phone className="h-5 w-5" /> 952-303-3133
          </a>
          <a href="mailto:naomi@mnreno.com" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-slate-950 hover:bg-blue-400">
            <Mail className="h-5 w-5" /> naomi@mnreno.com
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Minnesota Renovations. Project facilitation for renovation and construction needs.
      </footer>
    </main>
  );
}
