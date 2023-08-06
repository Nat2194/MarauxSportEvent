<template>
    <li>
      <div class="bg-slate-400 text-black relative z-1 overflow-hidden rounded-t-md p-4">
        <time>{{ event.date }}</time>
        <span class="font-bold text-xl">{{ event.title }}</span>
        <h1>{{event.image}}</h1>
        <img :src="event.image" alt="event image" class="absolute top-0 right-0 opacity-20 z-0">
      </div>
      <div class="flex">
        <a :href="event.link" class="bg-gray-200 border border-red-600 rounded-bl-md text-red-600 flex items-center">
          <span class="bg-red-600 text-white rounded-l-md w-12 h-12 flex items-center justify-center transition duration-300 hover:bg-red-800">
            <img src="../assets/img/icons/add-people.svg" alt="add button">
          </span>
          <span class="p-2 text-xl font-bold">{{ event.numParticipants }}</span>
        </a>
        <a :href="event.link" class="bg-red-600 w-full text-white text-uppercase rounded-br-md px-6 py-2 flex items-center transition duration-300 text-xl font-bold hover:bg-red-800 font">
          <span class="top-1/2 transform-translate-y-1/2 pr-4 text-xl icon-triangle" style="{font-size: 8px}"></span>
          Réserver
        </a>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      event: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style lang="scss">
  .icon-triangle::before {
    content: ">";
  }
  </style>
  