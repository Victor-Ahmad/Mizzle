<template>
  <b-progress animated :variant="progressVariant.variant" height="8px" :value="fillAmount" />
  <div class="mt-1">{{ progressVariant.message }}</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = defineProps<{
  password: string
}>()

type GetProgressType = (progress: number) => {
  variant: 'success' | 'danger' | 'warning' | 'info'
  message: string
}

const getProgress: GetProgressType = (progress: number) => {
  if (progress > 75)
    return {
      variant: 'success',
      message: 'Yeah! that password rocks ;)'
    }
  else if (progress > 50)
    return {
      variant: 'info',
      message: 'That is better'
    }
  else if (progress > 25)
    return {
      variant: 'warning',
      message: 'That is a simple one'
    }
  else
    return {
      variant: 'danger',
      message: 'Easy peasy!'
    }
}

const calculatePasswordStrength = (password: string) => {
  let score = 0

  const regexLower = new RegExp('(?=.*[a-z])')
  const regexUpper = new RegExp('(?=.*[A-Z])')
  const regexDigits = new RegExp('(?=.*[0-9])')
  const regexLength = new RegExp('(?=.{' + 8 + ',})')

  if (password.match(regexLower)) score += 25
  if (password.match(regexUpper)) score += 25
  if (password.match(regexDigits)) score += 25
  if (password.match(regexLength)) score += 25

  return score
}

const fillAmount = ref<number>(0)

onMounted(() => {
  fillAmount.value = calculatePasswordStrength(props.password)
})
const progressVariant = getProgress(fillAmount.value)
</script>
