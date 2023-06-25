import { User, Session } from "next-auth";

interface FormState {
  title: string;
  description: string;
  image: string;
  livesiteUrl: string;
  githubUrl: string;
  category: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  livesiteUrl: string;
  githubUrl: string;
  category: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  description: string | null;
  avatarUrl: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  projects: {
    edges: { node: Project }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

interface ProjectForm {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
}

export { FormState, Project, ProjectForm, UserProfile, SessionInterface };
