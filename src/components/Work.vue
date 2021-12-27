<template>
    <div id="work">
        <div class="particles particleContainer">
            <div id="particles-js">
                <a
                    role="button"
                    href="#projects"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    class="projectTitleContainer btn btn-outline-light"
                >
                    <p class="projectTitle display-2 fw-normal">Projects</p>
                </a>
            </div>
        </div>
        <div id="projects" class="py-5">
            <div class="container my-2">
                <div class="row row-cols-1 row-cols-xl-2 g-5">
                    <div
                        class="col"
                        v-for="(project, index) in projects"
                        :key="index"
                    >
                        <div
                            class="card shadow text-light bg-dark m-3 h-100"
                            :data-aos="project.animation"
                            data-aos-duration="1500"
                        >
                            <h5 class="card-header fs-3 fw-bold">
                                {{ project.title }}
                            </h5>
                            <div
                                class="card-body pb-0"
                                style="margin-bottom: -10px"
                            >
                                <div class="row">
                                    <div class="col-12">
                                        <h5 class="card-title fs-4">
                                            {{ project.heading }}
                                        </h5>
                                        <p class="card-text lead">
                                            {{ project.description }}
                                        </p>
                                        <a
                                            :href="project.link"
                                            target="_blank"
                                            class="btn btn-primary"
                                            >View Project</a
                                        >
                                    </div>
                                    <div class="col-4"></div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div
                                    v-for="(
                                        language, index
                                    ) in project.languages"
                                    :key="index"
                                    class="skill"
                                >
                                    <div>
                                        <div
                                            class="circle"
                                            :style="{
                                                'background-color':
                                                    language_color_dict[
                                                        language
                                                    ],
                                            }"
                                        ></div>
                                        <p class="name my-0">
                                            {{ language }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
import "particles.js";
export default {
    name: "Work",
    methods: {
        handler: function () {
            eventBus.$emit("updateNav3");
        },
        initParticles() {
            window.particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 90,
                        density: {
                            enable: true,
                            value_area: 700,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000",
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 2,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#dc3545", // #ffffff
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            });
        },
    },
    created() {
        window.addEventListener("beforeunload", this.handler);
    },
    mounted() {
        this.initParticles();
    },
    data() {
        return {
            language_color_dict: {
                Python: "#ACB5BD",
                HTML: "#fd7e14",
                CSS: "#0FCAF0",
                Javascript: "#ffc107",
                Vue: "#42b883",
                "Tensorflow.js": "#0d6efd",
                "Three.js": "#009EF4",
                Java: "rgb(176, 114, 25)",
            },
            projects: [
                {
                    title: "Heptool",
                    heading: "Hepatitis B Decision Tool",
                    description:
                        "An application used to calculate a patient's health risks for Hepatitis B using a Mathematical Markov Model.",
                    link: "http://www.heptool.org/",
                    animation: "fade-right",
                    languages: ["Python", "HTML", "CSS", "Javascript"],
                },
                {
                    title: "Saucer",
                    heading: "A Digital Solution to Food Waste",
                    description:
                        "Saucer is a solution to food waste by recommending users suitable recipes based on the items they already have. ",
                    link: "https://saucer.tech/",
                    animation: "fade-left",
                    languages: ["Vue", "HTML", "Javascript"],
                },
                {
                    title: "TwitterSecurity",
                    heading: "Twitter Sentiment Analysis against Cyberbullying",
                    description:
                        "An app that promotes a healthy social media environment by filtering negative comments from a user’s profile",
                    link: "https://twittersecurity-dbc5b.web.app/",
                    animation: "fade-right",
                    languages: ["Vue", "HTML", "Javascript", "Tensorflow.js"],
                },
                {
                    title: "Covidualize",
                    heading: "An interactive Covid-19 informational app",
                    description:
                        "An interactive data tool that displays Covid-19 statistics while implementing a 3-D model of the Earth.",
                    link: "https://sidnath21.github.io/Covidualize/",
                    animation: "fade-left",
                    languages: ["HTML", "CSS", "Javascript", "Three.js"],
                },
                {
                    title: "Peptide Analysis",
                    heading: "Peptide Analysis Algorithm for Covid-19 virus",
                    description:
                        "Algorithims to analyze peptide sequences generated from the proteins of the Covid-19 virus. ",
                    link: "https://github.com/SidNath21/PeptideAnalysis",
                    animation: "fade-right",
                    languages: ["Python"],
                },
                {
                    title: "Heptool App",
                    heading: "Mobile App designed to analyze Hepatitis B",
                    description:
                        "Build with Android Studios Framework to inform users about Hepatitis B and calculate a patient's health risks.",
                    link: "https://play.google.com/store/apps/details?id=heptool3.java",
                    animation: "fade-left",
                    languages: ["Java"],
                },
                {
                    title: "Wiki Notes",
                    heading: "Wikipedia Based Note Taker App",
                    description:
                        "Wiki Note Taker extracts information from Wikipedia and converts information into slides. Included functionality for editing, adding, and printing notes.",
                    link: "https://devpost.com/software/wikinotes",
                    animation: "fade-right",
                    languages: ["HTML", "Java"],
                },
                {
                    title: "Intersight-Ansible",
                    heading: "Automate Cisco Server Deployment Process",
                    description:
                        "During my Cisco High School STEM Internship, I used Ansible and Cisco Intersight to create server policies to automate server environments.",
                    link: "https://github.com/SidNath21/intersight-ansible",
                    animation: "fade-left",
                    languages: ["Python"],
                },
                {
                    title: "EmbedUR Internship",
                    heading: "Automate Cisco Server Deployment Process",
                    description:
                        "As an intern for embedUR's data mining / machine learning team, I built machine learning models to analyze client networking data, predict support call-ins, and classify AP devices.",
                    link: "https://github.com/SidNath21/embedur",
                    animation: "fade-right",
                    languages: ["Python"],
                },
                {
                    title: "Multi-Armed Bandit Project",
                    heading: "Algorithms to Optimize A/B Testing",
                    description:
                        "Implemented Multi-Armed Bandit algorithms to optimize A/B testing for a client. Used Upper Confidence Bound and Thompson Sampling algorithms to decrease time spent running inconclusive experiments.",
                    link: "https://drive.google.com/file/d/14lhPzl3GAmrM3JvcWbXj7FjG0ocdBqXS/view?usp=sharing",
                    animation: "fade-right",
                    languages: ["Python"],
                },
            ],
        };
    },
};
</script>

<style scoped>
#work {
    background-color: #111111;
    min-height: 200vh;
}

.particleContainer {
    margin-top: 56px;
    background-color: #070707;
}

#particles-js {
    height: calc(100vh - 56px);
}

.projectTitleContainer {
    display: flex;
    width: 300px;
    height: 120px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(50vw - 150px);
    top: calc(50vh - 60px);
    border-width: 3px;
}

.skills {
    text-align: left;
}

.skill {
    padding: 5px;
    float: left;
    margin: 5px;
}

.circle {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.name {
    float: left;
    margin-left: 5px;
}
</style>