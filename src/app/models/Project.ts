export interface Project {
  name:        string;
  isActive?:   boolean;
  description: string;
  highlights:  string[];
  url:         string;
  github?:     string;
}

