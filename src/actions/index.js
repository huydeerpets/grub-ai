import * as types from './types';
import axios from 'axios';

export const fetchRecipes = () => dispatch => {
    const dummyRecipes = [{
      id: 0,
      title: "Dutch Split Pea Soup",
      ingredients: {
        "Water": "1 cup",
        "Peas" : "2 cans",
        "Celery": "1 stalk",
        "Onion": "Half",
        "Carrot": "2",
        "Sausages": "300g"
      },
      instructions: 
        ["Coat the chicken in a little flour, and brown in oil and butter: The flour helps brown the chicken, but it later plays an important role in thickening the pan sauce. Browning the chicken in oil and butter gives the chicken tons of flavor and color.",
         "Remove the chicken to a warm oven: Once the chicken is browned, move it to a warm oven. This continues to cook the chicken while you use the same pan to make a pan sauce.",
         "Brown the mushrooms in same the pan: Don’t clean the pan before adding in the mushrooms. They will give off a bit of liquid as they cook, so scrape the lovely browned bits off the bottom of the pan as you stir the mushrooms. Add the garlic at the end of cooking the mushrooms.",
         "Make a pan sauce with the mushrooms and Marsala: Making the pan sauce is as easy as adding the Marsala wine and a bit of chicken broth to the pan and letting the excess flour from cooking the chicken thicken the sauce.",
         "Finish the chicken in the sauce and serve: Once the pan sauce is simmering, return the chicken to the pan to meld the flavors. I love to temper the Marsala’s sweetness with some chopped fresh parsley and a juicy squeeze of lemon over the chicken before serving."],
      time: "45 mins",
      image_url: "https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
      yield: 5,
      description: "",
      url: "https://www.thespruceeats.com/stamppot-with-curly-kale-and-rookworst-1128837",
      source: "The Pruice Eats"
    },
    {
      id: 1,
      title: "Chicken Marsala",
      ingredients: {
        "Chicken breast": "4",
        "Cremini mushrooms" : "8oz",
        "Flat-leaf parsley": "1 stalk",
        "Garlic": "2 cloves",
        "Lemon": "1 wedges",
        "Chicken broth": "3/4 cup",
        "Olive oil": "3 tbsp",
        "Marsala wine, dry": "1/4 cup",
        "Kosher salt": "1 tsp",
        "All-purpose flour": "1 cup",
      },
      instructions: 
        ["Coat the chicken in a little flour, and brown in oil and butter: The flour helps brown the chicken, but it later plays an important role in thickening the pan sauce. Browning the chicken in oil and butter gives the chicken tons of flavor and color.",
         "Remove the chicken to a warm oven: Once the chicken is browned, move it to a warm oven. This continues to cook the chicken while you use the same pan to make a pan sauce.",
         "Brown the mushrooms in same the pan: Don’t clean the pan before adding in the mushrooms. They will give off a bit of liquid as they cook, so scrape the lovely browned bits off the bottom of the pan as you stir the mushrooms. Add the garlic at the end of cooking the mushrooms.",
         "Make a pan sauce with the mushrooms and Marsala: Making the pan sauce is as easy as adding the Marsala wine and a bit of chicken broth to the pan and letting the excess flour from cooking the chicken thicken the sauce.",
         "Finish the chicken in the sauce and serve: Once the pan sauce is simmering, return the chicken to the pan to meld the flavors. I love to temper the Marsala’s sweetness with some chopped fresh parsley and a juicy squeeze of lemon over the chicken before serving."],
      time: "53 mins",
      image_url: "https://cafedelites.com/wp-content/uploads/2018/04/Creamy-Chicken-Marsala-IMAGE-48.jpg",
      yield: "4-6",
      description: "Our step-by-step recipe for classic chicken Marsala, a delicious yet surprisingly easy one-pot chicken dinner with all the Italian flavor you crave.",
      url: "https://www.thekitchn.com/how-to-make-classic-chicken-marsala-the-easiest-method-241844?utm_source=pinterest&utm_medium=social&utm_campaign=managed&crlt.pid=camp.hIcsDEvYJa5E",
      source: "The Kitchn"
    },
    {
      id: 2,
      title: "Creamy Chicken Pasta with Bacon",
      ingredients: {
        "Bacon strips": "6",
        "Garlic powder" : "1 teaspoon",
        "Butter": "1 tbsp",
        "Garlic": "3 cloves",
        "Spinach": "2 cups",
        "Paprika": "1.5 tsp",
        "Olive oil": "1 tbsp",
        "Heavy cream": "1.5 cup",
        "Kosher salt": "1/2 tsp",
        "Penne pasta": "10 oz",
      },
      instructions: 
        ["BACON: Add bacon strips to the skillet and cook until crispy. Transfer cooked bacon to a paper towel-lined platter that will absorb extra grease. Chop into 1 inch pieces",
         "Add butter to the hot pan and once it melts, add chopped garlic and cook for 1-2 minutes until fragrant.",
         "Add tomatoes and cook for 3 minutes on high until tomatoes release their juices. Add fresh spinach and cook until it wilts.",
         "Season with paprika, Italian seasoning, crushed red pepper flakes and salt. Mix.",
         "Next add heavy cream and bring the mixture to boil. Reduce to simmer and slowly add Parmesan cheese - until the cheese melts and makes the sauce creamy."],
      time: "33 mins",
      image_url: "https://i.pinimg.com/564x/ae/fa/a4/aefaa4d296a0370e070bb8fd7e9bbbda.jpg",
      yield: "4",
      description: "Creamy chicken pasta with bacon is easy to make weeknight one pot pasta dish! With only 30 minutes of total work, this chicken dinner recipe is simple, fast and delicious! Full of tender chicken, spinach, tomatoes, and bacon!",
      url: "https://whatsinthepan.com/chicken-penne-with-bacon-and-spinach-in-creamy-tomato-sauce/",
      source: "What's in the Pan"
    },
    {
      id: 3,
      title: "Chicken with lemon Garlic Cream Sauce",
      ingredients: {
        "Chicken breast": "4",
        "Shallots" : "1/3 cup",
        "Flat-leaf parsley": "2 tbsp",
        "Garlic": "1 tbsp",
        "Lemon Juice": "2 tbsp",
        "Butter": "2 tbsp",
        "Olive oil": "1 tbsp",
        "Red pepper flakes": "1/2 tsp",
        "Kosher salt": "1 tsp",
        "Heavy cream": "1/4 cup",
      },
      instructions: 
        ["Using a mallet, pound down the chicken breasts/thighs into ½ inch thickness. Sprinkle a pinch of salt and pepper on both sides of the chicken.",
         "In a 2 cup measuring cup or a small bowl, combine the chicken broth, lemon juice, garlic, and red pepper flakes.",
         "Heat the olive oil in a large oven-safe skillet over medium high heat. Add the chicken and allow to brown on both sides for 2-3 minutes per side. Don’t worry if the chicken isn’t cooked completely, we’ll finish it in the oven. Remove the chicken to a plate.",
         "Reduce the flame to medium, add the shallots to the skillet along with the chicken broth mixture. Using a whisk, scrape the bottom of the pan so all the brown bits are loosened. Kick the heat back up to medium high and let sauce come to a simmer. Continue to cook the sauce for 10-15 minutes OR UNTIL ABOUT ⅓ CUP OF THE SAUCE REMAINS.",
         "When the sauce has thickened, remove from the flame, add the butter and whisk until it melts completely. With the skillet off the flame, add the heavy cream, whisk to combine. Place the skillet back over the flame for just 30 seconds, DO NOT allow the sauce to boil. Remove from heat, add the chicken back into the pan and drizzle the sauce over the chicken. Place the skillet in the oven for 5-8 minutes or until the chicken is completely cooked through. Top with chopped parsley or basil and serve warm with additional lemon slices."],
      time: "75 mins",
      image_url: "https://i.pinimg.com/564x/a7/41/32/a7413297417e26933d0c76af42a8c7fc.jpg",
      yield: "4",
      description: "This one skillet chicken recipe is my go to chicken dinner of the week decade. Obvi, this recipe requires just one pan. Which means, we make the chicken and the sauce – that’s right – in just uno skillet-o. We’re talking tender chicken, covered in a lemon garlic butter sauce that’s creamier that anything you’ve had before. Someone, please, throw some capers up in the sauce! This only *just* hit me now, but I’m totally doing it next time, pinky promise.",
      url: "http://littlespicejar.com/one-skillet-chicken-with-lemon-garlic-cream-sauce/",
      source: "Little Spice Jar"
    },
    {
      id: 4,
      title: "Italian Sausage Peppers and Onions",
      ingredients: {
        "Sweet Italian sausage": "1 lbs",
        "Bell peppers" : "2",
        "Onion": "2",
        "Garlic": "4 cloves",
        "Tomato paste": "2 tbsp",
        "Marsala wine": "1 cup",
        "Olive oil": "1/4 cup",
        "Red pepper flakes": "1/4 tsp",
        "Basil": "1/4 cup",
        "Italian seasoning": "1 tbsp",
      },
      instructions: 
        ["Heat the oil in a heavy large skillet over medium heat. Add the sausages and cook until brown on both sides, about 7 to 10 minutes. Remove from the pan and drain.",
         "Keeping the pan over medium heat,  Add the Italian seasoning, basil, and garlic and cook 2 more minutes.",
         "Add the Marsala wine, tomatoes, tomato paste and stir, add chili flakes, if using.",
         "Add the peppers, onions, salt, and pepper and bring to a simmer.",
         "Return sausage to skillet with the vegetables. Reduce heat to low, and simmer 15 minutes, or until the sauce has thickened.",
         "Serve over mashed potatoes, noodles, polenta, cauliflower rice or, if serving as a sandwich, split the hoagie rolls in half lengthwise. Hollow out the bread from the bottom side of each roll, being careful not to puncture the crust. Fill the bottom half of the roll with sausage mixture."],
      time: "30 mins",
      image_url: "https://i.pinimg.com/564x/02/c9/12/02c912c144ee532df653b4307b7971f5.jpg",
      yield: "6",
      description: "Quick, easy and delicious one skillet dinner! This recipe for Italian Sausage Peppers and Onions is so versatile. You can have it over mashed potatoes, pasta, polenta, cauliflower rice, or as an Italian sub sandwich.",
      url: "https://sparklesofyum.com/italian-sausage-peppers-and-onions/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=490853172_16992316_441338",
      source: "Sparkles of Yum"
    },
    {
      id: 5,
      title: "Keto Lemon Garlic Butter Shrimp with Zoodles",
      ingredients: {
        "Jumbo Shrimp": "1 lbs",
        "Zucchini" : "4",
        "Flat-leaf parsley": "2 tbsp",
        "Garlic": "4 cloves",
        "Lemon": "1",
        "Red chili flakes": "1/4 tsp",
        "Italian Seasoning": "1 tbsp",
        "Butter": "3 tbsp",
      },
      instructions: 
        ["Using a spiralizer, vegetable peeler or a mandoline, make the zucchini noodles. Then, set aside. (You can also sprinkle with salt for 10-15 minutes to remove some moisture - this helps prevent the zoodles from getting soggy.",
         "Heat the butter (or oil) in a large pan over medium-high heat. Add the shrimp in a single layer and season with salt and pepper. Allow to cook for about 1-2 minutes undisturbed.",
         "Add the garlic, then flip the shrimp and allow to cook for another 1-2 minutes, or until pink and no longer translucent. Add lemon juice, Italian seasoning, paprika and chili flakes (if using). Use tongs to gently transfer shrimp to a plate leaving the sauce in the pan.",
         "Add zucchini to the pan and toss for about 30 seconds to a minute to coat. Add the shrimp back to the pan and toss again until everything is warmed through (do not overcook to avoid zucchini noodles from getting soggy). ",
         "Remove from heat and serve hot with a sprinkle of parsley if desired."],
      time: "44 mins",
      image_url: "https://i.pinimg.com/564x/51/e4/76/51e476f696a6f8e30bace79e777e518c.jpg",
      yield: "4",
      description: "Prepare the wonderful butter, bake the shrimp in it! The aroma is so dangerous, you can dissolve in it! The toasts are all crispy, so beckoning to yourself! We dunk them in butter, get pleasure! I want to tell you friends in confidence, it’s impossible to argue with such shrimps! Delicious is simply unreal! Fly away instantly!",
      url: "https://letstastethat.com/keto-lemon-garlic-butter-shrimp-with-zoodles/",
      source: "Let's Taste That"
    },
    {
      id: 6,
      title: "Honey Mustard Pork Chops and potato Skillet",
      ingredients: {
        "Pork chops": "4",
        "Yellow potatoes" : "1 lbs",
        "Butter": "2 tbsp",
        "Lemon Juice": "1 lbsp",
        "Honey": "1/4 cup",
        "Whole grain mustard": "1/3 cup",
        "Paprika": "1 tsp",
        "Pepper": "1 tsp",
      },
      instructions: 
        ["Par-cook quartered potatoes in boiling salted water for 8 minutes. Drain and set aside. In the meantime, pat dry and season pork chops with salt and pepper on both sides.",
         "In a small bowl, combine mustard, honey, paprika, lemon juice and mix until smooth.",
         "In a large skillet, melt 1 tablespoon butter with 1 tablespoon oil over medium heat and cook potatoes until golden with a nice crust, tossing regularly. When potatoes are done, remove to a plate. Discard oil and butter if it’s too brown.",
         " In the same skillet, melt remaining butter with oil, cook pork chops 3 – 4 minutes on all sides until cooked through. Remove to another plate.",
         "Still with the same skillet, lower the heat and pour the honey mustard sauce. Let the sauce reduce for one minute then stir in potatoes and toss to coat well. Move potatoes on the side and add pork chops back into the skillet. Coat pork chops with the honey mustard sauce. Garnish with fresh chopped parsley and serve immediately. Enjoy!"],
      time: "53 mins",
      image_url: "https://i.pinimg.com/564x/55/60/a3/5560a324d7d5a7b75f526be9bb2ee3e4.jpg",
      yield: "4-6",
      description: "Honey Mustard Pork Chops and Potatoes Skillet – Best ever melt in your mouth, super delicious pork chops! Juicy tender pork chops are seared and coated in a lip-smacking honey mustard glaze and served along with crisp baby potatoes. Perfect for a family weeknight dinner, or a party!",
      url: "https://www.eatwell101.com/honey-mustard-pork-chops-and-potatoes-recipe",
      source: "Eat Well 101"
    },
    {
      id: 7,
      title: "Chicken Biryani",
      ingredients: {
        "Basmati rice": "1.5 cups",
        "Yellow potatoes" : "1 lbs",
        "Butter": "2 tbsp",
        "Lemon Juice": "1 lbsp",
        "Honey": "1/4 cup",
        "Whole grain mustard": "1/3 cup",
        "Paprika": "1 tsp",
        "Pepper": "1 tsp",
      },
      instructions: 
        ["Thoroughly rinse basmati rice in a strainer until water runs clear. Transfer rice to a bowl, add fresh water to cover, and set aside for 30 minutes.",
         "In a small bowl, combine mustard, honey, paprika, lemon juice and mix until smooth.",
         "In a large skillet, melt 1 tablespoon butter with 1 tablespoon oil over medium heat and cook potatoes until golden with a nice crust, tossing regularly. When potatoes are done, remove to a plate. Discard oil and butter if it’s too brown.",
         " In the same skillet, melt remaining butter with oil, cook pork chops 3 – 4 minutes on all sides until cooked through. Remove to another plate.",
         "Still with the same skillet, lower the heat and pour the honey mustard sauce. Let the sauce reduce for one minute then stir in potatoes and toss to coat well. Move potatoes on the side and add pork chops back into the skillet. Coat pork chops with the honey mustard sauce. Garnish with fresh chopped parsley and serve immediately. Enjoy!"],
      time: "40 mins",
      image_url: "https://images.media-allrecipes.com/userphotos/720x405/6901874.jpg",
      yield: "4",
      description: "Traditional chicken biryani made in an Instant Pot® cuts down on time but not flavor. The rice comes out fluffy and the chicken comes out tender. You can't ask for more. Serve with yogurt raita to complement the spices.",
      url: "https://www.allrecipes.com/recipe/274991/instant-pot-chicken-biryani/",
      source: "Allrecipes"
    }]
    dispatch({ type: types.FETCH_RECIPES, payload: dummyRecipes });
    // const URL = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    // axios.get(URL)
    //     .then(res => {
    //         if (res.data.error) return dispatch(showError(res.data.error));



    //         // dispatch({ type: types.FETCH_RECIPES, payload: res.data.meals });
    //         // dispatch(resetError());
    //     })
    //     .catch(err => console.log(err));
}

export const showError = error => {
    console.log(error);
    return { type: types.SHOW_ERROR, payload: error };
  };
  
export const resetError = () => {
  return { type: types.RESET_ERROR };
};

export const openImageZoomModal = () => {
  return { type: types.OPEN_IMAGE_ZOOM_MODAL };
};

export const hideImageZoomModal = () => {
  return { type: types.CLOSE_IMAGE_ZOOM_MODAL };
};

export const setModalRecipe = pin => {
  return { type: types.SET_MODAL_RECIPE, payload: pin };
};

export const openAddRecipeModal = type => {
  return { type: types.OPEN_ADD_RECIPE_MODAL, payload: type };
};

export const closeAddRecipeModal = type => {
  return { type: types.CLOSE_ADD_RECIPE_MODAL, payload: type };

};