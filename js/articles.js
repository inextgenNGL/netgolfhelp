const ARTICLES = [
  // Getting Started
  {
    id: 'create-account',
    title: 'Create a Member Account',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Sign up for your netGolfLeague account with basic contact information.',
    keywords: 'account signup register login member'
  },
  {
    id: 'setup-league',
    title: 'Setup Your League',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Establish basic league parameters including name, season, and subscription type.',
    keywords: 'league setup create new premium basic'
  },
  {
    id: 'setup-season',
    title: 'Setup a Season',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Configure golfers, teams, schedule, scoring, and handicap options for your season.',
    keywords: 'season setup configure golfers teams schedule'
  },
  {
    id: 'second-year',
    title: 'Setting Up for Your 2nd Year and Beyond',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Create a new season and copy golfers from the previous year.',
    keywords: 'second year next season copy golfers renew'
  },
  {
    id: 'golfer-management',
    title: 'Golfer Management',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Add, remove, invite, and manage golfers in your league.',
    keywords: 'golfer add delete invite email members manage'
  },
  {
    id: 'team-management',
    title: 'Team Management',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Create team names and assign golfers to teams for team scoring.',
    keywords: 'teams create assign golfers team scoring'
  },
  {
    id: 'schedule-scoring',
    title: 'Schedule & Scoring Setup',
    category: 'Getting Started',
    categorySlug: 'getting-started',
    excerpt: 'Generate events, set courses, create pairings, and post scores.',
    keywords: 'schedule events courses pairings scores post scorecard'
  },
  // League Homepage
  {
    id: 'homepage-widgets',
    title: 'Understanding Homepage Widgets',
    category: 'League Homepage',
    categorySlug: 'league-homepage',
    excerpt: 'NGL uses content widgets to build your homepage with relevant league information.',
    keywords: 'widgets homepage content dashboard display'
  },
  {
    id: 'next-event',
    title: 'Next Scheduled Event Widget',
    category: 'League Homepage',
    categorySlug: 'league-homepage',
    excerpt: 'View upcoming events with directions, match pairings, and weather forecasts.',
    keywords: 'next event directions pairings weather forecast upcoming'
  },
  {
    id: 'last-event',
    title: 'Last Completed Event Widget',
    category: 'League Homepage',
    categorySlug: 'league-homepage',
    excerpt: 'View scorecards and net scores from the most recently completed event.',
    keywords: 'last event scorecard net score completed results'
  },
  {
    id: 'change-season',
    title: 'Switching Seasons & Leagues',
    category: 'League Homepage',
    categorySlug: 'league-homepage',
    excerpt: 'Use Add/Change Season in the Main Menu to switch between seasons or leagues.',
    keywords: 'change season switch league multiple main menu'
  },
  // League Tools
  {
    id: 'info-center',
    title: 'League Information Center',
    category: 'League Tools',
    categorySlug: 'league-tools',
    excerpt: 'A flexible tool to post by-laws, scores, stats, and documents in various formats.',
    keywords: 'information center bylaws documents upload word excel pdf'
  },
  {
    id: 'add-document',
    title: 'Adding Documents & Files',
    category: 'League Tools',
    categorySlug: 'league-tools',
    excerpt: 'Upload Word, Excel, PDF, and other files to your League Information Center.',
    keywords: 'upload add document file word excel pdf attach'
  },
  {
    id: 'edit-delete-doc',
    title: 'Editing & Deleting Documents',
    category: 'League Tools',
    categorySlug: 'league-tools',
    excerpt: 'Use the pencil icon to edit or the trash icon to delete items from the Information Center.',
    keywords: 'edit delete document file remove update'
  },
  // Handicapping
  {
    id: 'handicap-overview',
    title: 'Handicap Overview',
    category: 'Handicapping',
    categorySlug: 'handicapping',
    excerpt: 'Learn how the netGolfLeague handicap system works and the three supported methods.',
    keywords: 'handicap overview system how works methods'
  },
  {
    id: 'handicap-index',
    title: 'What is a Handicap Index?',
    category: 'Handicapping',
    categorySlug: 'handicapping',
    excerpt: 'A decimal number representing your performance relative to par on any course.',
    keywords: 'handicap index what is decimal performance par'
  },
  {
    id: 'course-handicap',
    title: 'What is a Course Handicap?',
    category: 'Handicapping',
    categorySlug: 'handicapping',
    excerpt: 'A whole number showing strokes needed to match a scratch golfer on a specific course.',
    keywords: 'course handicap strokes scratch golfer slope rating'
  },
  {
    id: 'seed-handicaps',
    title: 'Setting Initial (Seed) Handicaps',
    category: 'Handicapping',
    categorySlug: 'handicapping',
    excerpt: 'How to establish starting handicaps for golfers at the beginning of a season.',
    keywords: 'seed initial handicap starting first week setup'
  },
  {
    id: 'handicap-methods',
    title: 'Handicap Calculation Methods',
    category: 'Handicapping',
    categorySlug: 'handicapping',
    excerpt: 'Standard, ESC (Equitable Stroke Control), and Stroke Average methods explained.',
    keywords: 'handicap calculation standard ESC equitable stroke control average method'
  },
  // FAQ
  {
    id: 'faq-handicaps',
    title: 'FAQ: Handicaps',
    category: 'FAQ',
    categorySlug: 'faq',
    excerpt: 'Common questions about handicap indexes, course handicaps, and seeding scores.',
    keywords: 'faq handicap questions answers index course seed'
  },
  {
    id: 'faq-scoring',
    title: 'FAQ: Scoring',
    category: 'FAQ',
    categorySlug: 'faq',
    excerpt: 'Questions about Stableford, stroke play, match play, and fourball formats.',
    keywords: 'faq scoring stableford stroke play match play fourball'
  },
  {
    id: 'faq-golfer-management',
    title: 'FAQ: Golfer Management',
    category: 'FAQ',
    categorySlug: 'faq',
    excerpt: 'How to send login info, add golfers from other leagues, and manage members.',
    keywords: 'faq golfer management login password add existing'
  },
  {
    id: 'faq-league-setup',
    title: 'FAQ: New League Setup',
    category: 'FAQ',
    categorySlug: 'faq',
    excerpt: 'Getting started questions for new administrators and premium subscribers.',
    keywords: 'faq new league setup admin premium subscriber start'
  },
  {
    id: 'faq-other',
    title: 'FAQ: Other Questions',
    category: 'FAQ',
    categorySlug: 'faq',
    excerpt: 'Login issues, file uploads, split seasons, and more.',
    keywords: 'faq other login cookie file upload split season'
  }
];

function searchArticles(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);
  return ARTICLES
    .map(a => {
      const haystack = (a.title + ' ' + a.excerpt + ' ' + a.keywords + ' ' + a.category).toLowerCase();
      const score = words.reduce((s, w) => s + (haystack.includes(w) ? (a.title.toLowerCase().includes(w) ? 3 : 1) : 0), 0);
      return { ...a, score };
    })
    .filter(a => a.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}
