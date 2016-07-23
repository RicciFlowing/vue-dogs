export default function (pets, typeArray) {
  let matches = [];
  pets.forEach((pet)=>{
    typeArray.forEach((type)=>{
      if(pet.type === type){
        console.log('hello');
        matches.push(pet);
        return
      }
    });
  });
  return matches;
}
