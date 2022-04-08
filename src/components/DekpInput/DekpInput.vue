<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{
        componentName: string;
    }>(),
    {
        componentName: 'DekpInput',
    }
);

const disabled = ref(false);
const inputValue = ref('');

const onInput = (e: Event) => {
  console.log('input', e);
}

const onFocus = (e: Event) => {
  console.log('focus', e);
}

const onBlur = (e: Event) => {
  console.log('blur', e);
}

const onKeyUp = (e: KeyboardEvent) => {
  console.log('keyup', e);
}
</script>

<template>
  <input
    class="base-input"
    :class="{ 'base-input--disabled': disabled }"
    :disabled="disabled"
    v-model="inputValue"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keyup="onKeyUp"
  />
</template>

<style src="@css/components/form-input/index.scss" lang="scss" />