import { GraduationCapIcon } from "lucide-react";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { Separator } from "@/components/ui/separator";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4">
        <div className="flex items-center hover:bg-accent2 rounded-lg transition-colors">
          <div
            className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
            aria-hidden
          >
            <GraduationCapIcon className="pointer-events-none size-4 text-muted-foreground" />
          </div>

          <div className="flex-1 border-l border-dashed border-edge p-4">
            <h3 className="mb-1 leading-snug font-medium text-balance">
              Bachelor of Engineering (B.E.) in Computer Science
            </h3>
            <div className="text-sm font-medium text-foreground mb-1">
              Zeal College of Engineering and Research
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <span>Pune, Maharashtra, India</span>
              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
              <span>2020 — 2024</span>
              <Separator
                className="data-[orientation=vertical]:h-4"
                orientation="vertical"
              />
              <span className="font-semibold text-info">CGPA: 7.15</span>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
