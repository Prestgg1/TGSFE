<template>

    <div
class="shadow-md min-w-52 duration-300 hover:shadow-xl bg-black shadow-black rounded-lg text-center"
>
<NuxtImg
    :src="data.imgpath"
    
    class="h-24 w-full object-cover mb-4"
/>
<h3 class="text-xl font-semibold">{{ data.name }} </h3>
<p class="text-sm mb-4 max-w-sm">
    description 
</p>

</div>

</template>
<script setup>

const props = defineProps(['data'])
const {data} = props
</script>