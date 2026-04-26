export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export interface ContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel: ContributionLevel;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface PrimaryLanguage {
  name: string;
}

export interface RepositoryNode {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: PrimaryLanguage | null;
}

export interface PinnedItems {
  nodes: RepositoryNode[];
}

export interface GitHubManifestData {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
  pinnedItems: PinnedItems;
}
