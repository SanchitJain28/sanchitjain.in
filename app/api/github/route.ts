import { GitHubManifestData } from "@/types/github";
import { logToServer } from "@/utils/logToServer";
import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

  if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub username or access token not configured" },
      { status: 500 },
    );
  }

  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    const data = await response.json();
    const githubData: GitHubManifestData = data.data.user;

    logToServer("Fetched GitHub data", githubData, "github_api");

    return NextResponse.json(githubData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 },
    );
  }
}
