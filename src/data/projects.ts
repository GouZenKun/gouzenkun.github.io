import { Project } from "../types/portfolio";
import database from "./database.json";

// Import raw JSON database and export it as strongly-typed Project objects
export const PROJECTS: Project[] = database as Project[];
