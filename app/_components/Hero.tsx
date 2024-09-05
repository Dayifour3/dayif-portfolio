/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
import "./style.css";
export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Manager Dayif
        </h2>
        <h3 className="text-3xl font-caption">Software developper</h3>
        <p className="text-base">
          I love creating web-site with
          <Link href="https://www.nextjs.com">
            <Code>Nextjs</Code>, living in
            <Code>🍀Mali</Code>
          </Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto round ml-auto">
        <img
          className="w-full h-auto max-w-xs rounded-full  object-cover max-md:w-56"
          alt="Dayif's picture"
        />
      </div>
    </Section>
  );
};