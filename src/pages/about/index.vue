<template>
  <app-container title="About">
    <template #default>
      <app-content class="px-4">
        <section class="flex flex-col items-center pt-8">
          <img class="aspect-square h-32 w-32 rounded-full" src="@/assets/images/me.jpg" alt="Baron">
          <h1 class="mt-4">
            Baron
          </h1>
          <p class="light mt-1">
            Building experiences, not just web applications.
          </p>
        </section>
        <section class="mt-8 w-full rounded-2xl bg-gray-3 p-4 dark:bg-gray-d3">
          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-4">
              <m-school-outline />
              Technological Institute of the Philippines
            </li>
            <li class="flex items-center gap-4">
              <m-location-on-outline />
              Quezon City, Philippines
            </li>
            <li class="flex items-center gap-4">
              <m-mail-outline />
              qbmrodrigo@gmail.com
            </li>
          </ul>
        </section>
      </app-content>
      <app-content class="px-4">
        <section class="mt-6">
          <h1>
            Featured
          </h1>
          <div class="mt-3 flex flex-col gap-3 rounded-2xl bg-gray-3 p-4 dark:bg-gray-d3">
            <img src="@/assets/images/logos/pasada_h.png" alt="PASADA horizontal logo">
            <div class="flex gap-3">
              <img src="@/assets/images/logos/pasada.svg" class="h-12 w-12 rounded-xl bg-gray-5 p-2 dark:bg-gray-d5" alt="PASADA logo">
              <div class="flex flex-col justify-center">
                <h2 class="font-medium">
                  PASADA
                </h2>
                <p class="light text-sm">
                  DOST-sponsored capstone project
                </p>
              </div>
            </div>
            <p>An enterprise-level web application for learning management and driver performance monitoring of modern jeepney and bus drivers.</p>
          </div>
        </section>
        <section class="mt-6">
          <h1>
            All projects
          </h1>
          <div class="mt-3 flex flex-col gap-3 rounded-2xl bg-gray-3 p-4 dark:bg-gray-d3">
            <div class="flex gap-3">
              <img src="@/assets/images/logos/worden.png" class="h-12 w-12 rounded-xl" alt="Worden icon">
              <div class="flex flex-col justify-center">
                <h2 class="font-medium">
                  Worden
                </h2>
              </div>
            </div>
            <p>Guess the secret word in six tries and share your results with your friends.</p>
          </div>
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
