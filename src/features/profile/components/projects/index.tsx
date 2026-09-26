import { CollapsibleList } from "@/components/collapsible-list";

import { WORK_PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  const homepageProjects = WORK_PROJECTS.filter(
    (project) => project.showOnHomepage === true
  );

  return (
    <Panel id="professional-projects">
      <PanelHeader>
        <PanelTitle>
          Professional Projects
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
