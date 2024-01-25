import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
         The UI{''}
        <span className="text-gray-400"> digital assets</span>.
        
        
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
         <Link href="/products" className="">Browse</Link>
        </div>
      </div>

    </MaxWidthWrapper>

  ) 
}
