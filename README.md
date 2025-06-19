#  Personalized Recipe Recommender

A smart web application built with **React.js** that recommends personalized recipes based on user preferences, dietary needs, and available ingredients. It fetches real-time data using external APIs and offers a clean, user-friendly interface to explore meals tailored to individual tastes.

---

##  Features

- Recommends personalized recipes based on:
- User preferences (vegan, keto, etc.)
- Selected ingredients
- Dietary restrictions
-  Real-time recipe search using API
-  View detailed recipe instructions, ingredients, and nutrition facts
-  Save favorite recipes (local/session)
-  Fully responsive design

---

##  How It Works

1. User selects preferences, ingredients, or keywords.
2. App makes a call to a recipe API (e.g., Spoonacular or Edamam).
3. Receives a list of matching recipes in real-time.
4. Displays cards with recipe name, image, and quick info.
5. On click, shows detailed cooking instructions.

---

##  Tech Stack Used

| Tech       | Use                            |
|------------|---------------------------------|
| React.js   | Frontend UI & Component Logic   |
| Axios/Fetch| API Calls to Recipe Provider    |
| CSS        | Styling                         |
| API        | External Recipe Data (Spoonacular, etc.) |
| LocalStorage | Saving Favorites Locally     |

---

##  API Integration

This project uses a third-party **Recipe API** to fetch:
- Recipe suggestions
- Ingredients list
- Cooking instructions
- Nutrition info

## Author
Yogendra Katuwal

Example API: [Spoonacular API](https://spoonacular.com/food-api)




