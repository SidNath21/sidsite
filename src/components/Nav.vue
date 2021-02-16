<template>
    <div id="nav">
        <nav
            class="navbar fixed-top navbar-expand-sm navbar-dark py-2"
            style="background-color: #000000"
        >
            <div class="container">
                <!-- container-fluid -->

                <a class="navbar-brand" href="#">Siddharth Nath</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item" @click="updateNavItem(1)" >
                            <router-link class="nav-link link" to="/">
                                <span
                                    :class="
                                        navItem == 1
                                            ? 'spanActive'
                                            : 'spanInactive'
                                    "
                                >
                                    Home
                                </span>
                            </router-link>
                        </li>

                        <li class="nav-item" @click="updateNavItem(2)">
                            <router-link class="nav-link link" to="/about">
                                <span
                                    :class="
                                        navItem == 2
                                            ? 'spanActive'
                                            : 'spanInactive'
                                    "
                                    >About</span
                                >
                            </router-link>
                        </li>
                        <li class="nav-item" @click="updateNavItem(3)">
                            <router-link class="nav-link link" to="/work">
                                <span
                                    :class="
                                        navItem == 3
                                            ? 'spanActive'
                                            : 'spanInactive'
                                    "
                                    >Work</span
                                >
                            </router-link>
                        </li>
                    </ul>
                    <form class="d-flex" >
                        <router-link to="/contact">
                            <button
                                class="btn btn-outline-warning"
                                @click="updateNavItem(4)"
                                type="submit"
                               
                            >
                                Contact
                            </button>
                        </router-link>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    name: "Nav",
    data() {
        return {
            navItem: 1,
        };
    },
    methods: {
        updateNavItem: function (navItem) {
            this.navItem = navItem;
        },
    },
    created() {
        eventBus.$on("updateNav", () => {
            this.updateNavItem(2);
        });
        eventBus.$on("updateNav3", () => {
            this.updateNavItem(3);
        });
        eventBus.$on("updateNav4", () => {
            this.updateNavItem(4);
        });
    },
};
</script>

<style scoped>

.link span {
    margin-left: 5px;
    position: relative;
}

.link span::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--bs-red);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
}

.link span:hover::before {
    visibility: visible;
    transform: scaleX(1);
}

.spanActive {
    color: var(--bs-red);
}
</style>