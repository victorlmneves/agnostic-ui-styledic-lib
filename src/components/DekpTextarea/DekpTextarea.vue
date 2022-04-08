<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{
        componentName: string;
    }>(),
    {
        componentName: 'DekpTextarea',
    }
);

const disabled = ref(false);
const textareaValue = ref('');

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
  <textarea
    class="base-textarea"
    :class="{ 'base-textarea--disabled': disabled }"
    :disabled="disabled"
    v-model="textareaValue"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @keyup="onKeyUp"
></textarea>
</template>

<style src="@css/components/form-textarea/index.scss" lang="scss" />