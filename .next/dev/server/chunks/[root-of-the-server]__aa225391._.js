module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptSession",
    ()=>decryptSession,
    "encryptSession",
    ()=>encryptSession
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
// Use a secret key from environment variable (must be 32 bytes for AES-256)
const getSecretKey = ()=>{
    const secret = process.env.SESSION_SECRET;
    if (!secret) {
        throw new Error("SESSION_SECRET environment variable is required");
    }
    // Create a consistent 32-byte key from the secret
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(secret).digest();
};
const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;
function encryptSession(data) {
    const key = getSecretKey();
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(IV_LENGTH);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGORITHM, key, iv);
    const jsonData = JSON.stringify(data);
    const encrypted = Buffer.concat([
        cipher.update(jsonData, "utf8"),
        cipher.final()
    ]);
    const authTag = cipher.getAuthTag();
    // Combine IV + AuthTag + Encrypted data, then base64 encode
    const combined = Buffer.concat([
        iv,
        authTag,
        encrypted
    ]);
    return combined.toString("base64");
}
function decryptSession(encryptedData) {
    try {
        const key = getSecretKey();
        const combined = Buffer.from(encryptedData, "base64");
        // Extract IV, AuthTag, and encrypted data
        const iv = combined.subarray(0, IV_LENGTH);
        const authTag = combined.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
        const encrypted = combined.subarray(IV_LENGTH + AUTH_TAG_LENGTH);
        const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGORITHM, key, iv);
        decipher.setAuthTag(authTag);
        const decrypted = Buffer.concat([
            decipher.update(encrypted),
            decipher.final()
        ]);
        return JSON.parse(decrypted.toString("utf8"));
    } catch (error) {
        console.error("Session decryption failed:", error);
        return null;
    }
}
}),
"[project]/app/api/github/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-route] (ecmascript)");
;
;
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_REST_URL = "https://api.github.com";
const query = `
query($username: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $username) {
    login
    name
    avatarUrl
    bio
    followers { totalCount }
    following { totalCount }
    repositories(ownerAffiliations: OWNER) { totalCount }
    createdAt
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
      totalCommitContributions
      totalPullRequestContributions
      totalPullRequestReviewContributions
      totalIssueContributions
      totalRepositoryContributions
      restrictedContributionsCount
      commitContributionsByRepository(maxRepositories: 100) {
        repository {
          name
          nameWithOwner
          isFork
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
        }
        contributions {
          totalCount
        }
      }
    }
    pullRequests(first: 100, states: MERGED, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        repository {
          name
        }
      }
    }
    issues(first: 1) {
      totalCount
    }
    issueComments(first: 1) {
      totalCount
    }
    starredRepositories {
      totalCount
    }
    topRepositories: repositories(first: 20, orderBy: {field: STARGAZERS, direction: DESC}, ownerAffiliations: OWNER) {
      nodes {
        name
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              name
              color
            }
          }
        }
      }
    }
  }
}
`;
async function fetchGitHubDataAuthenticated(username, token) {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const response = await fetch(GITHUB_GRAPHQL_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query,
            variables: {
                username,
                from: startOfYear.toISOString(),
                to: now.toISOString()
            }
        })
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    if (data.errors) {
        throw new Error(data.errors[0]?.message || "GraphQL query failed");
    }
    if (!data.data?.user) {
        throw new Error("User not found");
    }
    return processGraphQLResponse(data.data.user);
}
async function fetchContributionCalendar(username) {
    const year = new Date().getFullYear();
    // GitHub provides a public endpoint for contribution data
    const response = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions?from=${year}-01-01&to=${year}-12-31`, {
        headers: {
            Accept: "text/html",
            "User-Agent": "CodeSynth-2025"
        }
    });
    if (!response.ok) {
        // Fallback to empty calendar if fetch fails
        return {
            calendar: {
                totalContributions: 0,
                weeks: []
            },
            totalContributions: 0
        };
    }
    const html = await response.text();
    // Parse contribution data from the HTML response
    const contributionDays = [];
    // Match data-date and data-level attributes from the SVG
    const dayRegex = /data-date="([^"]+)"[^>]*data-level="(\d+)"/g;
    let match;
    while((match = dayRegex.exec(html)) !== null){
        const date = match[1];
        const level = Number.parseInt(match[2], 10);
        // Only include 2025 dates
        if (date.startsWith(`${year}`)) {
            contributionDays.push({
                date,
                count: levelToCount(level),
                color: levelToColor(level)
            });
        }
    }
    // Also try to extract total contributions
    const totalMatch = html.match(/(\d{1,3}(?:,\d{3})*)\s+contributions?\s+in\s+(?:the\s+last\s+year|${year})/i);
    let totalFromPage = 0;
    if (totalMatch) {
        totalFromPage = Number.parseInt(totalMatch[1].replace(/,/g, ""), 10);
    }
    // Build weeks array
    const weeks = buildWeeksFromDays(contributionDays, year);
    const calculatedTotal = contributionDays.reduce((sum, d)=>sum + d.count, 0);
    return {
        calendar: {
            totalContributions: totalFromPage || calculatedTotal,
            weeks
        },
        totalContributions: totalFromPage || calculatedTotal
    };
}
function levelToCount(level) {
    // GitHub uses levels 0-4, we convert back to approximate counts
    switch(level){
        case 0:
            return 0;
        case 1:
            return 2;
        case 2:
            return 5;
        case 3:
            return 10;
        case 4:
            return 15;
        default:
            return 0;
    }
}
function levelToColor(level) {
    switch(level){
        case 0:
            return "#161b22";
        case 1:
            return "#0e4429";
        case 2:
            return "#006d32";
        case 3:
            return "#26a641";
        case 4:
            return "#39d353";
        default:
            return "#161b22";
    }
}
function buildWeeksFromDays(days, year) {
    // Sort days by date
    days.sort((a, b)=>a.date.localeCompare(b.date));
    const weeks = [];
    let currentWeek = [];
    // Create a map for quick lookup
    const dayMap = new Map(days.map((d)=>[
            d.date,
            d
        ]));
    // Start from Jan 1
    const startDate = new Date(year, 0, 1);
    const endDate = new Date();
    // Pad to start on Sunday
    const startDay = startDate.getDay();
    for(let i = 0; i < startDay; i++){
        currentWeek.push({
            contributionCount: 0,
            date: "",
            color: "#161b22"
        });
    }
    const current = new Date(startDate);
    while(current <= endDate){
        const dateStr = current.toISOString().split("T")[0];
        const dayData = dayMap.get(dateStr);
        currentWeek.push({
            contributionCount: dayData?.count || 0,
            date: dateStr,
            color: dayData?.color || "#161b22"
        });
        if (currentWeek.length === 7) {
            weeks.push({
                contributionDays: currentWeek
            });
            currentWeek = [];
        }
        current.setDate(current.getDate() + 1);
    }
    if (currentWeek.length > 0) {
        weeks.push({
            contributionDays: currentWeek
        });
    }
    return weeks;
}
function processGraphQLResponse(user) {
    // Build a map of user's commits per repository from contributionsByRepository
    const userCommitsByRepo = new Map();
    const repoDetailsMap = new Map();
    user.contributionsCollection.commitContributionsByRepository?.forEach((item)=>{
        const repoName = item.repository.name;
        userCommitsByRepo.set(repoName, item.contributions.totalCount);
        repoDetailsMap.set(repoName, item.repository);
    });
    // Build PR counts per repository
    const prCountsByRepo = new Map();
    user.pullRequests?.nodes?.forEach((pr)=>{
        if (pr.repository?.name) {
            prCountsByRepo.set(pr.repository.name, (prCountsByRepo.get(pr.repository.name) || 0) + 1);
        }
    });
    // Process repositories - only include repos where user has actually contributed
    const repositories = [];
    userCommitsByRepo.forEach((commits, repoName)=>{
        const repoDetails = repoDetailsMap.get(repoName);
        if (repoDetails && commits > 0) {
            repositories.push({
                name: repoName,
                stars: repoDetails.stargazerCount || 0,
                commits: commits,
                prs: prCountsByRepo.get(repoName) || 0,
                language: repoDetails.primaryLanguage?.name || null,
                forks: repoDetails.forkCount || 0,
                isFork: repoDetails.isFork || false
            });
        }
    });
    // Sort by user's commits descending
    repositories.sort((a, b)=>b.commits - a.commits);
    // Aggregate languages
    const languageMap = new Map();
    user.topRepositories.nodes.forEach((repo)=>{
        repo.languages?.edges?.forEach((edge)=>{
            const name = edge.node.name;
            const existing = languageMap.get(name);
            if (existing) {
                existing.size += edge.size;
            } else {
                languageMap.set(name, {
                    size: edge.size,
                    color: edge.node.color || "#888888"
                });
            }
        });
    });
    const languages = Array.from(languageMap.entries()).map(([name, { size, color }])=>({
            name,
            size,
            color
        })).sort((a, b)=>b.size - a.size);
    // Calculate totals
    const totalStarsEarned = repositories.reduce((sum, repo)=>sum + repo.stars, 0);
    const totalForksEarned = repositories.reduce((sum, repo)=>sum + (repo.forks || 0), 0);
    const totalCommits = user.contributionsCollection.totalCommitContributions;
    const totalPRsMerged = user.pullRequests?.totalCount || 0;
    const totalPRsOpened = user.contributionsCollection.totalPullRequestContributions;
    const totalIssuesOpened = user.contributionsCollection.totalIssueContributions;
    const totalIssuesClosed = user.issues?.totalCount || 0;
    // Calculate streaks
    const { longestStreak, currentStreak, mostActiveDay } = calculateStreaks(user.contributionsCollection.contributionCalendar);
    // Find most active repo (by user's commits)
    const mostActiveRepo = repositories[0]?.name || null;
    return {
        user: {
            login: user.login,
            name: user.name,
            avatarUrl: user.avatarUrl,
            bio: user.bio,
            followers: user.followers?.totalCount || 0,
            following: user.following?.totalCount || 0,
            publicRepos: user.repositories?.totalCount || 0,
            createdAt: user.createdAt
        },
        totalContributions: user.contributionsCollection.contributionCalendar.totalContributions,
        contributionCalendar: user.contributionsCollection.contributionCalendar,
        repositories,
        languages,
        topLanguage: languages[0]?.name || null,
        totalPRsMerged,
        totalPRsOpened,
        totalIssuesOpened,
        totalIssuesClosed,
        totalStarsEarned,
        totalStarsGiven: user.starredRepositories?.totalCount || 0,
        totalForksEarned,
        totalCommits,
        longestStreak,
        currentStreak,
        mostActiveDay,
        mostActiveRepo
    };
}
async function fetchGitHubDataPublic(username) {
    const cleanUsername = username.trim();
    if (!cleanUsername || !/^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/.test(cleanUsername)) {
        throw new Error("Invalid GitHub username format");
    }
    // Fetch multiple endpoints in parallel
    const [userResponse, reposResponse, contributionData, eventsResponse, starredResponse] = await Promise.all([
        fetch(`${GITHUB_REST_URL}/users/${encodeURIComponent(cleanUsername)}`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "CodeSynth-2025"
            }
        }),
        fetch(`${GITHUB_REST_URL}/users/${encodeURIComponent(cleanUsername)}/repos?sort=stars&direction=desc&per_page=100`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "CodeSynth-2025"
            }
        }),
        fetchContributionCalendar(cleanUsername),
        fetch(`${GITHUB_REST_URL}/users/${encodeURIComponent(cleanUsername)}/events/public?per_page=100`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "CodeSynth-2025"
            }
        }),
        fetch(`${GITHUB_REST_URL}/users/${encodeURIComponent(cleanUsername)}/starred?per_page=1`, {
            headers: {
                Accept: "application/vnd.github.v3+json",
                "User-Agent": "CodeSynth-2025"
            }
        })
    ]);
    if (!userResponse.ok) {
        if (userResponse.status === 404) {
            throw new Error(`GitHub user "${cleanUsername}" not found. Please check the username and try again.`);
        }
        if (userResponse.status === 403) {
            throw new Error("Rate limit exceeded. Please sign in with GitHub for unlimited access.");
        }
        const errorBody = await userResponse.text();
        throw new Error(`GitHub API error: ${userResponse.status} - ${errorBody}`);
    }
    const userData = await userResponse.json();
    if (!reposResponse.ok) {
        if (reposResponse.status === 403) {
            throw new Error("Rate limit exceeded. Please sign in with GitHub for unlimited access.");
        }
        throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
    }
    const reposData = await reposResponse.json();
    let eventsData = [];
    if (eventsResponse.ok) {
        eventsData = await eventsResponse.json();
    }
    // Get starred count from Link header
    let starredCount = 0;
    if (starredResponse.ok) {
        const linkHeader = starredResponse.headers.get("Link");
        if (linkHeader) {
            const lastMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (lastMatch) {
                starredCount = Number.parseInt(lastMatch[1], 10);
            }
        } else {
            const starredData = await starredResponse.json();
            starredCount = Array.isArray(starredData) ? starredData.length : 0;
        }
    }
    // Count user's commits per repo from events (this is user's activity only)
    const repoCommitCounts = new Map();
    eventsData.forEach((event)=>{
        if (event.type === "PushEvent") {
            const repoName = event.repo?.name?.split("/")[1];
            if (repoName) {
                const commits = event.payload?.commits?.length || 0;
                repoCommitCounts.set(repoName, (repoCommitCounts.get(repoName) || 0) + commits);
            }
        }
    });
    // Count PRs per repo from events
    const repoPRCounts = new Map();
    eventsData.forEach((event)=>{
        if (event.type === "PullRequestEvent") {
            const repoName = event.repo?.name?.split("/")[1];
            if (repoName) {
                repoPRCounts.set(repoName, (repoPRCounts.get(repoName) || 0) + 1);
            }
        }
    });
    // Build repositories list - only include user's own repos, not forks, unless user has commits in them
    const repositories = reposData.filter((repo)=>{
        // Include if not a fork, or if user has commits in the fork (from events)
        if (!repo.fork) return true;
        return repoCommitCounts.has(repo.name) && (repoCommitCounts.get(repo.name) || 0) > 0;
    }).map((repo)=>{
        const userCommits = repoCommitCounts.get(repo.name) || 0;
        // For non-forked repos owned by user, estimate commits if no events data
        // For forked repos, only use actual event commits (0 if none)
        const commits = repo.fork ? userCommits : userCommits || Math.ceil(repo.size / 100) // Smaller estimate for owned repos
        ;
        return {
            name: repo.name,
            stars: repo.stargazers_count || 0,
            commits: commits,
            prs: repoPRCounts.get(repo.name) || 0,
            language: repo.language || null,
            forks: repo.forks_count || 0,
            isFork: repo.fork || false
        };
    });
    // Sort by commits (user's activity)
    repositories.sort((a, b)=>b.commits - a.commits);
    // Aggregate languages from repositories (only from non-forked or actively contributed repos)
    const languageMap = new Map();
    const languageColors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        Python: "#3572A5",
        Java: "#b07219",
        Go: "#00ADD8",
        Rust: "#dea584",
        Ruby: "#701516",
        PHP: "#4F5D95",
        "C++": "#f34b7d",
        C: "#555555",
        "C#": "#178600",
        Swift: "#F05138",
        Kotlin: "#A97BFF",
        Dart: "#00B4AB",
        Vue: "#41b883",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Shell: "#89e051",
        Scala: "#c22d40"
    };
    repositories.forEach((repo)=>{
        if (repo.language) {
            const existing = languageMap.get(repo.language);
            // Weight by commits to reflect actual usage
            const weight = repo.commits || 1;
            if (existing) {
                existing.size += weight;
            } else {
                languageMap.set(repo.language, {
                    size: weight,
                    color: languageColors[repo.language] || "#888888"
                });
            }
        }
    });
    const languages = Array.from(languageMap.entries()).map(([name, { size, color }])=>({
            name,
            size,
            color
        })).sort((a, b)=>b.size - a.size);
    // Count events by type
    const pushEvents = eventsData.filter((e)=>e.type === "PushEvent");
    const prEvents = eventsData.filter((e)=>e.type === "PullRequestEvent");
    const issueEvents = eventsData.filter((e)=>e.type === "IssuesEvent");
    const commitsFromEvents = pushEvents.reduce((sum, e)=>{
        return sum + (e.payload?.commits?.length || 0);
    }, 0);
    const prsOpened = prEvents.filter((e)=>e.payload?.action === "opened").length;
    const prsMerged = prEvents.filter((e)=>e.payload?.action === "closed" && e.payload?.pull_request?.merged).length;
    const issuesOpened = issueEvents.filter((e)=>e.payload?.action === "opened").length;
    const issuesClosed = issueEvents.filter((e)=>e.payload?.action === "closed").length;
    // Calculate streaks from contribution calendar
    const { longestStreak, currentStreak, mostActiveDay } = calculateStreaks(contributionData.calendar);
    // Calculate total stars from non-forked repos only
    const totalStarsEarned = repositories.filter((r)=>!r.isFork).reduce((sum, repo)=>sum + repo.stars, 0);
    const totalForksEarned = repositories.filter((r)=>!r.isFork).reduce((sum, repo)=>sum + (repo.forks || 0), 0);
    return {
        user: {
            login: userData.login,
            name: userData.name,
            avatarUrl: userData.avatar_url,
            bio: userData.bio,
            followers: userData.followers || 0,
            following: userData.following || 0,
            publicRepos: userData.public_repos || 0,
            createdAt: userData.created_at
        },
        totalContributions: contributionData.totalContributions,
        contributionCalendar: contributionData.calendar,
        repositories,
        languages,
        topLanguage: languages[0]?.name || null,
        totalPRsMerged: prsMerged,
        totalPRsOpened: prsOpened,
        totalIssuesOpened: issuesOpened,
        totalIssuesClosed: issuesClosed,
        totalStarsEarned,
        totalStarsGiven: starredCount,
        totalForksEarned,
        totalCommits: commitsFromEvents || Math.round(contributionData.totalContributions * 0.7),
        longestStreak,
        currentStreak,
        mostActiveDay,
        mostActiveRepo: repositories[0]?.name || null
    };
}
function calculateStreaks(calendar) {
    const allDays = [];
    const dayCounts = {
        Sunday: 0,
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0
    };
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    calendar.weeks.forEach((week)=>{
        week.contributionDays.forEach((day)=>{
            if (day.date) {
                allDays.push({
                    date: day.date,
                    count: day.contributionCount
                });
                const dayOfWeek = new Date(day.date).getDay();
                dayCounts[dayNames[dayOfWeek]] += day.contributionCount;
            }
        });
    });
    // Sort by date
    allDays.sort((a, b)=>a.date.localeCompare(b.date));
    let longestStreak = 0;
    let currentStreak = 0;
    let tempStreak = 0;
    for(let i = 0; i < allDays.length; i++){
        if (allDays[i].count > 0) {
            tempStreak++;
            longestStreak = Math.max(longestStreak, tempStreak);
        } else {
            tempStreak = 0;
        }
    }
    // Calculate current streak (from today backwards)
    for(let i = allDays.length - 1; i >= 0; i--){
        if (allDays[i].count > 0) {
            currentStreak++;
        } else {
            break;
        }
    }
    // Find most active day
    const mostActiveDay = Object.entries(dayCounts).sort((a, b)=>b[1] - a[1])[0]?.[0] || null;
    return {
        longestStreak,
        currentStreak,
        mostActiveDay
    };
}
async function POST(request) {
    try {
        const body = await request.json();
        const { username, useOAuth } = body;
        const cleanUsername = username?.trim();
        if (!cleanUsername) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Username is required"
            }, {
                status: 400
            });
        }
        // If useOAuth is true, try to use authenticated API with encrypted session
        if (useOAuth) {
            const sessionCookie = request.cookies.get("github_session")?.value;
            if (!sessionCookie) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Not authenticated. Please sign in with GitHub."
                }, {
                    status: 401
                });
            }
            const sessionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decryptSession"])(sessionCookie);
            if (!sessionData || !sessionData.accessToken) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Invalid session. Please sign in again."
                }, {
                    status: 401
                });
            }
            // SECURITY: Only allow using the access token if the user is requesting their OWN data
            // This prevents using one user's token to fetch detailed stats for another user
            if (sessionData.username.toLowerCase() === cleanUsername.toLowerCase()) {
                const data = await fetchGitHubDataAuthenticated(cleanUsername, sessionData.accessToken);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
            } else {
                // If requesting someone else's profile, fall back to public data
                // This ensures "High Fidelity" mode is strictly for the owner
                const data = await fetchGitHubDataPublic(cleanUsername);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
            }
        } else {
            // Use public API for non-authenticated requests
            const data = await fetchGitHubDataPublic(cleanUsername);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
        }
    } catch (error) {
        console.error("GitHub API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Failed to fetch GitHub data"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa225391._.js.map