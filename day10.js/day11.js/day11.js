function handleClick(){
    document.querySelector("#head").style.color="red";

    document.getElementById("btn").textContent="color changed"

}
 const handleClick = ()=>{
   const image = document.createElement("img");
   image.setAttribute("src",https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vets4pets.com%2Fpet-health-advice%2Fcat-advice%2Fkitten%2Fintroducing-kittens-to-adult-cats%2F&psig=AOvVaw1T9C36Zib8GdW-DEKQdaEu&ust=1770458234868000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDSnIXNxJIDFQAAAAAdAAAAABAp)

   image.setAttribute("alt","cat")

   document.getElementById("content").append(image);
}

document.getElementById("btn").addEventListener("click",()=>{
     const image =document.createElement("img");
    image.setAttribute("src", "https://www.admissionwala.in/storage/productimages/1643709127php61qcbJ.jpeg")

    image.setAttribute("alt", "kr mangalam");

    document.getElementById("content").append(image);

})