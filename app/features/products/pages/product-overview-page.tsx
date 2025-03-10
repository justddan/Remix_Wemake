import { ChevronUpIcon, StarIcon } from "lucide-react";
import type { Route } from "./+types/product-overview-page";
import { Button } from "~/common/components/ui/button";
import { Link, useOutletContext } from "react-router";

export default function ProductOverviewPage() {
  const { description, how_it_works } = useOutletContext<{
    description: string;
    how_it_works: string;
  }>();
  return (
    <div>
      <div className="space-y-10">
        <div className="space-y-1">
          <h3 className="text-lg font-bold">What is this product?</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold">How does it work?</h3>
          <p className="text-muted-foreground">{how_it_works}</p>
        </div>
      </div>
    </div>
  );
}
