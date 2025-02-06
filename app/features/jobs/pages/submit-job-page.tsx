import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPE, LOCATION_TYPE, SALARY_RANGE } from "../constants";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Post a Job | wemake" },
    {
      name: "description",
      content: "Reach out to the best developers in the world",
    },
  ];
};

export default function SubmitJobPage() {
  return (
    <div>
      <Hero
        title="Post a Job"
        subtitle="Reach out to the best developers in the world"
      />
      <Form className="max-w-screen-2xl flex flex-col gap-10 mx-auto items-center">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            id="position"
            label="Position"
            description="(40 characters max)"
            name="position"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. Senior React Developer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="(400 characters max)"
            name="overview"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. We are looking for a senior React developer to join our team and help us build the next generation of our product."
            textArea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="(400 characters max, comma separated)"
            name="responsibilities"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. Implementing new features, Debugging, etc."
            textArea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="(400 characters max, comma separated)"
            name="qualifications"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. Bachelor's degree in Computer Science, 3 years of experience in React, etc."
            textArea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="(400 characters max, comma separated)"
            name="benefits"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. Flexible working hours, Remote work, Competitive salary, Health insurance, Dental insurance, Vision insurance, etc."
            textArea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="(400 characters max, comma separated)"
            name="skills"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. JavaScript, TypeScript, React, Node.js, Express, MongoDB, Git, Docker, Kubernetes, etc."
            textArea
          />
          <InputPair
            id="companyName"
            label="Company Name"
            description="(40 characters max)"
            name="companyName"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. wemake"
          />
          <InputPair
            id="companyLogoUrl"
            label="Company Logo URL"
            description="(40 characters max)"
            name="companyLogoUrl"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. https://wemake.services/logo.png"
          />
          <InputPair
            id="companyLocation"
            label="Company Location"
            description="(40 characters max)"
            name="companyLocation"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. Remote, San Francisco, CA, etc."
          />
          <InputPair
            id="applyUrl"
            label="Apply URL"
            description="(40 characters max)"
            name="applyUrl"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. https://wemake.services/apply"
          />
          <SelectPair
            label="Type"
            name="type"
            required
            description="Select the type of the job"
            placeholder="Select the type of the job"
            options={JOB_TYPE.map((type) => ({
              value: type.value,
              label: type.label,
            }))}
          />
          <SelectPair
            label="Job Location"
            name="jobLocation"
            required
            description="Select the location of the job"
            placeholder="Select the location of the job"
            options={LOCATION_TYPE.map((location) => ({
              value: location.value,
              label: location.label,
            }))}
          />
          <SelectPair
            label="Salary Range"
            name="salaryRange"
            required
            description="Select the salary of the job"
            placeholder="Select the salary of the job"
            options={SALARY_RANGE.map((salary) => ({
              value: salary,
              label: salary,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
