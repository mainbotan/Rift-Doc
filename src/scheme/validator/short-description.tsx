export const ValidatorShortDescription = (
   <>
   The validator provided by the Rift core can make your life much easier. 
    You don't need to write hundreds of unnecessary validation lines directly in the controllers. 
    <br /><br />
    Rift Validator is divided into utilities that are responsible for their data type and is equipped with a SchemaDalidator that combines all utilities (which you can use separately, of course) and allows you to validate input data according to a predefined scheme. Nested schemas, enum fields, custom error messages, and validation functions - Rift Validator already knows how to do all this. 
    You can use it wherever and whenever you want, but we assume the use of validation at the middleware level. 
    <br /><br />
    The validator responds via Rift Contract, which allows you to easily and simply perform a chain of checks, knowing when an input error occurs. 
    <br /><br />
    Rift Validator integrates perfectly with models that can contain validation rules for each entity and its fields. 
    This way you get one "source of truth" and you can safely use the validation scheme from the middleware model. 
    <br /><br />
    Everything is for your convenience!
   </> 
);