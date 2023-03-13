
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: true, 
  touch: true 
})

const items = [
  {
    id: "item1",
    description: "This is the description for item 1"
  },
  {
    id: "item2",
    description: "This is the description for item 2"
  },
  {
    id: "item3",
    description: "This is the description for item 3"
  }
];

const itemDescription = document.getElementById("item-description");

items.forEach((item) => {
  const listItem = document.getElementById(item.id);
  listItem.addEventListener("click", () => {
    itemDescription.innerHTML = item.description;
  });
});
