import { projects } from "$lib/data";
import type { EntryGenerator } from "./$types";

export const entries: EntryGenerator = () => {
    return projects.map(project => ({ slug: project.slug }));
}
