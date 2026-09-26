"use client";

import {
  AppWindowIcon,
  BotIcon,
  BriefcaseIcon,
  DatabaseIcon,
  ExternalLinkIcon,
  FolderGit2Icon,
  InfinityIcon,
  LayersIcon,
  LayoutGridIcon,
  ListFilterIcon,
  PaletteIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { PERSONAL_PROJECTS, WORK_PROJECTS } from "@/features/profile/data/projects";
import type { Project, ProjectCategory } from "@/features/profile/types/projects";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

const ALL_PROJECTS: Project[] = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];

type FilterCategory = "all" | ProjectCategory;

interface CategoryTab {
  id: FilterCategory;
  label: string;
  icon: React.ElementType;
  description: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    id: "all",
    label: "All Projects",
    icon: LayersIcon,
    description: "Full repository of client ERPs, SaaS platforms, AI models, & web apps",
  },
  {
    id: "erps",
    label: "ERPs & SaaS",
    icon: DatabaseIcon,
    description: "Enterprise resource planning, RBAC systems, & multi-tenant SaaS",
  },
  {
    id: "business",
    label: "Business Websites",
    icon: BriefcaseIcon,
    description: "Client business applications, marketplaces, & commercial portals",
  },
  {
    id: "ai",
    label: "AI Products",
    icon: BotIcon,
    description: "LLM agents, RAG engines, Chrome extensions, & ML models",
  },
  {
    id: "designs",
    label: "Website Designs",
    icon: PaletteIcon,
    description: "Custom UI/UX ecosystems, toolkits, & modern web design suites",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Category Filter
      const matchesCategory =
        activeCategory === "all" ||
        (project.categories && project.categories.includes(activeCategory as ProjectCategory));

      // Search Query Filter
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = project.title.toLowerCase().includes(query);
      const matchesDescription = project.description?.toLowerCase().includes(query) ?? false;
      const matchesSkills = project.skills.some((skill) =>
        skill.toLowerCase().includes(query)
      );

      return matchesCategory && (matchesTitle || matchesDescription || matchesSkills);
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<FilterCategory, number> = {
      all: ALL_PROJECTS.length,
      erps: 0,
      business: 0,
      ai: 0,
      designs: 0,
    };

    ALL_PROJECTS.forEach((project) => {
      project.categories?.forEach((cat) => {
        if (cat in counts) {
          counts[cat]++;
        }
      });
    });

    return counts;
  }, []);

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header Banner */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <LayoutGridIcon className="size-3.5" />
            <span>Interactive Portfolio Gallery</span>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Projects & Case Studies
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base">
            Explore client ERP solutions, multi-tenant SaaS products, AI research pipelines, and business web applications.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative mx-auto max-w-xl">
            <SearchIcon className="absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, technology (e.g. Next.js, FastAPI, RBAC, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-10 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
                aria-label="Clear search"
              >
                <XIcon className="size-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              const count = categoryCounts[tab.id];

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all select-none border",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                      : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:bg-accent hover:text-foreground"
                  )}
                >
                  <Icon className="size-3.5" />
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "ml-1 rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter / Filter Indicator */}
        <div className="mb-6 flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <ListFilterIcon className="size-3.5 text-primary" />
            <span>
              Showing <strong className="text-foreground">{filteredProjects.length}</strong> of{" "}
              {ALL_PROJECTS.length} projects
            </span>
          </div>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-primary hover:underline font-medium"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Projects List */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="my-12 rounded-2xl border border-dashed border-border bg-muted/20 p-8 text-center sm:p-12">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <FolderGit2Icon className="size-6" />
            </div>
            <h3 className="mb-1 text-base font-semibold text-foreground">No projects found</h3>
            <p className="mx-auto mb-6 max-w-sm text-xs text-muted-foreground">
              No matching projects for &quot;{searchQuery}&quot; under the selected filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { start, end } = project.period;
  const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={project.isExpanded} asChild>
      <div className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/40 hover:shadow-md">
        <div className="flex items-start sm:items-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={36}
              height={36}
              quality={100}
              className="mx-4 my-4 flex size-8 shrink-0 rounded-lg select-none"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 my-4 flex size-8 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <Icons.project className="size-4" />
            </div>
          )}

          <div className="flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 pr-3 text-left select-none">
              <div className="flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground leading-snug text-base">
                    {project.title}
                  </h3>
                  {project.categories?.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary uppercase tracking-wider"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <dl className="text-xs text-muted-foreground">
                  <dt className="sr-only">Period</dt>
                  <dd className="flex items-center gap-1">
                    <span>{start}</span>
                    <span className="font-mono">—</span>
                    {isOngoing ? (
                      <>
                        <InfinityIcon
                          className="size-3.5 translate-y-[0.5px]"
                          aria-hidden
                        />
                        <span className="sr-only">Present</span>
                      </>
                    ) : (
                      <span>{end}</span>
                    )}
                  </dd>
                </dl>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center">
                {project.link && project.link !== "#" && (
                  <SimpleTooltip content="Visit Live Application / Repo">
                    <a
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      href={addQueryParams(project.link, {
                        utm_source: UTM_PARAMS.utm_source,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Open</span>
                      <ExternalLinkIcon className="size-3" />
                    </a>
                  </SimpleTooltip>
                )}

                <div
                  className="shrink-0 text-muted-foreground [&_svg]:size-4"
                  aria-hidden
                >
                  <CollapsibleChevronsIcon />
                </div>
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-border bg-muted/10 p-4 space-y-4">
            {project.description && (
              <Prose className="text-sm">
                <Markdown>{project.description}</Markdown>
              </Prose>
            )}

            {project.skills.length > 0 && (
              <div className="pt-1">
                <p className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Technologies & Architecture
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="flex">
                      <Tag className="text-xs">{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
