import { HomePage } from '@/patina/pages/home/Home.page.tsx'
import { MissionPage } from '@/patina/pages/about/mission/Mission.page.tsx'
import { MentorshipPage } from '@/patina/pages/mentorship/Mentorship.page.tsx'
import { ScholarshipPage } from '@/patina/pages/scholarship/Scholarship.page.tsx'
import { CommunityPage } from '@/patina/pages/community/Community.page.tsx'
import { MentorPage } from '@/patina/pages/mentor/Mentor.page.tsx'
import { VolunteerPage } from '@/patina/pages/volunteer/Volunteer.page.tsx'
import { LoginPage } from '@/patina/login/Login.page.tsx'
import { BlogPage } from '@/patina/pages/blog/Blog.page.tsx'
import { Login_oauth2Page } from '@/patina/login_oauth2/Login_oauth2.page.tsx'

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
    path: 'community',
    description: 'Community',
    element: <CommunityPage />,
  },
  {
    path: 'mentorship',
    description: 'Mentorship',
    element: <MentorshipPage />,
  },
  {
    path: 'scholarship',
    description: 'Scholarship',
    element: <ScholarshipPage />,
  },
  {
    path: 'mentor',
    description: 'Mentor',
    element: <MentorPage />,
  },
  {
    path: 'volunteer',
    description: 'Volunteering Opportunities',
    element: <VolunteerPage />,
  },
  {
    path: 'login',
    description: 'Login Page',
    element: <LoginPage />,
  },
  {
    path: 'login_oauth2',
    description: 'Login Page',
    element: <Login_oauth2Page />,
  },
  {
    path: 'blog',
    description: 'Blog Page',
    element: <BlogPage />,
  },
]
