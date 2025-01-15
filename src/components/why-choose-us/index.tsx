import { TelescopeIcon as Binoculars, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionImage from "@/data/images/contact-us.png"
import Title from '../title'

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4">
      <Title title="Why choose us?" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          {/* <div className="space-y-4 md:space-y-6">
            <Binoculars className="h-8 w-8 md:h-12 md:w-12 text-slate-800" />
            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-oswald">
                Why choose us?
              </h2>
              <div className="h-1 w-12 md:w-16 bg-orange-500" />
            </div>
          </div> */}

          <div className="space-y-4 md:space-y-6 text-slate-600 text-[15px] md:text-[18px] text-center">
            <p>
              At Paradise Tours, it's not just our passion; it's our expertise, honed over five years. We know the trails and towns like the back of our hands. From the cozy corners of local inns to the delectable offerings of renowned restaurants, we've built relationships that ensure you get the best of everything. We don't guide on any route we haven't meticulously explored many times before. Our deep knowledge and experience translate into a richer, more enjoyable adventure for you, making every moment count.
              <br /><br />
              Whether you're planning a corporate retreat, a romantic honeymoon, or an educational tour for your institute, Paradise Tours offers premium services tailored to your needs. Let us take care of every detail, so you can focus on creating unforgettable memories. Our expertise and dedication make us the perfect choice for any travel experience.
            </p>
          </div>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="w-full overflow-hidden rounded-lg">
            <img
              src={SectionImage.src}
              alt="Snow covered mountain peaks with hiking route"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

