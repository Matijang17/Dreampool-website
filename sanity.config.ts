import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'dreampool-studio',
  title: 'DreamPool CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('DreamPool')
          .items([
            S.listItem()
              .title('Blog Objave')
              .child(S.documentTypeList('post').title('Blog Objave')),
            S.listItem()
              .title('Projekti')
              .child(S.documentTypeList('project').title('Projekti')),
            S.listItem()
              .title('Kategorije')
              .child(S.documentTypeList('category').title('Kategorije')),
            S.listItem()
              .title('Avtorji')
              .child(S.documentTypeList('author').title('Avtorji')),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
