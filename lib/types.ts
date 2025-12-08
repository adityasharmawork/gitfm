export interface ContributionDay {
  contributionCount: number
  date: string
  color: string
}

export interface ContributionWeek {
  contributionDays: ContributionDay[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

export interface Repository {
  name: string
  stars: number
  commits: number
  prs: number
  language: string | null
  forks?: number
  isFork?: boolean
}

export interface LanguageStats {
  name: string
  size: number
  color: string
}

export interface GitHubUser {
  login: string
  name: string | null
  avatarUrl: string
  bio: string | null
  followers: number
  following: number
  publicRepos: number
  createdAt: string
}

export interface GitHubData {
  user: GitHubUser
  totalContributions: number
  contributionCalendar: ContributionCalendar
  repositories: Repository[]
  languages: LanguageStats[]
  topLanguage: string | null
  totalPRsMerged: number
  totalPRsOpened: number
  totalIssuesOpened: number
  totalIssuesClosed: number
  totalStarsEarned: number
  totalStarsGiven: number
  totalForksEarned: number
  totalCommits: number
  longestStreak: number
  currentStreak: number
  mostActiveDay: string | null
  mostActiveRepo: string | null
}
