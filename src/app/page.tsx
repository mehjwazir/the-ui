import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLineIcon, Palette, SwatchBook } from "lucide-react";
import Link from 'next/link'


const perks = [
  {
    name: "Instant Download",
    Icon: ArrowDownToLineIcon,
    description: "Get your assets delivered to your email in seconds"

  },
  {
    name: "The User Interface",
    Icon: SwatchBook,
    description: "Browse UI kits"

  },
  {
    name: "The Brand Identity",
    Icon: Palette,
    description: "Featuring Identities for you to choose from "

  }
]


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
         The UI{''}
        <span className="text-gray-400"> digital assets</span>.
        
        
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>Browse</Link>
          <Button variant='ghost'>
            Our collection  &rarr;
          </Button>
        </div>
      </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gray-300 text-gray-500 ">
                    {<perk.Icon  className="w-1/3 h-1/3"/>}
                </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="me-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
            </div>
          ))}
          </div>
      </MaxWidthWrapper>
      </section>
    </>

  ) 
}
