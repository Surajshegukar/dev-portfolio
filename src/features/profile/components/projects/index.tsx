import { CollapsibleList } from "@/components/collapsible-list";

import { WORK_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="professional-projects">
      <PanelHeader>
        <PanelTitle>
          Professional Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({WORK_PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={WORK_PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
