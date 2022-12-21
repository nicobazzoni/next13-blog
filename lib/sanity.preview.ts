'use client'

import { definePreview} from 'next-sanity/preview'
import { projectId, dataset } from './sanity.client'


function onPublicAccessOny() {
    throw new Error(`Unable to load document`)

}

if (!projectId || !dataset) {
    throw new Error(`Missing Sanity projectId or dataset. 
    Check your sanity.json configuration.`)
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly: onPublicAccessOny,
})