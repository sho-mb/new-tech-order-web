<template>
  <div class="p-4 flex justify-between">
    <div class="w-40%">
      <img
        class="object-fit"
        width="450"
        src="/img/contactCompany.jpg"
        alt="planet"
      >
    </div>

    <div class="w-50%">
      <h1 class="text-2xl font-bold mb-4">
        Contact for Influencer
      </h1>
      <form
        class="space-y-4"
        @submit.prevent="submitForm"
      >
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-white"
          >Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-white"
          >Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="phone"
            class="block text-sm font-medium text-white"
          >Phone (optional)</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <div>
          <label
            for="location"
            class="block text-sm font-medium text-white"
          >Location (optional)</label>
          <input
            id="location"
            v-model="form.location"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <div>
          <label
            for="sns-accounts"
            class="block text-sm font-medium text-white"
          >SNS Accounts (Url of your acc such as IG, youtube etc..)</label>
          <input
            id="sns-accounts"
            v-model="form.snsAccounts"
            type="url"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="followers"
            class="block text-sm font-medium text-white"
          >Followers</label>
          <input
            id="followers"
            v-model="form.followers"
            type="number"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="genre"
            class="block text-sm font-medium text-white"
          >Genre</label>
          <input
            id="genre"
            v-model="form.genre"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="collaborations"
            class="block text-sm font-medium text-white"
          >Past Collaborations (optional)</label>
          <textarea
            id="collaborations"
            v-model="form.collaborations"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            for="bio"
            class="block text-sm font-medium text-white"
          >Bio</label>
          <textarea
            id="bio"
            v-model="form.bio"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            for="collab-type"
            class="block text-sm font-medium text-white"
          >Preferred Collaboration Type (optional)</label>
          <input
            id="collab-type"
            v-model="form.collabType"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <button
          type="submit"
          class="px-4 py-2 bg-red-800 text-white rounded-md"
        >
          Submit
        </button>
        <NuxtTurnstile />
      </form>
      <div
        v-if="successMessage"
        class="mt-4 p-4 bg-green-500 text-white rounded-md"
      >
        {{ successMessage }}
      </div>
      <div
        v-if="errorMessage"
        class="mt-4 p-4 bg-red-500 text-white rounded-md"
      >
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const successMessage = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

const form = ref({
  name: '',
  email: '',
  phone: '',
  location: '',
  snsAccounts: '',
  followers: '',
  genre: '',
  collaborations: '',
  bio: '',
  collabType: '',
})

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  location: '',
  snsAccounts: '',
  followers: '',
  genre: '',
  collaborations: '',
  bio: '',
  collabType: '',
})

const submitForm = () => {
  const mail = useMail()

  try {
    mail.send({
      from: `${form.value.name}`,
      subject: 'Influencer send you request from website',
      html:
      `
        <p>Name : ${form.value.name} </p>
        <p>Email : ${form.value.email} </p>
        <p>Phone: ${form.value.phone} </p>
        <p>Location : ${form.value.location} </p>
        <p>SNS Account : ${form.value.snsAccounts} </p>
        <p>Followers : ${form.value.followers} </p>
        <p>Genre : ${form.value.genre} </p>
        <p>Collaborations works : ${form.value.collaborations} </p> 
        <p>Bio : </p>
        <p>${form.value.bio} </p>
        <p>Preferred Collaboration Type : ${form.value.collabType}</p>
      `,
    })

    successMessage.value = 'Your message has been sent successfully!'
    errorMessage.value = null
    form.value = getInitialFormData()
  }
  catch (err) {
    errorMessage.value = 'There was an error sending your message. Please try again.'
    successMessage.value = null
  }
}
</script>
