<template>
    <div id="contact" style="padding-top: 100px">
        <div class="container pt-5" data-aos="fade-up" data-aos-duration="1500">
            <div class="row">
                <div class="col-12 col-lg-10 mx-auto">
                    <div class="card bg-dark text-light rounded shadow">
                        <div class="card-body">
                            <div class="row pb-3">
                                <div class="col-12">
                                    <div
                                        class="head text-center text-white py-2 rounded bg-danger"
                                        style="
                                            margin-top: -40px;
                                            box-shadow: 4px 4px 14px 0px black;
                                        "
                                    >
                                        <p class="h3">Get In Touch</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="row row-cols-1 row-cols-md-3 text-center contact-info"
                            >
                                <div class="col">
                                    <div
                                        class="card shadow bg-light text-dark contact-card d-flex align-items-center m-2 pt-3"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        <i
                                            class="card-icon far fa-envelope mail"
                                        ></i>
                                        <p>{{ email }}</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div
                                        class="card shadow bg-light text-dark contact-card d-flex align-items-center m-2 pt-3"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        <i class="card-icon fas fa-phone"></i>
                                        <p>{{ phone }}</p>
                                    </div>
                                </div>
                                <div class="col">
                                    <div
                                        class="card shadow bg-light text-dark contact-card d-flex align-items-center m-2 pt-3"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <i
                                            class="card-icon fas fa-map-marker-alt"
                                        ></i>
                                        <p>{{ location }}</p>
                                    </div>
                                </div>
                            </div>

                            <hr class="bg-white" />

                            <form
                                class="form contact-form"
                                @submit.prevent="sendEmail"
                                id="myForm"
                            >
                                <div
                                    class="form-row d-flex justify-content-between"
                                >
                                    <div class="col-5 my-2 d-inline-block">
                                        <input
                                            type="text"
                                            class="form-control bg-light success contact-form-text"
                                            name="name"
                                            v-model="form_name"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>

                                    <div class="col-lg-5 my-2 d-inline-block">
                                        <input
                                            type="email"
                                            class="form-control bg-light error contact-form-text"
                                            name="email"
                                            v-model="form_email"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-row my-4">
                                    <div class="col-lg-12">
                                        <input
                                            type="text"
                                            class="form-control bg-white contact-form-text"
                                            name="message"
                                            v-model="form_msg"
                                            placeholder="Your Message"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="form-row text-center">
                                    <input
                                        class="btn btn-lg btn-outline-danger submitbtn"
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div id="map" ref="map"></div>
        </div>
        <p style="padding: 20px; margin: 0"></p>
    </div>
</template>


<script>
import emailjs from "emailjs-com";
export default {
    name: "Contact",
    data() {
        return {
            email: "sidnath21@gmail.com",
            phone: "(408)-816-5880",
            location: "San Jose, California",
            count: 0,
            form_name: null,
            form_email: null,
            form_phone: null,
            form_msg: null,
            form_valid: false,
            form_submitted: false,

            map: null,
            marker: null,
            mapOptions: {
                zoom: 6,

                center: new window.google.maps.LatLng(37.3337, -121.8907),

                // disableDefaultUI: true,
                scrollwheel: true,
                draggable: true,

                styles: [
                    {
                        featureType: "all",
                        elementType: "labels",
                        stylers: [
                            {
                                visibility: "on",
                            },
                        ],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                saturation: 36,
                            },
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 40,
                            },
                        ],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                visibility: "on",
                            },
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [
                            {
                                visibility: "off",
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 17,
                            },
                            {
                                weight: 1.2,
                            },
                        ],
                    },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#c4c4c4",
                            },
                        ],
                    },
                    {
                        featureType: "administrative.neighborhood",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#707070",
                            },
                        ],
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 21,
                            },
                            {
                                visibility: "on",
                            },
                        ],
                    },
                    {
                        featureType: "poi.business",
                        elementType: "geometry",
                        stylers: [
                            {
                                visibility: "on",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#be2026",
                            },
                            {
                                lightness: "0",
                            },
                            {
                                visibility: "on",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [
                            {
                                visibility: "off",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                visibility: "off",
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                visibility: "off",
                            },
                            {
                                hue: "#ff000a",
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 18,
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry.fill",
                        stylers: [
                            {
                                color: "#575757",
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#ffffff",
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                color: "#2c2c2c",
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [
                            {
                                color: "#999999",
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.stroke",
                        stylers: [
                            {
                                saturation: "-52",
                            },
                        ],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 19,
                            },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [
                            {
                                color: "#000000",
                            },
                            {
                                lightness: 17,
                            },
                        ],
                    },
                ],
            },
        };
    },

    methods: {
        setMap() {
            this.map = new window.google.maps.Map(
                document.getElementById("map"),
                this.mapOptions
            );

            new window.google.maps.Marker({
                position: { lat: 37.3337, lng: -121.8907 },
                title: "Marker Title",
                map: this.map,
            });
        },
        sendEmail(e) {
            const submitBtn = document.querySelector(".submitbtn");
            submitBtn.value = "Sending...";
            console.log(this.form_name, this.form_email, this.form_msg);

            emailjs
                .sendForm(
                    "default_service",
                    "template_onfzhxs",
                    e.target,
                    "user_k5iHEP67Yl39nBLXL2N5G"
                )
                .then(
                    (result) => {
                        submitBtn.value = "Submit";
                        console.log("SUCCESS!", result.status, result.text);
                    },
                    (error) => {
                        console.log("FAILED...", error);
                    }
                );
        },
    },

    mounted() {
        if (this.map == null) {
            this.setMap();
        }
    },
};
</script>

<style scoped>
#contact {
    background: #131313;
    width: 100%;
}

.contact-card {
    height: 150px;
    display: flex;

    justify-content: center;
    align-items: center;
    color: white;
    word-wrap: break-word;
    border-radius: 10px;
}

.contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-icon {
    font-size: 28px;
    background: #ff6348;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px !important;
    border-radius: 50%;
    transition: 0.3s linear;
    margin: 0 auto;
}

.contact-card p {
    opacity: 0;
    min-height: 0;
    transition: 0.3s linear;
    max-height: 0;
    font-size: 18px;
}

.contact-card:hover .card-icon {
    background: none;
    color: #ff6348;
    transform: scale(1.5);
}

.contact-card:hover p {
    opacity: 1;
    max-height: 50px;
}

.contact {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 32px;
}

.contact:hover {
    font-weight: bold;
    text-decoration: underline;
}

.form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
}

#map {
    height: 400px;
    margin-top: 40px;
    border-radius: 10px;
}
</style>
