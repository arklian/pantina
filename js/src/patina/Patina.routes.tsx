import { HomePage } from '@/patina/home/Home.page.tsx'
import { MissionPage } from '@/patina/about/mission/Mission.page.tsx'
import { MentorshipPage } from '@/patina/mentorship/Mentorship.page.tsx'
/**
 * Routes for the Patina Website
 */
export const PatinaRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'mission',
    description: 'Mission',
    element: <MissionPage />,
  },
  {
    path: 'team',
    description: 'Team',
    element: <MissionPage />,
  },
  {
    path: 'mentorship',
    description: 'Mentorship',
    element: <MentorshipPage />,
  },
]
