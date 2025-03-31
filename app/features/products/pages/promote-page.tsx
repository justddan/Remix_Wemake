import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { useEffect, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";
import {
  loadTossPayments,
  type TossPaymentsWidgets,
} from "@tosspayments/tosspayments-sdk";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();

  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;

  const widgets = useRef<TossPaymentsWidgets | null>(null);
  useEffect(() => {
    const initToss = async () => {
      const toss = loadTossPayments("test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm");
      widgets.current = (await toss).widgets({
        customerKey: "1111111",
      });
      await widgets.current.setAmount({
        value: 10000,
        currency: "KRW",
      });
      await widgets.current.renderPaymentMethods({
        selector: "#toss-payment-methods",
      });
      await widgets.current.renderAgreement({
        selector: "#toss-payment-agreement",
      });
    };
    initToss();
  }, []);

  useEffect(() => {
    if (widgets.current) {
      widgets.current.setAmount({
        value: totalDays * 20000,
        currency: "KRW",
      });
    }
  }, [totalDays]);
  return (
    <div>
      <Hero
        title="Promote your product"
        subtitle="Boost your product's visibility."
      />
      <div className="grid grid-cols-6 gap-10">
        <Form className="col-span-3 mx-auto w-1/2 flex flex-col gap-10 items-start">
          <SelectPair
            label="Select a product"
            description="Select a product to promote"
            name="product"
            placeholder="Select a product"
            options={[
              {
                label: "AI Dark Mode Maker",
                value: "ai-dark-mode-maker",
              },
              {
                label: "AI Dark Mode Maker",
                value: "ai-dark-mode-maker-1",
              },
              {
                label: "AI Dark Mode Maker",
                value: "ai-dark-mode-maker-2",
              },
            ]}
          />
          <div className="flex flex-col gap-2 items-center w-full">
            <Label className="flex flex-col gap-1">
              Select a range of dates for promotion
              <small className="text-muted-foreground text-center">
                Minimum duration is 3 days
              </small>
            </Label>
            <Calendar
              mode="range"
              selected={promotionPeriod}
              onSelect={setPromotionPeriod}
              min={3}
              disabled={{ before: new Date() }}
            />
          </div>
        </Form>
        <aside className="col-span-3 px-20 flex flex-col items-center">
          <div id="toss-payment-methods" className="w-full" />
          <div id="toss-payment-agreement" />
          <Button className="w-full" disabled={totalDays === 0}>
            Checkout (
            {(totalDays * 20000).toLocaleString("ko-KR", {
              style: "currency",
              currency: "KRW",
            })}
            )
          </Button>
        </aside>
      </div>
    </div>
  );
}
