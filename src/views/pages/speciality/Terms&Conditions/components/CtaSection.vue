<template>
  <section class="pt-0">
    <b-container>
      <div class="bg-dark rounded p-4 p-sm-6" data-bs-theme="dark">
        <b-row class="align-items-center">
          <b-col md="6">
            <h2>Let’s automate & simplify your performance</h2>
            <p class="mb-0">
              Let us manage your IT for you so that you can get back to doing what you do best and
              we look in the future.
            </p>
          </b-col>
          <b-col md="6" class="text-end">
            <router-link :to="{ name: 'contact.v1' }" class="btn btn-lg btn-primary mb-0"
              >Get started</router-link
            >
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>
