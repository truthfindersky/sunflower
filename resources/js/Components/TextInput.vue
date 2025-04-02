<script>
export default {
  props: {
    modelValue: String, 
    label: String,
    id: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
    required: Boolean,
    autofocus: Boolean,
    autocomplete: String,
    error: String,
  },
};
</script>


<template>
    <label class="block text-sm mt-4">
      <span class="text-gray-700 dark:text-gray-400">{{ label }}</span>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :autocomplete="autocomplete"
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        :required="required"
        :autofocus="autofocus"
      />
      <span v-if="error" class="text-xs text-red-600 dark:text-red-400">
        {{ error }}
      </span>
    </label>
  </template>


