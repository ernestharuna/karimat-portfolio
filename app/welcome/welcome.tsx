import { Link } from "react-router";
import {
  RiArrowRightLine,
  RiBookOpenLine,
  RiCalendarEventLine,
  RiUserHeartLine,
  RiVideoChatLine,
  RiSendPlaneFill
} from "@remixicon/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function Welcome() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-slate-50 font-sans selection:bg-yellow-400 selection:text-fuchsia-900">

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-fuchsia-800 px-6 py-32 text-white">
        {/* Background Blobs (Using standard animate-pulse) */}
        <div className="absolute top-0 -left-4 h-72 w-72 animate-pulse rounded-full bg-yellow-400 opacity-20 mix-blend-multiply blur-3xl filter duration-1000" />
        <div className="absolute top-0 -right-4 h-72 w-72 animate-pulse rounded-full bg-fuchsia-500 opacity-20 mix-blend-multiply blur-3xl filter duration-1000 delay-500" />
        <div className="absolute -bottom-8 left-20 h-72 w-72 animate-pulse rounded-full bg-yellow-400 opacity-20 mix-blend-multiply blur-3xl filter duration-1000 delay-700" />

        <div className="relative z-10 mx-auto max-w-5xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge className="mb-6 border-yellow-400 bg-white/10 text-yellow-400 backdrop-blur-md hover:bg-white/20">
            Author • Educator • Counselor
          </Badge>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Empowering Minds, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Transforming Lives.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-purple-100 sm:text-xl">
            Join me on a journey of growth. Whether through my latest books, intensive courses, or one-on-one counseling, your next breakthrough starts here.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 rounded-full bg-yellow-400 px-8 text-lg font-semibold text-fuchsia-900 transition-transform hover:scale-105 hover:bg-yellow-500">
              Explore Courses <RiArrowRightLine className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 rounded-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-fuchsia-900 px-8 text-lg bg-transparent transition-transform hover:scale-105">
              Book Counseling <RiUserHeartLine className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-fuchsia-800 to-yellow-400 opacity-30 blur-lg transition duration-500 group-hover:opacity-50" />
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gray-200">
                {/* Replace src with actual image */}
                <img
                  src="/api/placeholder/800/800"
                  alt="Portrait of the professional"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
              <div className="mt-4 h-1 w-20 rounded bg-yellow-400"></div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With over a decade of experience in personal development and counseling, I have dedicated my life to helping individuals unlock their true potential. My approach blends evidence-based practices with deep empathy.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                From speaking on global stages to hosting intimate masterclasses, my mission remains the same: equipping you with the tools to navigate life's complexities with confidence and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES LIST */}
      <section className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fuchsia-800 sm:text-4xl">Featured Courses</h2>
            <p className="mt-4 text-lg text-gray-600">Master new skills at your own pace with my curated programs.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((course) => (
              <Card key={course} className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fuchsia-800/20">
                <div className="aspect-video bg-fuchsia-800/10 flex items-center justify-center overflow-hidden">
                  <RiVideoChatLine className="h-16 w-16 text-fuchsia-800 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="bg-yellow-400/20 text-fuchsia-800 hover:bg-yellow-400/30">Online</Badge>
                    <span className="text-sm font-semibold text-fuchsia-800">$99.00</span>
                  </div>
                  <CardTitle className="text-xl">Mastering Emotional Intelligence</CardTitle>
                  <CardDescription>A 6-week intensive on regulating emotions and building stronger relationships.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-fuchsia-800 hover:bg-fuchsia-900 transition-colors text-white">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOOK SALE */}
      <section className="relative overflow-hidden bg-yellow-400 py-24 sm:py-32">
        {/* Hex #86198f matches fuchsia-800 */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#86198f 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-fuchsia-900 sm:text-5xl">
                The New Bestseller is Here.
              </h2>
              <p className="mt-6 text-xl text-fuchsia-900/80 font-medium">
                "<span className="underline underline-offset-2">Thoroughly Furnished</span>" is your ultimate guide to finding clarity in a chaotic world. Grab your copy today and get an exclusive companion workbook.
              </p>
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="h-14 rounded-full bg-fuchsia-800 px-8 text-lg font-bold text-yellow-400 hover:bg-fuchsia-900 hover:scale-105 transition-all shadow-xl">
                  Buy the Book <RiBookOpenLine className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end perspective-1000">
              <div className="group relative w-64 md:w-80 transition-transform duration-700 hover:-rotate-y-12 hover:rotate-x-12 transform-gpu shadow-2xl">
                <img
                  src="/api/placeholder/400/600"
                  alt="Book Cover"
                  className="rounded-r-xl rounded-l-sm border-l-8 border-fuchsia-950 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVENTS LIST */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-fuchsia-800">Upcoming Events</h2>
          </div>
          <div className="space-y-6">
            {[
              { title: "Mindset Mastery Workshop", date: "Oct 15, 2026", type: "Virtual", color: "bg-blue-100 text-blue-800" },
              { title: "Annual Leadership Summit", date: "Nov 02, 2026", type: "In-Person", color: "bg-yellow-400/20 text-fuchsia-800" },
              { title: "Book Signing & Meetup", date: "Dec 10, 2026", type: "In-Person", color: "bg-yellow-400/20 text-fuchsia-800" },
            ].map((event, i) => (
              <div key={i} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-fuchsia-800/30">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-800/10 text-fuchsia-800 group-hover:bg-fuchsia-800 group-hover:text-white transition-colors">
                    <RiCalendarEventLine className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4 w-full sm:w-auto justify-between">
                  <Badge variant="outline" className={`border-none ${event.color}`}>
                    {event.type}
                  </Badge>
                  <Button variant="ghost" className="text-fuchsia-800 hover:bg-fuchsia-800/10">
                    RSVP
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT / COUNSELING */}
      <section className="relative bg-fuchsia-800 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-yellow-400">Ready to Talk?</h2>
              <p className="mt-6 text-lg text-purple-100">
                Whether you're looking to book a 1-on-1 counseling session, invite me to speak at your next event, or just say hello, my inbox is open.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-fuchsia-900">
                    <RiUserHeartLine className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Counseling Availability</p>
                    <p className="text-purple-200 text-sm">Accepting new clients for Fall 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-none bg-white">
              <CardHeader>
                <CardTitle className="text-fuchsia-800">Send a Message</CardTitle>
                <CardDescription>Fill out the form and my team will get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input placeholder="John" className="focus-visible:ring-fuchsia-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input placeholder="Doe" className="focus-visible:ring-fuchsia-800" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input placeholder="john@example.com" type="email" className="focus-visible:ring-fuchsia-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">How can I help you?</label>
                  <Textarea
                    placeholder="Tell me about your counseling needs or event..."
                    className="min-h-[120px] focus-visible:ring-fuchsia-800"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-400 text-fuchsia-900 hover:bg-yellow-500 text-md font-bold h-12">
                  Send Message <RiSendPlaneFill className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}