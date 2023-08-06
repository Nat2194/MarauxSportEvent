<template>
	<div class="flex flex-col top-0 w-screen bg-slate-200 z-10 shadow-md">
			<div class="flex gap-2">
				<h1 class="z-10 title-size font-bold underline font-yanone-kaffeesatz">Easter Camps</h1>
			</div>
				<ul class="flex gap-8 items-center line-height-118 flex-wrap mx-4 mb-10">
                    <!-- flex-wrap marche pas-->
                    <EventItem v-for="eventItem in events" :key="eventItem.id" :event="eventItem" />
                </ul>
		</div>
</template>

<script>
  import EventItem from "./EventItem.vue";
  
  export default {
    components: {
      EventItem,
    },
    data() {
      return {
        events: [
          {
            id: 1,
            date: "07.08. - 11.08.2023",
            title: "FC Ellikon Marthalen",
            image: "./src/assets/img/icons/football.svg",
            link: "/",
            numParticipants: 3,
          },
          {
            id: 2,
            date: "07.08. - 11.08.2023",
            title: "FC Ellikon Marthalen",
            image: "./src/assets/img/icons/football.svg",
            link: "/",
            numParticipants: 3,
          },
          {
            id: 3,
            date: "07.08. - 11.08.2023",
            title: "FC Ellikon Marthalen",
            image: "./src/assets/img/icons/football.svg",
            link: "/",
            numParticipants: 3,
          },
          /* à modifier en backend c'est juste un exemple*/
        ],
      };
    },
  };
  </script>
  
<style lang="scss">
  </style>