export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[]; 
    repositoryUrl?: string; 
    liveUrl?: string;       
}