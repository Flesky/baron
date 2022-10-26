<script setup lang="ts">
import projects from '@/pages/about/projects.json'
import School from '~icons/material-symbols/school-outline'
import Location from '~icons/material-symbols/location-on-outline'
import Mail from '~icons/material-symbols/mail-outline'

interface Project {
  key: string
  banner?: string

  title: string
  subtitle?: string

  icon: string
  iconPadding?: boolean
  description: string
}

const details = [
  {
    icon: School,
    text: 'Technological Institute of the Philippines',
  },
  {
    icon: Location,
    text: 'Manila, Philippines',
  },
  {
    icon: Mail,
    text: 'qbmrodrigo@gmail.com',
  },
]

const [featuredProjects, allProjects] = projects.reduce(
  (acc: Array<Array<Project>>, project) => {
    if (project.banner)
      acc[0].push(project)
    else
      acc[1].push(project)

    return acc
  },
  [[], []],
)
</script>

<template>
  <app-container title="About">
    <template #default>
      <app-content class="px-4 py-6">
        <section class="flex flex-col items-center">
          <img class="aspect-square h-32 w-32 rounded-full" src="/images/profile.jpg" alt="Baron">
          <h1 class="mt-4">
            Baron
          </h1>
          <p class="light mt-1 text-center">
            Building experiences, not just web applications.
          </p>
        </section>
        <section class="card mt-8">
          <ul class="flex flex-col gap-4">
            <li v-for="(detail, i) in details" :key="i" class="flex items-center gap-4">
              <Component :is="detail.icon" />
              {{ detail.text }}
            </li>
          </ul>
        </section>
      </app-content>
      <app-content class="px-4 py-6">
        <section>
          <h1>
            Featured
          </h1>
          <ProjectCard v-for="(project) in featuredProjects" v-bind="project" :key="project.key" />
        </section>
        <section class="mt-6">
          <h1>
            All projects
          </h1>
          <ProjectCard v-for="(project) in allProjects" v-bind=" project" :key="project.key" />
          <p class="light mt-2">
            More to come...
          </p>
        </section>
      </app-content>
    </template>
    <template #footer>
      <app-tab-item label="Personal">
        <m-person-rounded />
      </app-tab-item>
      <app-tab-item label="Projects">
        <m-grid-view-rounded />
      </app-tab-item>
    </template>
  </app-container>
</template>
