import { error } from '@sveltejs/kit';
import { projects } from '$lib/data.js'

/** @type {string} */
const slug = 'Backfisch_Editor';

export function load() {
    for (const project of projects) {
        if (project.slug === slug) {
            return project;
        }
    }

    error(404, {
        message: 'Not found'
    })
}