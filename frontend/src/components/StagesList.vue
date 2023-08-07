<template>
    <div class="flex flex-col top-0 bg-slate-200 shadow-md">
        <div class="flex gap-2">
            <h1 class="title-size font-bold underline font-yanone-kaffeesatz">
                Easter Camps
            </h1>
        </div>
        <ul class="flex flex-wrap gap-8 justify-center mt-4 mx-4 mb-10">
            <EventItem
                v-for="eventItem in events"
                :key="eventItem.id"
                :event="eventItem"
            />
        </ul>
    </div>
</template>

<script>
import EventItem from './EventItem.vue'

export default {
    components: {
        EventItem,
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    date: '07.08. - 11.08.2023',
                    title: 'FC Lutry',
                    place: 'Lutry (VD)',
                    image: './src/assets/img/icons/football.svg',
                    link: '/',
                    numParticipants: 34,
                },
                {
                    id: 2,
                    date: '07.08. - 11.08.2023',
                    title: 'FC Etoile-Broye',
                    place: 'Lucens (VD)',
                    image: './src/assets/img/icons/football.svg',
                    link: '/',
                    numParticipants: 27,
                },
                {
                    id: 3,
                    date: '07.08. - 11.08.2023',
                    title: 'FC Etoile-Broye',
                    place: 'Lucens (VD)',
                    image: './src/assets/img/icons/football.svg',
                    link: '/',
                    numParticipants: 52,
                },
                /* à modifier en backend c'est juste un exemple*/
            ],
        }
    },
}
</script>

<style lang="scss"></style>
