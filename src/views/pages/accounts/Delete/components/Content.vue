<template>
  <b-card no-body class="bg-transparent rounded-3 mb-0">
    <b-card-header class="bg-transparent border-bottom p-0 pb-3">
      <h6 class="card-header-title mb-0">Deactivate Account</h6>
    </b-card-header>

    <b-card-body class="px-0">
      <span class="heading-color fw-bold">Before you go...</span>
      <ul class="mt-2">
        <li>Take a backup of your data <a href="#">Here</a></li>
        <li>If you delete your account, you will lose your all data.</li>
      </ul>
      <div class="form-check form-check-md my-4">
        <input class="form-check-input" type="checkbox" value="" id="deleteaccountCheck" />
        <label class="form-check-label" for="deleteaccountCheck"
          >Yes, I'd like to delete my account</label
        >
      </div>
      <a href="#" class="btn btn-success-soft mb-2 mb-sm-0 me-1">Keep my account</a>
      <a href="#" class="btn btn-danger mb-0">Delete my account</a>
    </b-card-body>
  </b-card>
</template>
