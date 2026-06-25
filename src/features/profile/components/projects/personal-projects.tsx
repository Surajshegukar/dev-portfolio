import { CollapsibleList } from "@/components/collapsible-list";

import { PERSONAL_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function PersonalProjects() {
  return (
    <Panel id="personal-projects">
      <PanelHeader>
        <PanelTitle>
          Personal Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PERSONAL_PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PERSONAL_PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
