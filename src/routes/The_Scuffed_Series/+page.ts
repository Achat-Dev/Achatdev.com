import { error } from '@sveltejs/kit';
import { projects } from '$lib/data.js'

const slug: string = 'The_Scuffed_Series';

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