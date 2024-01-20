"use client";

import { ReactNode } from "react";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { RESUME_DATA } from "@/data/resume";

const ICON: Record<string, ReactNode> = {
  Email: <EnvelopeClosedIcon />,
  LinkedIn: <LinkedInLogoIcon />,
  GitHub: <GitHubLogoIcon />,
  Twitter: <TwitterLogoIcon />,
};

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center gap-6 p-6 relative">
      <div className="flex items-center w-full justify-end print:hidden">
        <ThemeModeToggle />
      </div>

      <section className="flex items-start justify-between gap-3 w-full max-w-xl">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-xl font-semibold text-pretty">
              {RESUME_DATA.name}
            </h1>

            <p className="font-light tracking-tight text-muted-foreground text-pretty">
              {RESUME_DATA.about}
            </p>
          </div>

          <div className="mt-0 pt-0 flex gap-x-2 text-sm text-muted-foreground max-[460px]:absolute max-[460px]:top-6 max-[460px]:left-[50%] max-[460px]:translate-x-[-50%] print:hidden">
            {RESUME_DATA.contacts.map(({ name, url }, index) => (
              <Button
                key={index}
                title={name}
                className="size-9"
                variant="outline"
                size="icon"
                asChild
              >
                <a
                  href={name === "Email" ? `mailto:${url}` : url}
                  target="_blank"
                >
                  {ICON[name]}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Avatar className="w-[124px] h-[124px] rounded-xl max-[460px]:absolute max-[460px]:top-6 max-[460px]:left-6 max-[460px]:w-9 max-[460px]:h-9">
          <AvatarImage src={RESUME_DATA.avatarUrl} />
          <AvatarFallback className="rounded-xl">
            {RESUME_DATA.initials}
          </AvatarFallback>
        </Avatar>
      </section>

      <section className="flex flex-col items-start justify-between w-full max-w-xl">
        <h2 className="text-lg font-semibold">About</h2>

        <p className="text-pretty font-light text-muted-foreground tracking-tight">
          Work in progress!
        </p>
      </section>

      <section className="flex flex-col items-start justify-between w-full max-w-xl">
        <h2 className="text-lg font-semibold">Work Experience</h2>

        <p className="text-pretty font-light text-muted-foreground tracking-tight">
          Work in progress!
        </p>
      </section>

      <section className="flex flex-col items-start justify-between w-full max-w-xl">
        <h2 className="text-lg font-semibold">Education</h2>

        {RESUME_DATA.education.map((eduction, index) => (
          <Card key={index} className="border-0 mt-3 w-full shadow-none">
            <CardHeader className="p-0">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  {eduction.school}
                </h3>

                <span className="text-sm tabular-nums text-muted-foreground">
                  {eduction.date}
                </span>
              </div>

              <h4 className="text-sm leading-none font-light text-muted-foreground">
                {eduction.degree}
              </h4>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  );
}
