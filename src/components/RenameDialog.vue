<template>
  <div v-if="show" class="rename-dialog-backdrop">
    <div class="rename-dialog">
      <h3>{{ title }}</h3>
      <input v-model="inputValue" :placeholder="placeholder" @keyup.enter="handleSave" />
      <div class="dialog-actions">
        <button @click="handleSave">Save</button>
        <button @click="$emit('cancel')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  show: boolean
  title: string
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  save: []
  cancel: []
}>()

const inputValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
})

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})

function handleSave() {
  emit('save')
}
</script>
