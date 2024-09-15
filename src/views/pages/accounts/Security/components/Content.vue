<template>
  <form>
    <div
      class="bg-light border rounded-3 d-md-flex justify-content-between align-items-center p-4 mb-3"
    >
      <div>
        <h6>Activity Logs</h6>
        <p class="mb-1 mb-md-0">
          You can save your all activity logs including unusual activity detected.
        </p>
      </div>

      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy1" checked />
      </div>
    </div>

    <div
      class="bg-light border rounded-3 p-4 d-md-flex justify-content-between align-items-center mb-4"
    >
      <div>
        <h6>Two factor authentication</h6>
        <p class="small mb-1 mb-md-0">
          Secure your account with 2 Step security. When it is activated you will need to enter not
          only your password, but also a special code using app. You can receive this code by in
          mobile app.
        </p>
      </div>

      <div class="form-check form-switch form-check-md mb-0">
        <input class="form-check-input" type="checkbox" id="checkPrivacy13" checked />
      </div>
    </div>

    <LinkedAccount />
  </form>

  <div class="text-center my-5">
    <BIconThreeDots />
  </div>

  <b-row class="g-lg-6">
    <form class="col-md-6 col-lg-12 col-xl-6">
      <b-card no-body class="bg-transparent rounded-3">
        <div class="card-header bg-transparent border-bottom px-0">
          <h6 class="card-header-title mb-0">Social media profile</h6>
        </div>

        <b-card-body class="px-0">
          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faFacebook" class="text-facebook me-2" />Enter facebook
              username</label
            >
            <input class="form-control" type="text" value="JqMiller" placeholder="Enter username" />
          </div>

          <div class="mb-3">
            <label class="form-label">
              <BIconTwitter class="text-twitter me-2" />Enter twitter username
            </label>
            <input class="form-control" type="text" value="JqMiller" placeholder="Enter username" />
          </div>

          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faInstagram" class="text-danger me-2" />Enter instagram
              username</label
            >
            <input class="form-control" type="text" value="JqMiller" placeholder="Enter username" />
          </div>

          <div class="mb-3">
            <label class="form-label"
              ><font-awesome-icon :icon="faYoutube" class="text-youtube me-2" />Add your youtube
              profile URL</label
            >
            <input
              class="form-control"
              type="text"
              value="https://www.youtube.com/in/Mizzle-05620abc"
              placeholder="Enter username"
            />
          </div>

          <div class="d-flex justify-content-end mt-4">
            <b-button variant="primary" class="mb-0">Save changes</b-button>
          </div>
        </b-card-body>
      </b-card>
    </form>

    <form class="col-md-6 col-lg-12 col-xl-6">
      <b-card no-body class="bg-transparent rounded-3">
        <div
          class="card-header bg-transparent border-bottom d-flex justify-content-between align-items-center px-0"
        >
          <h6 class="card-header-title mb-0">Devices</h6>
          <button class="btn btn-sm btn-danger-soft mb-0" type="button">
            Sign out from all devices
          </button>
        </div>

        <b-card-body class="px-0">
          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconPhone class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">
                Iphone 12pro <span class="badge small text-bg-primary">Active now</span>
              </p>
              <ul class="nav nav-divider small">
                <li class="nav-item">London, UK</li>
                <li class="nav-item">Oct 23 at 1:15PM</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />Edit </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />Remove </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconPhone class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">Iphone SE</p>
              <ul class="nav nav-divider small">
                <li class="nav-item">London, UK</li>
                <li class="nav-item">Oct 13 at 4:15PM</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="dropdown-menu-end min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />Edit </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />Remove </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex border-bottom pb-4 mb-4">
            <span class="fs-5 heading-color">
              <BIconLaptop class="fa-fw" />
            </span>

            <div class="ms-2">
              <p class="heading-color fw-bold mb-0">Macbook pro</p>
              <ul class="nav nav-divider small">
                <li class="nav-item">California, USA</li>
                <li class="nav-item">Oct 20 at 5:15PM</li>
              </ul>
            </div>

            <b-dropdown
              class="ms-auto"
              variant="link"
              toggle-class="text-primary-hover fs-6 arrow-none m-0 p-0"
              menu-class="dropdown-menu-end min-w-auto shadow"
              end
            >
              <template #button-content>
                <BIconThreeDotsVertical />
              </template>

              <b-dropdown-item> <BIconPencilSquare class="me-2" />Edit </b-dropdown-item>
              <b-dropdown-item> <BIconSlashCircle class="me-2" />Remove </b-dropdown-item>
            </b-dropdown>
          </div>

          <div class="d-flex justify-content-end">
            <b-button class="mb-0" variant="dark">Need help?</b-button>
          </div>
        </b-card-body>
      </b-card>
    </form>
  </b-row>
</template>

<script setup lang="ts">
import LinkedAccount from '@/views/pages/accounts/Security/components/LinkedAccount.vue'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  BIconLaptop,
  BIconPencilSquare,
  BIconPhone,
  BIconSlashCircle,
  BIconThreeDots,
  BIconThreeDotsVertical,
  BIconTwitter
} from 'bootstrap-icons-vue'
</script>
