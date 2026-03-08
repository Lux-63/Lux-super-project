<script setup>
import { ref } from "vue";
import Dogs_carusel from "./Dogs_carusel.vue";
import Dogs_gallery from "./Dogs_gallery.vue";

const isViewCarusel = ref(true);
const isViewGallery = ref(false);

const caruselLink = ref(null);
const gallerylink = ref(null);

let dogsAllBreeds = {
  message: {
    "Аффенпинчер": {affenpinscher: []},
    "Дикая африканская": {african: ["wild"]},
    airedale: [],
    akita: [],
    appenzeller: [],
    australian: ["kelpie", "shepherd"],
    bakharwal: ["indian"],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    buhund: ["norwegian"],
    bulldog: ["boston", "english", "french"],
    bullterrier: ["staffordshire"],
    cattledog: ["australian"],
    cavapoo: [],
    chihuahua: [],
    chippiparai: ["indian"],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    danish: ["swedish"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    finnish: ["lapphund"],
    frise: ["bichon"],
    gaddi: ["indian"],
    german: ["shepherd"],
    greyhound: ["indian", "italian"],
    groenendael: [],
    havanese: [],
    hound: [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "plott",
      "walker",
    ],
    husky: [],
    keeshond: [],
    kelpie: [],
    kombai: [],
    komondor: [],
    kuvasz: [],
    labradoodle: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "english", "indian", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    mudhol: ["indian"],
    newfoundland: [],
    otterhound: [],
    ovcharka: ["caucasian"],
    papillon: [],
    pariah: ["indian"],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pitbull: [],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["medium", "miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    rajapalayam: ["indian"],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    rough: ["collie"],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    segugio: ["italian"],
    setter: ["english", "gordon", "irish"],
    sharpei: [],
    sheepdog: ["english", "indian", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh",
    ],
    spitz: ["indian", "japanese"],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "andalusian",
      "australian",
      "bedlington",
      "border",
      "boston",
      "cairn",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "welsh",
      "westhighland",
      "wheaten",
      "yorkshire",
    ],
    tervuren: [],
    vizsla: [],
    waterdog: ["spanish"],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"],
  },
  status: "success",
};

function showCarusel() {
  isViewCarusel.value = true;
  isViewGallery.value = false;

  caruselLink.value.className += " active";
  gallerylink.value.className = "col-2 btn btn-outline-secondary";
}

function showGallery() {
  isViewCarusel.value = false;
  isViewGallery.value = true;

  gallerylink.value.className = "col-2 btn btn-outline-secondary";
  caruselLink.value.className += " active";
}
</script>

<template>
  <div class="container-fluid justify-content-right">
    <div class="row">
      <div class="col">
        <div class="row g-4">
          <button
            class="col-2 btn btn-outline-secondary active justify-content-right"
            ref="caruselLink"
            @click="showCarusel"
          >
            Карусель
          </button>
          <button
            class="col-2 btn btn-outline-secondary justify-content-left"
            ref="gallerylink"
            @click="showGallery"
          >
            Галерея
          </button>
        </div>
        <div class="row justify-content-center">
          <Dogs_carusel v-if="isViewCarusel" />
          <Dogs_gallery v-if="isViewGallery" />
        </div>
      </div>
    </div>
  </div>
</template>
