import { CollapsibleList } from "@/components/collapsible-list";

import { PERSONAL_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function PersonalProjects() {
  const homepageProjects = PERSONAL_PROJECTS.filter(
    (project) => project.showOnHomepage === true
  );

  return (
    <Panel id="personal-projects">
      <PanelHeader>
        <PanelTitle>
          Personal Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({homepageProjects.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={homepageProjects}
        max={4}
        redirectHref="/projects"
        redirectText="Show More"
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
