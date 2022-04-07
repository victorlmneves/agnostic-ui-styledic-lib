<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        componentName: string;
    }>(),
    {
        componentName: 'DekpPage',
    }
);
</script>

<template>
    <div class="base-wrapper"></div>
</template>

<style src="@css/index.scss" lang="scss" />
