<template>
    <div id="home" style="padding-top: 150px">
        <div class="container">
            <!-- <div class="typewriter">
                <h1>I am Sid Nath. <span> Innovator. Programmer. Learner. </span> </h1>
            </div> -->

            <h1
                data-aos="fade-right"
                data-aos-duration="1500"
                class="display-1"
                style="line-height: 2"
            >
                Hello World✌🏽
            </h1>
            <div class="css-typing">
                <center>
                    <p class="font-monospace">
                        I am <span class="name"> Sid Nath</span>
                    </p>
                    <p class="font-monospace">
                        <span class="word">Innovator</span>.
                        <span class="word">Programmer</span>.
                        <span class="word">Learner</span>.
                    </p>
                </center>
            </div>

            <router-link to="/about">
                <button
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    type="button"
                    class="btn btn-danger learnBtn"
                    style="margin-top: 25px"
                    @click="updateNav()"
                >
                    Learn More
                    <i class="far fa-arrow-alt-circle-right"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    name: "Home",
    data() {
        return {};
    },
    methods: {
        updateNav() {
            eventBus.$emit("updateNav");
        },
    },
};
</script>

<style scoped>
#home {
    text-align: center;
    background-color: #111111;
    color: white;
    min-height: 100vh;
}

.name {
    color: #841f29;
    background: #f8d7d9;
    border-radius: 5px;
}

.learnBtn {
    padding: 15px;
    font-size: 1.50em;
}

.word {
    color: var(--bs-danger);
}

.css-typing p {
    border-right: 0.15em solid var(--bs-red);
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.25;
}
.css-typing p:nth-child(1) {
    width: 14ch;
    font-size: 4em;
    -webkit-animation: type 2s steps(40, end);
    animation: type 2s steps(40, end);
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

/* .css-typing p:nth-child(2) {
    width: 14ch;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
} */

.css-typing p:nth-child(2) {
    width: 31ch;
    font-size: 3.5em;
    opacity: 0;
    -webkit-animation: type3 4s steps(80, end),
        blink 0.25s step-end infinite alternate;
    animation: type3 4s steps(80, end), blink 0.25s step-end infinite alternate;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@keyframes type {
    0% {
        width: 0;
    }
    99.9% {
        border-right: 0.15em solid var(--bs-red);
    }
    100% {
        border: none;
    }
}

@-webkit-keyframes type {
    0% {
        width: 0;
    }
    99.9% {
        border-right: 0.15em solid var(--bs-red);
    }
    100% {
        border: none;
    }
}

@keyframes type2 {
    0% {
        width: 0;
    }
    1% {
        opacity: 1;
    }
    99.9% {
        border-right: 0.15em solid orange;
    }
    100% {
        opacity: 1;
        border: none;
    }
}

@-webkit-keyframes type2 {
    0% {
        width: 0;
    }
    1% {
        opacity: 1;
    }
    99.9% {
        border-right: 0.15em solid orange;
    }
    100% {
        opacity: 1;
        border: none;
    }
}

@keyframes type3 {
    0% {
        width: 0;
    }
    1% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}

@-webkit-keyframes type3 {
    0% {
        width: 0;
    }
    1% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
@-webkit-keyframes blink {
    50% {
        border-color: tranparent;
    }
}

@media screen and (max-width: 1050px) {
    .css-typing p:nth-child(1) {
        font-size: 3em;
    }
    .css-typing p:nth-child(2) {
        font-size: 2.5em;
    }
}
@media screen and (max-width: 800px) {
    .css-typing p:nth-child(1) {
        font-size: 2.5em;
    }
    .css-typing p:nth-child(2) {
        font-size: 1.75em;
    }
}

@media screen and (max-width: 542px) {
    .css-typing p:nth-child(1) {
        font-size: 2.5em;
    }
    .css-typing p:nth-child(2) {
        white-space: initial !important;
        width: 11ch;
    }
}
</style>