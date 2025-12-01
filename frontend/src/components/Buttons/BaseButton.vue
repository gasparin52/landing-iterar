<template>
    <button :class="subclass">
        <a :href="link">
            <slot></slot>
        </a>
    </button>
</template>
        

<script>
export default {
    name: 'BaseButton',
    props: {
        link: {
            type: String,
            required: true
        },
        subclass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
}

button:hover {
    background-color: var(--primary-hover);
    transform: translateX(-1px);
    transition: background-color 0.25s ease, transform 0.25s ease;
    box-shadow: 0 4px 6px rgba(23, 86, 93, 0.1);
}

</style>