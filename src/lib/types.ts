export interface Researcher {
    name: string;
    position: string;
    profile: string;
    image?: string;
    cvlac?: string;
    orcid?: string;
    scholar?: string;
    email: string;
  }
  
  export interface Publication {
    title: string;
    authors: string;
    year: string;
    doi?: string;
    isbn?: string;
    type: 'article' | 'book' | 'chapter' | 'document';
  }
  
  export interface Project {
    title: string;
    description: string;
    objective: string;
    duration: string;
    team: string;
  }
  
  export interface Call {
    title: string;
    date: string;
    location: string;
    organizer: string;
    description: string;
  }