import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPE, LOCATION_TYPE, SALARY_RANGE } from "../constants";
import { Link, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="space-y-20">
      <Hero title="Jobs" subtitle="Find your dream job at wemake" />
      <div className="grid grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-3 col-span-4 gap-5">
          {Array.from({ length: 20 }).map((_, index) => (
            <JobCard
              key={`jobId-${index}`}
              id="jobId"
              company="Facebook"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="San Francisco, CA"
              title="Software Engineer"
              postedAt="12 hours ago"
              type="Full-time"
              positionLocation="Remote"
              salary="$100,000 - $150,000"
            />
          ))}
        </div>
        <div className="col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPE.map((type) => (
                <Button
                  variant="outline"
                  key={type.value}
                  onClick={() => onFilterClick("type", type.value)}
                  className={cn(
                    searchParams.get("type") === type.value && "bg-accent"
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPE.map((type) => (
                <Button
                  variant="outline"
                  key={type.value}
                  onClick={() => onFilterClick("location", type.value)}
                  className={cn(
                    searchParams.get("location") === type.value && "bg-accent"
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">
              Salary Range
            </h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGE.map((range) => (
                <Button
                  variant="outline"
                  key={range}
                  onClick={() => onFilterClick("salary", range)}
                  className={cn(
                    searchParams.get("salary") === range && "bg-accent"
                  )}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
