import type { Project } from "$lib/data";
import { projects } from "$lib/data.js"
import { error } from "@sveltejs/kit";

export function load({ params }: { params: any }): Project {
    for (const project of projects) {
        if (project.slug === params.slug) {
            return project;
        }
    }

    error(404, {
        message: "Not found"
    });
}
