"use client"

import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative">
      <div className="absolute top-6 right-6"><ThemeModeToggle /></div>

      <section className="flex items-start justify-between gap-6 w-full max-w-xl">
        <div>
          <h1 className="text-xl font-semibold text-pretty">
            Lucas Becker Felisberto
          </h1>

          <p className="font-light tracking-tight text-muted-foreground text-pretty">
            Full stack software engineer, focused on front-end web development
          </p>
        </div>   

        <Avatar className="w-24 h-24 rounded-2xl">
          <AvatarImage src="https://github.com/lucasbecker.png" alt="Lucas Becker" />
          <AvatarFallback>LB</AvatarFallback>
        </Avatar>
      </section>
    </main>
  )
}
