export const ContractShortDescription = (
   <>
   Rift aims to protect you from raw exceptions and increase the predictability of queries between layers. For these purposes, we are introducing the concept of a "Operation Contract" - an object that should return each level, from the router to the repository. This approach allows you to be sure of the integrity of the query chain and exit by simply returning the response of the layer where something went wrong.
   </> 
);