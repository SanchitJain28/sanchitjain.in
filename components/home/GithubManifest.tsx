"use client";
import { ContributionLevel, GitHubManifestData } from "@/types/github";
import { useEffect, useState } from "react";

export default function GithubManifest() {
  const [data, setData] = useState<GitHubManifestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("FAILED_TO_LOAD");
        return res.json();
      })
      .then((data: GitHubManifestData) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("[ERROR] DATA_CORRUPTION");
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="w-full p-6 md:p-12 border-t border-surface bg-surface flex justify-start">
        <span className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-widest text-[#FFFFFF]">
          {error}
        </span>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="w-full p-6 md:p-12 border-t border-surface bg-surface flex justify-start">
        <span className="font-['Space_Grotesk'] text-xl font-bold uppercase tracking-widest text-surface animate-pulse">
          [STATUS] FETCHING_ARCHIVE...
        </span>
      </div>
    );
  }

  const calendar = data.contributionsCollection.contributionCalendar;
  const repos = data.pinnedItems.nodes;

  // The Brutalist Density Matrix mapping
  const getDensitySquare = (level: ContributionLevel, date: string) => {
    // Shared container styles: strict 1px solid black, pure white background
    const containerClasses =
      "w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] border border-surface flex items-center justify-center transition-none";

    switch (level) {
      case "NONE":
        return (
          <div
            key={date}
            className={`${containerClasses} bg-[#FFFFFF]`}
            title={date}
          />
        );
      case "FIRST_QUARTILE":
        return (
          <div
            key={date}
            className={`${containerClasses} bg-[#FFFFFF]`}
            title={date}
          >
            <div className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-surface" />
          </div>
        );
      case "SECOND_QUARTILE":
        return (
          <div
            key={date}
            className={`${containerClasses} bg-[#FFFFFF]`}
            title={date}
          >
            <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-surface" />
          </div>
        );
      case "THIRD_QUARTILE":
        return (
          <div
            key={date}
            className={`${containerClasses} bg-surface`}
            title={date}
          >
            <div className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-[#FFFFFF]" />
          </div>
        );
      case "FOURTH_QUARTILE":
        return (
          <div
            key={date}
            className={`${containerClasses} bg-surface`}
            title={date}
          />
        );
      default:
        return (
          <div key={date} className={`${containerClasses} bg-[#FFFFFF]`} />
        );
    }
  };

  return (
    <section className="relative w-full border-t border-surface bg-[#FFFFFF]">
      <div className="bg-surface text-[#FFFFFF] w-full p-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-surface">
        <h2 className="font-['Space_Grotesk'] text-[2rem] md:text-[3rem] font-bold tracking-tighter leading-[0.9] uppercase">
          Open_Source
          <span className="italic block md:inline md:ml-4 text-[#FFFFFF]">
            Manifest.
          </span>
        </h2>
        <div className="mt-4 md:mt-0 font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase border border-[#FFFFFF] px-3 py-1">
          [COMMITS: {calendar.totalContributions}]
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-stretch w-full">
        <div className="w-full xl:w-1/2 p-6 md:p-8 border-b xl:border-b-0 xl:border-r border-surface bg-[#FFFFFF] overflow-hidden flex flex-col">
          <div className="mb-8 flex justify-between items-end border-b-4 border-surface pb-2">
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-surface leading-none">
              Activity Matrix
            </h3>
            <span className="font-['Space_Grotesk'] text-[0.70rem] font-bold uppercase tracking-widest text-surface">
              [DENSITY = VOLUME]
            </span>
          </div>

          <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-[2px] sm:gap-[3px] min-w-max">
              {calendar.weeks.map((week, wIndex) => (
                <div
                  key={wIndex}
                  className="flex flex-col gap-[2px] sm:gap-[3px]"
                >
                  {week.contributionDays.map((day) =>
                    getDensitySquare(day.contributionLevel, day.date),
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center gap-4 border-t border-surface pt-4">
            <span className="font-['Space_Grotesk'] text-[0.65rem] font-bold tracking-widest uppercase text-surface">
              [MIN]
            </span>
            <div className="flex gap-[3px]">
              {getDensitySquare("NONE", "l1")}
              {getDensitySquare("FIRST_QUARTILE", "l2")}
              {getDensitySquare("SECOND_QUARTILE", "l3")}
              {getDensitySquare("THIRD_QUARTILE", "l4")}
              {getDensitySquare("FOURTH_QUARTILE", "l5")}
            </div>
            <span className="font-['Space_Grotesk'] text-[0.65rem] font-bold tracking-widest uppercase text-surface">
              [MAX]
            </span>
          </div>
        </div>

        {/* RIGHT/BOTTOM PANEL: Pinned Repos */}
        <div className="w-full xl:w-1/2 bg-[#FFFFFF]">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {repos.map((repo, index) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col justify-between p-6 bg-[#FFFFFF] hover:bg-surface border-b border-surface ${
                  index % 2 === 0 ? "md:border-r" : ""
                } transition-none cursor-pointer min-h-[220px]`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-2 py-0.5 border border-surface bg-surface text-[#FFFFFF] group-hover:bg-[#FFFFFF] group-hover:text-surface font-['Space_Grotesk'] text-[0.65rem] font-bold uppercase tracking-widest transition-none">
                      [REPO]
                    </span>
                    {repo.primaryLanguage && (
                      <span className="font-['Space_Grotesk'] text-[0.70rem] font-bold text-surface group-hover:text-[#FFFFFF] uppercase tracking-tighter transition-none">
                        {repo.primaryLanguage.name} 
                      </span>
                    )}
                  </div>

                  <h4 className="font-['Space_Grotesk'] text-[1.5rem] font-bold uppercase tracking-tighter text-surface group-hover:text-[#FFFFFF] break-words mb-3 leading-[1]">
                    {repo.name}
                  </h4>
                  <p className="font-['Inter'] text-sm text-surface group-hover:text-[#FFFFFF] leading-tight transition-none">
                    {repo.description || "NO_DATA_PROVIDED"}
                  </p>
                </div>

                {/* Bottom Metadata */}
                <div className="mt-8 flex gap-4 border-t border-surface group-hover:border-[#FFFFFF] pt-4 transition-none">
                  <span className="font-['Space_Grotesk'] text-[0.75rem] font-bold text-surface group-hover:text-[#FFFFFF] uppercase transition-none">
                    [STARS: {repo.stargazerCount}]
                  </span>
                  <span className="font-['Space_Grotesk'] text-[0.75rem] font-bold text-surface group-hover:text-[#FFFFFF] uppercase transition-none">
                    [FORKS: {repo.forkCount}]
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
