<template>
  <div class="input-floating-label form-floating position-relative" :class="containerClass">
    <input
      :type="showPassword ? 'text' : 'password'"
      class="form-control fakepassword pe-6"
      :id="id ?? 'form-password'"
      :class="inputClass"
      :placeholder="placeHolder ?? 'Enter your password'"
      :value="modelValue"
      @input="updateValue"
      v-bind="$attrs"
    />
    <label :class="labelClass" :for="id ?? 'form-password'">{{ label ?? 'Password' }}</label>
    <span class="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
      <font-awesome-icon
        v-if="showPassword"
        :icon="faEye"
        @click="setShowPassword"
        class="cursor-pointer p-2"
      />
      <font-awesome-icon
        v-else
        :icon="faEyeSlash"
        @click="setShowPassword"
        class="cursor-pointer p-2"
      />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

type PasswordInputPropType = {
  id?: string
  value?: string
  label?: string
  labelClass?: string
  inputClass?: string
  containerClass?: string
  placeHolder?: string
  error?: string
  modelValue?: string
}

defineProps<PasswordInputPropType>()

const showPassword = ref<boolean>(false)

const setShowPassword = () => {
  return (showPassword.value = !showPassword.value)
}

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
