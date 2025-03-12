<template>
  <div class="p-4 flex justify-between">
    <div class="w-40% hidden md:block">
      <img
        class="object-fit"
        width="450"
        src="/img/contactCompany.jpg"
        alt="planet"
      >
    </div>
    <div class="md:w-50%">
      <h1 class="text-2xl font-bold mb-4">
        Contact for Company
      </h1>
      <form
        class="space-y-4"
        netlify
        @submit.prevent="submitForm"
      >
        <div>
          <label
            for="company-name"
            class="block text-sm font-medium text-white"
          >Company Name</label>
          <input
            id="company-name"
            v-model="form.companyName"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="contact-name"
            class="block text-sm font-medium text-white"
          >Contact Name</label>
          <input
            id="contact-name"
            v-model="form.contactName"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
        </div>
        <div>
          <label
            for="position"
            class="block text-sm font-medium text-white"
          >Position (optional)</label>
          <input
            id="position"
            v-model="form.position"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
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
            for="address"
            class="block text-sm font-medium text-white"
          >Address (optional)</label>
          <input
            id="address"
            v-model="form.address"
            type="text"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <div>
          <label
            for="website"
            class="block text-sm font-medium text-white"
          >Website (optional)</label>
          <input
            id="website"
            v-model="form.website"
            type="url"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <div>
          <label
            for="inquiry"
            class="block text-sm font-medium text-white"
          >Inquiry</label>
          <textarea
            id="inquiry"
            v-model="form.inquiry"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            for="services"
            class="block text-sm font-medium text-white"
          >Services</label>
          <select
            id="services"
            v-model="form.services"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value="marketing">
              Influencer Marketing
            </option>
            <option value="sns">
              SNS Oparation
            </option>
            <option value="event">
              Event
            </option>
            <option value="vidio">
              Video Production
            </option>
            <option value="web">
              Web Development
            </option>
          </select>
        </div>
        <div>
          <label
            for="budget"
            class="block text-sm font-medium text-white"
          >Budget (optional)</label>
          <input
            id="budget"
            v-model="form.budget"
            type="number"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
        </div>
        <div>
          <label
            for="contact-method"
            class="block text-sm font-medium text-white"
          >Preferred Contact Method</label>
          <select
            id="contact-method"
            v-model="form.contactMethod"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          >
            <option
              value="email"
              selected
            >
              Email
            </option>
            <option value="phone">
              Phone
            </option>
          </select>
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

const form = ref({
  companyName: '',
  contactName: '',
  position: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  inquiry: '',
  services: '',
  budget: null,
  contactMethod: '',
})

const successMessage = ref<string | null>(null)
const errorMessage = ref<string | null>(null)

const getInitialFormData = () => ({
  companyName: '',
  contactName: '',
  position: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  inquiry: '',
  services: '',
  budget: null,
  contactMethod: '',
})

const submitForm = async () => {
  const mail = useMail()

  try {
    mail.send({
      from: `${form.value.companyName}`,
      subject: 'Some company send you request from website',
      html:
      `
        <p>Copany name : ${form.value.companyName} </p>
        <p>Contact name : ${form.value.contactName} </p>
        <p>Position : ${form.value.position} </p>
        <p>Email : ${form.value.email} </p>
        <p>Phone: ${form.value.phone} </p>
        <p>Address : ${form.value.address} </p>
        <p>Website : ${form.value.website} </p>
        <p>Inquiry : </p> 
        <p>${form.value.inquiry} </p>
        <p>Services : ${getServices(form.value.services)} </p>
        <p>Budget : ${form.value.budget} USD</p>
        <p>ContactMethod : ${getMethod(form.value.contactMethod)} </p>
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

function getMethod(selectedValue: string): string {
  switch (selectedValue) {
    case 'email':
      return 'Email'
    case 'phone':
      return 'Phone'
    default:
      return 'Internal Error'
  }
}

function getServices(selectedValue: string): string {
  switch (selectedValue) {
    case 'marketing':
      return 'Influencer Marketing'
    case 'sns':
      return 'SNS Operation'
    case 'event':
      return 'Event'
    case 'video':
      return 'Video Production'
    case 'web':
      return 'Web Development'
    default:
      return 'Internal Error'
  }
}
</script>
