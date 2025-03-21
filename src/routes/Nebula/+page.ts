import { error } from '@sveltejs/kit';
import { projects } from '$lib/data.js'

const slug: string = 'Nebula';

export function load(): Project {
    for (const project of projects) {
        if (project.slug === slug) {
            return project;
        }
    }

    error(404, {
        message: 'Not found'
    })
}