"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mountain, Radio, Shield, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Mountain className="h-6 w-6 text-emerald-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                Hollow Ridge Press
              </p>
              <p className="font-bold">Southern Appalachian Cryptid Files</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#" className="hover:text-emerald-300">Archive</a>
            <a href="#" className="hover:text-emerald-300">Warden Division</a>
            <a href="#" className="hover:text-emerald-300">Books</a>
            <a href="#" className="hover:text-emerald-300">Contact</a>
          </nav>
        </div>
      </header>
            <section
        className="relative overflow-hidden border-b border-zinc-800"
        style={{
          backgroundImage: "url('/images/AppMtnsTower1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <motion.div
          className="relative z-10 mx-auto max-w-7xl px-6 py-40"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-950/40 px-4 py-2 text-sm text-emerald-200">
            <Radio className="h-4 w-4" />
            Signal acquired: Blue Ridge monitoring network
          </div>

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-700 bg-zinc-900">
              <Mountain className="h-6 w-6 text-emerald-300" />
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.3em] text-emerald-300">
                Hollow Ridge Press
              </p>
              <h1 className="text-5xl font-bold">
                Southern Appalachian Cryptid Files
              </h1>
            </div>
          </div>

          <h2 className="max-w-3xl text-2xl font-black tracking-tight md:text-3xl">
            Some stories were never meant to leave the mountains.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Welcome to the official archive for{" "}
            <em>The Southern Appalachian Cryptid Files</em>, a folk-horror
            fiction series from Hollow Ridge Press. Explore leaked case files,
            regional anomalies, Warden Division fragments, and things moving
            through the Blue Ridge fog.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-4 font-semibold text-zinc-950 hover:bg-emerald-400">
              Explore the Archive <ChevronRight className="ml-2 h-4 w-4" />
            </button>

            <button className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 font-semibold text-zinc-100 hover:bg-zinc-800">
              View the Books
            </button>
          </div>
        </motion.div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <Shield className="h-6 w-6" />
            <p className="font-mono text-sm uppercase tracking-[0.25em]">
              Warden Division Notice
            </p>
          </div>

          <h3 className="text-3xl font-black">Archive access limited</h3>

          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            If a transmission instructs you to leave the marked trail, do not
            respond.
          </p>
        </div>
      </section>        <section id="archives" className="mt-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
              Case File Archive
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Recovered investigation records
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
              The following files remain accessible despite repeated deletion
              attempts by the Warden Division archive system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                SACF-014
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Black Lantern Signal
              </h3>

              <div className="mt-4 inline-flex rounded-full bg-red-950/40 px-3 py-1 text-xs text-red-200">
                RED LEVEL EVENT
              </div>

              <p className="mt-5 leading-8 text-zinc-300">
                Repeated sightings of lantern lights appearing along abandoned
                mountain roads during dense fog conditions. Multiple witnesses
                disappeared after attempting to follow the signals into wooded
                terrain.
              </p>

              <button className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                Open case file <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                SACF-027
              </p>

              <h3 className="mt-3 text-3xl font-black">
                The Bridgewalker Files
              </h3>

              <div className="mt-4 inline-flex rounded-full bg-amber-950/40 px-3 py-1 text-xs text-amber-200">
                ACTIVE MONITORING
              </div>

              <p className="mt-5 leading-8 text-zinc-300">
                Sightings cluster near old bridges, flood markers, and isolated
                crossings throughout the Southern Appalachian corridor.
              </p>

              <button className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                Open case file <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>        <section id="warden" className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
            <div className="border-b border-zinc-800 bg-black/40 px-6 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
                Warden Division Personnel File
              </p>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.35fr_0.65fr]">
              <div className="border-b border-zinc-800 bg-zinc-950/70 p-8 lg:border-b-0 lg:border-r">
                <div className="flex aspect-square items-center justify-center rounded-3xl border border-zinc-800 bg-black/40 text-center">
                  <div>
                    <Shield className="mx-auto mb-5 h-14 w-14 text-emerald-300" />

                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                      Subject File
                    </p>

                    <h3 className="mt-3 text-4xl font-black">
                      J. Anthoney
                    </h3>

                    <div className="mt-6 inline-flex rounded-full border border-red-900/60 bg-red-950/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-red-200">
                      Partially Redacted
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                  Recovered Personnel Notes
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  Southern Appalachian Field Archivist
                </h3>

                <p className="mt-6 leading-8 text-zinc-300">
                  J. Anthoney is attached to the Southern Appalachian Regional
                  Archive as a contracted field archivist specializing in oral
                  accounts, folklore patterns, and unexplained incident
                  documentation throughout Southwestern Virginia, Eastern
                  Tennessee, and Western North Carolina.
                </p>

                <p className="mt-5 leading-8 text-zinc-300">
                  Recovered notes reference isolated hollows, abandoned logging
                  roads, wandering lights, missing-time events, and entities
                  associated with bridges, ridgelines, and floodwater crossings.
                </p>

                <div className="mt-8 rounded-3xl border border-red-950/60 bg-red-950/20 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-red-300">
                    Archive Warning
                  </p>

                  <p className="mt-4 text-lg font-bold leading-8 text-red-100">
                    If a transmission instructs you to leave the marked trail,
                    do not respond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>        <section className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-emerald-900/40 bg-gradient-to-br from-emerald-950/20 to-zinc-950">
            <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-zinc-800 bg-black/40 p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                  <Radio className="h-3 w-3" />
                  New Recruit Orientation
                </div>

                <h2 className="mt-6 text-5xl font-black leading-tight">
                  Welcome to the Warden Division archive.
                </h2>

                <p className="mt-6 leading-8 text-zinc-300">
                  If you are reading this, then you have already encountered
                  material the public was never meant to access.
                </p>

                <p className="mt-5 leading-8 text-zinc-300">
                  The Southern Appalachian corridor contains active anomalies,
                  restricted zones, and entities whose existence remains
                  officially denied.
                </p>
              </div>

              <div className="p-8 lg:p-10">
                <div className="rounded-3xl border border-zinc-800 bg-black/30 p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
                    Orientation Protocols
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5">
                      <h3 className="text-xl font-bold">
                        Remain on marked trails
                      </h3>

                      <p className="mt-3 leading-7 text-zinc-300">
                        Numerous incidents begin after subjects leave
                        established roads or paths in pursuit of lights,
                        voices, or movement in the fog.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5">
                      <h3 className="text-xl font-bold">
                        Do not respond to unidentified transmissions
                      </h3>

                      <p className="mt-3 leading-7 text-zinc-300">
                        Repeating radio calls, familiar voices, and emergency
                        signals have been linked to multiple disappearance
                        cases throughout the region.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5">
                      <h3 className="text-xl font-bold">
                        Trust local warnings
                      </h3>

                      <p className="mt-3 leading-7 text-zinc-300">
                        Mountain communities often possess generational
                        knowledge regarding places that should be avoided after
                        dark or during fog events.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-red-900/50 bg-red-950/20 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-300">
                      Final Advisory
                    </p>

                    <p className="mt-3 text-lg font-bold leading-8 text-red-100">
                      If something in the mountains knows your name before you
                      speak it, leave immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>        <section id="books"className="mt-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
              Reading Order
            </p>

            <h2 className="mt-2 text-4xl font-black">
              The Southern Appalachian Cryptid Files
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
              Begin with the Warden Division archive, then follow the full novel
              sequence as the investigation expands from isolated sightings to a
              larger Appalachian mythology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
                        {[
              {
  title: "Warden Division Case Reports — Volume I",
  label: "Book 0 / Archive Anthology",
  image: "/covers/book-0.jpg",
  link: "https://www.amazon.com/dp/B0GLJDMPML",
  description:
    "A classified collection of Warden Division case reports documenting the strange, dangerous, and unexplained things moving through Southern Appalachia.",
},
{
  title: "Shadows Over the Blue Ridge",
  label: "Book One",
  image: "/covers/book-1.jpg",
  link: "https://www.amazon.com/dp/B0GL8TGWRP",
  description:
    "When old mountain stories begin turning into real disappearances, the hidden files of the Warden Division reveal something watching from the fog.",
},
{
  title: "The Bridgewalker Files",
  label: "Book Two",
  image: "/covers/book-2.jpg",
  link: "https://www.amazon.com/dp/B0GLGX6G64",
  description:
    "Bridges, crossings, and forgotten roads become thresholds as the investigation moves deeper into the haunted geography of Appalachia.",
},
{
  title: "Ascension of Apex Theta",
  label: "Book Three",
  image: "/covers/book-3.jpg",
  link: "https://www.amazon.com/dp/B0GN8F3JWT",
  description:
    "The archive begins to unravel as separate cases converge toward an emergence event buried in the mountains and hidden in sealed records.",
},
            ].map((book, index) => (
  <div
    key={book.title}
    className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60"
  >
    <div className="relative mx-auto aspect-[2/3] w-44">
      <Image
        src={book.image}
        alt={book.title}
        fill
        className="object-cover"
      />
    </div>

    <div className="p-6">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
        {book.label}
      </p>

      <h3 className="mt-3 text-2xl font-black">
        {book.title}
      </h3>

      <p className="mt-4 min-h-[7rem] leading-7 text-zinc-300">
        {book.description}
      </p>

      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-2xl border border-zinc-700 px-5 py-3 font-semibold transition hover:bg-zinc-800"
      >
        Read on Amazon
      </a>
    </div>
  </div>
))}
          </div>
        </section>      <section
        id="contact"
        className="mt-20 border-t border-zinc-800 py-16 text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">
          Contact the Archive
        </p>

        <h2 className="mt-4 text-4xl font-black">
          Join the Warden Division mailing list
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-300">
          Receive new case files, recovered transmissions, incident alerts, and
          release announcements from Hollow Ridge Press.
        </p>

        <form
  action="https://formspree.io/f/xjgzakzz"
  method="POST"
  className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
>
  <input
    type="email"
    name="email"
    required
    placeholder="Email address"
    className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-zinc-100"
  />

  <button
    type="submit"
    className="rounded-2xl bg-emerald-500 px-6 py-4 font-semibold text-zinc-950 hover:bg-emerald-400"
  >
    Subscribe
  </button>
</form>
      </section>
    <footer className="mt-24 border-t border-zinc-800 bg-black/40">
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          Hollow Ridge Press
        </p>

        <h3 className="mt-3 text-2xl font-black">
          Southern Appalachian Cryptid Files
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          Appalachian folk horror, recovered archives, paranormal investigations,
          and the hidden things waiting beyond the fog.
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          Archive Navigation
        </p>

        <div className="mt-4 flex flex-col gap-3 text-zinc-300">
          <a href="#archive" className="hover:text-emerald-300">
            Case Files
          </a>

          <a href="#warden" className="hover:text-emerald-300">
            Warden Division
          </a>

          <a href="#books" className="hover:text-emerald-300">
            Books
          </a>

          <a href="#contact" className="hover:text-emerald-300">
            Contact
          </a>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
          Author
        </p>

        <p className="mt-4 leading-7 text-zinc-400">
          Written by J. Anthoney
        </p>

        <p className="mt-2 leading-7 text-zinc-500">
          Tales from the mountains of Southwestern Virginia, Eastern Tennessee,
          and Western North Carolina.
        </p>
      </div>
    </div>

    <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
      © 2026 Hollow Ridge Press. All Rights Reserved.
    </div>
  </div>
</footer>
    </main>
  );
}