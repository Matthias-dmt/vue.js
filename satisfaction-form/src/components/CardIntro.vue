<template>

    <section class="text-center mx-auto p-8 rounded-xl mt-6 w-3/4 bg-blue-300 shadow-xl" >
        <h1 class="font-serif mb-5 text-3xl md:text-4xl text-indigo-700">Welcome to our satisfaction survey !</h1>
        <p :class="style.p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem exercitationem architecto libero sunt officia mollitia dolore laboriosam dolorem cupiditate, corporis animi sed ea? Repudiandae reiciendis maiores obcaecati saepe ut?</p>
        <p :class="style.p">Ipsum dolor sit amet consectetur adipisicing elit. Ipsam consectetur consequatur rem expedita? Unde totam voluptatibus ipsam ratione quae inventore distinctio vero veritatis? Totam maiores quidem, quam itaque alias id?</p>
        <router-link to="/satisfaction-form" class=" block mt-5 w-1/5 mx-auto py-2 rounded shadow bg-indigo-700 hover:bg-indigo-800 text-gray-50 capitalize md:uppercase">Start now</router-link>
    </section>
  
</template>


<script>
export default {
    name: 'CardIntro',
    data () {
        return {
            style:{
                p: "leading-6 text-base md:text-lg text-gray-50 mb-2",
            }
        }
    }
}
</script>